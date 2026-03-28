import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  // Role based routing
  if (session.user.role === "ADMIN" || session.user.email === process.env.ADMIN_EMAIL) {
    redirect("/admin");
  }

  if (session.user.role === "PROVIDER") {
    redirect("/dashboard/provider");
  }

  // Default to Customer
  redirect("/dashboard/customer");
}
