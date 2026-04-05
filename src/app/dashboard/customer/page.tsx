"use client";

import { SignOutButton } from "@/components/SignOutButton";
import { useSession } from "@/lib/auth-client";
import { Sparkles, Search, Compass, BookOpen, User, Bell } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomerDashboard() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1A1C1A] selection:bg-saffron/20 font-sans">
      {/* Editorial Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-transparent shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#8f4e00] to-[#ff9933] rounded-xl flex items-center justify-center text-white shadow-lg shadow-saffron/10">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">MyPandits</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-[#887364]">
            <Link href="/dashboard/customer" className="hover:text-saffron transition-colors">Customer Dashboard</Link>
            <Link href="/dashboard/settings" className="hover:text-saffron transition-colors">User Settings</Link>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-[#887364] hover:text-saffron transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <SignOutButton />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section: The Sacred Welcome */}
        <section className="relative pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-saffron mb-6">Customer Portal | Sanctuary</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-8">
              Namaste, {session?.user?.name?.split(' ')[0] || "Customer"}. <br />
              <span className="text-[#887364]">Your sanctuary is in harmony.</span>
            </h1>
          </motion.div>
          
          {/* Ritual Discovery: No-Line Search */}
          <div className="mt-12 group">
            <div className="relative max-w-2xl bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-500 group-focus-within:shadow-xl group-focus-within:shadow-saffron/5">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-[#887364]">
                <Search className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Search for a sacred ritual or provider..."
                className="w-full pl-16 pr-8 py-6 bg-transparent outline-none text-sm font-medium placeholder:text-[#DBC2B0]"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-saffron transition-all duration-700 group-focus-within:w-full"></div>
            </div>
          </div>
        </section>

        {/* Tonal Layering: Active Sanctuary & Metrics */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Active Rituals: Overlapping Cards */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl font-bold italic">Active Sanctuary</h3>
              <button className="text-[10px] font-bold uppercase tracking-widest text-[#887364] hover:text-saffron">View All</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Griha Pravesha Preparation", desc: "Guidance from Pandit Sharma for your new beginning.", progress: "65%" },
                { title: "Ganesh Puja", desc: "Invoking wisdom and removing obstacles in your path.", progress: "Scheduled" }
              ].map((ritual, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="bg-white p-10 rounded-t-[2.5rem] rounded-b-xl shadow-sm hover:shadow-xl hover:shadow-saffron/5 transition-all duration-500 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#faf9f6] rounded-full flex items-center justify-center text-saffron mb-8">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold mb-4">{ritual.title}</h4>
                  <p className="text-xs text-[#887364] leading-relaxed mb-8">{ritual.desc}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-[#faf9f6]">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-gold">{ritual.progress}</span>
                     <Sparkles className="w-4 h-4 text-saffron opacity-40" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sacred Balance: High-Fidelity Metrics */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="font-serif text-2xl font-bold italic">Sacred Balance</h3>
            <div className="space-y-6">
              {[
                { label: "Community Dharma", value: "1,240", sub: "Sanctuary Points" },
                { label: "Peace Index", value: "84%", sub: "Current Vitality" },
                { label: "Rituals Orchestrated", value: "12", sub: "Lifetime Sanctuary" }
              ].map((metric, idx) => (
                <div key={idx} className="bg-[#f4f3f1] p-8 rounded-2xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#887364] mb-1">{metric.label}</p>
                    <div className="text-3xl font-serif font-bold text-[#8f4e00]">{metric.value}</div>
                    <p className="text-[9px] font-medium text-[#887364] mt-1">{metric.sub}</p>
                  </div>
                  <div className="absolute bottom-[-20%] right-[-10%] w-24 h-24 bg-saffron/5 rounded-full blur-2xl group-hover:bg-saffron/10 transition-colors"></div>
                </div>
              ))}
              
              {/* Daily Wisdom Card */}
              <div className="bg-gradient-to-br from-[#8f4e00] to-[#735c00] p-10 rounded-2xl text-white shadow-xl shadow-saffron/20 relative overflow-hidden">
                <BookOpen className="w-8 h-8 mb-6 opacity-40" />
                <p className="text-sm font-serif italic leading-relaxed mb-6">
                  "When the mind is calm and the heart is pure, the sanctuary within becomes a gateway to the divine."
                </p>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">— Rig Veda Insight</div>
                <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Subtle Background Texture */}
      <div className="fixed bottom-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
           <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
           <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5" />
           {/* Mandala representation */}
           {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
             <rect key={deg} x="48" y="10" width="4" height="80" transform={`rotate(${deg} 50 50)`} fill="currentColor" opacity="0.5" />
           ))}
        </svg>
      </div>
    </div>
  );
}
