"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
// Corrected imports for social media icons using react-icons/fa
import { FaInstagram, FaFacebook } from "react-icons/fa";

// MOCK DATA: Replace this array with your live Meta API fetch later
const socialFeed = [
  {
    id: 1,
    platform: "Instagram",
    image: "/van.avif",
    title: "Optimising midlife brain health: Prevention strategies and metabolic health.",
    url: "https://www.instagram.com/mamichie_healthcare",
    buttonText: "VIEW ON INSTAGRAM"
  },
  {
    id: 2,
    platform: "Facebook",
    image: "/sus.avif",
    title: "Understanding cardiovascular disease risk, cholesterol and HRT protocols.",
    url: "https://www.facebook.com/share/1LUtckbaTg/?mibextid=wwXIfr",
    buttonText: "VIEW ON FACEBOOK"
  },
  {
    id: 3,
    platform: "Instagram",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    title: "Training for the transition: zone 2, VO2 max, stability and strength.",
    url: "https://www.instagram.com/mamichie_healthcare",
    buttonText: "VIEW ON INSTAGRAM"
  },
  {
    id: 4,
    platform: "Facebook",
    image: "https://images.unsplash.com/photo-1606206873764-fd15e242df52?q=80&w=800&auto=format&fit=crop",
    title: "Special clinical briefing: Answering your questions on longevity and sleep architecture.",
    url: "https://www.facebook.com/share/1LUtckbaTg/?mibextid=wwXIfr",
    buttonText: "VIEW ON FACEBOOK"
  }
];

export default function HomePage() {
  const [emailInput, setEmailInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubmitted(true);
      setEmailInput("");
      setFirstNameInput("");
    }
  };

  return (
    <div className="flex flex-col w-full selection:bg-brand-gold/30 selection:text-brand-black">
      
      {/* 1. CLINICAL EDITORIAL HERO (Attia-Style) */}
      <section className="relative bg-brand-tint text-brand-black flex flex-col lg:flex-row items-stretch min-h-[90vh] border-b border-brand-gold/10">
        
        {/* Left Column: Typography & Content */}
        <div className="w-full lg:w-1/2 px-6 lg:pl-12 xl:pl-24 pt-32 pb-20 lg:py-24 flex flex-col justify-center order-2 lg:order-1">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center space-x-2 border border-brand-gold/30 bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full mb-10 shadow-sm">
              <Sparkles className="w-3 h-3 text-brand-gold" />
              <span className="text-[10px] font-bold tracking-widest text-brand-black/80 uppercase">
                Amazon Bestselling Author | Dr Vanessa Stirzaker
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] text-brand-black mb-6 uppercase tracking-tight">
              Your midlife health deserves more than <span className="text-brand-gold italic lowercase normal-case">symptom management.</span>
            </h1>
            <p className="font-body text-base sm:text-lg text-brand-black/60 tracking-wide uppercase mb-12 font-bold">
              Precision health for perimenopause, menopause and beyond.
            </p>

            <div className="prose prose-brand text-brand-black/80 text-sm leading-relaxed mb-12 max-w-xl border-l-2 border-brand-gold pl-6">
              <p>
                Most women reaching midlife are told their results are normal. Their symptoms are managed. Their questions are partially answered.
              </p>
              <p>
                At Mamichie Healthcare®, we start from a different premise. We investigate the full hormonal ecosystem: oestrogen, progesterone, testosterone, DHEA, cortisol, insulin, thyroid hormones and melatonin, because midlife is a whole-body recalibration, not a single deficiency.
              </p>
              <p className="text-brand-gold italic font-medium">
                This is education and coaching delivered to the highest clinical standard. Wherever you are in the world, your next step begins here.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Link 
                href="/assessment" 
                className="w-full sm:w-auto bg-brand-gold text-brand-black px-10 py-4 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-brand-black hover:text-white transition-colors text-center shadow-md"
              >
                Begin Your 3R Method™ Assessment
              </Link>
              <Link 
                href="/the-3r-method" 
                className="w-full sm:w-auto border border-brand-black/20 text-brand-black bg-white/50 backdrop-blur-sm px-10 py-4 rounded-full text-[11px] font-bold tracking-widest uppercase hover:border-brand-gold hover:text-brand-gold transition-colors text-center"
              >
                Explore the Method
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Un-obscured Photography */}
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-0 order-1 lg:order-2">
           <img 
            src="/van.avif" 
            alt="Dr Vanessa Stirzaker" 
            className="absolute inset-0 w-full h-full object-cover object-center lg:object-[25%_center]"
          />
        </div>
      </section>

      {/* 2. TOPIC SELECTION / PILL CLUSTER */}
      <section className="py-20 bg-white border-b border-brand-gold/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] font-bold tracking-[0.2em] text-brand-black/50 uppercase mb-4">
            Optimise Your Foundation
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-brand-black mb-10">
            Begin your journey by selecting a clinical pillar
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Hormonal Architecture", 
              "Movement & Muscle", 
              "Metabolic Precision", 
              "Sleep & Nervous System", 
              "Cardiovascular & Cognitive", 
              "HRT & Supplements"
            ].map((topic) => (
              <Link 
                key={topic} 
                href="/resources/library"
                className="bg-brand-tint border border-brand-gold/30 text-brand-black hover:bg-brand-gold hover:text-brand-tint px-6 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all"
              >
                {topic}
              </Link>
            ))}
            <Link 
              href="/resources/library"
              className="bg-brand-black text-brand-tint hover:bg-brand-gold hover:text-brand-black px-8 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all mt-2 sm:mt-0"
            >
              Explore All Clinical Insights
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL MEDIA HUB */}
      <section className="py-24 bg-brand-tint">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-display text-4xl text-brand-black">Clinical Insights Feed</h2>
            <div className="flex space-x-2">
              <button className="p-2 text-brand-black/40 hover:text-brand-black transition-colors cursor-pointer">
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button className="p-2 text-brand-black hover:text-brand-gold transition-colors cursor-pointer">
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialFeed.map((post) => (
              <a 
                key={post.id} 
                href={post.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative rounded-md overflow-hidden bg-[#0A0A0A] aspect-[3/4] flex flex-col cursor-pointer shadow-sm"
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700" 
                />
                
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1 rounded-full flex items-center space-x-1.5 z-20">
                  {post.platform === "Instagram" ? (
                    <FaInstagram className="w-3 h-3 text-white" />
                  ) : (
                    <FaFacebook className="w-3 h-3 text-white" />
                  )}
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white">
                    {post.platform}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                
                <div className="absolute bottom-0 w-full p-6 flex flex-col items-center justify-end z-20 text-center">
                  <h3 className="font-display text-xl text-white mb-6 leading-snug line-clamp-4">
                    {post.title}
                  </h3>
                  <span className="bg-[#0056D2] text-white px-5 py-2 rounded-sm text-[9px] font-bold tracking-widest uppercase transition-colors">
                    {post.buttonText}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE 3R METHOD EXPLAINER - Now Light & Clinical */}
      <section className="bg-white text-brand-black py-32 border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-5xl sm:text-6xl text-brand-black mb-6 uppercase tracking-tight">
              The 3R Method™
            </h2>
            <p className="text-[11px] font-bold tracking-[0.2em] text-brand-gold uppercase mb-8">
              A precision health framework for the midlife woman. Internationally accredited. Amazon bestselling.
            </p>
            <p className="font-body text-sm text-brand-black/70 leading-relaxed">
              The 3R Method™ was developed from clinical practice, not wellness theory. After years of observing the gap between what conventional medicine offers women in perimenopause and what their bodies actually need, Dr Vanessa Stirzaker built a structured clinical framework that addresses midlife physiology at the root. The method is internationally accredited and the foundation of the Amazon bestselling book by Dr Stirzaker, available now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-brand-gold/20 pt-16">
            <div className="space-y-6">
              <h3 className="font-display text-3xl text-brand-gold uppercase tracking-wider">Reset</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40">Phase 01: Targeted Clinical Audit</p>
              <p className="font-body text-sm text-brand-black/80 leading-relaxed text-justify">
                The first phase establishes your hormonal baseline. We assess the full hormonal network including oestrogen, progesterone, testosterone, DHEA, cortisol, insulin, thyroid hormones and melatonin, alongside metabolic function, sleep architecture, inflammatory load and nutrient status. This is not a general health check. It is a targeted clinical audit designed to reveal what is driving your symptoms beneath the surface.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="font-display text-3xl text-brand-gold uppercase tracking-wider">Rebalance</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40">Phase 02: Precision Protocols</p>
              <p className="font-body text-sm text-brand-black/80 leading-relaxed text-justify">
                Armed with clinical data, we build your precision protocol. This may include hormonal support, targeted nutrition and movement programming, sleep intervention, nervous system regulation and supplementation. Every element is evidence-based and personalised to your physiology, not a generic midlife template.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="font-display text-3xl text-brand-gold uppercase tracking-wider">Reclaim</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40">Phase 03: Sustainable Autonomy</p>
              <p className="font-body text-sm text-brand-black/80 leading-relaxed text-justify">
                The final phase is about sustainability. We provide the education, tools and clinical oversight to ensure you maintain your gains, understand your body&apos;s signals and approach the decades ahead from a position of physiological strength. Reclaim is not a finishing line. It is a new standard.
              </p>
            </div>
          </div>

          <div className="text-center mt-20">
            <Link 
              href="/residency" 
              className="inline-flex items-center space-x-3 bg-brand-gold text-brand-black px-10 py-4 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-brand-black hover:text-white transition-all shadow-md"
            >
              <span>Discover the Residency</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. THE BOOK PROMO */}
      <section className="py-24 bg-brand-tint border-y border-brand-gold/10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[10px] font-bold tracking-[0.2em] text-brand-black uppercase mb-4 block">
              #1 Amazon Bestseller
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-brand-black leading-tight mb-6">
              The 3R Method™: <br />The Book
            </h2>
            <p className="font-body text-sm text-brand-black/80 leading-relaxed mb-8">
              Written for the woman who has been told her results are normal but knows something is not right. Rooted in precision medicine principles, this book takes you through the three phases of the 3R Method™: Reset, Rebalance and Reclaim. Each phase is grounded in clinical evidence and designed to be immediately actionable.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="bg-brand-gold text-brand-black px-8 py-3.5 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-brand-black hover:text-brand-tint transition-all shadow-sm"
              >
                Buy Now
              </a>
              <Link 
                href="/the-book" 
                className="text-brand-black hover:text-brand-gold text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-80 shadow-2xl">
              <img 
                src="/book.avif" 
                alt="The 3R Method Book Cover" 
                className="w-full h-auto object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEWSLETTER / GUIDE OPT-IN */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] font-bold tracking-[0.2em] text-brand-black uppercase mb-4 block">
            Start Here. For Free.
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-brand-black mb-6 leading-tight">
            An Introductory Guide to Precision Midlife Health
          </h2>
          <p className="font-body text-sm text-brand-black/80 mb-10">
            Plus the <span className="italic">Hormonal Intelligence Weekly</span>: a free letter published each week covering one evidence-based insight from inside the 3R Method™.
          </p>

          {isSubmitted ? (
            <div className="bg-brand-tint border border-brand-gold/30 p-6 rounded-sm inline-block">
              <p className="font-display text-xl text-brand-black font-medium">Registration Confirmed</p>
              <p className="font-body text-xs text-brand-black/70 mt-1">
                Your briefing is routing to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="First name" 
                required
                value={firstNameInput}
                onChange={(e) => setFirstNameInput(e.target.value)}
                className="w-full sm:w-1/3 bg-brand-tint border border-brand-black/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-black placeholder:text-brand-black/40 shadow-sm"
              />
              <input 
                type="email" 
                placeholder="Email address" 
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full sm:w-1/3 bg-brand-tint border border-brand-black/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-black placeholder:text-brand-black/40 shadow-sm"
              />
              <button 
                type="submit"
                className="w-full sm:w-auto bg-brand-black text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-full hover:bg-brand-gold hover:text-brand-black transition-all cursor-pointer whitespace-nowrap shadow-md"
              >
                Get Free Guide
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 7. ABOUT THE CLINICIAN */}
      <section className="py-24 bg-brand-tint border-t border-brand-gold/10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-4xl sm:text-5xl text-brand-black mb-8">
              About Dr. Stirzaker
            </h2>
            <div className="prose prose-brand text-brand-black/80 text-sm leading-relaxed mb-8 text-justify">
              <p>
                Dr Vanessa Stirzaker is an NHS-trained clinician whose career has spanned primary care and secondary care, including intensive care medicine. She now dedicates her practice exclusively to women&apos;s hormonal health and menopause medicine, and holds an internationally accredited specialist qualification in Menopause Medicine.
              </p>
              <p>
                Her clinical interests are grounded in precision medicine: the application of objective data, individual physiology and root-cause investigation to deliver outcomes that symptom-led protocols cannot achieve.
              </p>
              <p>
                She is the founder of Mamichie Healthcare®, a registered and trademarked global virtual practice, and the developer of the 3R Method™: an internationally accredited, proprietary clinical framework for perimenopause, menopause and post-menopause reset.
              </p>
            </div>
            <Link 
              href="/about-us" 
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-black border border-brand-black/20 rounded-full px-6 py-3 hover:bg-brand-black hover:text-white transition-all bg-white"
            >
              Read Full Bio
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] w-full bg-white rounded-sm overflow-hidden shadow-md">
              <img 
                src="/sus.avif" 
                alt="Dr Vanessa Stirzaker Clinical Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}