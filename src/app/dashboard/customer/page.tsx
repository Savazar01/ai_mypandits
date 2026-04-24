"use client";
import React from "react";

import { SignOutButton } from "@/components/SignOutButton";
import { useSession } from "@/lib/auth-client";
import { Sparkles, Search, Compass, BookOpen, User, Bell, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import EventCreator from "@/components/EventCreator";

export default function CustomerDashboard() {
  const { data: session } = useSession();
  const [dashboardData, setDashboardData] = React.useState<{
    total_events: number;
    active_orchestrations: number;
    upcoming_activities_count: number;
    recent_events: any[];
  } | null>(null);
  const [isCreatingEvent, setIsCreatingEvent] = React.useState(false);
  const [backendError, setBackendError] = React.useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const fetchDashboardData = async () => {
    if (!session?.user?.id) return;
    try {
      // Call the Next.js API proxy (server-side → Python backend)
      const res = await fetch(`/api/v1/dashboard`);
      if (res.ok) {
        const data = await res.json();
        if (data._error) {
          setBackendError(data._error);
        } else {
          setBackendError(null);
        }
        setDashboardData(data);
      } else {
        console.error("Dashboard fetch error:", res.status);
        setBackendError("Failed to load dashboard data.");
      }
    } catch (err) {
      console.error("Dashboard fetch error:", err);
      setBackendError("Network error loading dashboard.");
    }
  };

  React.useEffect(() => {
    fetchDashboardData();
  }, [session?.user?.id]);

  const deleteEvent = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event? This action cannot be undone.")) return;
    try {
      // Call the Next.js API proxy (server-side → Python backend)
      const res = await fetch(`/api/v1/events/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchDashboardData();
      } else {
        alert("Failed to delete event. Ensure the AI backend is running.");
      }
    } catch (err) {
      console.error("Delete event error:", err);
      alert("Error deleting event.");
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1A1C1A] selection:bg-[#f28c28]/20 font-sans">
      {/* Editorial Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-[#DBC2B0]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="https://savazar.com/wp-content/uploads/2023/10/cropped-Transparent_Image_2-300x100.png" 
              alt="EventicAI Logo" 
              className="h-8 md:h-10 w-auto object-contain"
            />
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight">EventicAI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-[0.2em] text-[#887364]">
            <Link href="/dashboard/customer" className="hover:text-[#f28c28] transition-colors">Dashboard</Link>
            <Link href="/dashboard/settings" className="hover:text-[#f28c28] transition-colors">Settings</Link>
          </div>

          <div className="flex items-center space-x-3 md:space-x-6">
            <button className="text-[#887364] hover:text-[#f28c28] transition-colors hidden sm:block">
              <Bell className="w-5 h-5" />
            </button>
            <div className="hidden md:block">
              <SignOutButton />
            </div>
            <button 
              className="md:hidden p-2 text-[#887364]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-[#DBC2B0]/20 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4 text-xs font-bold uppercase tracking-widest text-[#887364]">
                <Link 
                  href="/dashboard/customer" 
                  className="py-2 border-b border-[#faf9f6]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  href="/dashboard/settings" 
                  className="py-2 border-b border-[#faf9f6]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Settings
                </Link>
                <div className="pt-2">
                  <SignOutButton />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section: Dashboard Greeting */}
        <section className="relative pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] text-[#f28c28] mb-4 md:mb-6">Customer Portal | Event Management</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6 md:mb-8">
              Welcome, {session?.user?.name?.split(' ')[0] || "Customer"}. <br />
              <span className="text-[#887364] block md:inline text-2xl sm:text-3xl md:text-6xl">Your events are on track.</span>
            </h1>
          </motion.div>
          
          {/* Event Discovery: No-Line Search */}
          <div className="mt-12 group">
            <div className="relative max-w-2xl bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-500 group-focus-within:shadow-xl group-focus-within:shadow-[#f28c28]/5">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-[#887364]">
                <Search className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Search for an event or service provider..."
                className="w-full pl-16 pr-8 py-6 bg-transparent outline-none text-sm font-medium placeholder:text-[#DBC2B0]"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f28c28] transition-all duration-700 group-focus-within:w-full"></div>
            </div>
            
            <div className="mt-4 md:mt-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setIsCreatingEvent(true)}
                className="w-full sm:w-auto px-10 py-5 bg-gradient-to-br from-[#8f4e00] to-[#ff9933] text-white rounded-2xl font-bold uppercase text-sm md:text-lg tracking-wide shadow-xl shadow-[#f28c28]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-3 border border-white/10 relative z-20"
              >
                <Plus className="w-5 h-5 md:w-6 md:h-6" />
                <span>Create New Event</span>
              </button>
              <div className="hidden sm:block h-10 w-px bg-[#DBC2B0]/30 mx-2"></div>
              <p className="text-[#887364] text-[10px] md:text-sm font-bold uppercase tracking-widest text-center sm:text-left">
                System Status: <span className={backendError ? "text-red-400" : "text-[#d4af37]"}>{backendError ? "Backend Offline" : "Connected"}</span>
              </p>
            </div>
          </div>
        </section>

        {/* Dashboard Layering: Active Events & Metrics */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Active Events: Overlapping Cards */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl font-bold italic">Active Events</h3>
              <button className="text-sm font-bold uppercase tracking-wide text-[#887364] hover:text-[#f28c28]">View All</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dashboardData?.recent_events && dashboardData.recent_events.length > 0 ? (
                dashboardData.recent_events.map((event, idx) => (
                  <Link key={event.id} href={`/dashboard/events/${event.id}`}>
                    <motion.div 
                      whileHover={{ y: -8 }}
                      className="bg-white p-10 rounded-t-[2.5rem] rounded-b-xl shadow-sm hover:shadow-xl hover:shadow-[#f28c28]/5 transition-all duration-500 h-full relative"
                    >
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          deleteEvent(event.id);
                        }}
                        className="absolute top-8 right-8 text-[#887364] hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
                        title="Delete Event"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <div className="w-12 h-12 bg-[#faf9f6] rounded-full flex items-center justify-center text-[#f28c28] mb-8">
                        <Compass className="w-6 h-6" />
                      </div>
                      <h4 className="font-serif text-xl font-bold mb-4 pr-10">{event.title}</h4>
                      <p className="text-sm text-[#887364] leading-relaxed mb-8 line-clamp-2">
                        {event.description || `Ongoing ${event.event_type} orchestration.`}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-[#faf9f6]">
                        <span className="text-sm font-bold uppercase tracking-widest text-[#d4af37]">{event.status}</span>
                        <Sparkles className="w-4 h-4 text-[#f28c28] opacity-40" />
                      </div>
                    </motion.div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-dashed border-[#DBC2B0]/30">
                  {backendError ? (
                    <>
                      <p className="text-red-400 text-sm font-semibold mb-2">⚠ AI Backend Offline</p>
                      <p className="text-[#887364] text-xs max-w-sm mx-auto">{backendError}</p>
                      <p className="text-[#887364] text-xs mt-2">Start the Python backend: <code className="bg-gray-100 px-1 rounded">cd agents/backend && uvicorn main:app --port 8000</code></p>
                    </>
                  ) : (
                    <p className="text-[#887364] text-sm">No active events found. Initialize your first event above.</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* High-Fidelity Metrics */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="font-serif text-2xl font-bold italic">Event Metrics</h3>
            <div className="space-y-6">
              {[
                { label: "Community Engagement", value: dashboardData?.total_events ? `${dashboardData.total_events * 100}` : "0", sub: "Engagement Points" },
                { label: "Active Orchestrations", value: dashboardData?.active_orchestrations || "0", sub: "Synchronizing" },
                { label: "Total Events", value: dashboardData?.total_events || "0", sub: "Lifetime Total" }
              ].map((metric, idx) => (
                <div key={idx} className="bg-[#f4f3f1] p-8 rounded-2xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#887364] mb-1">{metric.label}</p>
                    <div className="text-3xl font-serif font-bold text-[#8f4e00]">{metric.value}</div>
                    <p className="text-[9px] font-medium text-[#887364] mt-1">{metric.sub}</p>
                  </div>
                  <div className="absolute bottom-[-20%] right-[-10%] w-24 h-24 bg-[#f28c28]/5 rounded-full blur-2xl group-hover:bg-[#f28c28]/10 transition-colors"></div>
                </div>
              ))}
              
              {/* Daily Wisdom Card */}
              <div className="bg-gradient-to-br from-[#8f4e00] to-[#735c00] p-10 rounded-2xl text-white shadow-xl shadow-[#f28c28]/20 relative overflow-hidden">
                <BookOpen className="w-8 h-8 mb-6 opacity-40" />
                <p className="text-sm font-serif italic leading-relaxed mb-6">
                  "Efficiency is doing things right; effectiveness is doing the right things."
                </p>
                <div className="text-sm font-bold uppercase tracking-widest opacity-60">— Peter Drucker</div>
                <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Event Creator Modal */}
      <AnimatePresence>
        {isCreatingEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCreatingEvent(false)}
              className="absolute inset-0 bg-[#1A1C1A]/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full md:max-w-5xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto md:rounded-[2.5rem] bg-white custom-scrollbar"
            >
              <EventCreator 
                onSuccess={() => {
                  setIsCreatingEvent(false);
                  fetchDashboardData();
                }}
                onCancel={() => setIsCreatingEvent(false)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Subtle Background Texture */}
      <div className="fixed bottom-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
           <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
           <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5" />
           {/* Geometric representation */}
           {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
             <rect key={deg} x="48" y="10" width="4" height="80" transform={`rotate(${deg} 50 50)`} fill="currentColor" opacity="0.5" />
           ))}
        </svg>
      </div>
    </div>
  );
}

