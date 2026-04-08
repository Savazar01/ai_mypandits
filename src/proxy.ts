import { type NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip check for non-dashboard/admin routes
  if (!pathname.startsWith("/dashboard") && !pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const cookieHeader = request.headers.get("cookie") || "";

  try {
    console.log(`[Middleware] Auth Check: ${pathname} | Has Cookies: ${cookieHeader.includes('better-auth')}`);
    
    const isLinux = process.platform === "linux";
    const platformLabel = isLinux ? "[Middleware:VPS]" : "[Middleware:ROG]";
    
    let session: any = null;

    if (isLinux) {
      // 1a. VPS Mode: Direct Session API to bypass TLS/SSL handshake conflicts
      session = await auth.api.getSession({
        headers: request.headers,
      });
    } else {
      // 1b. ROG Mode: Original Fetch logic (Stable on Windows Localhost)
      const sessionResponse = await fetch(`${request.nextUrl.origin}/api/auth/get-session`, {
        headers: {
          cookie: cookieHeader,
        },
        next: { revalidate: 0 }, 
      });

      if (sessionResponse.ok) {
        session = await sessionResponse.json();
      }
    }
    
    if (!session || !session.user) {
      console.log(`${platformLabel} ❌ Session Rejected: Access Denied to ${pathname}`);
      return NextResponse.redirect(new URL("/login", request.url));
    }
    
    const { role, email } = session.user;
    console.log(`${platformLabel} ✅ Session Found: User ${email} | Role ${role}`);

    // 2. Role-Based Redirection (Steering) Logic
    
    // Admin Protection
    if (pathname.startsWith("/admin")) {
      const isAdmin = role === "ADMIN" || email === process.env.ADMIN_EMAIL;
      if (!isAdmin) {
        console.log(`[Middleware] 🛡️ Non-Admin Blocked: Steering to dashboard`);
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
      return NextResponse.next();
    }

    // Auto-Steer /dashboard to Role-Specific Dashboard
    // If the path is exactly /dashboard, redirect them to their specific folder
    if (pathname === "/dashboard") {
      if (role === "PROVIDER") {
        console.log(`[Middleware] 🔄 Root Dashboard ➔ Steering to /dashboard/provider`);
        return NextResponse.redirect(new URL("/dashboard/provider", request.url));
      } else {
        console.log(`[Middleware] 🔄 Root Dashboard ➔ Steering to /dashboard/customer`);
        return NextResponse.redirect(new URL("/dashboard/customer", request.url));
      }
    }

    // Role Enforcement (Isolation) on sub-pages
    if (pathname.startsWith("/dashboard/provider") && role !== "PROVIDER") {
      console.log(`[Middleware] 🛡️ Role Block: Redirecting non-provider ${email} to /dashboard/customer`);
      return NextResponse.redirect(new URL("/dashboard/customer", request.url));
    }
    
    if (pathname.startsWith("/dashboard/customer") && role !== "CUSTOMER") {
      // Allow Providers to land on customer path ONLY IF they are not explicitly restricted,
      // but here the user wants SEPARATION.
      console.log(`[Middleware] 🛡️ Role Block: Redirecting non-customer ${role} ${email} to /dashboard/provider`);
      return NextResponse.redirect(new URL("/dashboard/provider", request.url));
    }

    return NextResponse.next();
  } catch (err) {
    console.error("[Middleware] ⚠️ Auth Check Execution Error:", err);
    // Fail-safe: Redirect to login if auth check is non-responsive
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
