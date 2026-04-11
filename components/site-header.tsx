import Link from "next/link";

const links = [
  { href: "/", label: "About" },
  { href: "/cv", label: "CV" },
  { href: "/blog", label: "Blog" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm text-zinc-100 transition-colors hover:text-accent"
        >
          shaneikennedy.xyz
        </Link>
        <nav className="flex gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-200"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
