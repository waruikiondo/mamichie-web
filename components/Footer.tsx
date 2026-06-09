import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 px-6 font-body">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Tagline Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-brand-gold/20 pb-12 mb-12">
          <div className="flex flex-col">
            <span className="font-display text-2xl md:text-3xl font-medium tracking-wide text-white">
              MAMICHIE <span className="text-brand-gold">HEALTHCARE®</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-bold mt-2">
              Precision Beats Willpower.™
            </span>
          </div>
        </div>

        {/* 4-Column Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Practice */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[11px] font-bold tracking-widest text-brand-gold uppercase mb-2">Practice</h4>
            <Link href="/about-us" className="text-sm text-white/70 hover:text-brand-gold transition-colors">About Dr Stirzaker</Link>
            <Link href="/the-3r-method" className="text-sm text-white/70 hover:text-brand-gold transition-colors">The 3R Method™</Link>
            <Link href="/consultations" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Virtual Consultations</Link>
            <Link href="/residency" className="text-sm text-white/70 hover:text-brand-gold transition-colors">The Residency</Link>
          </div>

          {/* Column 2: Resources */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[11px] font-bold tracking-widest text-brand-gold uppercase mb-2">Resources</h4>
            <Link href="/resources/library" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Clinical Library</Link>
            <Link href="/free-guide" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Free Starter Guide</Link>
            <Link href="/shop" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Shop</Link>
            <Link href="/webinars" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Webinars</Link>
            <Link href="/courses" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Courses (Coming Soon)</Link>
            <Link href="/the-book" className="text-sm text-white/70 hover:text-brand-gold transition-colors">The Book</Link>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[11px] font-bold tracking-widest text-brand-gold uppercase mb-2">Legal</h4>
            <Link href="/privacy" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="/booking-policy" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Booking Policy</Link>
            <Link href="/terms" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Web Terms of Use</Link>
            <Link href="/faq" className="text-sm text-white/70 hover:text-brand-gold transition-colors">FAQs</Link>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[11px] font-bold tracking-widest text-brand-gold uppercase mb-2">Connect</h4>
            <a href="https://instagram.com/mamichie_healthcare" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-brand-gold transition-colors flex items-center gap-2">
              <FaInstagram className="w-4 h-4" /> Instagram: @mamichie_healthcare
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-brand-gold transition-colors flex items-center gap-2">
              <FaFacebook className="w-4 h-4" /> Facebook
            </a>
            <a href="mailto:info@mamichiehealthcare.com" className="text-sm text-white/70 hover:text-brand-gold transition-colors mt-4 block">
              info@mamichiehealthcare.com
            </a>
            <span className="text-sm text-white/70">
              +44 7984 469 526
            </span>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="border-t border-brand-gold/20 pt-8 flex flex-col space-y-4 text-[10px] text-white/40 leading-relaxed max-w-4xl">
          <p>
            Mamichie Healthcare® is a registered trademark. Mamichie Healthcare Limited is registered in England and Wales, Company No. 12617964. The 3R Method™ is an internationally accredited proprietary framework. All content on this site is for educational and informational purposes only and does not constitute medical advice. All policies are subject to English law.
          </p>
          <p>© {new Date().getFullYear()} Mamichie Healthcare Limited. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}