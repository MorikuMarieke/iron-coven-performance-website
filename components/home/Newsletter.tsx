import { CTAButton } from "@/components/ui/CTAButton";

export function Newsletter() {
  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="newsletter-heading"
          className="font-display mb-4 text-3xl font-bold md:text-4xl"
        >
          Enter the circle
        </h2>
        <p className="mb-10 text-base leading-relaxed text-white/70">
          Lorem ipsum dolor sit amet. Join our mailing list for ritual dates,
          secret locations, and whispers from the void.
        </p>

        <div
          className="border-occult mx-auto flex max-w-md flex-col gap-4 p-6 sm:flex-row sm:items-stretch"
          role="group"
          aria-label="Newsletter signup (placeholder)"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            disabled
            aria-label="Email address"
            className="min-h-11 flex-1 border border-white/40 bg-black px-4 font-mono text-sm text-white/50 placeholder:text-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          />
          <CTAButton type="button" className="shrink-0">
            Enter the circle
          </CTAButton>
        </div>

        <p className="mt-10 font-mono text-xs uppercase tracking-widest text-white/40">
          Ticket sales will be linked later through{" "}
          <span className="text-white/60">Eversports</span>.
        </p>
      </div>
    </section>
  );
}
