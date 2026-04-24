import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { PYTHON_BACKEND_URL } from "@/lib/constants";

// POST /api/v1/events - Create a new event
export async function POST(request: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  try {
    const backendRes = await fetch(`${PYTHON_BACKEND_URL}/api/v1/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15000),
    });

    const data = await backendRes.json();

    if (!backendRes.ok) {
      console.error("[events proxy] POST error:", data);
      return NextResponse.json(
        { error: "Backend error", detail: data },
        { status: backendRes.status }
      );
    }

    return NextResponse.json(data);
  } catch (err: any) {
    console.error("[events proxy] POST failed:", err?.message ?? err);
    return NextResponse.json(
      { error: "Could not reach AI backend. Is the Python service running on port 8090?" },
      { status: 503 }
    );
  }
}

// GET /api/v1/events - List events (not used by UI yet but good to have)
export async function GET(request: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const backendRes = await fetch(`${PYTHON_BACKEND_URL}/api/v1/events`, {
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(8000),
    });

    const data = await backendRes.json();
    return NextResponse.json(data, { status: backendRes.status });
  } catch (err: any) {
    console.error("[events proxy] GET events failed:", err?.message ?? err);
    return NextResponse.json(
      { error: "Could not reach AI backend" },
      { status: 503 }
    );
  }
}
