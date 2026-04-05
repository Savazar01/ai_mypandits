"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/dashboard",
    });

    if (error) {
      setLoading(false);
      alert(error.message || "Login failed. Please check your credentials.");
      return;
    }

    if (data) {
      router.push("/dashboard");
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col items-center justify-center vedic-gradient-bg overflow-hidden relative">
      <Header />
      {/* Subtle Background Motifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03] flex items-center justify-center">
        <span className="material-symbols-outlined text-[600px] rotate-12">filter_vintage</span>
      </div>

      {/* Main Content Canvas */}
      <main className="relative z-10 w-full max-w-md px-6">
        {/* Login Card */}
        <div className="glass-card temple-arch p-10 flex flex-col items-center shadow-2xl shadow-primary/5">
          {/* Saffron Lotus Icon */}
          <div className="mb-6">
            <span className="material-symbols-outlined text-primary-container text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_florist</span>
          </div>
          {/* Title */}
          <h1 className="text-3xl font-light tracking-tight text-on-surface mb-10 text-center">
            Enter the Sanctuary
          </h1>
          {/* Login Form */}
          <form className="w-full space-y-8" onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="relative">
              <input 
                className="peer w-full bg-transparent border-0 border-b-2 border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-all duration-300 placeholder-transparent" 
                id="email" 
                name="email" 
                placeholder=" " 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label 
                className="absolute left-0 top-3 text-on-surface-variant/60 font-label text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-autofill:-top-4 peer-autofill:text-xs peer-autofill:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary uppercase tracking-widest" 
                htmlFor="email"
              >
                Email Address
              </label>
            </div>
            {/* Password Field */}
            <div className="relative">
              <input 
                className="peer w-full bg-transparent border-0 border-b-2 border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-all duration-300 placeholder-transparent" 
                id="password" 
                name="password" 
                placeholder=" " 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label 
                className="absolute left-0 top-3 text-on-surface-variant/60 font-label text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-autofill:-top-4 peer-autofill:text-xs peer-autofill:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary uppercase tracking-widest" 
                htmlFor="password"
              >
                Password
              </label>
            </div>
            {/* Action Button */}
            <div className="pt-6 space-y-4">
              <button 
                className="saffron-gold-gradient w-full py-4 rounded-full text-white font-semibold text-lg tracking-wide hover:shadow-lg hover:shadow-primary/20 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50" 
                type="submit"
                disabled={loading}
              >
                {loading && <Loader2 className="animate-spin" size={20} />}
                Sign In
              </button>

              <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Or</span>
                <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
              </div>

              <button 
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full py-3.5 rounded-full bg-white border border-outline-variant text-on-surface font-medium hover:bg-stone-50 transition-all flex items-center justify-center gap-3 text-sm shadow-sm"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : (
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                )}
                Sign in with Google
              </button>
            </div>
          </form>
          {/* Secondary Links */}
          <div className="mt-10 flex flex-col items-center space-y-4 w-full">
            <Link className="text-xs font-label uppercase tracking-widest text-outline hover:text-primary transition-colors duration-300" href="#">
              Forgot Password
            </Link>
            <div className="w-8 h-[1px] bg-outline-variant/30"></div>
            <p className="text-xs font-label text-on-surface-variant/70 uppercase tracking-widest">
              New to the journey? 
              <Link className="text-primary font-bold ml-1 hover:underline underline-offset-4" href="/register">
                Create an Account
              </Link>
            </p>
          </div>
        </div>
        {/* Decorative Subtle Branding */}
        <div className="mt-12 text-center">
          <Link href="/" className="font-headline font-bold text-primary/40 tracking-widest text-xl flex items-center justify-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_florist</span>
            MyPandits
          </Link>
        </div>
      </main>

      {/* Footer Area */}
      <footer className="fixed bottom-0 w-full flex flex-col md:flex-row justify-between items-center px-12 py-8 opacity-60">
        <p className="text-xs uppercase tracking-widest text-orange-800/50">
          © 2024 MyPandits. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link className="text-xs uppercase tracking-widest text-orange-800/50 hover:text-orange-900 transition-opacity" href="#">Privacy Policy</Link>
          <Link className="text-xs uppercase tracking-widest text-orange-800/50 hover:text-orange-900 transition-opacity" href="#">Ritual Guidelines</Link>
        </div>
      </footer>

      {/* Decorative Corner Mandala */}
      <div className="fixed top-0 right-0 p-12 opacity-[0.05] pointer-events-none hidden lg:block">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCedZrQpM6TppMwEKqXTm86nLB_yh0_X5s8UmwPdi4PYDVsrm8zQqq7b7XXs-DYwHfu8_g9Ph2Amm-uhnHtBO7kTGmOY1iMmYtakIZwNa4mj16YbtK4YcUU7IAByESUoiNpeNUfFv5oqDaelzQkh4_ebH6mMz7fYthuJpHR_Kt5wW_F4mb_RB2Elcks4d0nCymwCdJO_3KnXEU1i1bs20Maz5FCLCg2ru0YU4-fi-GlEDf1qz2zJC-E_BUZrjzNkjft5TFn7KJVjlE" 
          alt="Intricate circular gold mandala pattern with sacred geometry symmetry and soft ethereal glow on cream paper texture" 
          width={256}
          height={256}
          className="mix-blend-multiply" 
          unoptimized
        />
      </div>
    </div>
  );
}
