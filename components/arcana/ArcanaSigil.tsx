"use client";

import { useState } from "react";

function SymbolFallback({ symbol, color }: { symbol: string; color: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-auto max-h-[9rem] w-auto max-w-[9rem]"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="50" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
      <text x="60" y="68" textAnchor="middle" fill={color} fontSize="10" opacity="0.7">
        {symbol.slice(0, 2).toUpperCase()}
      </text>
    </svg>
  );
}

export function ArcanaSigil({
  src,
  symbol,
  color,
  slug,
}: {
  src: string;
  symbol: string;
  color: string;
  slug: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <SymbolFallback symbol={symbol} color={color} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      onError={() => setFailed(true)}
      className="arcana-symbol-img h-auto max-h-[9rem] w-auto max-w-[9rem] object-contain"
      data-slug={slug}
    />
  );
}
