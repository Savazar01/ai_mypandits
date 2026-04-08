import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { admin } from "better-auth/plugins";

// BetterAuth Server Configuration: Vedic Sanctuary v1.0 [Schema Sync: Banned Fields Added]
const isWindows = process.platform === "win32";
const isLinux = process.platform === "linux";

// 1. Get multiple origins from your new env variable
// Example: BETTER_AUTH_ORIGINS="https://ai.mypandits.com, https://mypandits.com"
const allowedOrigins = process.env.BETTER_AUTH_ORIGINS 
    ? process.env.BETTER_AUTH_ORIGINS.split(',').map(o => o.trim()) 
    : [];

const localUrl = "http://localhost:3090";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    // 2. The baseURL determines the primary identity
    baseURL: isWindows ? localUrl : process.env.BETTER_AUTH_URL,

    // 3. trustedOrigins handles all sub-domains and local ports
    trustedOrigins: [
        localUrl,
        ...allowedOrigins
    ],
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
    plugins: [
        admin(),
    ],
    advanced: {
        // 4. Secure cookies logic (Secure=true for Linux, false for Windows)
        useSecureCookies: isLinux,
        // Only trust proxy headers on Linux/Production (behind Traefik)
        // Enabling this on Windows causes origin mismatches during local dev
        trustProxyHeaders: isLinux 
    },
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
