"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

// MOCK DATA: This powers the beautifully styled fallback carousel.
// Once you register with a live feed provider (e.g. Elfsight or EmbedSocial), 
// you will replace this section with their single script tag.
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
  },
  {
    id: 5,
    platform: "Instagram",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    title: "Why continuous glucose monitoring can be a powerful tool in midlife metabolic tracking.",
    url: "https://www.instagram.com/mamichie_healthcare",
    buttonText: "VIEW ON INSTAGRAM"
  }
];

export default function HomePage() {
  const [emailInput, setEmailInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessingPurchase, setIsProcessingPurchase] = useState(false);
  
  // Carousel Scroll Reference
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubmitted(true);
      setEmailInput("");
      setFirstNameInput("");
    }
  };

  const handlePurchase = () => {
    setIsProcessingPurchase(true);
    // This instantly redirects the user to your Stripe Test checkout
    window.location.href = "https://buy.stripe.com/test_fZu4gB9cA78P4Ph4KT2oE00";
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full selection:bg-brand-gold/30 selection:text-brand-black">
      
      {/* 1. CLINICAL EDITORIAL HERO */}
      <section className="relative bg-brand-tint text-brand-black flex flex-col lg:flex-row items-stretch min-h-[90vh] border-b border-brand-gold/10">
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

            <div className="prose prose-brand text-brand-black/80 text-sm leading-relaxed mb-12 max-w-xl border-l-2 border-brand-gold pl-6 text-left">
              <p>Most women reaching midlife are told their results are normal. Their symptoms are managed. Their questions are partially answered.</p>
              <p>At Mamichie Healthcare®, we start from a different premise. We investigate the full hormonal ecosystem: oestrogen, progesterone, testosterone, DHEA, cortisol, insulin, thyroid hormones and melatonin, because midlife is a whole-body recalibration, not a single deficiency.</p>
              <p className="text-brand-gold italic font-medium">This is education and coaching delivered to the highest clinical standard. Wherever you are in the world, your next step begins here.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Link href="/book-now" className="w-full sm:w-auto bg-brand-gold text-brand-black px-10 py-4 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-brand-black hover:text-white transition-colors text-center shadow-md">
                Begin Your 3R Method™ Assessment
              </Link>
              <Link href="/the-3r-method" className="w-full sm:w-auto border border-brand-black/20 text-brand-black bg-white/50 backdrop-blur-sm px-10 py-4 rounded-full text-[11px] font-bold tracking-widest uppercase hover:border-brand-gold hover:text-brand-gold transition-colors text-center">
                Explore the Method
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-0 order-1 lg:order-2">
           <img src="/van.avif" alt="Dr Vanessa Stirzaker" className="absolute inset-0 w-full h-full object-cover object-center lg:object-[25%_center]" />
        </div>
      </section>

      {/* 2. MISSION SECTION */}
      <section className="py-24 bg-white border-b border-brand-gold/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-brand-black mb-10">
            The Philosophy Behind the Practice
          </h2>
          <div className="space-y-6 text-base sm:text-lg text-brand-black/80 font-body leading-relaxed text-left md:text-center max-w-3xl mx-auto">
            <p>The 3R Method™ is built on one clinical conviction: that midlife hormonal change is not a single event to be managed, but a biological transition that affects every system in the body.</p>
            <p>Conventional approaches address the most visible symptoms. We work at the level of root cause, examining how sleep, metabolic function, movement, nervous system regulation and the full hormonal network interact. Each of these is a lever. Precision lies in knowing which lever to use, when and in what order.</p>
            <p className="font-medium text-brand-gold">Reset. Rebalance. Reclaim. These are not stages of a wellness journey. They are the three phases of a clinical reset protocol, designed to restore function, rebuild resilience and give you the tools to maintain your health for decades, not seasons.</p>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL MEDIA HUB */}
      <section className="py-24 bg-brand-tint border-b border-brand-gold/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-10 gap-6">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-black/50 uppercase mb-3 block">
                Connect & Learn
              </span>
              <h2 className="font-display text-4xl text-brand-black">Clinical Insights Feed</h2>
            </div>
            
            {/* Carousel Navigation Arrows */}
            <div className="flex space-x-2">
              <button 
                onClick={() => scrollCarousel("left")}
                className="p-3 bg-white border border-brand-gold/30 rounded-full text-brand-black hover:bg-brand-gold hover:text-white transition-all shadow-sm cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollCarousel("right")}
                className="p-3 bg-white border border-brand-gold/30 rounded-full text-brand-black hover:bg-brand-gold hover:text-white transition-all shadow-sm cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative -mx-6 px-6">
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Fallback Carousel Items */}
              {socialFeed.map((post) => (
                <a 
                  key={post.id} 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative rounded-md overflow-hidden bg-[#0A0A0A] aspect-[3/4] w-[280px] sm:w-[320px] flex-shrink-0 snap-start flex flex-col cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700" 
                  />
                  
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full flex items-center space-x-1.5 z-20">
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
                    <span className="bg-[#0056D2] group-hover:bg-white group-hover:text-[#0056D2] text-white px-5 py-2.5 rounded-full text-[9px] font-bold tracking-widest uppercase transition-colors">
                      {post.buttonText}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Helper CSS to hide the scrollbar */}
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}} />
      </section>

      {/* 4. TRUST PILLARS */}
      <section className="py-24 bg-white border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl text-brand-black">Why women trust Mamichie Healthcare®</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-brand-tint p-8 border border-brand-gold/20 rounded-sm shadow-sm transition-transform hover:-translate-y-1 duration-300">
               <h3 className="font-display text-2xl text-brand-gold mb-4 leading-tight">Clinical Authority. Personal Precision.</h3>
               <p className="font-body text-sm text-brand-black/80 leading-relaxed text-left">Your care is led by Dr Vanessa Stirzaker: NHS and private clinician, internationally accredited Menopause Specialist and founder of the 3R Method™. With clinical experience spanning primary care and secondary care intensive medicine, Dr Stirzaker brings the rigour of evidence-based clinical thinking to every consultation, assessment and programme.</p>
             </div>
             <div className="bg-brand-tint p-8 border border-brand-gold/20 rounded-sm shadow-sm transition-transform hover:-translate-y-1 duration-300">
               <h3 className="font-display text-2xl text-brand-gold mb-4 leading-tight">The Full Hormonal Picture</h3>
               <p className="font-body text-sm text-brand-black/80 leading-relaxed text-left">We do not treat oestrogen in isolation. The 3R Method™ examines the full hormonal architecture of midlife: oestrogen, progesterone, testosterone, DHEA, cortisol, insulin, thyroid hormones and melatonin. Each plays a role. Each interacts with the others. Lasting change requires understanding the whole system, not silencing its loudest signal.</p>
             </div>
             <div className="bg-brand-tint p-8 border border-brand-gold/20 rounded-sm shadow-sm transition-transform hover:-translate-y-1 duration-300">
               <h3 className="font-display text-2xl text-brand-gold mb-4 leading-tight">Root Cause, Not Symptom Management</h3>
               <p className="font-body text-sm text-brand-black/80 leading-relaxed text-left">The question is never simply &apos;what are your symptoms?&apos; It is &apos;what is driving them?&apos; Our clinical approach identifies upstream causes: whether metabolic, hormonal, structural or lifestyle-related and builds your Reset protocol around those findings. Precision beats willpower, every time.</p>
             </div>
             <div className="bg-brand-tint p-8 border border-brand-gold/20 rounded-sm shadow-sm transition-transform hover:-translate-y-1 duration-300">
               <h3 className="font-display text-2xl text-brand-gold mb-4 leading-tight">Global Access. No Compromises.</h3>
               <p className="font-body text-sm text-brand-black/80 leading-relaxed text-left">Your postcode should not determine the quality of your midlife care. Mamichie Healthcare® operates as a fully virtual practice, serving women across the UK, Europe and internationally. Expert-led consultations, personalised protocols and ongoing support are available wherever you are.</p>
             </div>
             <div className="bg-brand-tint p-8 border border-brand-gold/20 rounded-sm shadow-sm md:col-span-2 lg:col-span-1 transition-transform hover:-translate-y-1 duration-300">
               <h3 className="font-display text-2xl text-brand-gold mb-4 leading-tight">Precision Informed by Data</h3>
               <p className="font-body text-sm text-brand-black/80 leading-relaxed text-left">We use objective markers to guide and measure progress: metabolic panels, hormonal profiles, movement benchmarks and, where relevant, tools such as continuous glucose monitoring and body composition assessment. This is not intuition. It is clinical precision, applied with care.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 5. THE 3R METHOD EXPLAINER */}
      <section className="bg-white text-brand-black py-32 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-5xl sm:text-6xl text-brand-black mb-6 uppercase tracking-tight">The 3R Method™</h2>
            <p className="text-[11px] font-bold tracking-[0.2em] text-brand-gold uppercase mb-8">A precision health framework for the midlife woman. Internationally accredited. Amazon bestselling.</p>
            <p className="font-body text-sm text-brand-black/70 leading-relaxed text-left md:text-center">The 3R Method™ was developed from clinical practice, not wellness theory. After years of observing the gap between what conventional medicine offers women in perimenopause and what their bodies actually need, Dr Vanessa Stirzaker built a structured clinical framework that addresses midlife physiology at the root. The method is internationally accredited and the foundation of the Amazon bestselling book by Dr Stirzaker, available now.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-brand-gold/20 pt-16">
            <div className="space-y-6">
              <h3 className="font-display text-3xl text-brand-gold uppercase tracking-wider">Reset</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40">Phase 01: Targeted Clinical Audit</p>
              <p className="font-body text-sm text-brand-black/80 leading-relaxed text-left">The first phase establishes your hormonal baseline. We assess the full hormonal network including oestrogen, progesterone, testosterone, DHEA, cortisol, insulin, thyroid hormones and melatonin, alongside metabolic function, sleep architecture, inflammatory load and nutrient status. This is not a general health check. It is a targeted clinical audit designed to reveal what is driving your symptoms beneath the surface.</p>
            </div>
            <div className="space-y-6">
              <h3 className="font-display text-3xl text-brand-gold uppercase tracking-wider">Rebalance</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40">Phase 02: Precision Protocols</p>
              <p className="font-body text-sm text-brand-black/80 leading-relaxed text-left">Armed with clinical data, we build your precision protocol. This may include hormonal support, targeted nutrition and movement programming, sleep intervention, nervous system regulation and supplementation. Every element is evidence-based and personalised to your physiology, not a generic midlife template.</p>
            </div>
            <div className="space-y-6">
              <h3 className="font-display text-3xl text-brand-gold uppercase tracking-wider">Reclaim</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40">Phase 03: Sustainable Autonomy</p>
              <p className="font-body text-sm text-brand-black/80 leading-relaxed text-left">The final phase is about sustainability. We provide the education, tools and clinical oversight to ensure you maintain your gains, understand your body&apos;s signals and approach the decades ahead from a position of physiological strength. Reclaim is not a finishing line. It is a new standard.</p>
            </div>
          </div>
          <div className="text-center mt-20">
            <Link href="/residency" className="inline-flex items-center space-x-3 bg-brand-gold text-brand-black px-10 py-4 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-brand-black hover:text-white transition-all shadow-md">
              <span>Discover the Residency</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. THE BOOK PROMO */}
      <section className="py-24 bg-brand-tint border-b border-brand-gold/10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[10px] font-bold tracking-[0.2em] text-brand-black uppercase mb-4 block">#1 Amazon Bestseller</span>
            <h2 className="font-display text-4xl sm:text-5xl text-brand-black leading-tight mb-6">The 3R Method™: <br />The Book</h2>
            <p className="font-body text-sm text-brand-black/80 leading-relaxed text-left mb-8">Written for the woman who has been told her results are normal but knows something is not right. Rooted in precision medicine principles, this book takes you through the three phases of the 3R Method™: Reset, Rebalance and Reclaim. Each phase is grounded in clinical evidence and designed to be immediately actionable.</p>
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={handlePurchase}
                disabled={isProcessingPurchase}
                className="bg-brand-gold text-brand-black px-8 py-3.5 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-brand-black hover:text-brand-tint transition-all shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isProcessingPurchase ? "Connecting..." : "Purchase Directly • £14.99"}
              </button>
              <Link href="/the-book" className="text-brand-black hover:text-brand-gold text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-80 shadow-2xl">
              <img src="/book.avif" alt="The 3R Method Book Cover" className="w-full h-auto object-cover rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEWSLETTER / GUIDE OPT-IN */}
      <section className="bg-white py-24 px-6 text-center border-b border-brand-gold/10">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] font-bold tracking-[0.2em] text-brand-black/50 uppercase mb-4 block">Start Here. For Free.</span>
          <h2 className="font-display text-4xl sm:text-5xl text-brand-black mb-6 leading-tight">An Introductory Guide to Precision Midlife Health</h2>
          <p className="font-body text-sm text-brand-black/80 mb-10 text-left md:text-center">Plus the <span className="italic text-brand-gold">Hormonal Intelligence Weekly</span>: a free letter published each week covering one evidence-based insight from inside the 3R Method™.</p>

          {isSubmitted ? (
            <div className="bg-brand-tint border border-brand-gold/30 p-6 rounded-sm inline-block">
              <p className="font-display text-xl text-brand-black font-medium">Registration Confirmed</p>
              <p className="font-body text-xs text-brand-black/70 mt-1">Your briefing is routing to your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center max-w-2xl mx-auto">
              <input type="text" placeholder="First name" required value={firstNameInput} onChange={(e) => setFirstNameInput(e.target.value)} className="w-full sm:w-1/3 bg-brand-tint border border-brand-black/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-black placeholder:text-brand-black/40 shadow-sm" />
              <input type="email" placeholder="Email address" required value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className="w-full sm:w-1/3 bg-brand-tint border border-brand-black/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-black placeholder:text-brand-black/40 shadow-sm" />
              <button type="submit" className="w-full sm:w-auto bg-brand-black text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-full hover:bg-brand-gold hover:text-brand-black transition-all cursor-pointer whitespace-nowrap shadow-md">
                Get Free Guide
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 8. ABOUT THE CLINICIAN */}
      <section className="py-24 bg-brand-tint">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-4xl sm:text-5xl text-brand-black mb-8">About Dr Stirzaker</h2>
            <div className="prose prose-brand text-brand-black/80 text-sm leading-relaxed mb-8 text-left">
              <p>Dr Vanessa Stirzaker is an NHS-trained clinician whose career has spanned primary care and secondary care, including intensive care medicine. She now dedicates her practice exclusively to women&apos;s hormonal health and menopause medicine and holds an internationally accredited specialist qualification in Menopause Medicine.</p>
              <p>Her clinical interests are grounded in precision medicine: the application of objective data, individual physiology and root-cause investigation to deliver outcomes that symptom-led protocols cannot achieve.</p>
              <p>She is the founder of Mamichie Healthcare®, a registered and trademarked global virtual practice and the developer of the 3R Method™: an internationally accredited, proprietary clinical framework for perimenopause, menopause and post-menopause reset.</p>
            </div>
            <Link href="/about-us" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-black border border-brand-black/20 rounded-full px-6 py-3 hover:bg-brand-black hover:text-white transition-all bg-white">
              Read Full Bio
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] w-full bg-white rounded-sm overflow-hidden shadow-md">
              <img src="/sus.avif" alt="Dr Vanessa Stirzaker Clinical Portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}