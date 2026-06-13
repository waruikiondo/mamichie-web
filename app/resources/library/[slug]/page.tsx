import React from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { ChevronLeft, ArrowRight, User } from "lucide-react";
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
    <article className="min-h-screen bg-[#FDFBF7] text-[#4A1D36] py-16 px-6 md:px-12 font-body">
      <div className="max-w-[720px] mx-auto">
        
        {/* Author Meta Header (Exactly matching the screenshot) */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 rounded-full overflow-hidden">
             {/* Using a placeholder image that looks like the avatar in your screenshot */}
            <img src="/logo.avif" alt="Author Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="text-[15px] text-[#4A1D36] flex items-center space-x-2">
            <span>Dr. Vanessa Susana Stirzaker</span>
            <span>·</span>
            <span>2 min read</span>
          </div>
        </div>

        {/* Headline (Matching the font weight and color from screenshot) */}
        <h1 className="text-[40px] leading-[1.2] text-[#4A1D36] mb-12">
          {article.title}
        </h1>

        {/* Hero Image */}
        <div className="w-full rounded-2xl overflow-hidden mb-12">
          <img src={getImageUrl(resolvedParams.slug)} alt={article.title} className="w-full h-auto object-cover" />
        </div>

        {/* 
            THE EDITORIAL FORMATTING 
            We have completely removed the Tailwind "prose" class.
            This ensures zero interference and gives us 100% control to match your screenshots.
        */}
        <div className="w-full text-[#4A1D36]">
          <ReactMarkdown
            components={{
              // Paragraphs: Exact matching line-height and margin
              p: ({ node, ...props }) => (
                <p className="text-[17px] leading-[1.8] mb-6 text-[#4A1D36]" {...props} />
              ),
              
              // Headings: Matching the non-heavy font weight and size
              h2: ({ node, ...props }) => (
                <h2 className="text-[26px] font-normal text-[#4A1D36] mt-12 mb-4 leading-snug" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-[22px] font-normal text-[#4A1D36] mt-10 mb-3 leading-snug" {...props} />
              ),
              
              // Bulleted Lists: Using custom bullet styling to make the dots plum colored
              ul: ({ node, ...props }) => (
                <ul className="list-disc pl-8 mb-8 space-y-2 text-[#4A1D36] marker:text-[#4A1D36]" {...props} />
              ),
              
              // List Items: Exact text size and line height
              li: ({ node, ...props }) => (
                <li className="text-[17px] leading-[1.8] text-[#4A1D36] pl-2" {...props} />
              ),
              
              // Italic text (like "literally age your ovaries")
              em: ({ node, ...props }) => (
                <em className="italic text-[#4A1D36]" {...props} />
              ),

              // Bold text
              strong: ({ node, ...props }) => (
                <strong className="font-semibold text-[#4A1D36]" {...props} />
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-[#4A1D36]/20 text-center">
          <Link href="/resources/library" className="inline-flex items-center space-x-2 text-[15px] font-medium text-[#4A1D36] hover:opacity-70 transition-opacity">
            <ChevronLeft className="w-4 h-4" />
            <span>Return to Clinical Library</span>
          </Link>
        </footer>
      </div>
    </article>
  );
}