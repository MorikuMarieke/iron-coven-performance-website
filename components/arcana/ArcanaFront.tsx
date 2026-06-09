import { type ArcanaPerformer } from "@/data/performers";
import { TitleOrnament } from "./ArcanaFrameDecor";
import { ArcanaSigil } from "./ArcanaSigil";
import { CelestialChart } from "./CelestialChart";

export function ArcanaFront({ performer }: { performer: ArcanaPerformer }) {
  const { accent } = performer;

  return (
    <div className="arcana-card-body relative flex flex-1 flex-col px-2.5 pb-3 pt-2">
      <div
        className="arcana-tarot-frame relative mx-auto flex w-full flex-1 flex-col rounded-sm"
        style={{ borderColor: accent.primary }}
      >
        <div className="relative flex flex-1 items-center justify-center px-5 py-3">
          <CelestialChart
            color={accent.primary}
            className="pointer-events-none absolute h-[78%] w-[78%] opacity-20"
          />
          <ArcanaSigil
            src={performer.symbolSrc}
            symbol={performer.symbol}
            color={accent.primary}
            slug={performer.slug}
          />
        </div>
      </div>

      <h3
        className="font-maguntia mt-3 text-center text-xl leading-tight md:text-2xl"
        style={{ color: accent.primary }}
      >
        {performer.archetype}
      </h3>
      <TitleOrnament color={accent.primary} />
    </div>
  );
}
