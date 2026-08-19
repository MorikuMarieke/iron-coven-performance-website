import Image from "next/image";
import { ChromeButton } from "@/components/ui/ChromeButton";
import { event } from "@/data/event";

function RitualSigil() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="sigil-mark h-7 w-7 shrink-0 text-beige/80"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="14" strokeDasharray="2 4" />
      <path d="M16 4v24M4 16h24" strokeOpacity="0.5" />
      <path d="M8 8l16 16M24 8L8 24" strokeOpacity="0.35" />
      <circle cx="16" cy="16" r="3" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}


export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="hero-layers hero-layer-dust hero-layer-scratches relative overflow-hidden border-b border-beige/15 bg-background"
    >
      <div className="hero-layer-wear" aria-hidden="true" />
      <div className="hero-layer-scanlines" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col lg:flex-row lg:items-stretch">
        {/* Left column: typography */}
        <div className="relative z-10 flex min-w-0 flex-col overflow-x-hidden bg-background px-[clamp(1.25rem,4vw,3.5rem)] pb-[clamp(1.5rem,4vw,2.5rem)] pt-[clamp(2.5rem,7vw,3.5rem)] lg:w-[48%] lg:max-w-[42rem] lg:shrink-0 lg:border-r lg:border-beige/15 lg:py-[clamp(2rem,4vw,3.5rem)]">
          <div
            className="hero-left-scrim pointer-events-none absolute inset-0"
            aria-hidden="true"
          />

          <div className="relative flex flex-col justify-start">
            <p className="mb-[clamp(0.75rem,2vw,1.25rem)] font-sans text-[9px] uppercase tracking-[0.38em] text-beige/45 sm:text-[10px]">
              {event.subtitle}
            </p>

            <div className="hero-title-block mb-[clamp(1.25rem,3.5vw,2rem)] flex flex-col gap-3">
              <RitualSigil />
              <h1
                data-text={event.title}
                className="hero-title-poster hero-title-dream hero-title-aberration relative isolate font-unifraktur tracking-tight text-beige"
              >
                {event.title}
              </h1>
            </div>

            <hr className="mb-[clamp(0.875rem,2.5vw,1.25rem)] w-full max-w-[12ch] border-beige/15" />

            <p className="mb-[clamp(1rem,2.5vw,1.5rem)] max-w-[32ch] font-sans text-xs leading-relaxed text-beige/65 sm:text-sm lg:text-[0.9375rem]">
              {event.tagline}
            </p>

            <div className="flex flex-col gap-2 font-mono uppercase text-pretty text-beige/50">
              <p>
                <time dateTime={event.date.iso}>{event.date.display}</time>
              </p>
              <p>{event.location.display}</p>
            </div>
          </div>
        </div>

        {/* Chains image + CTAs — single wrapper at all breakpoints */}
        <div className="hero-chains-panel relative min-h-[clamp(14rem,52vw,22rem)] w-full overflow-hidden lg:min-h-0 lg:flex-1 lg:self-stretch">
          <Image
            src="/images/hero/chain-hero-v5.png"
            alt=""
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-[75%_center] blur-[1px] lg:object-[70%_center]"
          />

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent lg:from-black/90"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 lg:from-transparent lg:via-transparent lg:to-black/20"
            aria-hidden="true"
          />

          <div className="absolute inset-0 z-10 flex items-center justify-center p-[clamp(1rem,4vw,2rem)]">
            <div className="hero-cta-btn-group">
              <ChromeButton href="#">Book Tickets</ChromeButton>
              <ChromeButton href="#newsletter">Enter the Circle</ChromeButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
