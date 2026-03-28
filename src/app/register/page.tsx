"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const [role, setRole] = useState<"CUSTOMER" | "PROVIDER">("CUSTOMER");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      callbackURL: "/dashboard",
      // @ts-ignore - custom field role is defined in auth.ts
      role: role,
    });

    if (error) {
      setLoading(false);
      alert(error.message || "Registration failed. Please try again.");
      return;
    }

    if (data) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 mandala-bg pointer-events-none"></div>

      {/* Top Nav Anchor */}
      <header className="fixed top-0 w-full z-50 bg-[#faf9f6]/80 backdrop-blur-xl flex justify-between items-center px-6 py-4 shadow-[0_30px_60px_-15px_rgba(143,78,0,0.08)]">
        <div className="text-2xl font-headline font-bold text-orange-900 tracking-tight">Vedic Sanctuary</div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-stone-500 hover:text-orange-700 transition-colors duration-300 cursor-pointer">help</span>
          <span className="material-symbols-outlined text-stone-500 hover:text-orange-700 transition-colors duration-300 cursor-pointer">settings</span>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="w-full max-w-xl px-6 py-20 relative z-10 flex flex-col items-center">
        {/* Register Card */}
        <div className="w-full bg-surface-container-lowest/20 backdrop-blur-[16px] rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center shadow-[0_40px_100px_-20px_rgba(143,78,0,0.06)]">
          {/* Headline */}
          <h1 className="font-body font-light text-4xl text-on-surface tracking-tight mb-2 text-center">Join the Sanctuary</h1>
          <p className="font-headline italic text-primary/60 text-sm mb-12 text-center">Begin your journey toward spiritual alignment</p>
          
          <form className="w-full space-y-10" onSubmit={handleRegister}>
            {/* Role Selector */}
            <div className="flex justify-center p-1 bg-surface-container-low rounded-full w-full max-w-xs mx-auto mb-8">
              <button 
                className={`flex-1 py-2 px-6 rounded-full text-sm font-medium transition-all ${role === "CUSTOMER" ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-stone-400 hover:text-primary"}`} 
                type="button"
                onClick={() => setRole("CUSTOMER")}
              >
                Seeker
              </button>
              <button 
                className={`flex-1 py-2 px-6 rounded-full text-sm font-medium transition-all ${role === "PROVIDER" ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-stone-400 hover:text-primary"}`} 
                type="button"
                onClick={() => setRole("PROVIDER")}
              >
                Expert
              </button>
            </div>

            {/* Fields */}
            <div className="space-y-8">
              <div className="relative">
                <input 
                  className="peer block w-full px-0 py-3 bg-transparent border-t-0 border-x-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all text-on-surface placeholder-transparent focus:outline-none" 
                  id="full_name" 
                  placeholder=" " 
                  required 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label 
                  className="absolute left-0 -top-4 text-xs font-medium text-primary/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary uppercase tracking-widest pointer-events-none" 
                  htmlFor="full_name"
                >
                  Full Name
                </label>
              </div>
              <div className="relative">
                <input 
                  className="peer block w-full px-0 py-3 bg-transparent border-t-0 border-x-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all text-on-surface placeholder-transparent focus:outline-none" 
                  id="email" 
                  placeholder=" " 
                  required 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label 
                  className="absolute left-0 -top-4 text-xs font-medium text-primary/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary uppercase tracking-widest pointer-events-none" 
                  htmlFor="email"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <input 
                  className="peer block w-full px-0 py-3 bg-transparent border-t-0 border-x-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all text-on-surface placeholder-transparent focus:outline-none" 
                  id="password" 
                  placeholder=" " 
                  required 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label 
                  className="absolute left-0 -top-4 text-xs font-medium text-primary/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary uppercase tracking-widest pointer-events-none" 
                  htmlFor="password"
                >
                  Password
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button 
                className="w-full py-5 rounded-full sacred-gradient-btn text-white font-medium text-lg tracking-wide hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50" 
                type="submit"
                disabled={loading}
              >
                {loading && <Loader2 className="animate-spin" size={20} />}
                Create Account
                {!loading && <ArrowRight size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </form>

          {/* Footer Link */}
          <div className="mt-10 text-center">
            <p className="text-stone-400 text-sm">
              Already have an account? 
              <Link className="text-primary font-medium hover:underline underline-offset-4 ml-1" href="/login">Sign In</Link>
            </p>
          </div>
        </div>

        {/* Decorative Footer Anchor */}
        <div className="mt-12 flex items-center justify-center opacity-20">
          <div className="h-[1px] w-12 bg-primary"></div>
          <span className="material-symbols-outlined mx-4 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
          <div className="h-[1px] w-12 bg-primary"></div>
        </div>
      </main>

      {/* Bottom Ornament */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
    </div>
  );
}
