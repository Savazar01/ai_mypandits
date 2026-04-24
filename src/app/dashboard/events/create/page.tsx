"use client";

import EventCreator from "@/components/EventCreator";
import { SignOutButton } from "@/components/SignOutButton";
import { Sparkles, Bell, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CreateEventPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1A1C1A] selection:bg-saffron/20 font-sans pb-24">
      {/* Editorial Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-transparent shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="https://savazar.com/wp-content/uploads/2023/10/cropped-Transparent_Image_2-300x100.png" 
              alt="EventicAI Logo" 
              className="h-8 md:h-10 w-auto object-contain"
            />
            <span className="font-serif text-xl font-bold tracking-tight">EventicAI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10 text-sm font-bold uppercase tracking-[0.2em] text-[#887364]">
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

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
           <Link href="/dashboard/customer" className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-[#887364] hover:text-saffron transition-all group">
             <ChevronLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
             <span>Return to Dashboard</span>
           </Link>
        </div>

        <section className="relative mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-saffron mb-6">Event Initiation</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-8">
              Plan and schedule <br />
              <span className="text-[#887364]">your next event.</span>
            </h1>
          </motion.div>
        </section>

        <section>
          <EventCreator />
        </section>
      </main>

      {/* Subtle Background Texture */}
      <div className="fixed bottom-0 left-0 w-96 h-96 opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
           <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
           <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5" />
           {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
             <rect key={deg} x="48" y="10" width="4" height="80" transform={`rotate(${deg} 50 50)`} fill="currentColor" opacity="0.5" />
           ))}
        </svg>
      </div>
    </div>
  );
}
