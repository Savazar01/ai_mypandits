"use client";

import Header from "@/components/Header";
import { RegistrationForm } from "@/components/RegistrationForm";
import Link from "next/link";

export default function CustomerRegistrationPage() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <Header />

      {/* Main Content Canvas */}
      <main className="w-full max-w-xl px-6 py-24 relative z-10">
        <RegistrationForm role="CUSTOMER" />

        {/* Decorative Footer Anchor */}
        <div className="mt-12 flex flex-col items-center justify-center opacity-40">
          <Link href="/" className="flex items-center justify-center gap-2 mb-4 hover:opacity-80 transition-opacity">
            <img 
              src="https://savazar.com/wp-content/uploads/2023/10/cropped-Transparent_Image_2-300x100.png" 
              alt="EventicAI Logo" 
              className="h-8 w-auto object-contain opacity-40"
            />
            <span className="font-headline font-bold text-primary/40 tracking-widest text-xl">EventicAI</span>
          </Link>
          <div className="flex items-center">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="material-symbols-outlined mx-4 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>
        </div>
      </main>

      {/* Bottom Ornament */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
    </div>
  );
}
