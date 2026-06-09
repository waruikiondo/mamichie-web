import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-tint border-t border-brand-gold/20 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Structural Column Grids */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold font-body">Practice</h4>
            <ul className="space-y-2 text-xs font-body tracking-wide text-brand-black/70">
              <li><Link href="/about-us" className="hover:text-brand-gold transition-colors">About Dr Stirzaker</Link></li>
              <li><Link href="/the-3r-method" className="hover:text-brand-gold transition-colors">The 3R Method™</Link></li>
              <li><Link href="/consultations" className="hover:text-brand-gold transition-colors">Virtual Consultations</Link></li>
              <li><Link href="/residency" className="hover:text-brand-gold transition-colors">The Residency</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold font-body">Resources</h4>
            <ul className="space-y-2 text-xs font-body tracking-wide text-brand-black/70">
              <li><Link href="/resources/library" className="hover:text-brand-gold transition-colors">Clinical Library</Link></li>
              <li><Link href="/starter-guide" className="hover:text-brand-gold transition-colors">Free Starter Guide</Link></li>
              <li><Link href="/the-book" className="hover:text-brand-gold transition-colors">The Book</Link></li>
              <li><Link href="/shop" className="hover:text-brand-gold transition-colors">Shop</Link></li>
              <li><Link href="/webinars" className="hover:text-brand-gold transition-colors">Webinar</Link></li>
              <li><Link href="/courses" className="hover:text-brand-gold transition-colors">Courses <span className="text-[9px] text-brand-gold/60 lowercase italic">(coming soon)</span></Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold font-body">Legal</h4>
            <ul className="space-y-2 text-xs font-body tracking-wide text-brand-black/70">
              <li><Link href="/privacy-policy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/booking-policy" className="hover:text-brand-gold transition-colors">Booking Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-brand-gold transition-colors">Web Terms of Use</Link></li>
              <li><Link href="/faq" className="hover:text-brand-gold transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold font-body">Connect</h4>
            <ul className="space-y-2 text-xs font-body tracking-wide text-brand-black/70">
              <li><a href="https://www.instagram.com/mamichie_healthcare" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Instagram: @mamichie_healthcare</a></li>
              <li><a href="https://www.facebook.com/share/1LUtckbaTg/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Facebook</a></li>
              <li className="pt-2 text-brand-black font-semibold">info@mamichiehealthcare.com</li>
              <li className="text-brand-black font-semibold">+44 7984 469 526</li>
            </ul>
          </div>

        </div>

        <hr className="border-brand-gold/20 my-8" />

        {/* Exact Brand Tagline and Corporate Footprint Mapping */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="font-display text-lg font-bold tracking-tight text-brand-black">
            Precision Beats Willpower.™ <span className="text-brand-gold font-light">Mamichie Healthcare®.</span>
          </p>
          <p className="text-[10px] text-brand-black/50 font-body leading-relaxed max-w-2xl text-justify md:text-right">
            Mamichie Healthcare® is a registered trademark. Mamichie Healthcare Limited is registered in England and Wales, Company No. 12617964. The 3R Method™ is an internationally accredited proprietary framework. All content on this site is for educational and informational purposes only and does not constitute medical advice. All policies are subject to English law.
          </p>
        </div>

      </div>
    </footer>
  );
}