import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { InlineMarkdown } from "@/components/inline-markdown";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on engineering tools, Emacs, Git, Docker, and more.",
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Writing</p>
      <h1 className="mt-4 font-sans text-4xl font-semibold tracking-tight text-zinc-50">Blog</h1>

      <ol className="mt-14 divide-y divide-border-subtle border-t border-border-subtle">
        {posts.map((post) => (
          <li key={post.slug} className="py-10 first:pt-10">
            <time dateTime={post.date} className="font-mono text-xs text-zinc-500">
              {formatDate(post.date)}
            </time>
            <Link href={`/blog/${post.slug}`} className="group mt-3 block">
              <span className="text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-accent">
                <InlineMarkdown>{post.title}</InlineMarkdown>
              </span>
              {post.description ? (
                <span className="mt-2 block text-[15px] leading-relaxed text-zinc-500 group-hover:text-zinc-400">
                  {post.description}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
