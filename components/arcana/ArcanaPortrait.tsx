"use client";

import Image from "next/image";
import { useState } from "react";

export function ArcanaPortrait({
  src,
  name,
  accent,
}: {
  src: string;
  name: string;
  accent: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="arcana-portrait-fallback relative flex h-full min-h-[6rem] flex-col items-center justify-center gap-1.5 p-2">
        <div
          className="h-10 w-8 border border-dashed"
          style={{ borderColor: accent }}
          aria-hidden="true"
        />
        <span className="text-center font-mono text-[7px] uppercase leading-tight tracking-widest text-white/30">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div className="arcana-portrait-dither relative h-full min-h-[6rem] w-full">
      <Image
        src={src}
        alt=""
        fill
        unoptimized
        onError={() => setFailed(true)}
        className="object-cover object-top"
      />
    </div>
  );
}
