"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Check, 
  ChevronRight, 
  Star, 
  PlayCircle, 
  FileText,
  Lock
} from "lucide-react";

export default function MembershipPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const handleCheckout = (plan: "monthly" | "annual") => {
    setIsProcessing(true);
    // WEB MANAGER: Replace these with your live Stripe Subscription Payment Links
    const stripeMonthlyUrl = "https://buy.stripe.com/test_monthly_link";
    const stripeAnnualUrl = "https://buy.stripe.com/test_annual_link";
    
    window.location.href = plan === "monthly" ? stripeMonthlyUrl : stripeAnnualUrl;
  };

  return (
    <div className="bg-brand-tint text-brand-black font-body selection:bg-brand-gold/30 flex-grow flex flex-col w-full">
      
      {/* 1. HERO & PRICING CARDS */}
      <section className="pt-24 pb-20 px-6 bg-brand-tint border-b border-brand-gold/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Value Proposition */}
          <div>
            <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-brand-black/50 mb-8">
              <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-brand-black">Premium Membership</span>
            </nav>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-black mb-8 leading-[1.1]">
              Get Premium Access to Exclusive Clinical Insights
            </h1>
            
            <p className="text-xs font-bold tracking-widest text-brand-black uppercase mb-6">
              Membership Includes:
            </p>
            
            <ul className="space-y-4">
              {[
                "Exclusive access to live monthly clinical Q&A sessions",
                "Unrivalled protocol breakdowns and clinical study notes",
                "Premium deep-dive articles on midlife longevity",
                "Full access to the complete Mamichie® Clinical Library",
                "Priority booking access for The Residency"
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-brand-gold shrink-0" />
                  <span className="text-sm text-brand-black/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Pricing Cards */}
          <div className="flex flex-col sm:flex-row gap-6 lg:justify-end">
            
            {/* Monthly Card */}
            <div className="bg-white border border-brand-gold/20 rounded-sm p-8 flex-1 max-w-sm shadow-sm flex flex-col">
              <h3 className="font-display text-3xl text-brand-black mb-4 pb-4 border-b border-brand-gold/20">Monthly</h3>
              <p className="text-sm text-brand-black/80 font-medium mb-4">£19 GBP / month</p>
              <p className="text-xs text-brand-black/60 mb-8 flex-grow">Billed monthly. Cancel anytime.</p>
              <button 
                onClick={() => handleCheckout("monthly")}
                disabled={isProcessing}
                className="w-full border border-brand-black text-brand-black font-bold uppercase tracking-widest text-[11px] py-4 rounded-full hover:bg-brand-black hover:text-white transition-all disabled:opacity-50"
              >
                {isProcessing ? "Processing..." : "Sign Up"}
              </button>
            </div>

            {/* Annual Card */}
            <div className="bg-white border border-brand-gold/20 rounded-sm p-8 flex-1 max-w-sm shadow-md flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
              <h3 className="font-display text-3xl text-brand-black mb-4 pb-4 border-b border-brand-gold/20">Annual</h3>
              <p className="text-sm text-brand-black/80 font-medium mb-4">
                £149 GBP / year <span className="text-brand-gold font-bold ml-1">35% off</span>
              </p>
              <p className="text-xs text-brand-black/60 mb-8 flex-grow">Billed annually.</p>
              <button 
                onClick={() => handleCheckout("annual")}
                disabled={isProcessing}
                className="w-full bg-brand-gold border border-brand-gold text-brand-black font-bold uppercase tracking-widest text-[11px] py-4 rounded-full hover:bg-brand-black hover:border-brand-black hover:text-white transition-all shadow-sm disabled:opacity-50"
              >
                {isProcessing ? "Processing..." : "Sign Up"}
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MISSION BANNER */}
      <section className="bg-brand-black py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-6 leading-tight">
            It is entirely essential to provide this clinical education without relying on brand sponsorships or paid advertising.
          </h2>
          <p className="font-body text-sm text-white/70 leading-relaxed max-w-2xl mx-auto">
            To do this, our work is supported directly by our members. In return we offer exclusive content, direct clinical insights and the additional benefits detailed below.
          </p>
        </div>
      </section>

      {/* 3. FEATURE: Q&A ACCESS */}
      <section className="py-24 px-6 bg-white border-b border-brand-gold/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative aspect-[4/3] w-full rounded-sm overflow-hidden shadow-md">
             <img src="/van.avif" alt="Dr Vanessa Stirzaker" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-brand-black/10 flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-white/80" />
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="font-display text-4xl text-brand-black leading-tight">
              Exclusive Access to Live Clinical Q&A Sessions
            </h2>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-sm text-brand-black/80 leading-relaxed text-left">
                  <strong className="text-brand-black">Full Catalogue Access:</strong> Get immediate access to all past clinical Q&A recordings and transcripts.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-sm text-brand-black/80 leading-relaxed text-left">
                  <strong className="text-brand-black">Exclusive Monthly Releases:</strong> Enjoy monthly deep dives where Dr Stirzaker answers member-submitted questions.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-sm text-brand-black/80 leading-relaxed text-left">
                  <strong className="text-brand-black">In-Depth Answers:</strong> Each session provides detailed precision medicine responses typically centred on a single hormonal or metabolic topic.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. FEATURE: PROTOCOL BREAKDOWNS */}
      <section className="py-24 px-6 bg-brand-tint border-b border-brand-gold/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-4xl text-brand-black leading-tight">
              Unrivalled Protocol Breakdowns and Clinical Briefings
            </h2>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-sm text-brand-black/80 leading-relaxed text-left">
                  <strong className="text-brand-black">Exhaustive Documentation:</strong> Every premium article includes detailed clinical notes covering every study, supplement and physiological pathway mentioned.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-sm text-brand-black/80 leading-relaxed text-left">
                  <strong className="text-brand-black">Unmatched Quality:</strong> Access the exact intellectual frameworks and step-by-step logic used inside the 3R Method™ consultations.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-sm text-brand-black/80 leading-relaxed text-left">
                  <strong className="text-brand-black">Ultimate Resource Guide:</strong> Our protocol notes serve as a complete reference library making it easy to implement precision health strategies at home.
                </p>
              </li>
            </ul>
          </div>
          <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[500px] w-full rounded-sm overflow-hidden shadow-md bg-white border border-brand-gold/20 p-8 flex flex-col">
             <div className="flex items-center space-x-2 text-brand-gold mb-6 pb-4 border-b border-brand-gold/10">
               <FileText className="w-5 h-5" />
               <span className="font-bold uppercase tracking-widest text-[10px]">Premium Briefing Extract</span>
             </div>
             <div className="space-y-4 text-xs font-body text-brand-black/70 flex-grow blur-[1px] select-none">
               <p><strong className="text-brand-black">Insulin Sensitivity Protocol:</strong> The interaction between sleep architecture and morning cortisol spikes directly blunts insulin sensitivity...</p>
               <p>We see a marked decrease in glucose clearance when phase two deep sleep is interrupted. The intervention hierarchy must prioritise...</p>
               <p className="ml-4 border-l-2 border-brand-gold/30 pl-4 italic">"If we do not correct the cortisol awakening response first, any nutritional protocol will face severe metabolic resistance."</p>
               <p>Therefore the first application is establishing a rigid circadian anchor using early light exposure and targeted amino acid timing...</p>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent flex items-end justify-center pb-12">
                <div className="bg-brand-black text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center space-x-2">
                  <Lock className="w-3 h-3" />
                  <span>Members Only Area</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. CHECKOUT/ACTION SECTION */}
      <section className="py-24 px-6 bg-white border-b border-brand-gold/10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] font-bold tracking-[0.2em] text-brand-black uppercase mb-4 block">
            Become a Member
          </span>
          <h2 className="font-display text-4xl text-brand-black mb-6">
            Take a Positive Step Towards Your Hormonal Health.
          </h2>
          <p className="text-sm text-brand-black/70 mb-12 max-w-xl mx-auto">
            If you already have an account, <Link href="/login" className="text-brand-gold hover:underline">log in here</Link>. 
          </p>

          <div className="bg-brand-tint border border-brand-gold/20 p-8 rounded-sm shadow-sm max-w-xl mx-auto text-left">
            
            {/* Toggle Plan */}
            <div className="flex bg-white rounded-sm border border-brand-gold/20 p-1 mb-8">
              <button 
                onClick={() => setBillingCycle("monthly")}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-colors ${billingCycle === "monthly" ? "bg-brand-gold text-brand-black" : "text-brand-black/50 hover:text-brand-black"}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingCycle("annual")}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-colors ${billingCycle === "annual" ? "bg-brand-gold text-brand-black" : "text-brand-black/50 hover:text-brand-black"}`}
              >
                Annual
              </button>
            </div>

            <div className="mb-8">
              <h3 className="font-display text-2xl text-brand-black mb-2">
                {billingCycle === "monthly" ? "Monthly Membership" : "Annual Membership"}
              </h3>
              <p className="text-sm text-brand-black/70">
                {billingCycle === "monthly" ? "£19 GBP billed every month." : "£149 GBP billed every year (Save 35%)."} Cancel anytime securely via your client portal.
              </p>
            </div>

            <button 
              onClick={() => handleCheckout(billingCycle)}
              disabled={isProcessing}
              className="w-full bg-brand-black text-brand-tint font-bold uppercase tracking-widest text-xs py-4 rounded-sm hover:bg-brand-gold hover:text-brand-black transition-all shadow-md disabled:opacity-50"
            >
              {isProcessing ? "Connecting to secure checkout..." : "Continue to Payment"}
            </button>
            <p className="text-[10px] text-center text-brand-black/40 mt-4 uppercase tracking-wider">
              Secure processing via Stripe
            </p>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 px-6 bg-brand-tint">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-brand-black mb-10">
            Hear From Women Who Trust The Method
          </h2>
          
          <div className="flex justify-center items-center space-x-1 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 text-brand-gold fill-brand-gold" />
            ))}
          </div>

          <p className="font-display text-2xl sm:text-3xl text-brand-black/90 leading-snug italic max-w-2xl mx-auto mb-6">
            "Finally an approach that treats midlife women with clinical intelligence. The depth of the protocol notes alone is worth the membership. This has completely changed how I manage my metabolism."
          </p>
          
          <p className="text-[10px] font-bold tracking-widest uppercase text-brand-black/50">
            Verified Member Review
          </p>
        </div>
      </section>

    </div>
  );
}