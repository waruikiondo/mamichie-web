"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  Activity, 
  Microscope, 
  RefreshCcw, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function The3RMethodPage() {
  return (
    <div className="bg-brand-tint text-brand-black font-body selection:bg-brand-gold/30 flex-grow flex flex-col">
      
      {/* 1. PAGE HEADER & BREADCRUMBS */}
      <section className="pt-24 pb-16 px-6 bg-white border-b border-brand-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          
          <nav className="flex items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-brand-black/50 mb-12">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-black">The 3R Method™</span>
          </nav>

          <div className="inline-flex items-center justify-center bg-brand-gold/10 border border-brand-gold/20 text-brand-black px-4 py-1.5 rounded-sm mb-6">
            <span className="text-[10px] font-bold tracking-widest uppercase">
              Internationally Accredited Clinical Framework
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-brand-black uppercase leading-[1.1]">
            The <span className="text-brand-gold">3R Method™</span>
          </h1>
          <p className="font-body text-sm sm:text-base font-bold tracking-widest text-brand-black/50 uppercase mt-6">
            Precision Beats Willpower.™
          </p>
          
        </div>
      </section>

      {/* 2. THE CLINICAL RATIONALE */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-black mb-8">
            Built from clinical practice. <br className="hidden sm:block" />Not wellness theory.
          </h2>
          <div className="prose prose-brand text-brand-black/80 text-sm leading-relaxed text-justify sm:text-center mx-auto space-y-6">
            <p>
              After years of observing the gap between what conventional medicine offers women in perimenopause and what their bodies actually need, Dr Vanessa Stirzaker built a structured clinical framework that addresses midlife physiology at the root.
            </p>
            <p>
              Conventional approaches address the most visible symptoms. We work at the level of root cause, examining how sleep, metabolic function, movement, nervous system regulation and the full hormonal network interact. Each of these is a lever. Precision lies in knowing which lever to use, when and in what order.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE 3 PHASES DEEP DIVE (UPDATED TO LIGHT THEME) */}
      <section className="py-24 px-6 bg-white border-y border-brand-gold/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-brand-black">
              The Three Phases of Recalibration
            </h2>
            <p className="text-[10px] font-bold tracking-widest uppercase text-brand-gold mt-4">
              Reset. Rebalance. Reclaim.
            </p>
          </div>

          {/* Timeline Structure */}
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-gold/50 before:via-brand-gold/20 before:to-transparent">
            
            {/* Phase 1 */}
            <div className="relative flex items-start justify-between md:justify-normal w-full group">
              <div className="hidden md:block w-5/12 pr-12 text-right">
                <Microscope className="w-12 h-12 text-brand-gold ml-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-display text-3xl font-bold uppercase text-brand-black">Reset</h3>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mt-2">Phase 01: Targeted Clinical Audit</p>
              </div>
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-tint border-2 border-brand-gold flex items-center justify-center z-10">
                <span className="text-brand-black font-display font-bold text-lg">1</span>
              </div>
              <div className="w-full pl-16 md:w-5/12 md:pl-12">
                <div className="md:hidden mb-4">
                  <h3 className="font-display text-3xl font-bold uppercase text-brand-black">Reset</h3>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mt-1">Phase 01: Targeted Clinical Audit</p>
                </div>
                <p className="text-sm text-brand-black/80 leading-relaxed font-body text-justify bg-brand-tint/30 p-6 rounded-sm border border-brand-gold/20 shadow-sm">
                  The first phase establishes your hormonal baseline. We assess the full hormonal network including oestrogen, progesterone, testosterone, DHEA, cortisol, insulin, thyroid hormones and melatonin, alongside metabolic function, sleep architecture, inflammatory load and nutrient status. This is not a general health check. It is a targeted clinical audit designed to reveal what is driving your symptoms beneath the surface.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative flex items-start justify-between md:justify-normal w-full group">
              <div className="w-full pl-16 md:w-5/12 md:pr-12 md:pl-0 md:text-right order-2 md:order-1">
                <div className="md:hidden mb-4">
                  <h3 className="font-display text-3xl font-bold uppercase text-brand-black">Rebalance</h3>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mt-1">Phase 02: Precision Protocols</p>
                </div>
                <p className="text-sm text-brand-black/80 leading-relaxed font-body text-justify md:text-right bg-brand-tint/30 p-6 rounded-sm border border-brand-gold/20 shadow-sm">
                  Armed with clinical data, we build your precision protocol. This may include hormonal support, targeted nutrition and movement programming, sleep intervention, nervous system regulation and supplementation. Every element is evidence-based and personalised to your physiology, not a generic midlife template.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-tint border-2 border-brand-gold flex items-center justify-center z-10">
                <span className="text-brand-black font-display font-bold text-lg">2</span>
              </div>
              <div className="hidden md:block w-5/12 pl-12 order-1 md:order-2 text-left">
                <RefreshCcw className="w-12 h-12 text-brand-gold mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-display text-3xl font-bold uppercase text-brand-black">Rebalance</h3>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mt-2">Phase 02: Precision Protocols</p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative flex items-start justify-between md:justify-normal w-full group">
              <div className="hidden md:block w-5/12 pr-12 text-right">
                <Activity className="w-12 h-12 text-brand-gold ml-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-display text-3xl font-bold uppercase text-brand-black">Reclaim</h3>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mt-2">Phase 03: Sustainable Autonomy</p>
              </div>
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-tint border-2 border-brand-gold flex items-center justify-center z-10">
                <span className="text-brand-black font-display font-bold text-lg">3</span>
              </div>
              <div className="w-full pl-16 md:w-5/12 md:pl-12">
                <div className="md:hidden mb-4">
                  <h3 className="font-display text-3xl font-bold uppercase text-brand-black">Reclaim</h3>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mt-1">Phase 03: Sustainable Autonomy</p>
                </div>
                <p className="text-sm text-brand-black/80 leading-relaxed font-body text-justify bg-brand-tint/30 p-6 rounded-sm border border-brand-gold/20 shadow-sm">
                  The final phase is about sustainability. We provide the education, tools and clinical oversight to ensure you maintain your gains, understand your body&apos;s signals and approach the decades ahead from a position of physiological strength. Reclaim is not a finishing line. It is a new standard.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE DATA APPROACH / MICRO-TRUST SECTION */}
      <section className="py-20 px-6 bg-brand-tint">
        <div className="max-w-4xl mx-auto border border-brand-gold/20 p-8 sm:p-12 rounded-sm bg-white text-center shadow-sm">
          <ShieldCheck className="w-10 h-10 text-brand-gold mx-auto mb-6" />
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-black mb-4">
            Precision Informed by Data
          </h3>
          <p className="font-body text-sm text-brand-black/80 leading-relaxed max-w-2xl mx-auto">
            We use objective markers to guide and measure progress: metabolic panels, hormonal profiles, movement benchmarks and, where relevant, tools such as continuous glucose monitoring and body composition assessment. This is not intuition. It is clinical precision, applied with care.
          </p>
        </div>
      </section>

      {/* 5. APPLICATION CTA */}
      <section className="py-24 px-6 bg-white border-t border-brand-gold/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-black mb-6">
            Apply the Method
          </h2>
          <p className="font-body text-sm leading-relaxed text-brand-black/80 mb-10 max-w-xl mx-auto">
            The 3R Method™ is delivered exclusively through Mamichie Healthcare® clinical consultations and the immersive Residency programme.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/consultations" 
              className="flex items-center justify-center space-x-2 bg-brand-gold text-brand-black px-10 py-4 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-brand-black hover:text-brand-tint transition-all shadow-md w-full sm:w-auto"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/residency" 
              className="flex items-center justify-center space-x-2 border border-brand-black text-brand-black px-10 py-4 rounded-sm text-xs font-bold tracking-widest uppercase hover:border-brand-gold hover:text-brand-gold transition-all w-full sm:w-auto"
            >
              <span>Explore The Residency</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}