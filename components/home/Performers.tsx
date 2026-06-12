"use client";

import { useCallback, useState } from "react";
import { performers } from "@/data/performers";
import { ArcanaDossierPanel } from "@/components/arcana/ArcanaDossierPanel";
import { ArcanaWindow } from "@/components/home/ArcanaWindow";

export function Performers() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [flippedSlug, setFlippedSlug] = useState<string | null>(null);

  const handleFlip = useCallback((slug: string) => {
    setFlippedSlug((current) => {
      if (current === slug) {
        setActiveSlug(null);
        return null;
      }
      setActiveSlug(slug);
      return slug;
    });
  }, []);

  const activePerformer = performers.find((p) => p.slug === activeSlug) ?? null;

  return (
    <section
      aria-labelledby="arcana-heading"
      className="arcana-section relative border-b border-white/20 bg-black px-6 py-16 md:px-12 md:py-20 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 border-b border-white/15 pb-8 md:mb-12">
          <h2
            id="arcana-heading"
            className="font-sans text-2xl font-medium uppercase tracking-[0.35em] text-white md:text-3xl"
          >
            Iron Coven Arcana
          </h2>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/45 md:text-xs">
            The coven is the ritual. The body is the temple.
          </p>
        </header>

        <p className="mb-8 font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">
          Tap card or ↻ in title bar to flip
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {performers.map((performer) => (
            <div key={performer.slug} className="min-w-0 w-full">
              <ArcanaWindow
                performer={performer}
                flipped={flippedSlug === performer.slug}
                onFlip={() => handleFlip(performer.slug)}
              />

              <div className="lg:hidden">
                <ArcanaDossierPanel
                  performer={performer}
                  visible={activeSlug === performer.slug}
                  inline
                />
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <ArcanaDossierPanel
            performer={activePerformer}
            visible={activeSlug !== null}
          />
        </div>
      </div>
    </section>
  );
}
