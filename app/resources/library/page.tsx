"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { BookOpen, ShieldAlert, Heart, Zap, Moon, Flame, Loader2 } from "lucide-react";

const PILLARS = [
  { id: "all", label: "All Insights", icon: BookOpen, desc: "Explore the full collection of evidence-based clinical intelligence." },
  { id: "hormonal-architecture", label: "Hormonal Architecture", icon: Zap, desc: "Oestrogen, progesterone, testosterone, DHEA, cortisol, insulin, thyroid hormones and melatonin in midlife: how they interact and why they matter." },
  { id: "movement-muscle", label: "Movement and Muscle", icon: Flame, desc: "Strength, stability and metabolic conditioning designed for the midlife body." },
  { id: "metabolic-precision", label: "Metabolic Precision", icon: Heart, desc: "Blood sugar regulation, body composition and nutrition protocols rooted in clinical evidence." },
  { id: "sleep-nervous-system", label: "Sleep and Nervous System", icon: Moon, desc: "Sleep architecture, cortisol rhythms, melatonin signalling and stress physiology." },
  { id: "cardiovascular-cognitive", label: "Cardiovascular and Cognitive Protection", icon: ShieldAlert, desc: "Heart and brain health after 40: what the evidence says and what to do about it." },
  { id: "hrt-supplements", label: "HRT, Supplements and Clinical Tools", icon: BookOpen, desc: "Evidence, options and how to use them intelligently." },
];

interface Post {
  slug: string;
  title: string;
  summary: string;
  pillar: string;
}

export default function ClinicalLibraryPage() {
  const [activePillar, setActivePillar] = useState("all");
  const [articles, setArticles] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        let query = supabase.from("posts").select("slug, title, summary, pillar");
        
        if (activePillar !== "all") {
          query = query.eq("pillar", activePillar);
        }

        const { data, error } = await query.order("published_at", { ascending: false });
        if (error) throw error;
        setArticles(data || []);
      } catch (err) {
        console.error("Error pulling clinical library data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [activePillar]);

  return (
    <div className="min-h-screen bg-brand-tint text-brand-black font-body py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-black uppercase">
            The Mamichie® Clinical Library
          </h1>
          <p className="text-sm tracking-wide text-brand-gold font-body uppercase font-medium mt-3">
            Evidence-based clinical insights for midlife women. Organised by the six health pillars of the 3R Method™.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Navigation Filter Sidebar */}
          <div className="space-y-2 lg:col-span-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40 block mb-4 px-3">
              Filter by Health Pillar
            </span>
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(p.id)}
                  className={`w-full text-left p-3.5 rounded-sm border transition-all flex items-start space-x-3 text-xs tracking-wide font-medium ${
                    activePillar === p.id 
                      ? "bg-brand-black border-brand-black text-brand-tint shadow-sm" 
                      : "bg-white/40 border-brand-gold/20 hover:border-brand-gold/60 text-brand-black"
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${activePillar === p.id ? "text-brand-gold" : "text-brand-black/60"}`} />
                  <span>{p.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Content Grid Feed Area */}
          <div className="lg:col-span-3 space-y-6">
            
            <div className="bg-white/60 border border-brand-gold/15 p-6 rounded-sm">
              <h3 className="text-xs font-bold uppercase text-brand-gold tracking-widest font-body mb-1">
                Active Category Profile
              </h3>
              <p className="text-sm text-brand-black/80 font-medium leading-relaxed">
                {PILLARS.find(p => p.id === activePillar)?.desc}
              </p>
            </div>

            {/* Articles List Content Render Layer */}
            {loading ? (
              <div className="flex flex-col items-center justify-center p-24 text-brand-gold">
                <Loader2 className="w-8 h-8 animate-spin" />
                <span className="text-xs font-body tracking-widest uppercase mt-4 text-brand-black/40">Synchronising Library...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.length > 0 ? (
                  articles.map((article) => (
                    <Link 
                      key={article.slug} 
                      href={`/resources/library/${article.slug}`}
                      className="border border-brand-gold/20 bg-white hover:border-brand-gold p-6 rounded-sm flex flex-col justify-between transition-all group cursor-pointer shadow-xs block"
                    >
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-brand-gold px-2 py-0.5 bg-brand-tint border border-brand-gold/20 rounded-xs">
                          {article.pillar.replace("-", " ")}
                        </span>
                        <h3 className="font-display text-xl font-bold text-brand-black mt-4 group-hover:text-brand-gold transition-colors leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-xs text-brand-black/60 font-body leading-relaxed mt-2 line-clamp-3">
                          {article.summary}
                        </p>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-black mt-6 block border-t border-brand-tint pt-4 group-hover:translate-x-1 transition-transform">
                        Read Clinical Briefing →
                      </span>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-2 text-center p-12 bg-white/20 border border-dashed border-brand-gold/20 rounded-sm">
                    <p className="text-sm text-brand-black/50 italic font-body">
                      Insights for this specific health pillar are currently formatting under clinical review.
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}