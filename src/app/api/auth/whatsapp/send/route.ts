import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendWhatsappOTP } from "@/lib/whatsapp";

export async function POST(req: Request) {
  try {
    const { whatsapp } = await req.json();

    if (!whatsapp) {
      return NextResponse.json({ error: "WhatsApp number is required" }, { status: 400 });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes expiry

    // Save to Verification table
    await prisma.verification.upsert({
      where: { id: `whatsapp_verify_${whatsapp}` },
      update: {
        value: otp,
        expiresAt,
      },
      create: {
        id: `whatsapp_verify_${whatsapp}`,
        identifier: whatsapp,
        value: otp,
        expiresAt,
      },
    });

    // Real sending via our self-hosted bridge
    try {
      await sendWhatsappOTP(whatsapp, otp);
    } catch (sendError) {
      console.error("WhatsApp Send Error:", sendError);
      return NextResponse.json({ error: "WhatsApp bridge is not ready. Please scan the QR code in the server terminal." }, { status: 503 });
    }

    return NextResponse.json({ success: true, message: "Verification code sent!" });
  } catch (error: any) {
    console.error("Error sending WhatsApp code:", error);
    return NextResponse.json({ error: "Failed to send verification code" }, { status: 500 });
  }
}
