function MoonPhase({ type, color }: { type: "new" | "crescent" | "half" | "full"; color: string }) {
  const sw = 1;
  if (type === "full") {
    return (
      <svg viewBox="0 0 10 10" className="h-2 w-2" aria-hidden="true">
        <circle cx="5" cy="5" r="3.5" fill="none" stroke={color} strokeWidth={sw} />
      </svg>
    );
  }
  if (type === "crescent") {
    return (
      <svg viewBox="0 0 10 10" className="h-2 w-2" aria-hidden="true">
        <path
          d="M6 2.5a3 3 0 1 0 0 5 2.5 2.5 0 1 1 0-5"
          fill="none"
          stroke={color}
          strokeWidth={sw}
        />
      </svg>
    );
  }
  if (type === "half") {
    return (
      <svg viewBox="0 0 10 10" className="h-2 w-2" aria-hidden="true">
        <circle cx="5" cy="5" r="3.5" fill="none" stroke={color} strokeWidth={sw} />
        <path d="M5 1.5v7" stroke={color} strokeWidth={sw} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 10 10" className="h-2 w-2" aria-hidden="true">
      <circle cx="5" cy="5" r="1" fill={color} />
    </svg>
  );
}

const moonSequence: Array<"crescent" | "half" | "full" | "half" | "crescent"> = [
  "crescent",
  "half",
  "full",
  "half",
  "crescent",
];

export function MoonPhaseColumns({ color }: { color: string }) {
  return (
    <>
      <div className="pointer-events-none absolute left-2 top-1/2 flex -translate-y-1/2 flex-col items-center gap-1">
        {moonSequence.map((phase, i) => (
          <MoonPhase key={`l-${i}`} type={phase} color={color} />
        ))}
      </div>
      <div className="pointer-events-none absolute right-2 top-1/2 flex -translate-y-1/2 flex-col items-center gap-1">
        {[...moonSequence].reverse().map((phase, i) => (
          <MoonPhase key={`r-${i}`} type={phase} color={color} />
        ))}
      </div>
    </>
  );
}

export function TitleOrnament({ color }: { color: string }) {
  return (
    <div className="mt-2 flex items-center justify-center gap-2 opacity-70" aria-hidden="true">
      <span className="h-px w-6" style={{ backgroundColor: color }} />
      <span className="text-[10px]" style={{ color }}>
        ✦
      </span>
      <span className="h-px w-6" style={{ backgroundColor: color }} />
    </div>
  );
}

export function CelestialRow({ color }: { color: string }) {
  const symbols = ["✦", "☾", "⊕", "◌", "⋆"];
  return (
    <div className="flex items-center justify-center gap-3 opacity-65" aria-hidden="true">
      {symbols.map((s) => (
        <span key={s} className="font-mono text-[10px]" style={{ color }}>
          {s}
        </span>
      ))}
    </div>
  );
}
