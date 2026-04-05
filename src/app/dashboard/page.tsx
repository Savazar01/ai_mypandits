import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage(props: { searchParams: Promise<{ role?: string }> }) {
  const searchParams = await props.searchParams;
  const requestedRole = searchParams.role;
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  let currentRole = session.user.role;

  // Handle role update for social login users who picked a role on the register page
  if (requestedRole && (requestedRole === "PROVIDER" || requestedRole === "CUSTOMER")) {
    // If the user is currently a CUSTOMER (default) but requested PROVIDER, upgrade them
    if (currentRole === "CUSTOMER" && requestedRole === "PROVIDER") {
      await prisma.user.update({
        where: { id: session.user.id },
        data: { role: "PROVIDER" }
      });
      currentRole = "PROVIDER";
    }
  }

  // Role based routing
  if (currentRole === "ADMIN" || session.user.email === process.env.ADMIN_EMAIL) {
    redirect("/admin");
  }

  if (currentRole === "PROVIDER") {
    redirect("/dashboard/provider");
  }

  // Default to Customer
  redirect("/dashboard/customer");
}
