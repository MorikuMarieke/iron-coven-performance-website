"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ArchiveTree,
  type SelectedEntry,
} from "@/components/home/archive/ArchiveTree";
import { ArchiveDetailAtmosphere } from "@/components/home/archive/ArchiveDetailAtmosphere";
import { CovenPanel } from "@/components/home/archive/CovenPanel";
import { PerformerPanel } from "@/components/home/archive/PerformerPanel";
import { performers } from "@/data/performers";

export function Performers() {
  const [selectedEntry, setSelectedEntry] = useState<SelectedEntry>("collective");
  const [performersExpanded, setPerformersExpanded] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const sync = () => {
      if (mq.matches) setPerformersExpanded(false);
      else setPerformersExpanded(true);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const handleSelect = useCallback((entry: SelectedEntry) => {
    setSelectedEntry(entry);
  }, []);

  const selectedPerformer =
    selectedEntry === "collective"
      ? null
      : (performers.find((p) => p.slug === selectedEntry) ?? null);

  return (
    <section
      id="iron-coven"
      aria-label="Iron Coven archive"
      className="iron-coven-archive relative min-w-0 border-b border-[color:var(--archive-silver)]/25 bg-[color:var(--archive-black)] py-12 md:py-16"
    >
      <div className="section-shell">
        <div className="archive-shell">
          <aside className="archive-shell-nav">
            <ArchiveTree
              performers={performers}
              selectedEntry={selectedEntry}
              onSelect={handleSelect}
              performersExpanded={performersExpanded}
              onTogglePerformers={() => setPerformersExpanded((open) => !open)}
            />
          </aside>

          <div className="archive-shell-detail">
            <ArchiveDetailAtmosphere />
            <div className="archive-shell-detail-content">
              {selectedPerformer ? (
                <PerformerPanel performer={selectedPerformer} />
              ) : (
                <CovenPanel />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
