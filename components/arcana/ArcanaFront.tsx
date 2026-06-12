import { type ArcanaPerformer } from "@/data/performers";
import { TitleOrnament } from "./ArcanaFrameDecor";
import { ArcanaSigil } from "./ArcanaSigil";
import { CelestialChart } from "./CelestialChart";

export function ArcanaFront({ performer }: { performer: ArcanaPerformer }) {
  return (
    <div className="arcana-card-body relative flex flex-1 flex-col px-2.5 pb-3 pt-2">
      <div className="arcana-tarot-frame relative mx-auto w-full flex-1 rounded-sm">
        <div className="arcana-illustration">
          <div className="arcana-accent-text opacity-20">
            <CelestialChart className="arcana-illustration__chart" />
          </div>
          <ArcanaSigil
            src={performer.symbolSrc}
            symbol={performer.symbol}
            slug={performer.slug}
          />
        </div>
      </div>

      <h3 className="font-maguntia arcana-accent-text mt-3 text-center text-xl leading-tight md:text-2xl">
        {performer.archetype}
      </h3>
      <TitleOrnament />
    </div>
  );
}
