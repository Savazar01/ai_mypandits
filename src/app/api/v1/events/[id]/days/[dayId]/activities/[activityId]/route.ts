import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const PYTHON_BACKEND_URL =
  process.env.PYTHON_BACKEND_URL || "http://localhost:8000";

type Params = { params: Promise<{ id: string; dayId: string; activityId: string }> };

// PATCH /api/v1/events/[id]/days/[dayId]/activities/[activityId]
export async function PATCH(request: NextRequest, { params }: Params) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id, dayId, activityId } = await params;
  const body = await request.json();

  try {
    const backendRes = await fetch(
      `${PYTHON_BACKEND_URL}/api/v1/events/${id}/days/${dayId}/activities/${activityId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(8000),
      }
    );
    const data = await backendRes.json();
    return NextResponse.json(data, { status: backendRes.status });
  } catch (err: any) {
    console.error("[activities/[activityId] proxy] PATCH failed:", err?.message ?? err);
    return NextResponse.json({ error: "Could not reach AI backend" }, { status: 503 });
  }
}

// DELETE /api/v1/events/[id]/days/[dayId]/activities/[activityId]
export async function DELETE(request: NextRequest, { params }: Params) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id, dayId, activityId } = await params;

  try {
    const backendRes = await fetch(
      `${PYTHON_BACKEND_URL}/api/v1/events/${id}/days/${dayId}/activities/${activityId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(8000),
      }
    );
    const data = await backendRes.json();
    return NextResponse.json(data, { status: backendRes.status });
  } catch (err: any) {
    console.error("[activities/[activityId] proxy] DELETE failed:", err?.message ?? err);
    return NextResponse.json({ error: "Could not reach AI backend" }, { status: 503 });
  }
}
