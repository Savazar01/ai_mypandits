import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const PYTHON_BACKEND_URL =
  process.env.PYTHON_BACKEND_URL ||
  (process.platform === "win32"
    ? "http://localhost:8000"
    : "http://localhost:8000");

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const backendRes = await fetch(`${PYTHON_BACKEND_URL}/api/v1/events/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(8000),
    });

    if (!backendRes.ok) {
      const errBody = await backendRes.text();
      return NextResponse.json(
        { error: "Backend error", detail: errBody },
        { status: backendRes.status }
      );
    }

    const data = await backendRes.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("[events proxy] DELETE failed:", err?.message ?? err);
    return NextResponse.json(
      { error: "Could not reach AI backend" },
      { status: 503 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const backendRes = await fetch(`${PYTHON_BACKEND_URL}/api/v1/events/${id}`, {
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(8000),
    });

    if (!backendRes.ok) {
      const errBody = await backendRes.text();
      return NextResponse.json(
        { error: "Backend error", detail: errBody },
        { status: backendRes.status }
      );
    }

    const data = await backendRes.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("[events proxy] GET failed:", err?.message ?? err);
    return NextResponse.json(
      { error: "Could not reach AI backend" },
      { status: 503 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();

  try {
    const backendRes = await fetch(`${PYTHON_BACKEND_URL}/api/v1/events/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8000),
    });

    if (!backendRes.ok) {
      const errBody = await backendRes.text();
      return NextResponse.json(
        { error: "Backend error", detail: errBody },
        { status: backendRes.status }
      );
    }

    const data = await backendRes.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("[events proxy] PATCH failed:", err?.message ?? err);
    return NextResponse.json(
      { error: "Could not reach AI backend" },
      { status: 503 }
    );
  }
}
