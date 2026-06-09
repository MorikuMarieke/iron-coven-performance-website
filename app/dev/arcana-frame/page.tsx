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
          background: "#050505",
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

export default function ArcanaFramePreviewPage() {
  const trixxxie = performers.find((p) => p.slug === "trixxxie");

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <header className="max-w-xl space-y-4 text-center md:mx-auto">
          <h1 className="font-maguntia text-2xl text-[#e8e4dc]">Arcana Frame Preview</h1>
          <p className="font-mono text-xs leading-relaxed text-white/45">
            Frame overlay removed. Use the reference blueprint to trace an SVG overlay next.
            The shell below is ready for integration once the SVG is ready.
          </p>
        </header>

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
          <FramePreview label="Empty frame shell (ivory)" color="#e8e4dc" />
        </section>

        <section className="space-y-4">
          <h2 className="text-center font-mono text-[10px] uppercase tracking-widest text-white/35">
            Shell at different widths
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <FramePreview label="320px" color="#e8e4dc" maxWidth={320} />
            <FramePreview label="240px" color="#e8e4dc" maxWidth={240} />
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
            <FramePreview label="Ivory + placeholder" color="#e8e4dc" withPlaceholder />
          </div>
        </section>
      </div>
    </main>
  );
}
