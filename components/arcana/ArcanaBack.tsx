import { type ArcanaPerformer } from "@/data/performers";
import { ArcanaPortrait } from "./ArcanaPortrait";

function DossierField({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-1">
      <p className="arcana-accent-text-faint font-mono text-[8px] font-bold uppercase tracking-[0.22em]">
        {label}
      </p>
      <p className="mt-0.5 whitespace-pre-line font-mono text-[10px] font-bold leading-snug text-[#EDEDED]">
        {value}
      </p>
    </div>
  );
}

export function ArcanaBack({ performer }: { performer: ArcanaPerformer }) {
  const mediumDisplay = performer.medium.join(" · ");

  return (
    <div className="arcana-card-body relative flex flex-1 flex-col px-2.5 pb-3 pt-2">
      <div className="flex items-center justify-between px-0.5">
        <span className="font-mono text-[10px] tracking-[0.12em] text-[#EDEDED]/60">
          {performer.romanNumeral}
        </span>
        <span className="font-mono text-[7px] font-bold uppercase tracking-[0.2em] text-[#EDEDED]/45">
          Arcana Dossier
        </span>
        <span className="w-4" aria-hidden="true" />
      </div>

      <div className="arcana-accent-text flex items-center justify-center gap-2 py-1.5">
        <span className="text-sm opacity-70" aria-hidden="true">
          ✦
        </span>
        <h3 className="font-maguntia text-lg leading-tight md:text-xl">{performer.name}</h3>
        <span className="text-sm opacity-70" aria-hidden="true">
          ✦
        </span>
      </div>

      <div className="mt-0.5 flex min-h-0 flex-1 gap-2">
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
          <DossierField label="Alignment" value={performer.alignment} />
          <DossierField label="Element" value={performer.element} />
          <DossierField label="Medium" value={mediumDisplay} />
        </div>

        <div className="arcana-portrait-frame arcana-accent-border w-[44%] shrink-0 overflow-hidden rounded-sm">
          <ArcanaPortrait src={performer.portraitSrc} name={performer.name} />
        </div>
      </div>

      <p className="mt-2 flex-1 font-mono text-[9px] leading-relaxed text-[#EDEDED]/75">
        {performer.cardDescription}
      </p>
    </div>
  );
}
