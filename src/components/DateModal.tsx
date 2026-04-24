"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Calendar as CalendarIcon } from "lucide-react";

interface DateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (date: string) => void;
  initialDate?: string;
}

export default function DateModal({ isOpen, onClose, onSelect, initialDate }: DateModalProps) {
  const parseLocalDate = (dateStr: string) => {
    if (!dateStr) return new Date();
    // Split YYYY-MM-DD and create local date to avoid UTC shift
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  const [currentDate, setCurrentDate] = useState(initialDate ? parseLocalDate(initialDate) : new Date());
  
  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const days = [];
    for (let i = 0; i < firstDayOfMonth(year, month); i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10" />);
    }
    for (let i = 1; i <= daysInMonth(year, month); i++) {
      const d = new Date(year, month, i);
      // Local-safe date string formatting to avoid UTC shift issues
      const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
      const isSelected = initialDate === dateStr;
      const isToday = today.getTime() === d.getTime();
      const isPast = d < today;

      days.push(
        <button
          key={i}
          disabled={isPast}
          onClick={() => {
            onSelect(dateStr);
            onClose();
          }}
          className={`h-11 w-11 rounded-full text-sm font-bold transition-all flex items-center justify-center
            ${isSelected ? "bg-[#8f4e00] text-white shadow-lg shadow-[#8f4e00]/20" : 
              isToday ? "border-2 border-[#8f4e00] text-[#8f4e00]" : 
              isPast ? "text-stone-300 cursor-not-allowed" : "text-[#887364] hover:bg-[#faf9f6] active:bg-[#f28c28]/10"}`}
        >
          {i}
        </button>
      );
  }

  const changeMonth = (offset: number) => {
    setCurrentDate(new Date(year, month + offset, 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-xl font-bold flex items-center space-x-3 text-[#1A1C1A]">
                <CalendarIcon className="w-5 h-5 text-saffron" />
                <span>Select Event Date</span>
              </h3>
              <button onClick={onClose} className="p-2 hover:bg-[#faf9f6] rounded-full transition-colors text-[#887364]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-between mb-6">
              <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-[#faf9f6] rounded-full transition-colors">
                <ChevronLeft className="w-4 h-4 text-[#887364]" />
              </button>
              <span className="font-bold text-sm tracking-widest uppercase text-[#887364]">{monthNames[month]} {year}</span>
              <button onClick={() => changeMonth(1)} className="p-2 hover:bg-[#faf9f6] rounded-full transition-colors">
                <ChevronRight className="w-4 h-4 text-[#887364]" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div key={`${d}-${i}`} className="h-10 w-10 flex items-center justify-center text-sm font-bold text-[#DBC2B0] uppercase">{d}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1 h-auto min-h-[260px]">
              {days}
            </div>

            <div className="mt-8 pt-6 border-t border-[#faf9f6] text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-[#DBC2B0]">Select a date to continue</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
