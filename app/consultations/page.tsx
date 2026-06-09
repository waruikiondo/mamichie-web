"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Video, FileText, Activity, ChevronRight, CheckCircle } from "lucide-react";

export default function ConsultationsPage() {
  return (
    <div className="bg-brand-tint text-brand-black font-body selection:bg-brand-gold/30 flex-grow flex flex-col">
      
      {/* 1. PAGE HEADER & BREADCRUMBS */}
      <section className="pt-24 pb-16 px-6 bg-white border-b border-brand-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          
          <nav className="flex items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-brand-black/50 mb-12">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-black">Work With Me</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-black">Virtual Consultations</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black uppercase leading-[1.1]">
            Expert Clinical <span className="text-brand-gold">Consultations</span>
          </h1>
          <p className="font-body text-sm sm:text-base font-bold tracking-widest text-brand-gold uppercase mt-6">
            Precision medicine delivered directly to you.
          </p>
          
        </div>
      </section>

      {/* 2. THE CLINICAL APPROACH */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-2xl text-brand-black leading-relaxed">
            Your postcode should not determine the quality of your midlife care. Mamichie Healthcare® operates as a fully virtual practice, serving women across the UK, Europe and internationally.
          </p>
          <hr className="w-16 h-[1px] bg-brand-gold border-none mx-auto my-10" />
          <div className="prose prose-brand text-brand-black/80 text-sm leading-relaxed text-justify sm:text-center mx-auto">
            <p>
              A consultation with Dr Vanessa Stirzaker is a root-cause investigation. We do not offer standard 10-minute appointments to simply prescribe and dismiss. Every session is designed to unpack your complex hormonal architecture including oestrogen, progesterone, testosterone, DHEA, cortisol, insulin, thyroid hormones and melatonin.
            </p>
            <p>
              We utilise objective markers to guide and measure progress. This is the application of the 3R Method™ in a one-to-one clinical environment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE CONSULTATION PATHWAY */}
      <section className="py-24 px-6 bg-white border-y border-brand-gold/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-black">
              The Clinical Pathway
            </h2>
            <p className="text-[10px] font-bold tracking-widest uppercase text-brand-gold mt-2">
              How we investigate and rebuild your baseline
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="border border-brand-gold/20 p-8 rounded-sm bg-brand-tint/30 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-black/10"></div>
              <FileText className="w-8 h-8 text-brand-gold mb-6" />
              <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-2">01. The Audit</h3>
              <p className="text-sm text-brand-black/70 leading-relaxed font-medium">
                Prior to your virtual appointment you will complete a comprehensive clinical intake. This captures your medical history, current symptom load and lifestyle baseline so no time is wasted during your actual consultation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border border-brand-gold/20 p-8 rounded-sm bg-brand-tint/30 relative shadow-sm scale-100 lg:scale-105 z-10 bg-white">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
              <Video className="w-8 h-8 text-brand-gold mb-6" />
              <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-2">02. The Consultation</h3>
              <p className="text-sm text-brand-black/70 leading-relaxed font-medium">
                A secure video consultation with Dr Stirzaker. We map out your hormonal ecosystem and determine the necessary objective markers to pull via targeted blood panels or metabolic testing.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border border-brand-gold/20 p-8 rounded-sm bg-brand-tint/30 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-black/10"></div>
              <Activity className="w-8 h-8 text-brand-gold mb-6" />
              <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-2">03. The Protocol</h3>
              <p className="text-sm text-brand-black/70 leading-relaxed font-medium">
                You receive a bespoke Reset protocol. This precise intervention plan covers required hormonal support, targeted nutrition, movement adjustments and supplementation based directly on your clinical data.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. INVESTMENT & SCHEDULING CTA */}
      <section className="py-24 px-6 bg-brand-black text-brand-tint relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-tint mb-8">
            Secure Your Appointment
          </h2>
          
          <div className="bg-white/5 border border-brand-gold/30 p-8 sm:p-12 rounded-sm max-w-2xl mx-auto backdrop-blur-sm">
            <ul className="space-y-4 text-sm text-brand-tint/80 font-medium text-left max-w-md mx-auto mb-10">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-gold shrink-0" />
                <span>60-minute secure virtual consultation</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-gold shrink-0" />
                <span>Deep-dive review of existing medical records</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-gold shrink-0" />
                <span>Bespoke 3R Method™ intervention protocol</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-gold shrink-0" />
                <span>Direct clinical follow-up communication</span>
              </li>
            </ul>

            <Link 
              href="/book-now" 
              className="inline-flex items-center justify-center space-x-2 bg-brand-gold text-brand-black px-10 py-4 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-brand-tint transition-all shadow-md w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Consultation</span>
            </Link>
            
            <p className="text-[10px] text-brand-tint/40 font-body tracking-wide mt-6">
              Consultation availability is limited to ensure clinical excellence. All bookings are subject to our standard clinical terms.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}