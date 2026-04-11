import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Personal website of Shane Kennedy, software engineer based in Stockholm.",
};

export default function HomePage() {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
        Stockholm · Software engineer
      </p>
      <h1 className="mt-4 font-sans text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
        Shane Kennedy
      </h1>
      <p className="mt-8 text-lg leading-relaxed text-zinc-400">
        I build and lead systems around data platforms, streaming, and backend services, recently
        focused on Apache Kafka at scale, ingestion pipelines, and the tooling that keeps engineers
        productive.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-zinc-400">
        This site collects a longer{" "}
        <Link href="/cv" className="text-accent hover:underline">
          CV
        </Link>{" "}
        and occasional{" "}
        <Link href="/blog" className="text-accent hover:underline">
          notes
        </Link>{" "}
        on Emacs, Git, containers, and whatever I am learning in the open.
      </p>

      <section className="mt-14" aria-labelledby="interests-heading">
        <h2
          id="interests-heading"
          className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500"
        >
          Current Interests
        </h2>
        <ul className="mt-5 list-none space-y-3">
          <li className="flex gap-3 text-[17px] leading-relaxed text-zinc-300">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
            <span>
              Search in the agentic world{" "}
              <a
                href="https://github.com/shaneikennedy/varro"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
              >
                varro
              </a>
            </span>
          </li>
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="elsewhere-heading">
        <h2
          id="elsewhere-heading"
          className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500"
        >
          Elsewhere
        </h2>
        <ul className="mt-5 space-y-3">
          {(
            [
              {
                label: "GitHub",
                href: "https://github.com/shaneikennedy",
                secondary: "@shaneikennedy",
              },
              {
                label: "X",
                href: "https://x.com/shaneikennedy",
                secondary: "@shaneikennedy",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/shane-kennedy-087b77130",
                secondary: null,
              },
            ] as const
          ).map(({ label, href, secondary }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline font-mono text-sm text-zinc-200 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/50"
              >
                {label}
              </a>
              {secondary ? (
                <span className="font-mono text-sm text-zinc-600"> · {secondary}</span>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
