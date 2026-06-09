"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, CheckCircle } from "lucide-react";

export default function StarterGuidePage() {
  const [emailInput, setEmailInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      // Future integration: Hook this up to your email marketing provider
      setIsSubmitted(true);
      setEmailInput("");
    }
  };

  return (
    <div className="min-h-screen bg-brand-tint text-brand-black font-body selection:bg-brand-gold/30 flex flex-col md:flex-row relative">
      
      {/* Absolute Close Button (Top Right of the screen or left panel depending on layout) */}
      <Link 
        href="/" 
        className="absolute top-6 right-6 md:left-6 md:right-auto z-50 p-2 bg-white/50 backdrop-blur-md rounded-full text-brand-black/60 hover:text-brand-black hover:bg-white transition-all"
        aria-label="Close and return to homepage"
      >
        <X className="w-6 h-6" />
      </Link>

      {/* Left Column: Form Area */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 sm:p-16 lg:p-24 bg-brand-tint relative order-2 md:order-1 min-h-[60vh] md:min-h-screen">
        <div className="max-w-md w-full">
          
          {isSubmitted ? (
            <div className="animate-in fade-in duration-500 text-center md:text-left">
              <CheckCircle className="w-12 h-12 text-brand-gold mb-6 mx-auto md:mx-0" />
              <h1 className="font-display text-4xl font-bold text-brand-black mb-4 leading-tight">
                Registration Confirmed
              </h1>
              <p className="font-body text-brand-black/80 leading-relaxed mb-8">
                Your free introductory guide is routing to your inbox. You are now on the list for the Hormonal Intelligence Weekly.
              </p>
              <Link 
                href="/"
                className="inline-flex justify-center bg-brand-black text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-sm hover:bg-brand-gold hover:text-brand-black transition-all shadow-md w-full sm:w-auto"
              >
                Return to Homepage
              </Link>
            </div>
          ) : (
            <div className="animate-in fade-in duration-500">
              <h1 className="font-display text-4xl sm:text-5xl font-medium text-brand-black leading-[1.1] mb-6">
                Get Your Free Introductory Guide to Precision Midlife Health
              </h1>
              
              <p className="font-body text-brand-black/80 leading-relaxed mb-8">
                Plus the <span className="italic text-brand-gold font-medium">Hormonal Intelligence Weekly</span>: a free letter published each week covering one evidence-based insight from inside the 3R Method™.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="Email address" 
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full bg-white border border-brand-black/20 rounded-sm px-5 py-4 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold text-brand-black placeholder:text-brand-black/40 shadow-sm transition-all"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#0A3B32] text-white font-bold uppercase tracking-widest text-xs py-4 rounded-sm hover:bg-brand-gold hover:text-brand-black transition-all cursor-pointer shadow-md"
                >
                  Get Free Guide
                </button>
              </form>

              <div className="mt-6 text-center">
                <Link 
                  href="/" 
                  className="text-sm font-medium text-[#0A3B32]/80 hover:text-brand-gold transition-colors inline-block"
                >
                  Maybe later
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Right Column: Visual Portrait */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-screen relative order-1 md:order-2 bg-brand-black">
        <img 
          src="/van.avif" 
          alt="Dr Vanessa Stirzaker" 
          className="absolute inset-0 w-full h-full object-cover object-[45%_center]"
        />
        {/* Optional subtle gradient overlay to ensure it blends nicely at the edge */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-brand-tint to-transparent"></div>
      </div>

    </div>
  );
}