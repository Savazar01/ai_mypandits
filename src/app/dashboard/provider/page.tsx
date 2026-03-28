"use client";

import { SignOutButton } from "@/components/SignOutButton";
import { useSession } from "@/lib/auth-client";
import { User, Calendar, MapPin, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProviderDashboard() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-parchment p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center text-white shadow-lg shadow-gold/20">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold text-[#1A1C1A]">Sacred Pulse</h1>
            <p className="text-xs uppercase tracking-widest font-bold text-[#887364]">Expert Portal | MyPandits Sanctuary</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-xs font-bold uppercase tracking-widest text-[#887364] hover:text-saffron transition-colors">Main Website</Link>
          <SignOutButton />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Profile Summary */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card p-8 rounded-[2rem] border border-white/50 text-center">
            <div className="w-24 h-24 rounded-full bg-saffron/10 border-2 border-saffron/20 mx-auto flex items-center justify-center text-saffron mb-4">
              <User className="w-12 h-12" />
            </div>
            <h2 className="font-serif text-xl font-bold">{session?.user?.name || "The Expert"}</h2>
            <p className="text-xs font-bold text-saffron uppercase tracking-widest mb-6">Expert Pandit</p>
            <div className="flex flex-col space-y-4">
               <div className="flex items-center justify-center space-x-2 text-xs text-[#554336]">
                  <MapPin className="w-3 h-3" />
                  <span>Kashi Sanctuary</span>
               </div>
               <div className="flex items-center justify-center space-x-2 text-xs text-[#554336]">
                  <Calendar className="w-3 h-3" />
                  <span>Verified 2026</span>
               </div>
            </div>
          </div>
        </div>

        {/* Action Table / Dashboard Focus */}
        <div className="lg:col-span-3 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-[2rem] bg-forest text-white">
              <div className="text-4xl font-bold mb-1">12</div>
              <div className="text-[10px] uppercase font-bold tracking-widest opacity-80">Upcoming Rituals</div>
            </div>
            <div className="glass-card p-8 rounded-[2rem] border border-white/50">
              <div className="text-4xl font-bold mb-1">4.9/5</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-[#887364]">Expert Rating</div>
            </div>
            <div className="glass-card p-8 rounded-[2rem] border border-white/50">
              <div className="text-4xl font-bold mb-1">₹45k</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-[#887364]">Ritual Revenue</div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-[2rem] border border-white/50 h-[400px] flex items-center justify-center text-center">
            <div>
              <p className="text-sm font-semibold text-[#887364]">Sacred Context Mapping... (ID: a095f4a37fe4413ebb4a6d2f32b7f33d)</p>
              <div className="w-48 h-1 bg-surface-low rounded-full mx-auto mt-4 overflow-hidden">
                <div className="w-1/3 h-full bg-gold animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
