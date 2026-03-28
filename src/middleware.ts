import { auth } from "@/lib/auth";
import { type NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
	const session = await auth.api.getSession({
		headers: request.headers,
	});

	const { pathname } = request.nextUrl;

	if (!session) {
		if (pathname.startsWith("/dashboard") || pathname.startsWith("/admin")) {
			return NextResponse.redirect(new URL("/login", request.url));
		}
		return NextResponse.next();
	}

	// Session exists, check for ADMIN role on /admin routes
	if (pathname.startsWith("/admin")) {
		const isAdmin = session.user.role === "ADMIN" || session.user.email === process.env.ADMIN_EMAIL;
		if (!isAdmin) {
			return NextResponse.redirect(new URL("/dashboard", request.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/admin/:path*"],
};
