"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, ChevronRight, CreditCard, Calendar, Mail, ShieldCheck } from "lucide-react";

export default function TheBookPage() {
  const [emailInput, setEmailInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      // Future integration: Hook this up to the Supabase subscribers table or Mailchimp
      setIsSubmitted(true);
      setEmailInput("");
    }
  };

  const handlePurchase = () => {
    setIsProcessing(true);
    // This instantly redirects the user to your Stripe Test checkout
    window.location.href = "https://buy.stripe.com/test_fZu4gB9cA78P4Ph4KT2oE00";
  };

  return (
    <div className="min-h-screen bg-brand-tint text-brand-black font-body selection:bg-brand-gold/30">
      
      {/* Structural Header Padding (Assuming Navigation is handled globally) */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-brand-black/50 mb-12">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/resources/library" className="hover:text-brand-gold transition-colors">Resources</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-black">The Book</span>
          </nav>

          {/* Main Book Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="space-y-8">
              <div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black uppercase leading-[1.1]">
                  The 3R Method™: The Book
                </h1>
                <p className="font-body text-sm sm:text-base font-bold tracking-widest text-brand-gold uppercase mt-4">
                  The definitive clinical guide to precision health for midlife women.
                </p>
              </div>

              <hr className="w-16 h-[1px] bg-brand-gold border-none" />

              {/* Body Copy */}
              <div className="prose prose-brand text-brand-black/80 text-sm leading-relaxed space-y-6 text-justify">
                <p>
                  The 3R Method™ began as a clinical framework built inside Dr Vanessa Stirzaker&apos;s practice. This book brings that framework to women worldwide.
                </p>
                <p>
                  Written for the woman who has been told her results are normal but knows something is not right. For the woman who has tried the protocols, the supplements and the lifestyle changes and is still searching for answers. For the woman who wants to understand her own physiology, not simply manage her symptoms.
                </p>
                <p>
                  Rooted in the same precision medicine principles that underpin every Mamichie Healthcare® consultation, the book takes you through the three phases of the 3R Method™: Reset, Rebalance and Reclaim. Each phase is grounded in clinical evidence, written in plain language and designed to be immediately actionable.
                </p>
                <p className="font-bold text-brand-black italic">
                  This is not a wellness book. It is a clinical education for every midlife woman who deserves more than symptom management.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={handlePurchase}
                  disabled={isProcessing}
                  className="flex items-center justify-center space-x-2 bg-brand-gold text-brand-tint px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-brand-black transition-all shadow-md w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>{isProcessing ? "Connecting securely..." : "Purchase Directly • £14.99"}</span>
                </button>
                
                {/* Secondary CTA is strictly critical for warm leads */}
                <Link 
                  href="/consultations" 
                  className="flex items-center justify-center space-x-2 border border-brand-black text-brand-black px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-brand-black hover:text-brand-tint transition-all w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Consultation</span>
                </Link>
              </div>
              
              {/* Trust Micro-copy for direct purchasing */}
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-brand-black/40 font-bold mt-2">
                <ShieldCheck className="w-3 h-3 text-brand-gold" />
                <span>Secure payment processing via Stripe</span>
              </div>
            </div>

            {/* Right Column: Visual Book Placeholder / 3D Render */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="aspect-[3/4] w-full max-w-md bg-brand-black rounded-sm shadow-2xl flex flex-col items-center justify-center border border-brand-gold/30 p-8 text-center relative overflow-hidden group">
                {/* Abstract Book Cover Design styling */}
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-gold"></div>
                <div className="absolute top-0 left-4 w-1 h-full bg-brand-tint/10 shadow-xl"></div>
                
                <BookOpen className="w-16 h-16 text-brand-gold mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h2 className="font-display text-4xl text-brand-tint uppercase tracking-tight leading-none mb-2">
                  The 3R Method™
                </h2>
                <p className="text-[10px] text-brand-gold uppercase tracking-[0.2em] font-bold">
                  Reset. Rebalance. Reclaim.
                </p>
                <div className="mt-auto pt-12">
                  <p className="text-xs text-brand-tint uppercase tracking-widest">
                    Dr Vanessa Stirzaker
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Reader Email Capture Section */}
      <section className="bg-brand-black text-brand-tint py-20 border-t border-brand-gold/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          
          <Mail className="w-8 h-8 text-brand-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-tint">
            Already read the book?
          </h2>
          
          <p className="font-body text-brand-tint/80 text-sm leading-relaxed mt-4 mb-10 max-w-xl mx-auto">
            Take the next step with the free 3R Method™ Starter Guide: a clinical companion to the book, written by Dr Stirzaker and delivered directly to your inbox.
          </p>

          {isSubmitted ? (
            <div className="bg-brand-gold/10 border border-brand-gold/30 p-6 rounded-sm max-w-md mx-auto">
              <p className="font-display text-xl text-brand-gold font-bold">Guide Requested</p>
              <p className="font-body text-xs text-brand-tint/70 mt-1">
                Your clinical companion is routing to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto space-y-4">
              <input 
                type="email" 
                placeholder="Email address" 
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full bg-white/5 border border-brand-tint/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-gold text-brand-tint placeholder:text-brand-tint/40 text-center"
              />
              <button 
                type="submit"
                className="w-full bg-brand-gold text-brand-black font-bold uppercase tracking-widest text-xs py-4 rounded-sm hover:bg-brand-tint hover:text-brand-black transition-all cursor-pointer shadow-md"
              >
                Send Me the Starter Guide
              </button>
            </form>
          )}

        </div>
      </section>

    </div>
  );
}