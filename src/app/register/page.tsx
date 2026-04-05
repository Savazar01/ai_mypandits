"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";

export default function RegisterPage() {
  const [role, setRole] = useState<"CUSTOMER" | "PROVIDER">("CUSTOMER");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [whatsappCode, setWhatsappCode] = useState("+91");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      // @ts-expect-error - whatsapp and signUpRole are dynamic fields handled by BetterAuth additionalFields and server hooks
      whatsapp: `${whatsappCode}${whatsapp}`,
      callbackURL: "/dashboard",
      signUpRole: role,
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

  const handleGoogleRegister = async () => {
    setLoading(true);
    await authClient.signIn.social({
      provider: "google",
      callbackURL: `/dashboard?role=${role}`,
    });
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex items-center justify-center relative overflow-hidden">
      <Header />

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
                Customer
              </button>
              <button 
                className={`flex-1 py-2 px-6 rounded-full text-sm font-medium transition-all ${role === "PROVIDER" ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-stone-400 hover:text-primary"}`} 
                type="button"
                onClick={() => setRole("PROVIDER")}
              >
                Provider
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
                  className="absolute left-0 -top-4 text-xs font-medium text-primary/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-autofill:-top-4 peer-autofill:text-xs peer-autofill:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary uppercase tracking-widest pointer-events-none" 
                  htmlFor="full_name"
                >
                  Full Name
                </label>
              </div>
              <div className="relative">
                <div className="flex">
                  <select
                    className="w-24 px-2 py-3 bg-transparent border-t-0 border-x-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all text-on-surface focus:outline-none"
                    value={whatsappCode}
                    onChange={(e) => setWhatsappCode(e.target.value)}
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US/CA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (AU)</option>
                    <option value="+65">+65 (SG)</option>
                  </select>
                  <div className="relative flex-1">
                    <input 
                      className="peer block w-full px-4 py-3 bg-transparent border-t-0 border-x-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all text-on-surface placeholder-transparent focus:outline-none" 
                      id="whatsapp" 
                      placeholder=" " 
                      required 
                      type="text"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                    <label 
                      className="absolute left-4 -top-4 text-xs font-medium text-primary/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-autofill:-top-4 peer-autofill:text-xs peer-autofill:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary uppercase tracking-widest pointer-events-none" 
                      htmlFor="whatsapp"
                    >
                      WhatsApp Number
                    </label>
                  </div>
                </div>
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
                  className="absolute left-0 -top-4 text-xs font-medium text-primary/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-autofill:-top-4 peer-autofill:text-xs peer-autofill:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary uppercase tracking-widest pointer-events-none" 
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
                  className="absolute left-0 -top-4 text-xs font-medium text-primary/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-autofill:-top-4 peer-autofill:text-xs peer-autofill:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary uppercase tracking-widest pointer-events-none" 
                  htmlFor="password"
                >
                  Password
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 space-y-4">
              <button 
                className="w-full py-5 rounded-full sacred-gradient-btn text-white font-medium text-lg tracking-wide hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50" 
                type="submit"
                disabled={loading}
              >
                {loading && <Loader2 className="animate-spin" size={20} />}
                Create Account
                {!loading && <ArrowRight size={20} strokeWidth={1.5} />}
              </button>

              <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] flex-1 bg-outline-variant"></div>
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Or</span>
                <div className="h-[1px] flex-1 bg-outline-variant"></div>
              </div>

              <button 
                type="button"
                onClick={handleGoogleRegister}
                disabled={loading}
                className="w-full py-4 rounded-full bg-white border border-outline-variant text-on-surface font-medium hover:bg-stone-50 transition-all flex items-center justify-center gap-3"
              >
                {loading ? <Loader2 size={18} className="animate-spin" /> : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                )}
                Continue with Google
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
        <div className="mt-12 flex flex-col items-center justify-center opacity-40">
          <Link href="/" className="font-headline font-bold text-primary/40 tracking-widest text-xl flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_florist</span>
            MyPandits
          </Link>
          <div className="flex items-center">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="material-symbols-outlined mx-4 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>
        </div>
      </main>

      {/* Bottom Ornament */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
    </div>
  );
}
