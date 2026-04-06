import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendWhatsappOTP } from "@/lib/whatsapp";

export async function POST(req: Request) {
  try {
    const { whatsapp } = await req.json();

    if (!whatsapp) {
      return NextResponse.json({ error: "WhatsApp number is required" }, { status: 400 });
    }

    // Check if user exists
    const user = await prisma.user.findFirst({
      where: { whatsapp },
    });

    if (!user) {
      return NextResponse.json({ 
        error: "Number not registered. Please sign up first." 
      }, { status: 404 });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes expiry

    // Save to Verification table (using a unique key for login)
    const identifier = `whatsapp_login_${whatsapp}`;
    await prisma.verification.upsert({
      where: { id: identifier },
      update: {
        value: otp,
        expiresAt,
        identifier, // 👈 Aligning Identifier with ID 
      },
      create: {
        id: identifier,
        identifier: identifier, // 👈 Identical for stable lookup
        value: otp,
        expiresAt,
      },
    });

    // Dispatch via our stable bridge
    try {
      await sendWhatsappOTP(whatsapp, otp);
    } catch (sendError: any) {
      console.error("WhatsApp Login Send Error:", sendError);
      return NextResponse.json({ error: sendError.message || "Failed to send code" }, { status: 503 });
    }

    return NextResponse.json({ success: true, message: "Login code sent!" });
  } catch (error: any) {
    console.error("WhatsApp Login Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
