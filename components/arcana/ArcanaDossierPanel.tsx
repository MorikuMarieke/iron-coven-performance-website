import { type ArcanaPerformer } from "@/data/performers";
import { getArcanaAccentVars } from "@/data/arcana-colors";

export function ArcanaDossierPanel({
  performer,
  visible,
  inline = false,
}: {
  performer: ArcanaPerformer | null;
  visible: boolean;
  inline?: boolean;
}) {
  if (!performer) return null;

  const accentVars = getArcanaAccentVars(performer.accent);

  return (
    <div
      className={`arcana-dossier-panel ${inline ? "arcana-dossier-inline" : "mt-10"} ${visible ? "is-visible" : ""}`}
      style={accentVars}
      aria-hidden={!visible}
      aria-live="polite"
    >
      <div className="arcana-dossier-window rounded-sm">
        <div className="arcana-dossier-header arcana-accent-border-subtle arcana-accent-text">
          {performer.name} · {performer.archetype}
        </div>

        <div className="arcana-dossier-body flex flex-col gap-3 p-4 md:p-5">
          <p className="arcana-dossier-motto arcana-accent-text whitespace-pre-line font-mono text-sm font-bold leading-snug">
            {performer.motto}
          </p>
          <p className="font-mono text-xs leading-relaxed text-[#EDEDED]/80">{performer.longBio}</p>
          <p className="font-mono text-[11px] leading-relaxed text-[#EDEDED]/65">
            {performer.performanceDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
