"use client";

import { signOut } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center space-x-2 text-sm font-bold uppercase tracking-wide text-[#887364] hover:text-[#8f4e00] transition-colors group"
    >
      <span className="hidden md:inline">Sign Out</span>
      <LogOut className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
    </button>
  );
}
