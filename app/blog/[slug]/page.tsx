import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { PostBody } from "@/components/post-body";
import { InlineMarkdown } from "@/components/inline-markdown";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title.replace(/<[^>]+>/g, ""),
    description: post.description,
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl">
      <Link
        href="/blog"
        className="font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-accent"
      >
        ← Blog
      </Link>
      <header className="mt-8 border-b border-border-subtle pb-10">
        <time dateTime={post.date} className="font-mono text-xs text-zinc-500">
          {formatDate(post.date)}
        </time>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          <InlineMarkdown>{post.title}</InlineMarkdown>
        </h1>
        {post.description ? (
          <p className="mt-4 text-lg text-zinc-300 transition-colors hover:text-zinc-200">
            {post.description}
          </p>
        ) : null}
      </header>
      <div className="pt-12">
        <PostBody>{post.content}</PostBody>
      </div>
    </article>
  );
}
