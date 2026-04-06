import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { admin } from "better-auth/plugins";

// BetterAuth Server Configuration: Vedic Sanctuary v1.0 [Schema Sync: Banned Fields Added]
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    baseURL: "http://localhost:3090/api/auth",
    databaseHooks: {
        user: {
            create: {
                before: async (user: any) => {
                    // Securely map the requested role to the actual role field
                    if (user.signUpRole) {
                        // Only allow predefined roles, blocking ADMIN escalations
                        if (user.signUpRole === "PROVIDER" || user.signUpRole === "CUSTOMER") {
                            user.role = user.signUpRole;
                        }
                        // Remove the transient field before Prisma save
                        delete user.signUpRole;
                    }
                    return { data: user };
                }
            }
        }
    },
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        },
    },
    plugins: [
        admin(),
    ],
    user: {
        additionalFields: {
            // Transient field for registration input
            signUpRole: {
                type: "string",
                input: true,
                required: false,
            },
            role: {
                type: "string",
                input: false, // Explicitly blocked for client input (security)
                defaultValue: "CUSTOMER",
            },
            profile_data: {
                type: "string", 
                input: true,
                defaultValue: "{}",
            },
            whatsapp: {
                type: "string",
                input: true,
                required: false,
            }
        }
    }
});
