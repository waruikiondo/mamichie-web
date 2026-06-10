"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, CreditCard, Calendar, Mail, ShieldCheck, ShoppingCart } from "lucide-react";

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
      
      {/* Structural Header Padding */}
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
              <div className="prose prose-brand text-brand-black/80 text-sm leading-relaxed space-y-6 text-left">
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
              <div className="flex flex-col space-y-4 pt-4">
                
                {/* Primary Purchase Options Row */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handlePurchase}
                    disabled={isProcessing}
                    className="flex-1 flex items-center justify-center space-x-2 bg-brand-gold text-brand-black px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-brand-black hover:text-brand-tint transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <CreditCard className="w-4 h-4 shrink-0" />
                    <span>{isProcessing ? "Connecting..." : "Buy Direct • £14.99"}</span>
                  </button>

                  <a 
                    href="https://www.amazon.co.uk/dp/B0FRSY1H4P?ref=cm_sw_r_ffobk_cp_ud_dp_8P31P5TCN28A2GZ8RKQF&ref_=cm_sw_r_ffobk_cp_ud_dp_8P31P5TCN28A2GZ8RKQF&social_share=cm_sw_r_ffobk_cp_ud_dp_8P31P5TCN28A2GZ8RKQF&bestFormat=true" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-brand-black text-brand-tint px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-black transition-all shadow-md"
                  >
                    <ShoppingCart className="w-4 h-4 shrink-0" />
                    <span>Buy on Amazon</span>
                  </a>
                </div>
                
                {/* Secondary CTA strictly critical for warm leads */}
                <Link 
                  href="/consultations" 
                  className="flex items-center justify-center space-x-2 border border-brand-black/20 text-brand-black px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase hover:border-brand-gold hover:text-brand-gold transition-all w-full"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Book a Consultation</span>
                </Link>

              </div>
              
              {/* Trust Micro-copy for direct purchasing */}
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-brand-black/40 font-bold mt-2">
                <ShieldCheck className="w-3 h-3 text-brand-gold" />
                <span>Secure payment processing via Stripe</span>
              </div>
            </div>

            {/* Right Column: Visual Book Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md shadow-2xl group cursor-default">
                <img 
                  src="/book.avif" 
                  alt="The 3R Method Book Cover" 
                  className="w-full h-auto object-cover rounded-sm border border-brand-gold/10 group-hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Reader Email Capture Section (UPDATED TO LIGHT THEME) */}
      <section className="bg-white py-24 border-t border-brand-gold/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          
          <Mail className="w-8 h-8 text-brand-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-black">
            Already read the book?
          </h2>
          
          <p className="font-body text-brand-black/80 text-sm leading-relaxed mt-4 mb-10 max-w-xl mx-auto">
            Take the next step with the free 3R Method™ Starter Guide: a clinical companion to the book, written by Dr Stirzaker and delivered directly to your inbox.
          </p>

          {isSubmitted ? (
            <div className="bg-brand-tint border border-brand-gold/20 p-6 rounded-sm max-w-md mx-auto">
              <p className="font-display text-xl text-brand-gold font-bold">Guide Requested</p>
              <p className="font-body text-xs text-brand-black/70 mt-1">
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
                className="w-full bg-brand-tint border border-brand-gold/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-gold text-brand-black placeholder:text-brand-black/40 text-center"
              />
              <button 
                type="submit"
                className="w-full bg-brand-gold text-brand-black font-bold uppercase tracking-widest text-xs py-4 rounded-sm hover:bg-brand-black hover:text-white transition-all cursor-pointer shadow-md"
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