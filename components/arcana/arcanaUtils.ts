import { type ArcanaPerformer } from "@/data/performers";

export function getArchiveFilename(performer: ArcanaPerformer): string {
  const slug = performer.archetype.toUpperCase().replace(/\s+/g, "_");
  return `${performer.romanNumeral}_${slug}.ARC`;
}
