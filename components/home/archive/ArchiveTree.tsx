"use client";

import { type ArcanaPerformer } from "@/data/performers";

export type SelectedEntry = "collective" | string;

type ArchiveTreeProps = {
  performers: ArcanaPerformer[];
  selectedEntry: SelectedEntry;
  onSelect: (entry: SelectedEntry) => void;
  performersExpanded: boolean;
  onTogglePerformers: () => void;
};

function FolderGlyph({ open }: { open?: boolean }) {
  return (
    <span className="archive-tree-glyph" aria-hidden="true">
      {open ? "▾" : "▸"}
    </span>
  );
}

function FileGlyph() {
  return (
    <span className="archive-tree-glyph archive-tree-glyph-file" aria-hidden="true">
      ▢
    </span>
  );
}

export function ArchiveTree({
  performers,
  selectedEntry,
  onSelect,
  performersExpanded,
  onTogglePerformers,
}: ArchiveTreeProps) {
  return (
    <nav className="archive-tree" aria-label="Iron Coven archive index">
      <p className="archive-tree-root font-mono">ROOT / IRON_COVEN</p>

      <ul className="archive-tree-list" role="tree">
        <li role="none" className="archive-tree-node">
          <button
            type="button"
            role="treeitem"
            aria-selected={selectedEntry === "collective"}
            className={`archive-tree-item ${selectedEntry === "collective" ? "is-selected" : ""}`}
            onClick={() => onSelect("collective")}
          >
            <FileGlyph />
            <span className="archive-tree-label">coven.index</span>
            {selectedEntry === "collective" ? (
              <span className="archive-tree-signal" aria-hidden="true" />
            ) : null}
          </button>
        </li>

        <li role="none" className="archive-tree-node">
          <button
            type="button"
            role="treeitem"
            aria-expanded={performersExpanded}
            className="archive-tree-item archive-tree-folder"
            onClick={onTogglePerformers}
          >
            <FolderGlyph open={performersExpanded} />
            <span className="archive-tree-label">/PERFORMERS</span>
          </button>

          {performersExpanded ? (
            <ul className="archive-tree-children" role="group">
              {performers.map((performer) => {
                const selected = selectedEntry === performer.slug;
                return (
                  <li key={performer.slug} role="none" className="archive-tree-node">
                    <button
                      type="button"
                      role="treeitem"
                      aria-selected={selected}
                      className={`archive-tree-item archive-tree-leaf ${selected ? "is-selected" : ""}`}
                      onClick={() => onSelect(performer.slug)}
                    >
                      <FileGlyph />
                      <span
                        className="archive-tree-label"
                        style={selected ? { color: "var(--rosewood)" } : undefined}
                      >
                        {performer.name}
                      </span>
                      {selected ? (
                        <span className="archive-tree-signal" aria-hidden="true" />
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </li>
      </ul>
    </nav>
  );
}
