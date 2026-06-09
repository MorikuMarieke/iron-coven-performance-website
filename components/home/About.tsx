const keywords = [
  "ritual",
  "desire",
  "transformation",
  "body",
  "rebellion",
  "softness",
  "shadow",
];

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
      aria-labelledby="about-heading"
      className="relative border-b border-white/30 px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative border border-dashed border-white/60 p-8 md:p-12 lg:ml-12">
          <div className="absolute -left-4 -top-4 hidden h-8 w-8 border border-white md:block" />

          <h2
            id="about-heading"
            className="font-display mb-8 text-3xl font-bold md:text-4xl"
          >
            The concept
          </h2>

          <p className="mb-12 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor. This is
            not a show — it is a séance of flesh and will.
          </p>

          <ul className="flex flex-wrap gap-3 md:gap-4" role="list">
            {keywords.map((word, i) => (
              <li
                key={word}
                className={`border border-white px-4 py-2 font-mono text-xs uppercase tracking-widest transition-transform hover:scale-105 ${rotations[i % rotations.length]}`}
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
