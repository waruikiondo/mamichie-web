"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  ArrowDown, 
  Activity, 
  ShieldCheck, 
  Zap, 
  CheckCircle,
  Calendar
} from "lucide-react";

export default function ResidencyPage() {
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
            <span className="text-brand-black">The Residency</span>
          </nav>

          <div className="inline-flex items-center justify-center bg-brand-gold/10 border border-brand-gold/30 px-4 py-1.5 rounded-sm mb-6">
            <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">
              The Flagship Clinical Programme
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-brand-black uppercase leading-[1.1]">
            The 3R Method™ <span className="block text-brand-gold mt-2">Residency</span>
          </h1>
          <p className="font-body text-sm sm:text-base font-medium tracking-wide text-brand-black/70 mt-6 max-w-2xl mx-auto">
            An immersive clinical partnership designed to recalibrate your midlife physiology from the root up.
          </p>
          
        </div>
      </section>

      {/* 2. PROGRAMME RATIONALE */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-black mb-8">
            Precision Requires Time
          </h2>
          <div className="prose prose-brand text-brand-black/80 text-sm leading-relaxed text-justify sm:text-center mx-auto space-y-6">
            <p>
              The Residency is built on one clinical conviction: that midlife hormonal change is not a single event to be managed, but a biological transition that affects every system in the body.
            </p>
            <p>
              While a single consultation provides immediate direction, true biological recalibration requires sustained oversight. The Residency is our most comprehensive offering. It provides you with direct, ongoing access to Dr Vanessa Stirzaker to execute the 3R Method™ in real time.
            </p>
            <p className="font-bold text-brand-black italic">
              We do not manage the phase. We rebuild the foundation.
            </p>
          </div>
          <ArrowDown className="w-6 h-6 text-brand-gold mx-auto mt-12 animate-bounce" />
        </div>
      </section>

      {/* 3. THE 3 PHASES (Deep Dive from Section 5 of brief) */}
      <section className="py-24 px-6 bg-brand-black text-brand-tint border-y border-brand-gold/20">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-brand-tint">
              The Clinical Architecture
            </h2>
            <p className="text-[10px] font-bold tracking-widest uppercase text-brand-gold mt-4">
              Three phases of objective physiological change
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Phase 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-brand-gold/20 pb-12">
              <div className="md:col-span-3 text-brand-gold font-display text-5xl font-bold">
                01.
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-3xl font-bold uppercase text-brand-tint mb-2">Reset</h3>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-4">Targeted Clinical Audit</p>
                <p className="text-sm text-brand-tint/80 leading-relaxed font-body text-justify">
                  The first phase establishes your hormonal baseline. We assess the full hormonal network including oestrogen, progesterone, testosterone, DHEA, cortisol, insulin, thyroid hormones and melatonin, alongside metabolic function, sleep architecture, inflammatory load and nutrient status. This is not a general health check. It is a targeted clinical audit designed to reveal what is driving your symptoms beneath the surface.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-brand-gold/20 pb-12">
              <div className="md:col-span-3 text-brand-gold font-display text-5xl font-bold">
                02.
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-3xl font-bold uppercase text-brand-tint mb-2">Rebalance</h3>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-4">Precision Intervention Protocols</p>
                <p className="text-sm text-brand-tint/80 leading-relaxed font-body text-justify">
                  Armed with clinical data, we build your precision protocol. This may include hormonal support, targeted nutrition and movement programming, sleep intervention, nervous system regulation and supplementation. Every element is evidence-based and personalised to your physiology, not a generic midlife template.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3 text-brand-gold font-display text-5xl font-bold">
                03.
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-3xl font-bold uppercase text-brand-tint mb-2">Reclaim</h3>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-4">Sustainable Autonomy</p>
                <p className="text-sm text-brand-tint/80 leading-relaxed font-body text-justify">
                  The final phase is about sustainability. We provide the education, tools and clinical oversight to ensure you maintain your gains, understand your body&apos;s signals and approach the decades ahead from a position of physiological strength. Reclaim is not a finishing line. It is a new standard.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. INCLUSIONS & DELIVERABLES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-black">
              Programme Inclusions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 border border-brand-gold/20 p-6 rounded-sm bg-brand-tint/20">
              <Activity className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wide text-brand-black mb-1">Advanced Diagnostics</h4>
                <p className="text-xs text-brand-black/70 leading-relaxed">Comprehensive mapping of metabolic markers and the complete midlife hormonal architecture.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 border border-brand-gold/20 p-6 rounded-sm bg-brand-tint/20">
              <Calendar className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wide text-brand-black mb-1">Ongoing Clinical Strategy</h4>
                <p className="text-xs text-brand-black/70 leading-relaxed">Regular one-to-one virtual consultations with Dr Stirzaker to adjust protocols in real time.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 border border-brand-gold/20 p-6 rounded-sm bg-brand-tint/20">
              <Zap className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wide text-brand-black mb-1">Objective Monitoring</h4>
                <p className="text-xs text-brand-black/70 leading-relaxed">Integration of continuous data tools such as glucose monitoring and body composition mapping where indicated.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 border border-brand-gold/20 p-6 rounded-sm bg-brand-tint/20">
              <ShieldCheck className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wide text-brand-black mb-1">Direct Clinical Access</h4>
                <p className="text-xs text-brand-black/70 leading-relaxed">Priority access and communication channels to navigate rapid physiological shifts without delay.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. APPLICATION CTA */}
      <section className="py-24 px-6 bg-brand-tint border-t border-brand-gold/10">
        <div className="max-w-3xl mx-auto text-center">
          
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-black mb-6">
            Apply for the Residency
          </h2>
          
          <p className="font-body text-sm leading-relaxed text-brand-black/80 mb-10">
            Due to the intensive nature of this clinical partnership, the Residency operates on a limited-capacity basis. To begin, please schedule a preliminary consultation to ensure clinical alignment.
          </p>

          <Link 
            href="/book-now" 
            className="inline-flex items-center justify-center space-x-2 bg-brand-gold text-brand-tint px-10 py-4 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-brand-black hover:text-brand-gold transition-all shadow-md"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Begin Your Assessment</span>
          </Link>
          
        </div>
      </section>

    </div>
  );
}