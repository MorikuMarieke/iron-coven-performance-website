export function CelestialChart({ className = "" }: { className?: string }) {
  const sw = 1;

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      className={className}
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="54" opacity="0.35" />
      <circle cx="60" cy="60" r="42" opacity="0.45" />
      <circle cx="60" cy="60" r="28" opacity="0.55" />
      <circle cx="60" cy="60" r="14" opacity="0.4" />

      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x2 = 60 + Math.cos(rad) * 54;
        const y2 = 60 + Math.sin(rad) * 54;
        return <line key={deg} x1="60" y1="60" x2={x2} y2={y2} opacity="0.2" />;
      })}

      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 60 + Math.cos(rad) * 50;
        const y1 = 60 + Math.sin(rad) * 50;
        const x2 = 60 + Math.cos(rad) * 54;
        const y2 = 60 + Math.sin(rad) * 54;
        return <line key={`t-${deg}`} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.5" />;
      })}

      <text x="60" y="10" textAnchor="middle" fill="currentColor" fontSize="6" opacity="0.6">
        ✦
      </text>
      <text x="60" y="116" textAnchor="middle" fill="currentColor" fontSize="5" opacity="0.5">
        ⋆
      </text>
      <text x="8" y="63" textAnchor="middle" fill="currentColor" fontSize="5" opacity="0.5">
        ☾
      </text>
      <text x="112" y="63" textAnchor="middle" fill="currentColor" fontSize="5" opacity="0.5">
        ☾
      </text>

      <circle cx="60" cy="60" r="2" fill="currentColor" fillOpacity="0.4" stroke="none" />
    </svg>
  );
}
