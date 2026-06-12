import { socialLinks } from "@/data/event";

export function Socials() {
  return (
    <section
      id="socials"
      aria-labelledby="socials-heading"
      className="border-b border-white/20 px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center md:mb-12">
          <h2
            id="socials-heading"
            className="font-display text-3xl font-bold md:text-4xl"
          >
            Follow the circle
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-mono text-[10px] uppercase tracking-[0.3em] text-white/45 md:text-xs">
            Whispers, dates, and glimpses behind the veil
          </p>
        </header>

        <ul
          className="mx-auto flex max-w-2xl flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center"
          role="list"
        >
          {socialLinks.map((link) => (
            <li key={link.platform}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex min-w-[220px] flex-col border border-white/40 px-6 py-4 transition-all hover:border-white hover:bg-white/5"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45 group-hover:text-white/60">
                  {link.platform}
                </span>
                <span className="mt-1 font-sans text-sm tracking-wide text-white/90 group-hover:text-white md:text-base">
                  {link.handle}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
