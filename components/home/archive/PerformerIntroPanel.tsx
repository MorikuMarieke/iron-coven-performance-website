import { type ArcanaPerformer } from "@/data/performers";

export function PerformerIntroPanel({ performer }: { performer: ArcanaPerformer }) {
  return (
    <div className="performer-intro-panel">
      <p className="archive-meta-path font-mono">
        ROOT / IRON_COVEN / PERFORMERS / {performer.name}
      </p>

      <div className="performer-intro-header">
        <h2 className="performer-intro-archetype font-unifraktur">
          {performer.archetype}
        </h2>
        <p className="performer-intro-name font-mono">{performer.name}</p>
      </div>

      <p className="performer-intro-motto font-mono">
        {performer.motto}
      </p>

      <p className="performer-intro-bio">{performer.longBio}</p>

      <p className="performer-intro-performance">{performer.performanceDescription}</p>
    </div>
  );
}
