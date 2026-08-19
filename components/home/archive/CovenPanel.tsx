import { event } from "@/data/event";

export function CovenPanel() {
  return (
    <article className="archive-collective" aria-labelledby="iron-coven-heading">
      <div className="archive-collective-content">
        <p className="archive-meta-path font-mono">
          ROOT / IRON_COVEN / coven.index
        </p>

        <dl className="archive-meta-fields font-mono">
          <div>
            <dt>TYPE</dt>
            <dd>PERFORMANCE MANIFESTO</dd>
          </div>
          <div>
            <dt>STATUS</dt>
            <dd>
              <span className="archive-status-dot" aria-hidden="true" />
              ACTIVE
            </dd>
          </div>
        </dl>

        <h2 id="iron-coven-heading" className="archive-collective-title font-unifraktur">
          {event.ironCoven.heading}
        </h2>

        <p className="archive-collective-body">{event.ironCoven.intro}</p>
      </div>
    </article>
  );
}
