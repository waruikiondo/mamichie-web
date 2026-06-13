import React from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { ChevronLeft, Calendar, BookOpen, ArrowRight } from "lucide-react";

export const dynamic = 'force-dynamic';

// Helper function to map slugs to image files in the /public folder
const getImageUrl = (slug: string) => {
  const map: Record<string, string> = {
    "menopause-weight-gain-decoded-how-to-fight-back": "/meno.avif",
    "daily-nutritional-caloric-intake-recommendations": "/nutritional.avif",
    "lets-talk-brain-fog-understanding-menopause-mental-haze": "/brain.avif",
    "the-mamichie-3r-method-program": "/mamichie.avif",
    "fueling-the-change-the-power-of-nutrition-during-menopause": "/change.avif",
    "daily-reset-ritual-guide": "/reset.avif",
    "how-cortisol-could-be-sabotaging-your-midlife-health": "/cortisol.avif",
    "stress-your-ovaries-what-every-woman-needs-to-know": "/stress.avif",
  };
  return map[slug] || "/logo.avif";
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getArticleData(slug: string) {
  const { data, error } = await supabase
    .from("posts")
    .select("title, content, pillar, published_at, summary")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return null;
  }
  return data;
}

export default async function ClinicalArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = await getArticleData(resolvedParams.slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-brand-tint text-brand-black flex flex-col items-center justify-center p-6">
        <h1 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-black">
          Clinical Briefing Not Found
        </h1>
        <p className="text-xs text-brand-black/60 font-body mt-2 mb-6">
          The requested document may be undergoing editorial or clinical modification.
        </p>
        <Link 
          href="/resources/library" 
          className="text-xs font-bold uppercase tracking-widest text-brand-gold flex items-center space-x-2 hover:underline"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Return to Clinical Library</span>
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-brand-tint text-brand-black font-body py-16 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <Link 
          href="/resources/library" 
          className="text-[10px] font-bold uppercase tracking-widest text-brand-black/50 flex items-center space-x-1.5 hover:text-brand-gold transition-colors mb-8"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>Back to Library Hub</span>
        </Link>

        {/* Enhanced Hero Image */}
        <div className="w-full aspect-[21/9] rounded-sm overflow-hidden mb-12 shadow-md bg-white border border-brand-gold/10">
          <img 
            src={getImageUrl(resolvedParams.slug)} 
            alt={article.title} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Article Meta Header Block */}
        <header className="border-b border-brand-gold/20 pb-10 mb-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold px-3 py-1 bg-white border border-brand-gold/20 rounded-sm inline-block mb-6">
            Pillar: {article.pillar.replace("-", " ")}
          </span>
          
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight uppercase leading-tight text-brand-black">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 mt-8 text-[11px] font-bold tracking-widest text-brand-black/50 uppercase">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-brand-gold" />
              <span>
                {new Date(article.published_at).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-brand-gold" />
              <span>Mamichie® Intelligence</span>
            </div>
          </div>
        </header>

        {/* Structured Executive Summary Row */}
        <div className="bg-white border border-brand-gold/20 p-8 rounded-sm mb-16 shadow-sm">
          <strong className="block text-[10px] font-bold tracking-widest uppercase text-brand-gold mb-3">
            Clinical Overview
          </strong>
          <p className="text-sm text-brand-black/80 font-medium italic leading-relaxed">
            &quot;{article.summary}&quot;
          </p>
        </div>

        {/* Core Markdown Text Body Layer - Updated Typography */}
        <div className="prose prose-brand prose-headings:font-display prose-headings:uppercase prose-p:leading-relaxed prose-p:text-sm prose-p:text-brand-black/90 max-w-none space-y-8">
          {article.content}
        </div>

        {/* Updated Footer Navigation Section */}
        <footer className="border-t border-brand-gold/20 mt-20 pt-12 text-center">
          <p className="text-[10px] uppercase font-bold tracking-widest text-brand-black/30 mb-6">
            End of Intelligence Briefing
          </p>
          <Link 
            href="/resources/library"
            className="group inline-flex items-center space-x-3 border border-brand-gold bg-brand-gold text-brand-black text-xs font-bold uppercase tracking-widest py-4 px-10 rounded-sm hover:bg-brand-black hover:text-white hover:border-brand-black transition-all duration-300 shadow-md"
          >
            <span>Explore Alternative Pillars</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </footer>

      </div>
    </article>
  );
}