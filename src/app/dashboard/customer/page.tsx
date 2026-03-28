"use client";

import { SignOutButton } from "@/components/SignOutButton";
import { useSession } from "@/lib/auth-client";
import { Heart, Sparkles, MapPin, Search, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomerDashboard() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-parchment p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-saffron rounded-xl flex items-center justify-center text-white shadow-lg shadow-saffron/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold text-[#1A1C1A]">Sacred Orchestrator</h1>
            <p className="text-xs uppercase tracking-widest font-bold text-[#887364]">Client Portal | MyPandits Sanctuary</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
           <Link href="/rituals" className="text-xs font-bold uppercase tracking-widest text-[#887364] hover:text-saffron transition-colors">Find Ritual</Link>
           <SignOutButton />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Welcome Section */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-12 rounded-[3rem] border border-white/50 bg-gradient-to-br from-saffron/5 to-gold/5 overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="font-serif text-4xl font-bold mb-4 tracking-tight">Namaste, {session?.user?.name || "Seeker"}</h2>
              <p className="text-[#554336] max-w-md font-medium mb-8">
                Your spiritual journey is being orchestrated with intelligence and devotion. What sacred space shall we create today?
              </p>
              <div className="flex items-center space-x-4">
                 <Link href="/plan" className="btn-saffron px-10 text-sm">Plan Ritual</Link>
                 <button className="px-6 py-2.5 text-xs uppercase font-bold tracking-widest text-[#887364] hover:text-saffron transition-colors">
                    View Recent
                 </button>
              </div>
            </div>
            <div className="absolute top-[-20%] right-[-10%] w-[50%] aspect-square rounded-full bg-saffron/5 blur-3xl"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-[2.5rem] border border-white/50">
              <h3 className="font-serif text-lg font-bold mb-4">My Rituals</h3>
              <div className="text-sm font-semibold text-[#887364] flex items-center justify-center h-24 border border-dashed border-[#DBC2B0] rounded-2xl">
                 No upcoming rituals scheduled.
              </div>
            </div>
            <div className="glass-card p-8 rounded-[2.5rem] border border-white/50">
              <h3 className="font-serif text-lg font-bold mb-4">Saved Experts</h3>
              <div className="text-sm font-semibold text-[#887364] flex items-center justify-center h-24 border border-dashed border-[#DBC2B0] rounded-2xl">
                 Start searching to save experts.
              </div>
            </div>
          </div>
        </div>

        {/* Action Sidebar */}
        <div className="space-y-8">
          <div className="glass-card p-8 rounded-[2rem] border border-white/50">
             <h3 className="font-serif text-lg font-bold mb-6 tracking-tight">AI Pandit Recommendation</h3>
             <div className="p-6 bg-surface-low rounded-3xl mb-4 text-center">
                <Sparkles className="w-8 h-8 text-saffron mx-auto mb-4" />
                <p className="text-[11px] font-bold text-[#887364] uppercase tracking-wider mb-2 leading-relaxed">
                   Based on your previous search, we recommend:
                </p>
                <div className="font-bold text-sm">Pandit G. Ramanathan</div>
                <div className="text-[10px] text-gold uppercase font-bold tracking-widest mb-4">Kalyana Specialist</div>
                <button className="text-xs font-bold text-saffron hover:underline flex items-center mx-auto space-x-1">
                   <span>View Profile</span>
                   <ArrowRight className="w-3 h-3" />
                </button>
             </div>
          </div>

          <div className="glass-card p-8 rounded-[2rem] border border-white/50">
             <h3 className="font-serif text-lg font-bold mb-4 tracking-tight leading-none">The Sanctuary Verse</h3>
             <p className="text-[11px] font-medium text-[#554336] leading-relaxed italic">
                {`"When the seeker is ready, the ritual appears."`}
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
