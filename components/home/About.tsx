import { event } from "@/data/event";

export function About() {
  return (
    <section
      id="concept"
      aria-labelledby="about-heading"
      className="relative min-w-0 py-14"
    >
      <div className="section-shell">
        <div className="relative overflow-hidden border border-dashed border-white/60 p-8 md:p-12 lg:ml-12">
          <h2
            id="about-heading"
            className="font-glitch mb-8 text-3xl md:text-4xl"
          >
            {event.concept.heading}
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {event.concept.body}
          </p>
        </div>
      </div>
    </section>
  );
}
