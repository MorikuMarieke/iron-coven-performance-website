import Image from "next/image";
import { ArcanaFrame } from "@/components/arcana/ArcanaFrame";
import { performers } from "@/data/performers";

function FramePreview({
  label,
  color,
  maxWidth = 320,
  withPlaceholder = false,
}: {
  label: string;
  color: string;
  maxWidth?: number;
  withPlaceholder?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="font-mono text-xs uppercase tracking-widest text-white/50">{label}</p>
      <div
        className="relative w-full overflow-hidden rounded-sm border border-white/10"
        style={{
          aspectRatio: "2 / 3.4",
          background: "var(--black)",
          maxWidth: `${maxWidth}px`,
        }}
      >
        <ArcanaFrame color={color} className="h-full w-full">
          {withPlaceholder ? (
            <div className="flex h-full items-center justify-center">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
                Card content area
              </span>
            </div>
          ) : undefined}
        </ArcanaFrame>
      </div>
    </div>
  );
}

const FONT_SPECIMENS = [
  { name: "Jacquard 24", family: '"Jacquard 24", serif' },
  { name: "Manufacturing Consent", family: '"Manufacturing Consent", system-ui' },
  { name: "Rubik Glitch", family: '"Rubik Glitch", system-ui' },
  { name: "UnifrakturCook", family: '"UnifrakturCook", serif' },
  { name: "UnifrakturMaguntia", family: '"UnifrakturMaguntia", serif' },
  { name: "Mozilla Headline", family: '"Mozilla Headline", sans-serif' },
  { name: "Stack Sans Notch", family: '"Stack Sans Notch", sans-serif' },
  { name: "Catamaran", family: "Catamaran, sans-serif" },
  { name: "Khula", family: "Khula, sans-serif" },
  { name: "Libre Franklin", family: '"Libre Franklin", sans-serif' },
  { name: "Open Sans", family: '"Open Sans", sans-serif' },
  { name: "Roboto", family: "Roboto, sans-serif" },
  { name: "Signika", family: "Signika, sans-serif" },
  { name: "Mukta Vaani", family: '"Mukta Vaani", sans-serif' },
  { name: "VT323", family: "VT323, monospace" },
] as const;

function FontSpecimen({ name, family }: { name: string; family: string }) {
  return (
    <article
      className="flex flex-col gap-3 border border-white/10 bg-black/40 p-5"
      style={{ fontFamily: family }}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
        {name}
      </p>
      <p className="text-[2.15rem] leading-none text-beige">Iron Coven</p>
      <p className="text-lg leading-tight text-beige/90">The Sorceress</p>
      <p className="max-w-[36ch] text-sm leading-relaxed text-white/70">
        Through pole, aerial silk, and embodied ritual — a séance of flesh, shadow,
        and feminine power.
      </p>
      <p className="font-normal text-[11px] uppercase tracking-[0.18em] text-white/45">
        ROOT / IRON_COVEN / collective.index
      </p>
    </article>
  );
}

export default function ArcanaFramePreviewPage() {
  const trixxxie = performers.find((p) => p.slug === "trixxxie");

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <header className="max-w-xl space-y-4 text-center md:mx-auto">
          <h1 className="font-maguntia text-2xl text-beige">Arcana Frame Preview</h1>
          <p className="font-mono text-xs leading-relaxed text-white/45">
            Frame overlay removed. Use the reference blueprint to trace an SVG overlay next.
            The shell below is ready for integration once the SVG is ready.
          </p>
        </header>

        <section className="space-y-5">
          <h2 className="text-center font-mono text-[10px] uppercase tracking-widest text-white/35">
            Font specimens
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {FONT_SPECIMENS.map((font) => (
              <FontSpecimen key={font.name} name={font.name} family={font.family} />
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center gap-3">
            <p className="font-mono text-xs uppercase tracking-widest text-white/50">
              Reference blueprint
            </p>
            <div
              className="relative w-full overflow-hidden rounded-sm border border-white/10"
              style={{ aspectRatio: "2 / 3.4", maxWidth: "320px" }}
            >
              <Image
                src="/dev/arcana-frame-reference.png"
                alt="Arcana frame reference blueprint"
                fill
                className="object-contain"
                sizes="320px"
                priority
              />
            </div>
          </div>
          <FramePreview label="Empty frame shell (beige)" color="#fafae6" />
        </section>

        <section className="space-y-4">
          <h2 className="text-center font-mono text-[10px] uppercase tracking-widest text-white/35">
            Shell at different widths
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <FramePreview label="320px" color="#fafae6" maxWidth={320} />
            <FramePreview label="240px" color="#fafae6" maxWidth={240} />
          </div>
          {trixxxie ? (
            <div className="mx-auto max-w-[320px]">
              <FramePreview
                label={`Accent — ${trixxxie.name}`}
                color={trixxxie.accent.primary}
              />
            </div>
          ) : null}
        </section>

        <section className="space-y-4">
          <h2 className="text-center font-mono text-[10px] uppercase tracking-widest text-white/35">
            Content slot (overlay mode)
          </h2>
          <div className="mx-auto max-w-[320px]">
            <FramePreview label="Beige + placeholder" color="#fafae6" withPlaceholder />
          </div>
        </section>
      </div>
    </main>
  );
}
