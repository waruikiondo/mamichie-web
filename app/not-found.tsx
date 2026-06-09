import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] bg-black font-body text-white selection:bg-brand-gold/30">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold tracking-wider pr-6 border-r border-white/30 mr-6">
          404
        </h1>
        <h2 className="text-sm font-normal tracking-wide">
          This page could not be found.
        </h2>
      </div>
      
      <Link 
        href="/" 
        className="mt-12 text-[10px] font-bold uppercase tracking-widest text-brand-gold hover:text-white transition-colors"
      >
        Return to Homepage
      </Link>
    </div>
  );
}