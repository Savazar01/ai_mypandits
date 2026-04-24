"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm shadow-orange-900/5">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-screen-2xl mx-auto">
        <Link 
          href="/" 
          className="flex items-center gap-2 md:gap-3 shrink-0 hover:opacity-80 transition-opacity"
        >
          <img 
            src="https://savazar.com/wp-content/uploads/2023/10/cropped-Transparent_Image_2-300x100.png" 
            alt="EventicAI Logo" 
            className="h-8 md:h-10 w-auto object-contain"
          />
          <span className="text-xl md:text-2xl font-headline font-bold text-orange-800 tracking-tight hidden sm:inline">EventicAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 shrink-0">
          <Link 
            href="/login" 
            className="text-orange-900 hover:bg-orange-50 transition-all duration-300 font-bold px-6 py-2.5 rounded-full border border-orange-100/50"
          >
            Sign In
          </Link>
          <Link 
            href="/register" 
            className="saffron-gold-gradient text-white px-8 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 duration-200 ease-in-out"
          >
            Register
          </Link>
        </div>

        {/* Mobile Actions & Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <Link 
            href="/login" 
            className="text-orange-900 font-bold text-xs px-4 py-2 rounded-full bg-orange-100/50 active:scale-95 transition-all flex items-center gap-1.5 border border-orange-200"
          >
            <span className="material-symbols-outlined text-base">login</span>
            Sign In
          </Link>
          <button 
            className="p-2 text-stone-600 hover:text-primary transition-colors flex items-center justify-center active:scale-90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-xl py-6 px-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <Link 
            href="/login" 
            className="text-stone-600 hover:text-primary font-semibold py-2 transition-colors border-b border-stone-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign In
          </Link>
          <Link 
            href="/register" 
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-center hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            onClick={() => setIsMenuOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
