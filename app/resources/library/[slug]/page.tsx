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
    <article className="min-h-screen bg-[#FDFBF7] text-[#4A1D36] font-body py-16 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Author Meta Header */}
        <div className="flex items-center space-x-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-[#E5D3D6] flex items-center justify-center overflow-hidden">
            <User className="w-6 h-6 text-[#4A1D36]" />
          </div>
          <div className="text-sm">
            <p className="font-bold text-[#4A1D36]">Dr. Vanessa Susana Stirzaker</p>
            <p className="text-[11px] text-[#4A1D36]/70 uppercase tracking-wider font-semibold">2 min read</p>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#4A1D36] mb-12 leading-[1.1]">
          {article.title}
        </h1>

        {/* Hero Image */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-16 shadow-lg border border-[#EBE1D9]">
          <img src={getImageUrl(resolvedParams.slug)} alt={article.title} className="w-full h-full object-cover" />
        </div>

        {/* Improved Content Body with Precise Spacing */}
        {/* Added specific spacing for lists and headings to mimic your reference */}
        <div className="prose prose-lg max-w-none 
          prose-headings:text-[#4A1D36] 
          prose-headings:font-bold 
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-[#4A1D36]/90 prose-p:leading-8 prose-p:mb-6
          prose-li:text-[#4A1D36]/90 prose-li:my-2
          prose-ul:mb-8 prose-ul:list-disc prose-ul:pl-6"
        >
           <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>

        {/* Footer CTA */}
        <footer className="mt-24 pt-16 border-t border-[#EBE1D9] text-center">
          <Link 
            href="/resources/library"
            className="inline-flex items-center space-x-3 bg-[#4A1D36] text-white px-10 py-4 rounded-full font-bold hover:bg-[#6B2B4E] transition-all shadow-md hover:shadow-lg"
          >
            <span>Explore Clinical Library</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </footer>
      </div>
    </article>
  );
}