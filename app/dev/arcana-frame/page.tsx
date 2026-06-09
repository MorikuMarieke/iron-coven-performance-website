import { ArcanaFrame } from "@/components/arcana/ArcanaFrame";
import { performers } from "@/data/performers";

function FramePreview({
  label,
  color,
}: {
  label: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="font-mono text-xs uppercase tracking-widest text-white/50">{label}</p>
      <div
        className="w-full max-w-[320px] overflow-hidden rounded-sm"
        style={{ aspectRatio: "2 / 3.4", background: "#050505" }}
      >
        <ArcanaFrame color={color} className="h-full w-full" />
      </div>
    </div>
  );
}

export default function ArcanaFramePreviewPage() {
  const trixxxie = performers.find((p) => p.slug === "trixxxie");

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        <header className="text-center">
          <h1 className="font-maguntia text-2xl text-[#e8e4dc]">Arcana Frame Preview</h1>
          <p className="mt-2 font-mono text-xs text-white/40">
            Border decoration only — no card content
          </p>
        </header>

        <div className="grid gap-12 md:grid-cols-2">
          <FramePreview label="Ivory linework" color="#e8e4dc" />
          {trixxxie ? (
            <FramePreview label={`Accent — ${trixxxie.name}`} color={trixxxie.accent.primary} />
          ) : null}
        </div>
      </div>
    </main>
  );
}
