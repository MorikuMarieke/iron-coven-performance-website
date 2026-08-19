import { event } from "@/data/event";

const rotations = [
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "-rotate-3",
  "rotate-1",
  "-rotate-2",
];

export function About() {
  return (
    <section
      id="concept"
      aria-labelledby="about-heading"
      className="relative min-w-0 border-b border-white/30 py-20"
    >
      <div className="section-shell">
        <div className="relative overflow-hidden border border-dashed border-white/60 p-8 md:p-12 lg:ml-12">
          <div className="absolute -left-4 -top-4 hidden h-8 w-8 border border-white md:block" />

          <h2
            id="about-heading"
            className="font-glitch mb-8 text-3xl md:text-4xl"
          >
            {event.concept.heading}
          </h2>

          <p className="mb-12 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {event.concept.body}
          </p>

          <ul className="flex flex-wrap gap-3 md:gap-4" role="list">
            {event.concept.keywords.map((word, i) => (
              <li
                key={word}
                className={`border border-white px-4 py-2 font-mono uppercase transition-transform hover:scale-105 ${rotations[i % rotations.length]}`}
              >
                {word}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
