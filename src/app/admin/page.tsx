"use client";

import { useEffect, useState } from "react";
import { SignOutButton } from "@/components/SignOutButton";
import { Shield, Activity, Database, Server, Cpu, CheckCircle } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const { data: session } = useSession();
  const [health, setHealth] = useState<{ status: string; uptime?: string } | null>(null);

  useEffect(() => {
    // Brain-Body Bridge: Fetching from Python Brain (Port 8090)
    fetch("http://localhost:8090/health")
      .then(res => res.json())
      .then(data => setHealth(data))
      .catch(() => setHealth({ status: "unavailable" }));
  }, []);

  return (
    <div className="min-h-screen bg-parchment p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center text-white shadow-lg shadow-forest/20">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold text-[#1A1C1A]">Global System Pulse</h1>
            <p className="text-xs uppercase tracking-widest font-bold text-[#887364]">Systems Override Dashboard</p>
          </div>
        </div>
        <SignOutButton />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Stats */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-3xl border border-white/50">
              <Activity className="w-5 h-5 text-saffron mb-4" />
              <div className="text-2xl font-bold">128</div>
              <div className="text-[10px] uppercase font-bold text-[#887364]">Active Events</div>
            </div>
            <div className="glass-card p-6 rounded-3xl border border-white/50">
              <Database className="w-5 h-5 text-gold mb-4" />
              <div className="text-2xl font-bold">1.2GB</div>
              <div className="text-[10px] uppercase font-bold text-[#887364]">System Context Size</div>
            </div>
            <div className="glass-card p-6 rounded-3xl border border-white/50">
              <Server className="w-5 h-5 text-forest mb-4" />
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-[10px] uppercase font-bold text-[#887364]">System Uptime</div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-[2rem] border border-white/50 h-[400px] flex items-center justify-center text-center">
            <div>
              <Activity className="w-12 h-12 text-[#DBC2B0]/30 mx-auto mb-4" />
              <p className="text-sm font-semibold text-[#887364]">Systems Monitoring Flow... (ID: 19f0bc1ae7a44223962ba7c1c367285d)</p>
            </div>
          </div>
        </div>

        {/* Sidebar: Brain-Body Bridge */}
        <div className="space-y-8">
          <div className="glass-card p-8 rounded-[2rem] border border-white/50">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-serif text-lg font-bold">Brain-Body Bridge</h3>
              <div className="flex items-center space-x-1">
                <div className={`w-2 h-2 rounded-full ${health?.status === "ok" ? "bg-green-500 animate-pulse" : "bg-red-500"}`}></div>
                <span className="text-[10px] font-bold uppercase">{health?.status === "ok" ? "Active" : "Offline"}</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-surface-low rounded-2xl">
                <div className="flex items-center space-x-3">
                  <Cpu className="w-4 h-4 text-[#887364]" />
                  <span className="text-sm font-bold">Python Logic Brain</span>
                </div>
                <CheckCircle className={`w-4 h-4 ${health?.status === "ok" ? "text-green-500" : "text-[#DBC2B0]"}`} />
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-low rounded-2xl">
                <div className="flex items-center space-x-3">
                  <Database className="w-4 h-4 text-[#887364]" />
                  <span className="text-sm font-bold">PostgreSQL Matrix</span>
                </div>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#DBC2B0]/20">
              <p className="text-[10px] font-bold text-[#887364] mb-4 uppercase tracking-widest text-center italic">
                {`"Precision is the foundation of every successful orchestration."`}
              </p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-[2rem] border border-white/50">
             <h3 className="font-serif text-lg font-bold mb-4">Authenticated Admin</h3>
             <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center text-saffron shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <p className="font-bold text-sm truncate">{session?.user?.name || "System Master"}</p>
                  <p className="text-xs text-[#887364] truncate">{session?.user?.email}</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
