import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { whatsapp, code } = await req.json();

    if (!whatsapp || !code) {
      return NextResponse.json({ error: "WhatsApp and code are required" }, { status: 400 });
    }

    const verificationRecord = await prisma.verification.findUnique({
      where: { id: `whatsapp_verify_${whatsapp}` },
    });

    if (!verificationRecord) {
      return NextResponse.json({ error: "Verification code not found or expired" }, { status: 404 });
    }

    if (verificationRecord.value !== code) {
      return NextResponse.json({ error: "Invalid verification code" }, { status: 400 });
    }

    if (new Date() > verificationRecord.expiresAt) {
      return NextResponse.json({ error: "Verification code has expired" }, { status: 410 });
    }

    // Code is valid: we can delete the record now to prevent reuse
    await prisma.verification.delete({
      where: { id: `whatsapp_verify_${whatsapp}` },
    });

    return NextResponse.json({ success: true, message: "WhatsApp number verified!" });
  } catch (error: any) {
    console.error("Error verifying WhatsApp code:", error);
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
