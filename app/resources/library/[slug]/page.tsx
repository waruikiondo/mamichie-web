import React from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { ChevronLeft, Calendar, BookOpen } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Fetch article data directly on the server for speed and optimal SEO indexing
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

  // Fallback state if an article slug isn't matched in Supabase
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

        {/* Article Meta Header Block */}
        <header className="border-b border-brand-gold/20 pb-8 mb-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold px-2.5 py-1 bg-white border border-brand-gold/20 rounded-xs inline-block mb-4">
            Pillar: {article.pillar.replace("-", " ")}
          </span>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-tight text-brand-black">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-6 text-[11px] font-medium tracking-wide text-brand-black/40 uppercase">
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
              <span>Mamichie® Authoritative Briefing</span>
            </div>
          </div>
        </header>

        {/* Structured Executive Summary Row */}
        <div className="bg-white border border-brand-gold/15 p-6 rounded-sm mb-12 italic text-sm text-brand-black/80 font-medium leading-relaxed shadow-xs">
          <strong className="block text-[10px] font-bold tracking-widest uppercase text-brand-gold not-italic mb-1">
            Clinical Overview
          </strong>
          &quot;{article.summary}&quot;
        </div>

        {/* Core Markdown Text Body Layer */}
        <div className="prose prose-brand max-w-none text-brand-black/90 leading-relaxed font-body text-sm space-y-6 whitespace-pre-wrap">
          {article.content}
        </div>

        {/* Footer Navigation Section */}
        <footer className="border-t border-brand-gold/20 mt-16 pt-8 text-center">
          <p className="text-[10px] uppercase font-bold tracking-widest text-brand-black/30 mb-4">
            End of Intelligence Briefing
          </p>
          <Link 
            href="/resources/library"
            className="inline-block border border-brand-black bg-brand-black text-brand-tint text-xs font-bold uppercase tracking-widest py-3 px-8 rounded-sm hover:bg-brand-gold hover:border-brand-gold transition-colors shadow-sm"
          >
            Explore Alternative Pillars
          </Link>
        </footer>

      </div>
    </article>
  );
}