"use client";

import React from "react";
import Link from "next/link";
import { Award, ShieldCheck, ChevronRight, Quote } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-brand-tint text-brand-black font-body selection:bg-brand-gold/30">
      
      {/* 1. PAGE HEADER (Section 8.1) */}
      <section className="pt-24 pb-16 px-6 border-b border-brand-gold/10 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-brand-black/50 mb-12">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-black">About Dr Stirzaker</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black uppercase leading-[1.1]">
            The Clinician <span className="text-brand-gold block mt-2">Behind the Method</span>
          </h1>
        </div>
      </section>

      {/* 2. CORE CREDENTIALS BLOCK (Section 8.2) */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Flowing Text */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base leading-relaxed text-brand-black/80 text-justify">
            <p>
              Dr Vanessa Stirzaker is an NHS-trained clinician whose career has spanned primary and secondary care, including critical care medicine. She now dedicates her practice exclusively to women&apos;s hormonal health and menopause medicine, and holds an internationally accredited specialist qualification in Menopause Medicine.
            </p>
            <p>
              Her clinical interests are grounded in precision medicine: the application of objective data, individual physiology and root-cause investigation to deliver outcomes that symptom-led protocols cannot achieve.
            </p>
            <p>
              She is the founder of Mamichie Healthcare®, a registered and trademarked global virtual practice, and the developer of the 3R Method™: an internationally accredited, proprietary clinical framework for perimenopause, menopause and post-menopause reset.
            </p>
            <p>
              Dr Stirzaker is also the author of the Amazon best-selling book on the 3R Method™, bringing precision menopause medicine to women worldwide.
            </p>
            <p className="font-medium text-brand-black p-6 bg-brand-gold/5 border-l-2 border-brand-gold mt-8">
              Her approach sits at the intersection of conventional hormonal medicine and metabolic precision health: examining oestrogen, progesterone, testosterone, DHEA, cortisol, insulin, thyroid hormones and melatonin as inseparable components of midlife hormonal health.
            </p>
          </div>

          {/* Right Column: Visual Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="aspect-[4/5] w-full max-w-sm bg-white border border-brand-gold/20 rounded-sm p-3 relative group overflow-hidden shadow-md">
              {/* Subtle gold overlay on hover for premium feel */}
              <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              
              {/* The Actual Image - Focal point restored to 45% per your setting */}
              <img 
                src="/van.avif" 
                alt="Dr Vanessa Stirzaker Clinical Portrait" 
                className="w-full h-full object-cover object-[45%_center] rounded-[2px]"
              />
            </div>
            
            <div className="w-full max-w-sm mt-8 space-y-4">
               <Link 
                  href="/consultations" 
                  className="block w-full bg-brand-black text-brand-tint px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-black transition-all shadow-md text-center"
                >
                  Book a Consultation
                </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CREDENTIALS SUMMARY TABLE (Section 8.3) */}
      <section className="py-20 px-6 bg-white border-y border-brand-gold/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Column 1: Clinical Background */}
            <div className="border border-brand-gold/20 rounded-sm p-8 bg-brand-tint/30 shadow-xs">
              <div className="flex items-center space-x-3 mb-8">
                <ShieldCheck className="w-5 h-5 text-brand-gold" />
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-black">Clinical Background</h3>
              </div>
              <ul className="space-y-4 text-sm text-brand-black/80 font-medium">
                <li className="flex items-start space-x-3">
                  <span className="text-brand-gold font-bold mt-0.5">•</span>
                  <span>NHS-trained clinician</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-gold font-bold mt-0.5">•</span>
                  <span>Clinical experience across primary and secondary critical care</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-gold font-bold mt-0.5">•</span>
                  <span>Dedicated specialist practice in women&apos;s hormonal health and menopause medicine</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Specialist Credentials */}
            <div className="border border-brand-gold/20 rounded-sm p-8 bg-brand-tint/30 shadow-xs">
              <div className="flex items-center space-x-3 mb-8">
                <Award className="w-5 h-5 text-brand-gold" />
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-black">Specialist Credentials</h3>
              </div>
              <ul className="space-y-4 text-sm text-brand-black/80 font-medium">
                <li className="flex items-start space-x-3">
                  <span className="text-brand-gold font-bold mt-0.5">•</span>
                  <span>Internationally accredited Menopause Specialist</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-gold font-bold mt-0.5">•</span>
                  <span>Founder of the 3R Method™</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-gold font-bold mt-0.5">•</span>
                  <span>Amazon best-selling author</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-gold font-bold mt-0.5">•</span>
                  <span>Founder of Mamichie Healthcare® (registered and trademarked)</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PHILOSOPHY PULL-QUOTE (Section 8.4) - UPDATED TO LIGHT THEME */}
      <section className="py-24 px-6 bg-brand-tint text-brand-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Quote className="w-12 h-12 text-brand-gold/50 mx-auto mb-8" />
          <blockquote className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight font-medium text-brand-black max-w-3xl mx-auto">
            &quot;We are not managing a phase. We are rebuilding a foundation. The women I work with do not need more willpower. They need more precision.&quot;
          </blockquote>
          <div className="mt-12 flex flex-col items-center justify-center">
            <hr className="w-12 h-[1px] bg-brand-gold border-none mb-6" />
            <cite className="font-body text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-brand-gold not-italic">
              Dr Vanessa Stirzaker
            </cite>
            <span className="font-body text-[10px] uppercase tracking-widest text-brand-black/60 mt-2">
              Founder, Mamichie Healthcare®
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}