import type { ReactNode } from "react";
import "./arcana-frame.css";

function EightPointStar({ className = "" }: { className?: string }) {
  return (
    <div className={`eight-point-star ${className}`.trim()} aria-hidden="true">
      <span className="eight-point-star-diamond" />
      <span className="eight-point-star-ray eight-point-star-ray-n" />
      <span className="eight-point-star-ray eight-point-star-ray-s" />
      <span className="eight-point-star-ray eight-point-star-ray-e" />
      <span className="eight-point-star-ray eight-point-star-ray-w" />
    </div>
  );
}

function CornerOrnament({ position }: { position: string }) {
  return (
    <div className={`corner-ornament ${position}`}>
      <span className="corner-outer-arm corner-outer-arm-h" />
      <span className="corner-outer-arm corner-outer-arm-v" />
      <span className="corner-inner-arm corner-inner-arm-h" />
      <span className="corner-inner-arm corner-inner-arm-v" />
      <span className="corner-diagonal" />
      <span className="corner-notch corner-notch-h" />
      <span className="corner-notch corner-notch-v" />
      <span className="corner-vertex-square" />
      <span className="corner-tick corner-tick-a" />
      <span className="corner-tick corner-tick-b" />
      <span className="corner-tick corner-tick-c" />
      <span className="corner-dot corner-dot-h1" />
      <span className="corner-dot corner-dot-h2" />
      <span className="corner-dot corner-dot-v1" />
      <span className="corner-dot corner-dot-v2" />
      <span className="corner-dot corner-dot-diag" />
    </div>
  );
}

const MOON_PHASES = [
  "moon-phase-waxing-crescent",
  "moon-phase-half-waxing",
  "moon-phase-full",
  "moon-phase-half-waning",
  "moon-phase-waning-crescent",
] as const;

export function ArcanaFrame({
  color = "#e8e4dc",
  className = "",
  children,
}: {
  color?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`arcana-frame ${className}`.trim()}
      style={{ color }}
      data-arcana-frame=""
    >
      {children ? <div className="arcana-frame-content">{children}</div> : null}

      <div className="arcana-frame-overlay" aria-hidden="true">
        <div className="outer-border" />
        <div className="inner-border" />

        <span className="outer-border-corner-dots outer-border-corner-dots-tl" />
        <span className="outer-border-corner-dots outer-border-corner-dots-tr" />
        <span className="outer-border-corner-dots outer-border-corner-dots-bl" />
        <span className="outer-border-corner-dots outer-border-corner-dots-br" />
        <span className="outer-border-side-dots outer-border-side-dots-left" />
        <span className="outer-border-side-dots outer-border-side-dots-right" />
        <span className="outer-border-side-dots outer-border-side-dots-left-bottom" />
        <span className="outer-border-side-dots outer-border-side-dots-right-bottom" />

        <CornerOrnament position="corner-top-left" />
        <CornerOrnament position="corner-top-right" />
        <CornerOrnament position="corner-bottom-left" />
        <CornerOrnament position="corner-bottom-right" />

        <span className="side-line side-line-left" />
        <span className="side-line side-line-right" />

        <span className="side-markings side-markings-left" />
        <span className="side-markings side-markings-right" />

        <span className="side-tick side-tick-left-1" />
        <span className="side-tick side-tick-left-2" />
        <span className="side-tick side-tick-left-3" />
        <span className="side-tick side-tick-right-1" />
        <span className="side-tick side-tick-right-2" />
        <span className="side-tick side-tick-right-3" />

        <div className="moon-phase-column moon-phase-column-left">
          {MOON_PHASES.map((phase) => (
            <span key={phase} className={`moon-phase ${phase}`} />
          ))}
        </div>
        <div className="moon-phase-column moon-phase-column-right">
          {MOON_PHASES.map((phase) => (
            <span key={`r-${phase}`} className={`moon-phase ${phase}`} />
          ))}
        </div>

        <div className="top-star">
          <EightPointStar />
        </div>

        <div className="star-mark star-mark-side-left">
          <EightPointStar />
        </div>
        <div className="star-mark star-mark-side-right">
          <EightPointStar />
        </div>

        <div className="plus-mark plus-mark-left">
          <span className="plus-mark-h" />
          <span className="plus-mark-v" />
        </div>
        <div className="plus-mark plus-mark-right">
          <span className="plus-mark-h" />
          <span className="plus-mark-v" />
        </div>

        <div className="bottom-divider">
          <span className="bottom-divider-line bottom-divider-line-left" />
          <span className="bottom-divider-star">
            <EightPointStar />
          </span>
          <span className="bottom-divider-line bottom-divider-line-right" />
        </div>
        <span className="bottom-divider-splatter bottom-divider-splatter-1" />
        <span className="bottom-divider-splatter bottom-divider-splatter-2" />
        <span className="bottom-divider-splatter bottom-divider-splatter-3" />
      </div>
    </div>
  );
}
