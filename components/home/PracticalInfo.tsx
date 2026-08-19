import { practicalInfo } from "@/data/event";

export function PracticalInfo() {
  return (
    <section
      id="practical"
      aria-labelledby="practical-heading"
      className="min-w-0 border-b border-white/20 py-20"
    >
      <div className="section-shell">
        <header className="mb-10 border-b border-white/15 pb-8 md:mb-12">
          <h2
            id="practical-heading"
            className="font-glitch text-3xl md:text-4xl"
          >
            Necessary knowledge
          </h2>
          <p className="mt-3 font-mono uppercase text-white/45">
            Everything you need to know before you cross the threshold
          </p>
        </header>

        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practicalInfo.map((item) => (
            <div
              key={item.label}
              className="border border-dashed border-white/35 p-5 transition-colors hover:border-white/55"
            >
              <dt className="mb-2 font-mono uppercase text-white/45">
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
