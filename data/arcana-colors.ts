import type { CSSProperties } from "react";
import type { ArcanaAccent } from "./performers";

/** Arcana card accent tokens — reference :root vars for easy palette testing */
export const arcanaAccents = {
  anarchist: {
    primary: "var(--arcana-anarchist)",
    secondary: "var(--arcana-anarchist-muted)",
    border: "var(--arcana-anarchist)",
    panelBorder: "var(--arcana-anarchist-muted)",
  },
  shapeshifter: {
    primary: "var(--arcana-shapeshifter)",
    secondary: "var(--arcana-shapeshifter-muted)",
    border: "var(--arcana-shapeshifter)",
    panelBorder: "var(--arcana-shapeshifter-muted)",
  },
  sorceress: {
    primary: "var(--arcana-sorceress)",
    secondary: "var(--arcana-sorceress-muted)",
    border: "var(--arcana-sorceress)",
    panelBorder: "var(--arcana-sorceress-muted)",
  },
  catalyst: {
    primary: "var(--arcana-catalyst)",
    secondary: "var(--arcana-catalyst-muted)",
    border: "var(--arcana-catalyst)",
    panelBorder: "var(--arcana-catalyst-muted)",
  },
} as const;

/** Per-card CSS custom properties for accent + derived alpha tints */
export function getArcanaAccentVars(accent: ArcanaAccent): CSSProperties {
  const primary = accent.primary;

  return {
    "--arcana-border": accent.border,
    "--arcana-accent": primary,
    "--arcana-accent-muted": accent.secondary,
    "--arcana-accent-faint": `color-mix(in srgb, ${primary} 60%, transparent)`,
    "--arcana-accent-subtle": `color-mix(in srgb, ${primary} 20%, transparent)`,
    "--arcana-accent-chrome": `color-mix(in srgb, ${primary} 27%, transparent)`,
    "--btn-accent": primary,
  } as CSSProperties;
}
