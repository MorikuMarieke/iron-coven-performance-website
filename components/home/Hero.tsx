import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";

const HERO_TITLE = "A ritual of body, shadow and becoming.";

function RitualSigil() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="sigil-mark h-7 w-7 shrink-0 text-[#F5F5F5]/80"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="14" strokeDasharray="2 4" />
      <path d="M16 4v24M4 16h24" strokeOpacity="0.5" />
      <path d="M8 8l16 16M24 8L8 24" strokeOpacity="0.35" />
      <circle cx="16" cy="16" r="3" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}

const ctaShared =
  "w-full max-w-[280px] shrink-0 sm:w-auto sm:max-w-none text-center justify-center";
const ctaClass = `hero-cta-hover ${ctaShared} font-sans tracking-[0.2em] border-[#F5F5F5]/90 text-[#050505] hover:border-[#B9E3DE]/60`;
const ctaSecondaryClass = `hero-cta-hover hero-cta-secondary ${ctaShared} font-sans tracking-[0.2em] text-[#F5F5F5] hover:text-[#F5F5F5]`;

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="hero-layers hero-layer-dust hero-layer-scratches relative flex h-screen min-h-screen flex-col overflow-hidden border-b border-[#F5F5F5]/15 md:flex-row"
    >
      {/* Texture layers (full bleed) */}
      <div className="hero-layer-wear" aria-hidden="true" />
      <div className="hero-layer-scanlines" aria-hidden="true" />

      {/* Left column: typography */}
      <div className="relative z-10 flex min-h-0 min-w-0 flex-col overflow-x-hidden px-6 pb-8 pt-16 sm:pt-20 md:w-[42%] md:max-w-xl md:shrink-0 md:border-r md:border-[#F5F5F5]/15 md:px-10 md:pb-10 md:pt-16 lg:px-14">
        {/* Editorial contrast scrim */}
        <div
          className="hero-left-scrim pointer-events-none absolute inset-0"
          aria-hidden="true"
        />

        <div className="relative flex min-h-0 flex-col justify-start">
          <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.4em] text-[#F5F5F5]/55 sm:mb-8 sm:text-xs">
            Underground performance collective
          </p>

          <div className="mb-4 flex min-w-0 items-start gap-3 sm:mb-5">
            <RitualSigil />
            <h1
              data-text={HERO_TITLE}
              className="hero-title-poster hero-title-dream hero-title-aberration relative isolate min-w-0 flex-1 font-unifraktur tracking-tight text-balance break-words text-[#F5F5F5]"
            >
              {HERO_TITLE}
            </h1>
          </div>

          <hr className="mb-6 w-full max-w-xs border-[#F5F5F5]/20" />

          <p className="max-w-md font-sans text-sm leading-relaxed text-[#F5F5F5]/80 md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Through
            pole, aerial silk, and embodied ritual — a séance of flesh, shadow,
            and feminine power.
          </p>
        </div>
      </div>

      {/* Right column: chain image + CTAs */}
      <div className="relative flex min-h-[45vh] flex-1 flex-col md:min-h-0">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero/chain-hero.png"
            alt=""
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover object-[75%_center] blur-[1px] md:object-[70%_center]"
          />
        </div>

        {/* Fade chain into darkness at center split */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/30 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-[#050505]/20 md:from-transparent"
          aria-hidden="true"
        />

        {/* CTAs centered in right column (all breakpoints) */}
        <div className="absolute inset-0 z-10 flex w-full flex-col items-center justify-center gap-3 p-6 sm:flex-row sm:gap-4 md:p-8 lg:p-10">
          <CTAButton href="#" className={ctaClass}>
            Book Tickets
          </CTAButton>
          <CTAButton
            variant="secondary"
            href="#newsletter"
            className={ctaSecondaryClass}
          >
            Enter the Circle
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
