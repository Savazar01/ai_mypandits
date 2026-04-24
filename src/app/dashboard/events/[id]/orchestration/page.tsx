"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Terminal, TreeDeciduous, Play, Pause, AlertCircle, ChevronRight, Activity, Clock, CheckCircle2, Users } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

interface LogEntry {
  agent: string;
  message: string;
  timestamp: string;
}

export default function OrchestrationPage() {
  const { id } = useParams();
  const [event, setEvent] = useState<any>(null);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [status, setStatus] = useState("Draft");
  const [isOrchestrating, setIsOrchestrating] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Fetch initial event data
  useEffect(() => {
    if (id) {
      fetch(`/api/v1/events/${id}`)
        .then(res => res.json())
        .then(data => {
          setEvent(data);
          setStatus(data.status);
        })
        .catch(err => console.error("Failed to load event:", err));
    }
  }, [id]);

  useEffect(() => {
    // Scroll terminal to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  // Real SSE connection
  useEffect(() => {
    if (status === "Orchestrating" && id) {
      const eventSource = new EventSource(`/api/v1/events/${id}/orchestration`);
      
      eventSource.onmessage = (e) => {
        try {
          const newLog = JSON.parse(e.data);
          setLogs(prev => [...prev, {
            agent: newLog.agent,
            message: newLog.message,
            timestamp: new Date(newLog.timestamp).toLocaleTimeString()
          }].slice(-100));
        } catch (err) {
          console.error("Failed to parse log:", err);
        }
      };

      eventSource.onerror = () => {
        console.error("SSE connection error");
        eventSource.close();
      };

      return () => eventSource.close();
    }
  }, [status, id]);

  const handleTrigger = async () => {
    if (!id) return;
    setIsOrchestrating(true);
    try {
      setLogs(prev => [...prev, { agent: "System", message: "Contacting Agentic Harness...", timestamp: new Date().toLocaleTimeString() }]);
      
      const response = await fetch(`/api/v1/events/${id}/trigger-orchestration`, {
        method: "PATCH"
      });

      if (!response.ok) throw new Error("Trigger failed");
      
      const data = await response.json();
      setStatus(data.status);
    } catch (err) {
      console.error("Trigger failed:", err);
      alert("Orchestration trigger failed. Is the FastAPI backend running?");
    } finally {
      setIsOrchestrating(false);
    }
  };

  const handleSendInvites = async () => {
    if (!id) return;
    try {
      setLogs(prev => [...prev, { agent: "Messenger", message: "Preparing divine dispatches...", timestamp: new Date().toLocaleTimeString() }]);
      const response = await fetch(`/api/v1/events/${id}/send-invites`, {
        method: "POST"
      });
      if (!response.ok) throw new Error("Dispatch failed");
      const updatedEvent = await response.json();
      setEvent(updatedEvent);
      setLogs(prev => [...prev, { agent: "Messenger", message: "All pending invitations have been sent successfully.", timestamp: new Date().toLocaleTimeString() }]);
    } catch (err) {
      console.error("Invite dispatch failed:", err);
      alert("Invitation dispatch failed.");
    }
  };

  const pendingInvites = event?.invitations?.filter((i: any) => !i.invite_sent) || [];
  const activityInvites = event?.days?.flatMap((d: any) => d.activities?.flatMap((a: any) => a.invitations || [])) || [];
  const pendingActivityInvites = activityInvites.filter((i: any) => !i.invite_sent);
  const totalPending = pendingInvites.length + pendingActivityInvites.length;

  return (
    <div className="min-h-screen bg-[#111111] text-[#E0E0E0] font-mono selection:bg-saffron/30">
      {/* Stealth Header */}
      <nav className="h-16 border-b border-white/5 px-8 flex items-center justify-between bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard/customer" className="text-saffron hover:opacity-80 transition-opacity">
            <Sparkles className="w-5 h-5" />
          </Link>
          <div className="h-4 w-px bg-white/10"></div>
          <span className="text-sm font-bold tracking-widest text-white/50 uppercase">Session: {id?.toString().slice(0,8)}...</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${status === "Orchestrating" ? "bg-green-500 animate-pulse" : status === "Confirmed" ? "bg-cyan-400 shadow-[0_0_8px_cyan]" : "bg-gold"}`}></div>
            <span className="text-sm uppercase font-bold tracking-[0.3em] text-white/70">{status}</span>
          </div>
          <button 
            disabled={status === "Orchestrating" || status === "Confirmed" || isOrchestrating}
            onClick={handleTrigger}
            className="flex items-center space-x-3 bg-gradient-to-r from-saffron to-gold text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:grayscale"
          >
            {status === "Confirmed" ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span>{isOrchestrating ? "Initiating..." : status === "Confirmed" ? "Synchronized" : "Trigger Orchestration"}</span>
          </button>
        </div>
      </nav>

      <main className="grid grid-cols-12 h-[calc(100-4rem)]">
        {/* Left Side: Activity Tree */}
        <aside className="col-span-3 border-r border-white/5 bg-black/20 p-8 overflow-y-auto">
          <div className="flex items-center space-x-2 mb-8">
            <TreeDeciduous className="w-4 h-4 text-saffron" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/80">Ceremony Tree</h3>
          </div>

          <div className="space-y-6">
            {!event ? (
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-white/5 rounded w-1/2"></div>
                <div className="h-20 bg-white/5 rounded"></div>
              </div>
            ) : (
              event.days?.map((day: any, dIdx: number) => (
                <div key={day.id || dIdx} className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm font-bold text-white/40 group cursor-pointer">
                    <ChevronRight className="w-3 h-3 group-hover:text-saffron" />
                    <span>DAY {day.sequence_number} — {new Date(day.date).toLocaleDateString()}</span>
                  </div>
                  <div className="ml-4 border-l border-white/5 space-y-4">
                    {day.activities?.map((act: any, aIdx: number) => (
                      <div key={act.id || aIdx} className="pl-4 py-2 hover:bg-white/5 rounded-r transition-colors cursor-pointer group">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-bold group-hover:text-saffron transition-colors">{act.title}</span>
                          <div className={`w-1.5 h-1.5 rounded-full ${act.status === "Pending" ? "bg-white/20" : "bg-green-500"}`}></div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-white/30">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-2.5 h-2.5" />
                              <span>{new Date(act.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Activity className="w-2.5 h-2.5" />
                              <span>{act.status}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <div className="flex items-center space-x-2 mb-6">
              <Users className="w-4 h-4 text- gold" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/80">Pending RSVPs</h3>
            </div>

            <div className="space-y-4">
               {totalPending === 0 ? (
                 <div className="text-sm text-white/20 italic text-center py-4">No pending invitations</div>
               ) : (
                 <>
                   <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                     {[...pendingInvites, ...pendingActivityInvites].map((inv: any, idx: number) => (
                       <div key={inv.id || idx} className="bg-white/5 p-3 rounded border border-white/5">
                         <div className="flex justify-between items-center mb-1">
                           <span className="text-sm font-bold text-white/60">{inv.invitee_name}</span>
                           <span className="text-[8px] text-saffron uppercase font-bold">{inv.activity_id ? 'Activity' : 'Event'}</span>
                         </div>
                         <div className="text-sm text-white/30">{inv.whatsapp_number}</div>
                       </div>
                     ))}
                   </div>
                   <button 
                    onClick={handleSendInvites}
                    className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-bold uppercase tracking-widest text-gold transition-all"
                   >
                     Cast {totalPending} Invitations
                   </button>
                 </>
               )}
            </div>
          </div>
        </aside>

        {/* Right Side: Command Center Terminal */}
        <section className="col-span-9 flex flex-col bg-black/40">
           <div className="h-10 border-b border-white/5 px-6 flex items-center justify-between bg-black/20">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-saffron" />
                <span className="text-sm font-bold uppercase tracking-widest text-white/60">AI Orchestration Logs</span>
              </div>
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
              </div>
           </div>

           <div 
            ref={terminalRef}
            className="flex-grow p-8 overflow-y-auto space-y-3 scrollbar-hide"
           >
             <AnimatePresence initial={false}>
               {logs.length === 0 && (
                 <div className="flex items-center space-x-2 text-white/20 animate-pulse">
                   <span className="text-saffron">$</span>
                   <span className="text-sm">System standby. Waiting for orchestration trigger...</span>
                 </div>
               )}
               {logs.map((log, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: -10 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="text-sm leading-relaxed flex items-start space-x-3"
                 >
                   <span className="text-white/20 tabular-nums">[{log.timestamp}]</span>
                   <span className="text-gold font-bold uppercase min-w-[80px]">[{log.agent}]</span>
                   <span className="text-white/70">{log.message}</span>
                 </motion.div>
               ))}
             </AnimatePresence>
           </div>

           {/* Terminal Input Simulation */}
           <div className="h-14 border-t border-white/5 px-8 flex items-center bg-black/40">
              <span className="text-saffron mr-4">$</span>
              <input 
                type="text" 
                placeholder="Awaiting manual override command..."
                readOnly
                className="bg-transparent border-none outline-none text-sm w-full text-white/40"
              />
           </div>
        </section>
      </main>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
