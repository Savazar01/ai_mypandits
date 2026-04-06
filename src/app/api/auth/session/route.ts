import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers, cookies } from "next/headers";
import { NextResponse } from "next/server";

/**
 * Static Session API Helper [Hybrid v1.2] - Full Data Hydration
 * ⚡ Hybrid Bridge: Retrieves the FULL user profile to ensure Settings, WhatsApp,
 * and Provider Expertise tabs are correctly restored.
 */
export async function GET() {
    try {
        const headerList = await headers();
        const cookieList = await cookies();
        
        // 1. Try the official framework check first
        const session = await auth.api.getSession({
            headers: headerList,
        });

        if (session) {
            console.log(`[API/Session] ✅ Official Session Found: ${session.user.name} (${session.user.role})`);
            return NextResponse.json(session);
        }

        // 2. ⚡ HYBRID FALLBACK: Complete Data Hydration
        const token = cookieList.get("better-auth.session_token")?.value || 
                      cookieList.get("__Host-better-auth.session_token")?.value;

        if (token) {
            const dbSession = await prisma.session.findUnique({
                where: { token },
                include: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            name: true,
                            role: true,
                            image: true,
                            emailVerified: true,
                            whatsapp: true,       // 👈 CRITICAL: Restores WhatsApp in Settings
                            profile_data: true,   // 👈 CRITICAL: Restores Location/Expertise
                            createdAt: true,
                            updatedAt: true,
                            banned: true,
                            banReason: true,
                            banExpires: true,
                        }
                    }
                }
            });

            if (dbSession && new Date() < dbSession.expiresAt) {
                console.log(`[API/Session] ⚡ Hybrid Restored: ${dbSession.user.name} for: ${dbSession.user.role}`);
                
                return NextResponse.json({
                    user: dbSession.user,
                    session: {
                        id: dbSession.id,
                        userId: dbSession.userId,
                        expiresAt: dbSession.expiresAt,
                        token: dbSession.token,
                        ipAddress: dbSession.ipAddress,
                        userAgent: dbSession.userAgent,
                    }
                });
            }
        }

        console.log("[API/Session] 🔍 No Session Found");
        return NextResponse.json(null);
    } catch (error) {
        console.error("[API/Session] Error:", error);
        return NextResponse.json(null);
    }
}
