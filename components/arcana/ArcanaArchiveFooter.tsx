export function ArcanaArchiveFooter({ accent }: { accent: string }) {
  return (
    <div
      className="arcana-archive-footer flex items-center justify-between px-2 py-1"
      style={{ borderColor: `${accent}33` }}
    >
      <span className="font-mono text-[8px] tracking-wide text-white/35">1536 × 2048 px</span>
      <div className="flex items-center gap-2">
        <span className="font-mono text-[8px] text-white/35">100%</span>
        <span className="font-mono text-[8px] leading-none tracking-tighter text-white/25" aria-hidden="true">
          ⋮⋮⋮
        </span>
      </div>
    </div>
  );
}
