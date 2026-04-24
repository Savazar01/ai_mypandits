"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight, CheckCircle2, ShieldCheck, Mail, Lock } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { COUNTRIES } from "@/lib/countries";

interface RegistrationFormProps {
  role: "CUSTOMER" | "PROVIDER";
}

export function RegistrationForm({ role }: RegistrationFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [whatsappCode, setWhatsappCode] = useState("+91");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  
  // Verification States
  const [verificationStep, setVerificationStep] = useState<"idle" | "sending" | "sent" | "verifying" | "verified">("idle");
  const [otp, setOtp] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [timer, setTimer] = useState(0);

  const router = useRouter();

  const fullWhatsapp = `${whatsappCode}${whatsapp}`;

  const handleSendOtp = async () => {
    if (!whatsapp || whatsapp.length < 8) {
      setVerificationError("Please enter a valid WhatsApp number");
      return;
    }
    setVerificationStep("sending");
    setVerificationError("");
    
    try {
      const res = await fetch("/api/auth/whatsapp/send", {
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
        setVerificationError(data.error || "Failed to send code");
        setVerificationStep("idle");
      }
    } catch (err) {
      setVerificationError("Network error. Try again.");
      setVerificationStep("idle");
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) return;
    setVerificationStep("verifying");
    setVerificationError("");

    try {
      const res = await fetch("/api/auth/whatsapp/verify", {
        method: "POST",
        body: JSON.stringify({ whatsapp: fullWhatsapp, code: otp }),
      });
      const data = await res.json();
      if (res.ok) {
        setVerificationStep("verified");
      } else {
        setVerificationError(data.error || "Invalid code");
        setVerificationStep("sent");
      }
    } catch (err) {
      setVerificationError("Verification failed. Try again.");
      setVerificationStep("sent");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      // @ts-expect-error - whatsapp and signUpRole are dynamic fields
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

  const roleLabel = role === "CUSTOMER" ? "Customer" : "Provider";
  const headline = role === "CUSTOMER" ? "Start Planning Your Event" : "Join as a Service Provider";
  const tagline = role === "CUSTOMER" ? "Experience the future of AI-driven event orchestration for any occasion." : "Scale your service operations with our professional coordination tools.";

  return (
    <div className="w-full bg-surface-container-lowest/20 backdrop-blur-[16px] rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-10 md:p-16 flex flex-col items-center shadow-[0_40px_100px_-20px_rgba(143,78,0,0.06)] relative overflow-hidden">
      {/* Decorative Branding */}
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
        <span className="material-symbols-outlined text-[120px]">event_available</span>
      </div>

      {/* Headline Group */}
      <div className="text-center mb-12">
        <h1 className="font-body font-light text-4xl text-on-surface tracking-tight mb-2">{headline}</h1>
        <p className="font-headline italic text-primary/60 text-sm max-w-[280px] mx-auto">{tagline}</p>
      </div>
      
      <form className="w-full space-y-10" onSubmit={handleRegister}>
        {/* Fields Container */}
        <div className="space-y-8">
          {/* Full Name */}
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

          {/* WhatsApp Section */}
          <div className="relative">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
              <select
                className="w-full sm:w-32 px-2 py-3 bg-transparent border-t-0 border-x-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all text-on-surface focus:outline-none"
                value={whatsappCode}
                onChange={(e) => setWhatsappCode(e.target.value)}
              >
                {COUNTRIES.map(c => (
                  <option key={c.code} value={c.dialCode}>{c.flag} {c.dialCode} ({c.code})</option>
                ))}
              </select>
              <div className="relative flex-1">
                <input 
                  className="peer block w-full px-0 sm:px-4 py-3 bg-transparent border-t-0 border-x-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all text-on-surface placeholder-transparent focus:outline-none pr-28" 
                  id="whatsapp" 
                  placeholder=" " 
                  required 
                  type="text"
                  disabled={verificationStep === "verified"}
                  value={whatsapp}
                  onChange={(e) => {
                    setWhatsapp(e.target.value);
                    if (verificationStep !== "idle") setVerificationStep("idle");
                  }}
                />
                <label 
                  className="absolute left-0 -top-4 text-xs font-bold text-[#25D366] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#25D366] peer-autofill:-top-4 peer-autofill:text-xs peer-autofill:text-[#25D366] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#25D366] uppercase tracking-widest pointer-events-none flex items-center gap-1.5" 
                  htmlFor="whatsapp"
                >
                  <WhatsAppIcon size={12} /> WhatsApp
                </label>

                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  {verificationStep === "verified" ? (
                    <span className="flex items-center gap-1 text-green-600 text-sm font-bold uppercase tracking-wider bg-green-50 px-2 py-1 rounded-full border border-green-100">
                      <CheckCircle2 size={12} /> Verified
                    </span>
                  ) : (
                    <button 
                      type="button"
                      onClick={handleSendOtp}
                      disabled={verificationStep === "sending" || !whatsapp}
                      className="text-sm font-bold uppercase tracking-[0.1em] text-primary hover:text-primary/80 disabled:opacity-50 transition-colors flex items-center gap-1.5 px-3 py-1.5"
                    >
                      {verificationStep === "sending" ? <Loader2 size={12} className="animate-spin" /> : <ShieldCheck size={12} />}
                      {verificationStep === "sent" ? "Resend" : "Verify"}
                    </button>
                  ) }
                </div>
              </div>
            </div>
            {verificationError && <p className="text-sm text-red-500 font-medium mt-1 ml-2">{verificationError}</p>}
            
            {/* OTP Input Section */}
            {(verificationStep === "sent" || verificationStep === "verifying") && (
              <div className="mt-4 p-5 bg-primary/5 rounded-2xl border border-primary/10 space-y-4 animate-in slide-in-from-top-2 duration-300">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-primary/60 uppercase tracking-widest">Enter 6-Digit Code</label>
                  {timer > 0 && <span className="text-sm font-medium text-stone-500">Resend in {timer}s</span>}
                </div>
                <div className="flex gap-4">
                  <input 
                    type="text"
                    maxLength={6}
                    placeholder="000000"
                    className="flex-1 bg-white border-2 border-outline-variant rounded-xl px-4 py-3 text-center text-xl font-bold tracking-[0.5em] focus:border-primary focus:outline-none transition-all"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  />
                  <button 
                    type="button"
                    onClick={handleVerifyOtp}
                    disabled={otp.length !== 6 || verificationStep === "verifying"}
                    className="px-6 bg-primary text-white rounded-xl font-bold text-sm hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {verificationStep === "verifying" ? <Loader2 size={18} className="animate-spin" /> : "Verify"}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Email Address */}
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

          {/* Password */}
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

        {/* Submit Section */}
        <div className="pt-6 space-y-4">
          <button 
            className="w-full py-5 rounded-full primary-gradient-btn text-white font-medium text-lg tracking-wide hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50" 
            type="submit"
            disabled={loading || verificationStep !== "verified"}
          >
            {loading && <Loader2 className="animate-spin" size={20} />}
            {verificationStep !== "verified" ? "Verify WhatsApp to Continue" : "Create Account"}
            {!loading && verificationStep === "verified" && <ArrowRight size={20} strokeWidth={1.5} />}
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
  );
}
