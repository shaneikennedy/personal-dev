import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-md">
      <h1 className="font-mono text-sm uppercase tracking-widest text-zinc-500">404</h1>
      <p className="mt-4 text-lg text-zinc-300">This page could not be found.</p>
      <Link href="/" className="mt-8 inline-block font-mono text-sm text-accent hover:underline">
        ← Home
      </Link>
    </div>
  );
}
