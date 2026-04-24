import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const PYTHON_BACKEND_URL =
  process.env.PYTHON_BACKEND_URL ||
  (process.platform === "win32"
    ? "http://localhost:8000"
    : "http://localhost:8000");

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const backendRes = await fetch(
      `${PYTHON_BACKEND_URL}/api/v1/events/${id}/send-invites`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(15000),
      }
    );

    const data = await backendRes.json();
    return NextResponse.json(data, { status: backendRes.status });
  } catch (err: any) {
    console.error("[send-invites proxy] failed:", err?.message ?? err);
    return NextResponse.json({ error: "Could not reach AI backend" }, { status: 503 });
  }
}
