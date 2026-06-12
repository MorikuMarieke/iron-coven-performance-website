"use client";

import { useState } from "react";

function SymbolFallback({ symbol }: { symbol: string }) {
  return (
    <svg viewBox="0 0 120 120" className="arcana-symbol-fallback" aria-hidden="true">
      <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <text x="60" y="68" textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.7">
        {symbol.slice(0, 2).toUpperCase()}
      </text>
    </svg>
  );
}

export function ArcanaSigil({
  src,
  symbol,
  slug,
}: {
  src: string;
  symbol: string;
  slug: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="arcana-symbol-slot arcana-accent-text">
        <SymbolFallback symbol={symbol} />
      </div>
    );
  }

  return (
    <div className="arcana-symbol-slot">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        onError={() => setFailed(true)}
        className="arcana-symbol-img"
        data-slug={slug}
      />
    </div>
  );
}
