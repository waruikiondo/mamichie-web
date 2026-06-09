"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, ChevronRight, Mail, CheckCircle } from "lucide-react";

export default function CoursesPage() {
  const [emailInput, setEmailInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      // Future integration: Hook this up to your email marketing platform (Mailchimp/Klaviyo)
      setIsSubmitted(true);
      setEmailInput("");
    }
  };

  return (
    <div className="bg-brand-tint text-brand-black font-body selection:bg-brand-gold/30 flex-grow flex flex-col">
      
      {/* 1. PAGE HEADER & BREADCRUMBS */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          
          <nav className="flex items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-brand-black/50 mb-12">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/resources/library" className="hover:text-brand-gold transition-colors">Work With Me</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-black">Courses</span>
          </nav>

          {/* Coming Soon Badge (Section 9.2 Structural Note) */}
          <div className="inline-flex items-center space-x-2 bg-brand-black text-brand-tint px-4 py-1.5 rounded-full mb-8">
            <GraduationCap className="w-4 h-4 text-brand-gold" />
            <span className="text-[10px] font-bold tracking-widest uppercase font-body">
              In Development • Coming Soon
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black uppercase leading-[1.1]">
            Learn the <span className="text-brand-gold">3R Method™</span>
          </h1>
          
          <hr className="w-12 h-[2px] bg-brand-gold border-none mx-auto mt-8 mb-8" />

        </div>
      </section>

      {/* 2. COURSE INTRO & WAITLIST CAPTURE (Section 9.2) */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          
          <div className="prose prose-brand text-brand-black/80 text-sm sm:text-base leading-relaxed space-y-6 text-justify sm:text-center mb-12">
            <p>
              The 3R Method™ is not just a clinical framework. It is a teachable system, and Dr Vanessa Stirzaker is bringing it directly to midlife women and healthcare professionals worldwide.
            </p>
            <p>
              Whether you are navigating your own hormonal transition or seeking to deepen your clinical practice, the Mamichie Healthcare® course programme applies the precision health principles of the 3R Method™ in a structured, accessible and internationally accredited format.
            </p>
            <p className="font-bold text-brand-black italic">
              Courses are currently in development. Join the waitlist below to be first to know when enrolment opens.
            </p>
          </div>

          {/* Waitlist CTA Form Block */}
          <div className="bg-white border border-brand-gold/20 p-8 sm:p-12 rounded-sm shadow-xs relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-6 animate-in fade-in duration-500">
                <CheckCircle className="w-12 h-12 text-brand-gold mb-4" />
                <p className="font-display text-2xl font-bold text-brand-black mb-2">Waitlist Confirmed</p>
                <p className="font-body text-sm text-brand-black/70 font-medium bg-brand-gold/10 px-4 py-2 rounded-sm border border-brand-gold/20 inline-block">
                  You are on the list. We will be in touch before enrolment opens.
                </p>
              </div>
            ) : (
              <div className="animate-in fade-in duration-500">
                <Mail className="w-8 h-8 text-brand-gold/50 mx-auto mb-6" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-black mb-6">
                  Priority Access Waitlist
                </h3>
                
                <form onSubmit={handleSubscribe} className="space-y-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full bg-brand-tint/30 border border-brand-gold/30 rounded-sm px-4 py-3.5 text-sm focus:outline-none focus:border-brand-gold focus:bg-white text-brand-black placeholder:text-brand-black/40 text-center transition-colors"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-brand-gold text-brand-tint font-bold uppercase tracking-widest text-xs py-4 rounded-sm hover:bg-brand-black hover:text-brand-gold transition-all cursor-pointer shadow-md"
                  >
                    Join the Waitlist
                  </button>
                </form>
                <p className="text-[10px] text-brand-black/40 font-body tracking-wide mt-6">
                  Your information is held in accordance with our Privacy Policy.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}