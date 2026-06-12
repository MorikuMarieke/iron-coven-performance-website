import type { MouseEvent } from "react";

function ArchiveIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <rect x="1" y="1" width="12" height="12" rx="0.5" fill="none" stroke={color} strokeWidth="1" />
      <path
        d="M7 3.5l0.8 1.6 1.7 0.2-1.25 1.2 0.3 1.7L7 7.2 5.45 8.2l0.3-1.7-1.25-1.2 1.7-0.2z"
        fill={color}
        opacity="0.85"
      />
    </svg>
  );
}

export function ArcanaArchiveChrome({
  filename,
  accent,
  onFlip,
  showFlip = true,
}: {
  filename: string;
  accent: string;
  onFlip?: (e: MouseEvent) => void;
  showFlip?: boolean;
}) {
  return (
    <div
      className="arcana-win-titlebar flex items-center justify-between gap-2 px-2 py-1"
      style={{ borderColor: `${accent}44` }}
    >
      <div className="flex min-w-0 items-center gap-1.5">
        <ArchiveIcon color={accent} />
        <span
          className="truncate font-mono text-[9px] font-bold uppercase tracking-[0.12em]"
          style={{ color: accent }}
        >
          {filename}
        </span>
      </div>
      <div className="flex shrink-0 items-center gap-0.5">
        <span className="arcana-win-btn pointer-events-none flex h-4 w-4 items-center justify-center font-mono text-[9px] opacity-40">
          _
        </span>
        <span className="arcana-win-btn pointer-events-none flex h-4 w-4 items-center justify-center font-mono text-[9px] opacity-40">
          □
        </span>
        {showFlip ? (
          <button
            type="button"
            onClick={onFlip}
            aria-label="Flip card"
            className="arcana-win-btn flex h-4 w-4 items-center justify-center font-mono text-[10px] leading-none"
            style={{ ["--btn-accent" as string]: accent, color: accent }}
          >
            ↻
          </button>
        ) : (
          <span className="arcana-win-btn pointer-events-none flex h-4 w-4 items-center justify-center font-mono text-[9px] opacity-40">
            ×
          </span>
        )}
      </div>
    </div>
  );
}
