"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, X, Check, Timer } from "lucide-react";

interface TimeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (time: string, durationMin: number) => void;
  initialTime?: string;
  initialDuration?: number;
}

export default function TimeModal({ isOpen, onClose, onSelect, initialTime, initialDuration = 60 }: TimeModalProps) {
  const [hour, setHour] = useState(initialTime ? initialTime.split(':')[0] : "09");
  const [minute, setMinute] = useState(initialTime ? (initialTime.split(':')[1]?.split(' ')[0] || "00") : "00");
  const [period, setPeriod] = useState(initialTime?.includes("PM") ? "PM" : "AM");
  const [duration, setDuration] = useState(initialDuration);

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const minutes = ["00", "15", "30", "45"];
  const commonDurations = [
    { label: "30m", value: 30 },
    { label: "1h", value: 60 },
    { label: "1.5h", value: 90 },
    { label: "2h", value: 120 },
    { label: "3h", value: 180 },
  ];

  const handleConfirm = () => {
    onSelect(`${hour}:${minute} ${period}`, duration);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[2rem] shadow-2xl p-8 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl font-bold flex items-center space-x-3 text-[#1A1C1A]">
                <Clock className="w-6 h-6 text-[#8f4e00]" />
                <span>Select Activity Time</span>
              </h3>
              <button onClick={onClose} className="p-2 hover:bg-[#faf9f6] rounded-full transition-colors">
                <X className="w-5 h-5 text-[#DBC2B0]" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-[#DBC2B0] mb-4 block text-center">Hour</label>
                  <div className="grid grid-cols-4 gap-2">
                    {hours.map(h => (
                      <button
                        key={h}
                        onClick={() => setHour(h)}
                        className={`py-3 rounded-xl text-sm font-bold transition-all
                          ${hour === h ? "bg-[#8f4e00] text-white shadow-lg shadow-[#8f4e00]/20" : "bg-[#faf9f6] text-[#887364] hover:bg-[#f0ede9]"}`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-[#DBC2B0] mb-4 block text-center">Minutes</label>
                  <div className="grid grid-cols-2 gap-2">
                    {minutes.map(m => (
                      <button
                        key={m}
                        onClick={() => setMinute(m)}
                        className={`py-3 rounded-xl text-sm font-bold transition-all
                          ${minute === m ? "bg-[#8f4e00] text-white shadow-lg shadow-[#8f4e00]/20" : "bg-[#faf9f6] text-[#887364] hover:bg-[#f0ede9]"}`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                  
                  <div className="pt-4 grid grid-cols-2 gap-2">
                    {["AM", "PM"].map(p => (
                      <button
                        key={p}
                        onClick={() => setPeriod(p)}
                        className={`py-2 rounded-lg text-sm font-bold transition-all
                          ${period === p ? "bg-[#8f4e00] text-white shadow-md" : "bg-[#faf9f6] text-[#887364]"}`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 md:border-l md:border-[#faf9f6] md:pl-8 mt-8 md:mt-0">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-[#DBC2B0] text-center block">Duration</label>
                <div className="space-y-2">
                  {commonDurations.map(d => (
                    <button
                      key={d.value}
                      onClick={() => setDuration(d.value)}
                      className={`w-full py-3 rounded-xl text-sm font-bold transition-all
                        ${duration === d.value ? "bg-[#8f4e00] text-white shadow-lg shadow-[#8f4e00]/20" : "text-[#887364] hover:bg-[#faf9f6]"}`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
                <div className="pt-4">
                  <div className="relative group">
                    <Timer className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#DBC2B0] group-focus-within:text-saffron transition-colors" />
                    <input 
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(parseInt(e.target.value) || 0)}
                      className="w-full pl-10 pr-4 py-2 bg-[#faf9f6] border border-[#f0ede9] rounded-xl text-sm font-bold text-[#887364] focus:outline-none focus:ring-2 focus:ring-saffron/20 focus:border-saffron transition-all"
                      placeholder="Minutes"
                    />
                  </div>
                  <p className="text-[10px] text-[#DBC2B0] mt-2 font-medium uppercase tracking-wider text-center">Custom Minutes</p>
                </div>
              </div>
            </div>

            <button 
              onClick={handleConfirm}
              className="w-full py-4 bg-gradient-to-r from-[#8f4e00] via-saffron to-[#ff9933] text-white rounded-2xl font-bold uppercase text-sm tracking-[0.2em] shadow-xl shadow-saffron/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-3"
            >
              <Check className="w-5 h-5" />
              <span>Confirm Activity Time</span>
            </button>
          </motion.div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #faf9f6;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #DBC2B0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #887364;
        }
      `}</style>
    </AnimatePresence>
  );
}
