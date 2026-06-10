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
  Calendar,
  ArrowRight
} from "lucide-react";

export default function ResidencyPage() {
  return (
    <div className="bg-brand-tint text-brand-black font-body selection:bg-brand-gold/30 flex-grow flex flex-col w-full">
      
      {/* 1. HERO SECTION (Split Layout with res1.avif) */}
      <section className="relative bg-brand-tint flex flex-col lg:flex-row items-stretch min-h-[85vh] border-b border-brand-gold/10">
        <div className="w-full lg:w-1/2 px-6 lg:pl-12 xl:pl-24 pt-32 pb-20 lg:py-24 flex flex-col justify-center order-2 lg:order-1">
          <div className="max-w-2xl mx-auto lg:mx-0">
            
            <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-brand-black/50 mb-10">
              <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-brand-black">Work With Me</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-brand-black">The Residency</span>
            </nav>

            <div className="inline-flex items-center space-x-2 border border-brand-gold/30 bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <span className="text-[10px] font-bold tracking-widest text-brand-black/80 uppercase">
                The Flagship Clinical Programme
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-black uppercase leading-[1.05] mb-6">
              The 3R Method™ <br />
              <span className="text-brand-gold">Residency</span>
            </h1>
            
            <p className="font-body text-base sm:text-lg font-medium tracking-wide text-brand-black/70 max-w-xl text-left leading-relaxed mb-10">
              An immersive clinical partnership designed to recalibrate your midlife physiology from the root up.
            </p>

            <Link 
              href="/book-now" 
              className="inline-flex items-center justify-center space-x-2 bg-brand-gold text-brand-black px-10 py-4 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-brand-black hover:text-white transition-all shadow-md w-full sm:w-auto"
            >
              <span>Begin Your Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="w-full lg:w-1/2 relative min-h-[40vh] lg:min-h-0 order-1 lg:order-2 bg-brand-black/5">
          <img 
            src="/res1.avif" 
            alt="Dr Vanessa Stirzaker - The Residency" 
            className="absolute inset-0 w-full h-full object-cover object-center" 
          />
        </div>
      </section>

      {/* 2. PROGRAMME RATIONALE */}
      <section className="py-24 px-6 bg-white border-b border-brand-gold/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-brand-black mb-8">
            Precision Requires Time
          </h2>
          <div className="prose prose-brand text-brand-black/80 text-sm leading-relaxed text-left sm:text-center mx-auto space-y-6">
            <p>
              The Residency is built on one clinical conviction: that midlife hormonal change is not a single event to be managed, but a biological transition that affects every system in the body.
            </p>
            <p>
              While a single consultation provides immediate direction, true biological recalibration requires sustained oversight. The Residency is our most comprehensive offering. It provides you with direct, ongoing access to Dr Vanessa Stirzaker to execute the 3R Method™ in real time.
            </p>
            <p className="font-bold text-brand-black text-base italic pt-4">
              We do not manage the phase. We rebuild the foundation.
            </p>
          </div>
          <ArrowDown className="w-5 h-5 text-brand-gold mx-auto mt-12 animate-bounce" />
        </div>
      </section>

      {/* 3. THE CLINICAL ARCHITECTURE (Split Layout with res2.avif) */}
      <section className="py-24 px-6 bg-brand-tint border-b border-brand-gold/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="text-center md:text-left md:pl-12 xl:pl-24 mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-brand-black">
              The Clinical Architecture
            </h2>
            <p className="text-[10px] font-bold tracking-widest uppercase text-brand-gold mt-4">
              Three phases of objective physiological change
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            
            {/* Left Column: The 3 Phases */}
            <div className="lg:col-span-7 md:pl-12 xl:pl-24 space-y-16">
              
              {/* Phase 1 */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start border-b border-brand-gold/20 pb-16">
                <div className="text-brand-gold font-display text-5xl sm:text-6xl font-bold leading-none shrink-0">
                  01.
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold uppercase text-brand-black mb-2">Reset</h3>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-black/50 mb-4 block">Targeted Clinical Audit</p>
                  <p className="text-sm text-brand-black/80 leading-relaxed font-body text-left">
                    The first phase establishes your hormonal baseline. We assess the full hormonal network including oestrogen, progesterone, testosterone, DHEA, cortisol, insulin, thyroid hormones and melatonin, alongside metabolic function, sleep architecture, inflammatory load and nutrient status. This is not a general health check. It is a targeted clinical audit designed to reveal what is driving your symptoms beneath the surface.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start border-b border-brand-gold/20 pb-16">
                <div className="text-brand-gold font-display text-5xl sm:text-6xl font-bold leading-none shrink-0">
                  02.
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold uppercase text-brand-black mb-2">Rebalance</h3>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-black/50 mb-4 block">Precision Intervention Protocols</p>
                  <p className="text-sm text-brand-black/80 leading-relaxed font-body text-left">
                    Armed with clinical data, we build your precision protocol. This may include hormonal support, targeted nutrition and movement programming, sleep intervention, nervous system regulation and supplementation. Every element is evidence-based and personalised to your physiology, not a generic midlife template.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                <div className="text-brand-gold font-display text-5xl sm:text-6xl font-bold leading-none shrink-0">
                  03.
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold uppercase text-brand-black mb-2">Reclaim</h3>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-black/50 mb-4 block">Sustainable Autonomy</p>
                  <p className="text-sm text-brand-black/80 leading-relaxed font-body text-left">
                    The final phase is about sustainability. We provide the education, tools and clinical oversight to ensure you maintain your gains, understand your body&apos;s signals and approach the decades ahead from a position of physiological strength. Reclaim is not a finishing line. It is a new standard.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Image */}
            <div className="lg:col-span-5 relative h-[600px] lg:h-[800px] w-full rounded-sm overflow-hidden shadow-lg lg:sticky lg:top-24">
              <img 
                src="/res2.avif" 
                alt="Clinical Architecture Layout" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. INCLUSIONS & DELIVERABLES (Redesigned as a Premium Grid) */}
      <section className="py-24 px-6 bg-white border-b border-brand-gold/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-brand-black">
              Programme Inclusions
            </h2>
            <p className="text-[10px] font-bold tracking-widest uppercase text-brand-gold mt-4">
              The clinical support structure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-tint/40 p-8 md:p-10 rounded-sm border border-brand-gold/20 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <Activity className="w-8 h-8 text-brand-gold mb-6" />
              <h4 className="font-bold text-sm uppercase tracking-wide text-brand-black mb-3">Advanced Diagnostics</h4>
              <p className="text-sm text-brand-black/70 leading-relaxed font-body text-left">Comprehensive mapping of metabolic markers and the complete midlife hormonal architecture.</p>
            </div>
            
            <div className="bg-brand-tint/40 p-8 md:p-10 rounded-sm border border-brand-gold/20 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <Calendar className="w-8 h-8 text-brand-gold mb-6" />
              <h4 className="font-bold text-sm uppercase tracking-wide text-brand-black mb-3">Ongoing Clinical Strategy</h4>
              <p className="text-sm text-brand-black/70 leading-relaxed font-body text-left">Regular one-to-one virtual consultations with Dr Stirzaker to adjust protocols in real time.</p>
            </div>

            <div className="bg-brand-tint/40 p-8 md:p-10 rounded-sm border border-brand-gold/20 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <Zap className="w-8 h-8 text-brand-gold mb-6" />
              <h4 className="font-bold text-sm uppercase tracking-wide text-brand-black mb-3">Objective Monitoring</h4>
              <p className="text-sm text-brand-black/70 leading-relaxed font-body text-left">Integration of continuous data tools such as glucose monitoring and body composition mapping where indicated.</p>
            </div>

            <div className="bg-brand-tint/40 p-8 md:p-10 rounded-sm border border-brand-gold/20 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <ShieldCheck className="w-8 h-8 text-brand-gold mb-6" />
              <h4 className="font-bold text-sm uppercase tracking-wide text-brand-black mb-3">Direct Clinical Access</h4>
              <p className="text-sm text-brand-black/70 leading-relaxed font-body text-left">Priority access and communication channels to navigate rapid physiological shifts without delay.</p>
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
          
          <p className="font-body text-sm leading-relaxed text-brand-black/80 mb-10 text-left sm:text-center">
            Due to the intensive nature of this clinical partnership, the Residency operates on a limited-capacity basis. To begin, please schedule a preliminary consultation to ensure clinical alignment.
          </p>

          <Link 
            href="/book-now" 
            className="inline-flex items-center justify-center space-x-2 bg-brand-gold text-brand-black px-10 py-4 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-brand-black hover:text-white transition-all shadow-md"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Begin Your Assessment</span>
          </Link>
          
        </div>
      </section>

    </div>
  );
}