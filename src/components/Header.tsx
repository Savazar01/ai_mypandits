"use client";

import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm shadow-orange-900/5">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <Link 
          href="/" 
          className="text-3xl font-headline font-bold text-orange-800 tracking-tight hover:opacity-80 transition-opacity flex items-center gap-3"
        >
          {/* Logo Icon - Replaceable later */}
          <span className="material-symbols-outlined text-primary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_florist</span>
          <span>MyPandits</span>
        </Link>
        <div className="flex items-center space-x-6 shrink-0">
          <Link 
            href="/login" 
            className="text-stone-600 hover:text-orange-700 transition-all duration-300 font-semibold px-4 py-2"
          >
            Sign In
          </Link>
          <Link 
            href="/register" 
            className="bg-primary text-white px-8 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-all active:scale-95 duration-200 ease-in-out shadow-lg shadow-primary/20"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
