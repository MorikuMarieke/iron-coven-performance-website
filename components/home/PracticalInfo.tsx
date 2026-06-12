import { practicalInfo } from "@/data/event";

export function PracticalInfo() {
  return (
    <section
      id="practical"
      aria-labelledby="practical-heading"
      className="border-b border-white/20 px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 border-b border-white/15 pb-8 md:mb-12">
          <h2
            id="practical-heading"
            className="font-display text-3xl font-bold md:text-4xl"
          >
            Practical info
          </h2>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/45 md:text-xs">
            Everything you need before you cross the threshold
          </p>
        </header>

        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practicalInfo.map((item) => (
            <div
              key={item.label}
              className="border border-dashed border-white/35 p-5 transition-colors hover:border-white/55"
            >
              <dt className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
                {item.label}
              </dt>
              <dd className="text-base leading-relaxed text-white/85 md:text-lg">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
