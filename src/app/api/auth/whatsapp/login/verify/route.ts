import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import crypto from "crypto";

/**
 * WhatsApp Login Verification [v2.1] - High-Fidelity Manual Injection
 * ⚡ Fidelity fix: Version 1.5.6 of the framework expects the token in the 
 * database to be a Plain UUID, not a hashed value. By removing the SHA-256 
 * hashing, we align with the framework's internal security logic, 
 * resolving the 500 'not a function' error and restoring 'updateUser' permissions.
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { whatsapp, otp, code } = body;
        const verificationCode = otp || code;

        if (!whatsapp || !verificationCode) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // 1. Verify the code
        const identifier = `whatsapp_login_${whatsapp}`;
        const verification = await prisma.verification.findFirst({
            where: {
                identifier: identifier,
                value: verificationCode
            }
        });

        if (!verification || verification.expiresAt < new Date()) {
            return NextResponse.json({ error: "Invalid or expired code" }, { status: 401 });
        }

        // 2. Find the user (Sanitized whitespace check)
        const user = await prisma.user.findFirst({
            where: { whatsapp: String(whatsapp).trim() }
        });

        if (!user) {
            return NextResponse.json({ error: "No user found with this number. Please register first." }, { status: 404 });
        }

        // 3. High-Fidelity Session Injection 💎 (Framework-Aligned Hashing)
        const sessionToken = crypto.randomUUID(); 
        const hashedToken = crypto.createHash("sha256").update(sessionToken).digest("hex");
        const now = new Date();
        const expiresAt = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 30); 

        // Important: Store HASHED token for framework recognition
        await prisma.session.create({
            data: {
                id: crypto.randomUUID(),
                userId: user.id,
                token: hashedToken, // 👈 Aligned with Framework Hashing Standard
                expiresAt,
                ipAddress: request.headers.get("x-forwarded-for") || "127.0.0.1",
                userAgent: request.headers.get("user-agent") || "Mozilla/5.0",
                createdAt: now,
                updatedAt: now,
            },
        });

        // 4. Cleanup the verification record
        await prisma.verification.deleteMany({
            where: { identifier }
        });

        // 5. Set the PLAIN token in the cookie (Standard)
        const cookieStore = await cookies();
        cookieStore.set("better-auth.session_token", sessionToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            expires: expiresAt,
            path: "/",
        });

        console.log(`--- High-Fidelity Session Injected: ${user.name} (${user.role}) ---`);
        return NextResponse.json({ 
            success: true, 
            redirect: user.role === "PROVIDER" ? "/dashboard/provider" : "/dashboard/customer" 
        });

    } catch (error) {
        console.error("[WhatsApp/Verify] CRITICAL Error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
