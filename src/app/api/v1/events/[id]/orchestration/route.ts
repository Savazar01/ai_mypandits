import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { PYTHON_BACKEND_URL } from "@/lib/constants";

/**
 * Proxy for Event Orchestration SSE (Server-Sent Events) logs.
 * This route allows the frontend to stream real-time logs from the AI Backend.
 */
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
    // We use a regular fetch but with the response body piped to the output
    const backendRes = await fetch(
      `${PYTHON_BACKEND_URL}/api/v1/events/${id}/orchestration`,
      {
        method: "GET",
        headers: {
          Accept: "text/event-stream",
        },
      }
    );

    if (!backendRes.ok) {
      return NextResponse.json(
        { error: "Failed to connect to orchestration stream" },
        { status: backendRes.status }
      );
    }

    // Return a streaming response
    return new Response(backendRes.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no", // Disable buffering for Nginx if present
      },
    });
  } catch (err: any) {
    console.error("[orchestration proxy] GET failed:", err?.message ?? err);
    return NextResponse.json(
      { error: "Could not reach AI backend" },
      { status: 503 }
    );
  }
}
