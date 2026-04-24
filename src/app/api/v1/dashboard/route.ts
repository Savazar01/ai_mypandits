import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const PYTHON_BACKEND_URL =
  process.env.PYTHON_BACKEND_URL ||
  (process.platform === "win32"
    ? "http://localhost:8000"
    : "http://localhost:8000");

export async function GET(request: NextRequest) {
  // Verify the user is authenticated
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    // Proxy to the Python backend
    const backendRes = await fetch(
      `${PYTHON_BACKEND_URL}/api/v1/dashboard?user_id=${encodeURIComponent(userId)}`,
      {
        headers: { "Content-Type": "application/json" },
        // Short timeout so we fail fast and can return a useful error
        signal: AbortSignal.timeout(8000),
      }
    );

    if (!backendRes.ok) {
      const errBody = await backendRes.text();
      console.error(`[dashboard proxy] Backend error ${backendRes.status}: ${errBody}`);
      return NextResponse.json(
        { error: "Backend returned an error", detail: errBody },
        { status: backendRes.status }
      );
    }

    const data = await backendRes.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("[dashboard proxy] Failed to reach Python backend:", err?.message ?? err);
    // Return a graceful empty payload so the UI doesn't crash
    return NextResponse.json(
      {
        total_events: 0,
        active_orchestrations: 0,
        upcoming_activities_count: 0,
        recent_events: [],
        _error: "Could not reach the AI backend. Is the Python service running on port 8000?",
      },
      { status: 200 }
    );
  }
}
