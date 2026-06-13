"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Crown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-tint/90 backdrop-blur-md border-b border-brand-gold/20 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Identity Logo */}
        <Link href="/" className="flex items-center group">
          <img 
            src="/logo.avif" 
            alt="Mamichie Healthcare Logo" 
            className="h-10 sm:h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80" 
          />
        </Link>

        {/* Desktop Navigation Structure */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide">
          <Link href="/about-us" className="text-brand-black/80 hover:text-brand-gold transition-colors">About Dr Stirzaker</Link>
          <Link href="/the-3r-method" className="text-brand-black/80 hover:text-brand-gold transition-colors">The 3R Method™</Link>
          
          {/* Work With Me Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center space-x-1 text-brand-black/80 hover:text-brand-gold transition-colors cursor-pointer">
              <span>Work With Me</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 w-56 bg-brand-tint border border-brand-gold/20 shadow-xl rounded-sm p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/consultations" className="block px-4 py-2 text-xs rounded-sm hover:bg-brand-gold/10 text-brand-black">Virtual Consultations</Link>
              <Link href="/residency" className="block px-4 py-2 text-xs rounded-sm hover:bg-brand-gold/10 text-brand-black">The Residency</Link>
              <Link href="/webinars" className="block px-4 py-2 text-xs rounded-sm hover:bg-brand-gold/10 text-brand-black">Webinars</Link>
              <Link href="/courses" className="block px-4 py-2 text-xs rounded-sm hover:bg-brand-gold/10 text-brand-black">Courses</Link>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center space-x-1 text-brand-black/80 hover:text-brand-gold transition-colors cursor-pointer">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 w-56 bg-brand-tint border border-brand-gold/20 shadow-xl rounded-sm p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/resources/library" className="block px-4 py-2 text-xs rounded-sm hover:bg-brand-gold/10 text-brand-black">Clinical Library</Link>
              <Link href="/starter-guide" className="block px-4 py-2 text-xs rounded-sm hover:bg-brand-gold/10 text-brand-black">Free Starter Guide</Link>
              <Link href="/the-book" className="block px-4 py-2 text-xs rounded-sm hover:bg-brand-gold/10 text-brand-black">The Book</Link>
              <Link href="/shop" className="block px-4 py-2 text-xs rounded-sm hover:bg-brand-gold/10 text-brand-black">Shop</Link>
            </div>
          </div>

          <Link href="/contact" className="text-brand-black/80 hover:text-brand-gold transition-colors">Contact</Link>
        </nav>

        {/* Persistent Action CTA Buttons (Dual Setup) */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link 
            href="/membership" 
            className="flex items-center space-x-1.5 bg-[#6A1B41] text-white px-6 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-black transition-all shadow-sm"
          >
            <Crown className="w-3.5 h-3.5" />
            <span>Membership</span>
          </Link>
          <Link 
            href="/book-now" 
            className="bg-brand-gold text-brand-black px-6 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-brand-black hover:text-white transition-all shadow-sm block"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburguer Toggle */}
        <button className="lg:hidden p-2 text-brand-black cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-gold/20 bg-brand-tint px-6 py-6 space-y-4 shadow-inner">
          <Link href="/about-us" className="block font-medium text-brand-black" onClick={() => setMobileMenuOpen(false)}>About Dr Stirzaker</Link>
          <Link href="/the-3r-method" className="block font-medium text-brand-black" onClick={() => setMobileMenuOpen(false)}>The 3R Method™</Link>
          <div className="pl-4 space-y-2 border-l border-brand-gold/25">
            <span className="block text-xs font-bold text-brand-gold uppercase tracking-wider">Work With Me</span>
            <Link href="/consultations" className="block text-sm text-brand-black/80" onClick={() => setMobileMenuOpen(false)}>Virtual Consultations</Link>
            <Link href="/residency" className="block text-sm text-brand-black/80" onClick={() => setMobileMenuOpen(false)}>The Residency</Link>
            <Link href="/webinars" className="block text-sm text-brand-black/80" onClick={() => setMobileMenuOpen(false)}>Webinars</Link>
            <Link href="/courses" className="block text-sm text-brand-black/80" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
          </div>
          <div className="pl-4 space-y-2 border-l border-brand-gold/25">
            <span className="block text-xs font-bold text-brand-gold uppercase tracking-wider">Resources</span>
            <Link href="/resources/library" className="block text-sm text-brand-black/80" onClick={() => setMobileMenuOpen(false)}>Clinical Library</Link>
            <Link href="/starter-guide" className="block text-sm text-brand-black/80" onClick={() => setMobileMenuOpen(false)}>Free Starter Guide</Link>
            <Link href="/the-book" className="block text-sm text-brand-black/80" onClick={() => setMobileMenuOpen(false)}>The Book</Link>
            <Link href="/shop" className="block text-sm text-brand-black/80" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          </div>
          <Link href="/contact" className="block font-medium text-brand-black" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          
          {/* Mobile Dual CTA Buttons */}
          <div className="pt-4 space-y-3">
            <Link 
              href="/membership" 
              className="flex items-center justify-center space-x-2 w-full bg-[#6A1B41] text-white py-3.5 rounded-sm font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:bg-brand-gold hover:text-brand-black" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <Crown className="w-4 h-4" />
              <span>Membership</span>
            </Link>
            <Link 
              href="/book-now" 
              className="block w-full bg-brand-gold text-brand-black text-center py-3.5 rounded-sm font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:bg-brand-black hover:text-white" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}