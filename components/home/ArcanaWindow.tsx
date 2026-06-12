"use client";

import { useCallback } from "react";
import { type ArcanaPerformer } from "@/data/performers";
import { ArcanaArchiveChrome } from "@/components/arcana/ArcanaArchiveChrome";
import { ArcanaArchiveFooter } from "@/components/arcana/ArcanaArchiveFooter";
import { getArchiveFilename } from "@/components/arcana/arcanaUtils";
import { ArcanaBack } from "@/components/arcana/ArcanaBack";
import { ArcanaFront } from "@/components/arcana/ArcanaFront";

export function ArcanaWindow({
  performer,
  flipped,
  onFlip,
}: {
  performer: ArcanaPerformer;
  flipped: boolean;
  onFlip: () => void;
}) {
  const { accent } = performer;

  const handleFlip = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      onFlip();
    },
    [onFlip],
  );

  const handleCardKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onFlip();
      }
    },
    [onFlip],
  );

  return (
    <div
      className="arcana-archive-window relative w-full rounded-sm"
      style={
        {
          "--arcana-border": accent.border,
          "--arcana-accent": accent.primary,
        } as React.CSSProperties
      }
    >
      <ArcanaArchiveChrome
        filename={getArchiveFilename(performer)}
        accent={accent.primary}
        onFlip={handleFlip}
      />

      <div className="arcana-archive-body">
        <div
          role="button"
          tabIndex={0}
          onClick={() => onFlip()}
          onKeyDown={handleCardKeyDown}
          aria-pressed={flipped}
          aria-label={`${performer.archetype} — ${flipped ? "show archetype" : "reveal dossier"}`}
          className="arcana-tarot-perspective cursor-pointer rounded-sm focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white/50"
        >
          <div
            className={`arcana-tarot-flip-inner ${flipped ? "is-flipped" : ""}`}
          >
            <div className="arcana-tarot-face arcana-tarot-front">
              <div
                className="arcana-tarot-card flex h-full flex-col overflow-hidden rounded-sm"
                style={{ borderColor: accent.border }}
              >
                <ArcanaFront performer={performer} />
              </div>
            </div>

            <div className="arcana-tarot-face arcana-tarot-back">
              <div
                className="arcana-tarot-card flex h-full flex-col overflow-hidden rounded-sm"
                style={{ borderColor: accent.border }}
              >
                <ArcanaBack performer={performer} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ArcanaArchiveFooter accent={accent.primary} />
    </div>
  );
}
