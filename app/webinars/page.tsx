"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  Calendar, 
  PlayCircle, 
  MonitorPlay, 
  MessageSquare, 
  ArrowRight,
  Clock,
  Activity // <--- Added Activity here
} from "lucide-react";

export default function WebinarsPage() {
  const [emailInput, setEmailInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubmitted(true);
      setEmailInput("");
    }
  };

  return (
    <div className="bg-brand-tint text-brand-black font-body selection:bg-brand-gold/30 flex-grow flex flex-col">
      
      {/* 1. PAGE HEADER & BREADCRUMBS */}
      <section className="pt-24 pb-16 px-6 bg-white border-b border-brand-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          
          <nav className="flex items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-brand-black/50 mb-12">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/resources/library" className="hover:text-brand-gold transition-colors">Resources</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-black">Webinars</span>
          </nav>

          <div className="inline-flex items-center justify-center bg-brand-gold/10 border border-brand-gold/30 px-4 py-1.5 rounded-sm mb-6">
            <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">
              Live Clinical Education
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black uppercase leading-[1.1]">
            Clinical <span className="text-brand-gold">Masterclasses</span>
          </h1>
          <p className="font-body text-sm sm:text-base font-medium tracking-wide text-brand-black/70 mt-6 max-w-2xl mx-auto">
            Deep-dive educational sessions translating the precision science of the 3R Method™ into actionable strategies.
          </p>
          
        </div>
      </section>

      {/* 2. FEATURED UPCOMING WEBINAR */}
      <section className="py-20 px-6 bg-brand-tint border-b border-brand-gold/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="bg-white border border-brand-gold/20 rounded-sm shadow-md overflow-hidden flex flex-col md:flex-row">
            
            {/* Visual/Image Side */}
            <div className="md:w-5/12 bg-brand-gold/10 relative min-h-[250px] md:min-h-full flex items-center justify-center border-b md:border-b-0 md:border-r border-brand-gold/20 p-8">
               <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
               <div className="relative z-10 flex flex-col items-center text-center">
                 <MonitorPlay className="w-16 h-16 text-brand-gold mb-4" />
                 <span className="text-[10px] font-bold tracking-[0.2em] text-brand-black uppercase bg-white px-3 py-1 rounded-full shadow-sm">
                   Next Live Event
                 </span>
               </div>
            </div>

            {/* Content Side */}
            <div className="md:w-7/12 p-8 sm:p-12">
              <div className="flex items-center space-x-4 mb-4 text-xs font-bold uppercase tracking-widest text-brand-gold">
                <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1.5" /> Date TBA</span>
                <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1.5" /> 60 Minutes</span>
              </div>
              
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-black mb-4">
                Decoding Midlife Metabolic Health
              </h2>
              
              <p className="text-sm text-brand-black/70 leading-relaxed font-body mb-8 text-justify">
                Join Dr Vanessa Stirzaker for an intensive clinical briefing on blood sugar regulation, body composition and cardiovascular protection. Learn why standard dietary advice fails during perimenopause and how to apply the Rebalance phase of the 3R Method™ to restore metabolic flexibility.
              </p>
              
              <button className="inline-flex items-center justify-center space-x-2 bg-brand-gold text-brand-black px-8 py-3.5 rounded-sm text-[11px] font-bold tracking-widest uppercase hover:bg-brand-black hover:text-white transition-all shadow-sm w-full sm:w-auto">
                <span>Join the Waitlist</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
          </div>

        </div>
      </section>

      {/* 3. WHAT TO EXPECT (The 3 Pillars of Masterclasses) */}
      <section className="py-24 px-6 bg-white border-b border-brand-gold/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-black">
              The Learning Experience
            </h2>
            <p className="text-[10px] font-bold tracking-widest uppercase text-brand-gold mt-2">
              Why women attend Mamichie Healthcare® Masterclasses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-brand-gold/20 p-8 rounded-sm bg-brand-tint/30 text-center hover:-translate-y-1 transition-transform shadow-sm">
              <Activity className="w-8 h-8 text-brand-gold mx-auto mb-6" />
              <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-3">Evidence-Based Protocols</h3>
              <p className="text-sm text-brand-black/70 leading-relaxed font-body">
                We bypass wellness trends. Every webinar delivers strict clinical data and peer-reviewed protocols translated into actionable lifestyle strategies.
              </p>
            </div>
            
            <div className="border border-brand-gold/20 p-8 rounded-sm bg-brand-tint/30 text-center hover:-translate-y-1 transition-transform shadow-sm">
              <MonitorPlay className="w-8 h-8 text-brand-gold mx-auto mb-6" />
              <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-3">Direct Application</h3>
              <p className="text-sm text-brand-black/70 leading-relaxed font-body">
                Learn exactly how to apply the principles of the 3R Method™—Reset, Rebalance, Reclaim—to your own unique physiological baseline.
              </p>
            </div>

            <div className="border border-brand-gold/20 p-8 rounded-sm bg-brand-tint/30 text-center hover:-translate-y-1 transition-transform shadow-sm">
              <MessageSquare className="w-8 h-8 text-brand-gold mx-auto mb-6" />
              <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-3">Live Clinical Q&A</h3>
              <p className="text-sm text-brand-black/70 leading-relaxed font-body">
                Selected live sessions include dedicated time for direct questions with Dr Stirzaker, allowing for nuanced discussion of complex hormonal topics.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. ON-DEMAND ARCHIVE (Placeholder) */}
      <section className="py-24 px-6 bg-brand-tint">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-black">
                On-Demand Archive
              </h2>
              <p className="text-[10px] font-bold tracking-widest uppercase text-brand-gold mt-2">
                Access past clinical briefings
              </p>
            </div>
            <Link href="/resources/library" className="text-[11px] font-bold uppercase tracking-widest text-brand-black hover:text-brand-gold transition-colors flex items-center">
              View Full Library <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* Archive Item 1 */}
            <div className="bg-white border border-brand-gold/20 rounded-sm overflow-hidden flex flex-col shadow-sm group">
              <div className="h-48 bg-brand-black relative overflow-hidden">
                <img 
                  src="/sus.avif" 
                  alt="Dr Vanessa Stirzaker Presenting" 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-white/80 group-hover:text-brand-gold transition-colors duration-300" />
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-grow flex flex-col">
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-gold mb-3 block">Recorded Briefing</span>
                <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-3 leading-tight">
                  Understanding HRT & Cardiovascular Health
                </h3>
                <p className="text-sm text-brand-black/70 font-body mb-6 flex-grow">
                  An exploration of the current clinical evidence surrounding Menopausal Hormone Therapy and its long-term impact on heart health and lipid profiles.
                </p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-brand-black border border-brand-black/20 px-6 py-2.5 rounded-sm hover:border-brand-gold hover:text-brand-gold transition-all w-fit">
                  Unlock Recording
                </button>
              </div>
            </div>

            {/* Archive Item 2 */}
            <div className="bg-white border border-brand-gold/20 rounded-sm overflow-hidden flex flex-col shadow-sm group">
              <div className="h-48 bg-brand-black relative overflow-hidden">
                <img 
                  src="/van.avif" 
                  alt="Dr Vanessa Stirzaker" 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-white/80 group-hover:text-brand-gold transition-colors duration-300" />
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-grow flex flex-col">
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-gold mb-3 block">Recorded Briefing</span>
                <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-3 leading-tight">
                  Sleep Architecture in Perimenopause
                </h3>
                <p className="text-sm text-brand-black/70 font-body mb-6 flex-grow">
                  Why midlife sleep disruption is not just a nuisance, but a metabolic stressor. Learn the neurological and hormonal drivers of insomnia and how to intervene.
                </p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-brand-black border border-brand-black/20 px-6 py-2.5 rounded-sm hover:border-brand-gold hover:text-brand-gold transition-all w-fit">
                  Unlock Recording
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. WAITLIST OPT-IN */}
      <section className="py-24 px-6 bg-white border-t border-brand-gold/10 text-center">
        <div className="max-w-2xl mx-auto">
          
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-black mb-4">
            Never Miss a Masterclass
          </h2>
          <p className="font-body text-sm text-brand-black/70 mb-10 leading-relaxed">
            Join the private list to receive priority registration for upcoming live clinical briefings and first access to new on-demand recordings.
          </p>

          {isSubmitted ? (
            <div className="bg-brand-tint border border-brand-gold/20 p-6 rounded-sm inline-block shadow-sm">
              <p className="font-display text-xl text-brand-gold font-bold">Registration Confirmed</p>
              <p className="font-body text-xs text-brand-black/70 mt-1">You will be notified when our next session opens.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder="Email address" 
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full sm:w-2/3 bg-brand-tint border border-brand-gold/20 rounded-sm px-6 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-black placeholder:text-brand-black/40 shadow-sm"
              />
              <button 
                type="submit"
                className="w-full sm:w-auto bg-brand-black text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-sm hover:bg-brand-gold hover:text-brand-black transition-all cursor-pointer whitespace-nowrap shadow-md"
              >
                Join Waitlist
              </button>
            </form>
          )}

        </div>
      </section>

    </div>
  );
}