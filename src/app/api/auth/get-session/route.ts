import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers, cookies } from "next/headers";
import { NextResponse } from "next/server";
import crypto from "crypto";

/**
 * Universal Session Bridge [v2.2] - Dual-Lookup Logic (Plain & Hashed)
 * 🤝 Master Handshake: We now support both Plain tokens (Custom WhatsApp login) 
 * and Hashed tokens (Native Email login). This ensures that every type of login 
 * is perfectly recognized and autorizado by the framework.
 */
export async function GET() {
    try {
        const headerList = await headers();
        const cookieList = await cookies();
        
        // 1. Try the official framework handshake (Native detection)
        const session = await auth.api.getSession({
            headers: headerList,
        });

        if (session) {
            console.log(`[API/GetSession] ✅ Framework Session: ${session.user.name} (${session.user.role})`);
            return NextResponse.json(session);
        }

        // 2. 🤝 DUAL-LOOKUP FALLBACK: (Plain & Hashed Sync)
        const tokenToken = 
            cookieList.get("better-auth.session_token")?.value || 
            cookieList.get("__Host-better-auth.session_token")?.value;

        if (tokenToken) {
            // SHA-256 Hashing for framework alignment
            const hashedToken = crypto.createHash("sha256").update(tokenToken).digest("hex");

            const dbSession = await prisma.session.findFirst({
                where: {
                    OR: [
                        { token: tokenToken }, // Plain-text lookup (WhatsApp custom)
                        { token: hashedToken } // Hashed lookup (Email native)
                    ]
                },
                include: {
                    user: true // FULL Profile for settings hydration
                }
            });

            if (dbSession && new Date() < dbSession.expiresAt) {
                console.log(`[API/GetSession] 🤝 Multi-Bridge: Found ${dbSession.user.name} (${dbSession.user.role})`);
                
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

        console.log("[API/GetSession] 🔍 No Active Session Found");
        return NextResponse.json(null);
    } catch (error) {
        console.error("[API/GetSession] Critical Error:", error);
        return NextResponse.json(null);
    }
}
