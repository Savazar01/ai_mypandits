"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight, Smartphone, Mail, MessageSquare, CheckCircle2, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { COUNTRIES } from "@/lib/countries";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [loginMode, setLoginMode] = useState<"email" | "whatsapp">("whatsapp");
  
  // Email Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // WhatsApp Form State
  const [whatsappCode, setWhatsappCode] = useState("+91");
  const [whatsapp, setWhatsapp] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationStep, setVerificationStep] = useState<"idle" | "sending" | "sent" | "verifying">("idle");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(0);

  const router = useRouter();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error: authError } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/dashboard",
    });

    if (authError) {
      setLoading(false);
      setError(authError.message || "Login failed. Please check your credentials.");
      return;
    }

    if (data) {
      router.push("/dashboard");
    }
  };

  const handleSendLoginOtp = async () => {
    if (!whatsapp || whatsapp.length < 8) {
      setError("Please enter a valid WhatsApp number");
      return;
    }
    setVerificationStep("sending");
    setError("");
    
    try {
      const fullWhatsapp = `${whatsappCode}${whatsapp}`;
      const res = await fetch("/api/auth/whatsapp/login/send", {
        method: "POST",
        body: JSON.stringify({ whatsapp: fullWhatsapp }),
      });
      const data = await res.json();
      
      if (res.ok) {
        setVerificationStep("sent");
        setTimer(60);
        const interval = setInterval(() => {
          setTimer((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        setError(data.error || "Failed to send code");
        setVerificationStep("idle");
      }
    } catch (err) {
      setError("Network error. Try again.");
      setVerificationStep("idle");
    }
  };

  const handleVerifyLoginOtp = async () => {
    if (otp.length !== 6) return;
    setVerificationStep("verifying");
    setError("");

    try {
      const fullWhatsapp = `${whatsappCode}${whatsapp}`;
      const res = await fetch("/api/auth/whatsapp/login/verify", {
        method: "POST",
        body: JSON.stringify({ whatsapp: fullWhatsapp, code: otp }),
      });
      const data = await res.json();
      
      if (res.ok) {
        // Allow cookie to settle before redirecting
        setTimeout(() => {
          router.push("/dashboard");
        }, 500);
      } else {
        setError(data.error || "Invalid code");
        setVerificationStep("sent");
      }
    } catch (err) {
      setError("Verification failed. Try again.");
      setVerificationStep("sent");
    }
  };



  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col items-center justify-center vedic-gradient-bg overflow-hidden relative">
      <Header />
      {/* Subtle Background Motifs - Removed ghost image as requested */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03] flex items-center justify-center">
      </div>

      {/* Main Content Canvas */}
      <main className="relative z-10 w-full max-w-md px-6">
        {/* Login Card */}
        <div className="glass-card temple-arch p-10 flex flex-col items-center shadow-2xl shadow-primary/5">
          {/* Saffron Lotus Icon */}
          <div className="mb-6">
            <span className="material-symbols-outlined text-primary-container text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_florist</span>
          </div>
          
          {/* Card Headline */}
          <h1 className="font-body font-light text-4xl text-on-surface tracking-tight mb-8 text-center">Login to MyPandits</h1>

          {/* Mode Toggle - WhatsApp First */}
          <div className="flex bg-surface-variant/10 rounded-full p-1 mb-10 w-full max-w-[280px]">
            <button 
              onClick={() => { setLoginMode("whatsapp"); setError(""); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${loginMode === "whatsapp" ? "bg-white text-[#25D366] shadow-sm" : "text-on-surface-variant/60 hover:text-[#25D366]"}`}
            >
              <WhatsAppIcon size={18} /> WhatsApp
            </button>
            <button 
              onClick={() => { setLoginMode("email"); setError(""); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${loginMode === "email" ? "bg-white text-primary shadow-sm" : "text-on-surface-variant/60 hover:text-primary"}`}
            >
              <Mail size={18} /> Email
            </button>
          </div>

          {loginMode === "email" ? (
            <form className="w-full space-y-8" onSubmit={handleEmailLogin}>
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
              {error && <p className="text-[10px] text-red-500 font-medium text-center">{error}</p>}
              <div className="pt-6">
                <button 
                  className="saffron-gold-gradient w-full py-4 rounded-full text-white font-semibold text-lg tracking-wide hover:shadow-lg hover:shadow-primary/20 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50" 
                  type="submit"
                  disabled={loading}
                >
                  {loading && <Loader2 className="animate-spin" size={20} />}
                  Sign In
                </button>
              </div>
            </form>
          ) : (
            <div className="w-full space-y-6">
              <div className="flex">
                <select 
                  className="w-24 px-2 py-3 bg-transparent border-t-0 border-x-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all text-on-surface focus:outline-none"
                  value={whatsappCode}
                  onChange={(e) => setWhatsappCode(e.target.value)}
                >
                  {COUNTRIES.map(c => (
                    <option key={c.code} value={c.dialCode}>{c.flag} {c.dialCode} ({c.code})</option>
                  ))}
                </select>
                <div className="relative flex-1">
                  <input 
                    className="peer block w-full px-4 py-3 bg-transparent border-t-0 border-x-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all text-on-surface placeholder-transparent focus:outline-none pr-24" 
                    id="whatsapp" 
                    placeholder=" " 
                    required 
                    type="text"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                  />
                  <label 
                    className="absolute left-4 -top-4 text-xs font-bold text-[#25D366] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#25D366] peer-autofill:-top-4 peer-autofill:text-xs peer-autofill:text-[#25D366] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#25D366] uppercase tracking-widest pointer-events-none flex items-center gap-1.5" 
                    htmlFor="whatsapp"
                  >
                    <WhatsAppIcon size={12} /> WhatsApp Number
                  </label>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <button 
                      type="button"
                      onClick={handleSendLoginOtp}
                      disabled={verificationStep === "sending" || !whatsapp || timer > 0}
                      className="text-[10px] font-bold uppercase tracking-[0.1em] text-primary hover:text-primary/80 disabled:opacity-50 transition-colors flex items-center gap-1.5 px-3 py-1.5"
                    >
                      {verificationStep === "sending" ? <Loader2 size={12} className="animate-spin" /> : timer > 0 ? `${timer}s` : "Get OTP"}
                    </button>
                  </div>
                </div>
              </div>

              {error && <p className="text-[10px] text-red-500 font-medium text-center">{error}</p>}

              {/* OTP Entry */}
              {(verificationStep === "sent" || verificationStep === "verifying") && (
                <div className="pt-4 space-y-6 animate-in fade-in slide-in-from-top-2 duration-500">
                  <div className="relative">
                    <input 
                      type="text"
                      maxLength={6}
                      placeholder="000000"
                      className="w-full bg-primary/5 border-2 border-primary/10 rounded-2xl px-4 py-4 text-center text-2xl font-bold tracking-[0.5em] focus:border-primary focus:outline-none transition-all"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    />
                    <label className="block text-center text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em] mt-2 italic">Enter 6-digit code</label>
                  </div>
                  <button 
                    onClick={handleVerifyLoginOtp}
                    disabled={otp.length !== 6 || verificationStep === "verifying"}
                    className="saffron-gold-gradient w-full py-4 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {verificationStep === "verifying" && <Loader2 className="animate-spin" size={20} />}
                    Verify & Enter
                  </button>
                </div>
              )}
            </div>
          )}
          {/* Secondary Links */}
          <div className="mt-10 flex flex-col items-center space-y-4 w-full">
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
          <Link href="/" className="font-headline font-bold text-primary/40 tracking-widest text-3xl flex items-center justify-center gap-3">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_florist</span>
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


    </div>
  );
}
