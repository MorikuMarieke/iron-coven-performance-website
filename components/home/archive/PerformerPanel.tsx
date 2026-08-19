import Image from "next/image";
import { type ArcanaPerformer } from "@/data/performers";
import { PerformerIntroPanel } from "@/components/home/archive/PerformerIntroPanel";
import { ArcanaArchiveChrome } from "@/components/arcana/ArcanaArchiveChrome";
import { ArcanaArchiveFooter } from "@/components/arcana/ArcanaArchiveFooter";
import { getArchiveFilename } from "@/components/arcana/arcanaUtils";
import { getArcanaAccentVars } from "@/data/arcana-colors";

type PerformerPanelProps = {
  performer: ArcanaPerformer;
};

/**
 * Neutral content slot for a selected performer.
 * Tarot card image (in archive window chrome) left, editorial intro panel right.
 */
export function PerformerPanel({ performer }: PerformerPanelProps) {
  const accentVars = getArcanaAccentVars(performer.accent);

  return (
    <div
      id="tarot"
      className="performer-panel"
      aria-label={`${performer.name} — ${performer.archetype}`}
    >
      <div className="performer-panel-card">
        <div
          className="arcana-archive-window performer-panel-card-window rounded-sm"
          style={accentVars}
        >
          <ArcanaArchiveChrome filename={getArchiveFilename(performer)} showFlip={false} />

          <div className="arcana-archive-body performer-panel-card-body">
            <Image
              src={performer.tarotCardSrc}
              alt={`${performer.archetype} — ${performer.name}`}
              width={614}
              height={1024}
              unoptimized
              className="performer-panel-card-image"
            />
          </div>

          <ArcanaArchiveFooter />
        </div>
      </div>

      <div className="performer-panel-intro">
        <PerformerIntroPanel performer={performer} />
      </div>
    </div>
  );
}
