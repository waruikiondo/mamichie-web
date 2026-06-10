"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Calendar, Globe, ShieldCheck } from "lucide-react";

export default function BookNowPage() {
  
  // WEB MANAGER: When the client creates her Calendly account, simply paste her unique link here.
  // The URL parameters at the end ensure the calendar buttons match the Mamichie Gold (#C9A84C).
  const calendlyUrl = "https://calendly.com/your-booking-link?hide_gdpr_banner=1&primary_color=c9a84c";

  return (
    <div className="bg-brand-tint text-brand-black font-body selection:bg-brand-gold/30 flex-grow flex flex-col">
      
      {/* 1. PAGE HEADER */}
      <section className="pt-24 pb-12 px-6 bg-white border-b border-brand-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          
          <nav className="flex items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-brand-black/50 mb-10">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-black">Secure Your Appointment</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-black uppercase leading-[1.1]">
            Begin Your <span className="text-brand-gold">Assessment</span>
          </h1>
          <p className="font-body text-sm font-bold tracking-widest text-brand-black/50 uppercase mt-4">
            Clinical Consultations with Dr Vanessa Stirzaker
          </p>
          
        </div>
      </section>

      {/* 2. SCHEDULING PORTAL CONTAINER */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Booking Widget Area */}
          <div className="lg:col-span-8 bg-white border border-brand-gold/20 rounded-sm shadow-sm flex flex-col relative overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1 w-full bg-brand-gold absolute top-0 left-0 z-10"></div>
            
            <div className="p-8 border-b border-brand-gold/10 bg-brand-tint/10 flex justify-between items-center z-10 relative">
              <div>
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-black">Select a Time</h2>
                <p className="text-xs text-brand-black/60 font-medium mt-1">All available times are displayed in your local time zone.</p>
              </div>
              <Calendar className="w-6 h-6 text-brand-gold/50 hidden sm:block" />
            </div>

            {/* LIVE CALENDLY EMBED */}
            <div className="w-full h-[700px] bg-white relative">
              <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule Consultation"
                className="absolute inset-0"
              />
            </div>
          </div>

          {/* Right Column: Process & Reassurance Panel */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* What to Expect */}
            <div className="bg-white border border-brand-gold/20 p-8 rounded-sm shadow-sm">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-black mb-6">
                What to Expect
              </h3>
              
              <ul className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-brand-gold/50 before:via-brand-gold/20 before:to-transparent">
                <li className="relative flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center shrink-0 z-10 text-brand-black font-bold text-[10px] shadow-sm">1</div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-brand-black mb-1">Schedule</h4>
                    <p className="text-xs text-brand-black/70 leading-relaxed font-body">Select your preferred time slot and complete the initial payment to secure your booking.</p>
                  </div>
                </li>
                <li className="relative flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center shrink-0 z-10 text-brand-black font-bold text-[10px] shadow-sm">2</div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-brand-black mb-1">Clinical Intake</h4>
                    <p className="text-xs text-brand-black/70 leading-relaxed font-body">You will receive an immediate link to complete your comprehensive baseline medical questionnaire.</p>
                  </div>
                </li>
                <li className="relative flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center shrink-0 z-10 text-brand-black font-bold text-[10px] shadow-sm">3</div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-brand-black mb-1">Consultation</h4>
                    <p className="text-xs text-brand-black/70 leading-relaxed font-body">Meet securely with Dr Stirzaker to map out your midlife hormonal recalibration strategy.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Micro-Trust Signals */}
            <div className="border border-brand-gold/20 bg-white p-6 rounded-sm space-y-4 shadow-sm">
              <div className="flex items-start space-x-3">
                <Globe className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-[11px] text-brand-black/70 leading-relaxed">
                  <strong className="text-brand-black block uppercase tracking-wider mb-0.5">Global Virtual Practice</strong>
                  Consultations are available to women internationally. Please ensure you select your correct time zone when booking.
                </p>
              </div>
              <div className="flex items-start space-x-3 border-t border-brand-gold/10 pt-4">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-[11px] text-brand-black/70 leading-relaxed">
                  <strong className="text-brand-black block uppercase tracking-wider mb-0.5">Secure Data Handling</strong>
                  All medical data and intake forms are processed through fully encrypted, HIPAA and GDPR compliant clinical systems.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}