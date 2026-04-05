"use client";

import { SignOutButton } from "@/components/SignOutButton";
import { useSession } from "@/lib/auth-client";
import { Sparkles, Inbox, Calendar, Award, User, Bell, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProviderDashboard() {
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
            <Link href="/dashboard/provider" className="hover:text-saffron transition-colors">Provider Dashboard</Link>
            <Link href="/dashboard/settings" className="hover:text-saffron transition-colors">User Settings</Link>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center space-x-2 px-4 py-1.5 bg-[#f4f3f1] rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#887364]">Dharma Score: 98</span>
            </div>
            <button className="text-[#887364] hover:text-saffron transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#b52619] rounded-full"></span>
            </button>
            <SignOutButton />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section: The Service Sanctuary */}
        <section className="relative pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#735c00] mb-6">Provider Portal | Service Sanctuary</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-8">
              Namaste, {session?.user?.name?.split(' ')[0] || "Provider"}. <br />
              <span className="text-[#887364]">Your sanctuary of service is active.</span>
            </h1>
          </motion.div>
          
          {/* Quick Stats: No-Line Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { label: "Rituals Conducted", value: "1,420+", sub: "Lifetime Dharma" },
              { label: "Customer Blessings", value: "4.9/5", sub: "98% Positive" },
              { label: "Dharma Earnings", value: "₹2.4L", sub: "Monthly Balance" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-saffron/5 transition-all duration-500 group">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#887364] mb-2">{stat.label}</p>
                <div className="text-3xl font-serif font-bold text-[#8f4e00]">{stat.value}</div>
                <p className="text-[9px] font-medium text-[#887364] mt-1">{stat.sub}</p>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Activity className="w-4 h-4 text-saffron/40" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tonal Layering: Ritual Request Inbox & Schedule */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* New Ritual Requests */}
          <div className="lg:col-span-12 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl font-bold italic">New Ritual Requests</h3>
              <button className="text-[10px] font-bold uppercase tracking-widest text-[#887364] hover:text-saffron">View Inbox</button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Ganesh Chaturthi Havan", customer: "Siddharth Verma", time: "Sep 22, 10:00 AM", color: "bg-white" },
                { title: "Navagraha Shanti", customer: "Priya Das", time: "Sep 24, 07:30 AM", color: "bg-[#f4f3f1]" },
                { title: "Vastu Puja", customer: "Rahul Mehta", time: "Sep 25, 05:00 PM", color: "bg-white" }
              ].map((request, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className={`${request.color} p-6 h-24 flex items-center justify-between rounded-xl transition-all duration-300 cursor-pointer group`}
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-10 h-10 bg-[#faf9f6] rounded-full flex items-center justify-center text-saffron group-hover:bg-saffron group-hover:text-white transition-colors duration-500">
                      <Inbox className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold leading-none mb-1">{request.title}</h4>
                      <p className="text-[10px] font-bold text-[#887364] uppercase tracking-wider">{request.customer} • {request.time}</p>
                    </div>
                  </div>
                  <button className="p-3 bg-saffron/5 group-hover:bg-saffron group-hover:text-white rounded-full transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Availability Toggle: Temple Arch Action */}
        <section className="bg-gradient-to-br from-[#8f4e00] to-[#735c00] rounded-t-[3rem] rounded-b-2xl p-16 text-center text-white shadow-2xl shadow-saffron/20 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
             <Calendar className="w-12 h-12 mx-auto mb-8 opacity-40" />
             <h3 className="font-serif text-3xl font-bold mb-4 italic">Sanctuary Availability</h3>
             <p className="text-sm font-light opacity-80 mb-10 leading-relaxed max-w-lg mx-auto">
                Disconnect from the digital sanctuary for personal meditation. 
                When you go offline, ritual requests will be paused for your peace.
             </p>
             <button className="bg-white text-saffron px-12 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform duration-500 shadow-xl shadow-black/10">
                Go Offline
             </button>
          </div>
          <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-black/5 rounded-full blur-3xl"></div>
        </section>
      </main>

      {/* Subtle Background Texture */}
      <div className="fixed bottom-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none select-none">
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
