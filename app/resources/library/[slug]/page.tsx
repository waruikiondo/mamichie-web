import React from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { ChevronLeft, Calendar, BookOpen, ArrowRight, User } from "lucide-react";

export const dynamic = 'force-dynamic';

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

interface PageProps { params: Promise<{ slug: string }>; }

async function getArticleData(slug: string) {
  const { data, error } = await supabase
    .from("posts")
    .select("title, content, pillar, published_at, summary")
    .eq("slug", slug)
    .single();
  return error ? null : data;
}

export default async function ClinicalArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = await getArticleData(resolvedParams.slug);

  if (!article) return <div>Article not found.</div>;

  return (
    <article className="min-h-screen bg-[#FDFBF7] text-[#4A1D36] font-body py-16 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* 1. Author Meta Header (Matches old site style) */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#E5D3D6] flex items-center justify-center overflow-hidden">
            <User className="w-6 h-6 text-[#4A1D36]" />
          </div>
          <div className="text-sm">
            <p className="font-bold text-[#4A1D36]">Dr. Vanessa Susana Stirzaker</p>
            <p className="text-[11px] text-[#4A1D36]/70">2 min read</p>
          </div>
        </div>

        {/* 2. Headline (Deep Maroon Color) */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#4A1D36] mb-10 leading-tight">
          {article.title}
        </h1>

        {/* 3. Hero Image (Soft Rounded Corners) */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-sm border border-[#EBE1D9]">
          <img src={getImageUrl(resolvedParams.slug)} alt={article.title} className="w-full h-full object-cover" />
        </div>

        {/* 4. Content Body (Using Tailwind Typography for list/heading structure) */}
        <div className="prose prose-lg prose-headings:text-[#4A1D36] prose-p:text-[#4A1D36]/90 prose-li:text-[#4A1D36]/90 max-w-none">
           {article.content}
        </div>

        {/* 5. Refined Footer CTA */}
        <footer className="mt-20 pt-12 border-t border-[#EBE1D9] text-center">
          <Link 
            href="/resources/library"
            className="inline-flex items-center space-x-2 bg-[#4A1D36] text-white px-8 py-3 rounded-full hover:bg-[#6B2B4E] transition-all"
          >
            <span>Explore Clinical Library</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </footer>
      </div>
    </article>
  );
}