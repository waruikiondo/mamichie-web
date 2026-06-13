import React from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { ChevronLeft, Calendar, BookOpen, ArrowRight, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

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
    <article className="min-h-screen bg-[#FDFBF7] text-[#4A1D36] py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Navigation */}
        <Link href="/resources/library" className="flex items-center text-xs font-bold uppercase tracking-widest text-[#4A1D36]/60 mb-10 hover:text-[#4A1D36] transition-colors">
          <ChevronLeft className="w-4 h-4 mr-2" /> Back to Library
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[#4A1D36] mb-8 leading-[1.1] tracking-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-xs uppercase tracking-widest text-[#4A1D36]/70 font-semibold mb-10 pb-10 border-b border-[#EBE1D9]">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {new Date(article.published_at).toLocaleDateString()}</span>
            <span>Dr. Vanessa Susana Stirzaker</span>
          </div>

          {/* Hero Image */}
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-sm border border-[#EBE1D9]">
            <img src={getImageUrl(resolvedParams.slug)} alt={article.title} className="w-full h-full object-cover" />
          </div>
        </header>

        {/* 
            FIXED SPACING AND INDENTATION:
            The classes below specifically target the spacing (mt/mb) 
            and list indentation (pl) to ensure it looks professional.
        */}
        <div className="prose prose-lg max-w-none 
          prose-headings:text-[#4A1D36] prose-headings:font-bold 
          prose-p:text-[#4A1D36]/90 prose-p:leading-[1.8] prose-p:mb-8 
          prose-ul:list-disc prose-ul:pl-8 prose-ul:mb-8 
          prose-li:text-[#4A1D36]/90 prose-li:mb-3 prose-li:pl-2
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4">
          
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-[#EBE1D9] text-center">
          <Link href="/resources/library" className="inline-flex items-center space-x-3 bg-[#4A1D36] text-white px-10 py-4 rounded-full text-sm font-bold hover:bg-[#6B2B4E] transition-all shadow-md">
            <span>Explore Clinical Library</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </footer>
      </div>
    </article>
  );
}