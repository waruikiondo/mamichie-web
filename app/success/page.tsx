import React from "react";
import Link from "next/link";
import { CheckCircle, BookOpen, ArrowRight } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-[85vh] bg-brand-tint text-brand-black font-body flex items-center justify-center p-6 selection:bg-brand-gold/30">
      <div className="max-w-xl w-full bg-white border border-brand-gold/20 p-10 sm:p-16 rounded-sm shadow-xl text-center relative overflow-hidden">
        
        {/* Subtle top accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-gold"></div>
        
        <CheckCircle className="w-16 h-16 text-brand-gold mx-auto mb-8" />
        
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-black uppercase mb-4">
          Order Confirmed
        </h1>
        
        <p className="font-body text-base text-brand-black/80 leading-relaxed mb-8">
          Thank you for your purchase. Your copy of <span className="font-bold italic">The 3R Method™</span> is being prepared for dispatch. 
        </p>

        <div className="bg-brand-tint/50 border border-brand-gold/10 p-6 rounded-sm mb-10 text-left">
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-black mb-3">What happens next?</h3>
          <ul className="space-y-3 text-sm text-brand-black/70 font-medium">
            <li className="flex items-start space-x-2">
              <span className="text-brand-gold mt-0.5">•</span>
              <span>You will receive an email receipt directly from Stripe.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-brand-gold mt-0.5">•</span>
              <span>Once your book is dispatched, you will receive a second email containing your tracking details.</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/resources/library"
            className="flex items-center justify-center space-x-2 bg-brand-black text-brand-tint px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-black transition-all shadow-md w-full sm:w-auto"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read Clinical Insights</span>
          </Link>
          <Link 
            href="/"
            className="flex items-center justify-center space-x-2 border border-brand-black/20 text-brand-black px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase hover:border-brand-gold hover:text-brand-gold transition-all w-full sm:w-auto"
          >
            <span>Return Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}