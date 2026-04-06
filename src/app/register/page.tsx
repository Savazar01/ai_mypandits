"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { User, Users, Smartphone, ShieldCheck, ArrowRight } from "lucide-react";

export default function RegisterChoicePage() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <Header />

      {/* Main Content Canvas - Simplified for direct action */}
      <main className="w-full max-w-5xl px-6 py-24 md:py-32 relative z-10 flex flex-col items-center">

        {/* Choice Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Customer Choice Card */}
          <Link 
            href="/register/customer"
            className="group relative bg-surface-container-lowest/40 backdrop-blur-xl rounded-[2.5rem] p-12 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-transparent hover:border-primary/10 overflow-hidden"
          >
            {/* Subtle Mandala Background */}
            <div className="absolute -top-12 -right-12 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 rotate-12">
              <span className="material-symbols-outlined text-[240px]">spa</span>
            </div>

            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
              <User className="text-primary group-hover:text-white transition-colors duration-500" size={40} strokeWidth={1} />
            </div>
            
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-4">Join as a Customer</h2>
            <p className="text-on-surface-variant leading-relaxed mb-10 max-w-xs">
              Orchestrate your sacred rituals with AI precision. Connect with expert Pandits and verified event professionals.
            </p>
            
            <div className="mt-auto flex items-center gap-2 font-bold text-primary uppercase tracking-[0.2em] text-xs">
              Get Started <ArrowRight size={16} />
            </div>
          </Link>

          {/* Provider Choice Card */}
          <Link 
            href="/register/provider"
            className="group relative bg-surface-container-lowest/40 backdrop-blur-xl rounded-[2.5rem] p-12 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-500 border border-transparent hover:border-secondary/10 overflow-hidden"
          >
            {/* Subtle Mandala Background */}
            <div className="absolute -top-12 -right-12 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 rotate-45">
              <span className="material-symbols-outlined text-[240px]">local_florist</span>
            </div>

            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors duration-500">
              <Users className="text-secondary group-hover:text-white transition-colors duration-500" size={40} strokeWidth={1} />
            </div>
            
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-4">Apply as a Provider</h2>
            <p className="text-on-surface-variant leading-relaxed mb-10 max-w-xs">
              Digitalize your shastric practice. Expand your reach and manage your services with intelligent AI orchestration.
            </p>
            
            <div className="mt-auto flex items-center gap-2 font-bold text-secondary uppercase tracking-[0.2em] text-xs">
              Apply Now <ArrowRight size={16} />
            </div>
          </Link>
        </div>

        {/* Existing Account Link */}
        <div className="mt-16 text-center opacity-70">
          <p className="text-stone-500">
            Already a member of the Sanctuary? 
            <Link className="text-primary font-bold hover:underline underline-offset-4 ml-2" href="/login">Sign In</Link>
          </p>
        </div>
      </main>

      {/* Decorative Background Ornaments */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}
