import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";

type Props = {
  children: string;
};

function isInternal(href: string | undefined) {
  return href?.startsWith("/") ?? false;
}

const proseClass = [
  "prose prose-invert max-w-none",
  "prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight",
  "prose-h2:mt-14 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border-subtle prose-h2:pb-2 prose-h2:text-xl",
  "prose-h3:mt-10 prose-h3:text-lg",
  "prose-p:text-[18px] prose-p:leading-[1.7] prose-p:text-zinc-200 prose-p:my-5",
  "prose-a:text-readable-link prose-a:underline prose-a:decoration-zinc-500 prose-a:underline-offset-[3px] hover:prose-a:decoration-readable-link",
  "prose-strong:text-zinc-100",
  "prose-code:rounded prose-code:bg-surface-overlay prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:text-accent prose-code:before:content-none prose-code:after:content-none",
  "prose-pre:overflow-x-auto prose-pre:max-w-full prose-pre:border prose-pre:border-border prose-pre:bg-surface-raised prose-pre:p-4 prose-pre:text-sm prose-pre:leading-relaxed prose-pre:text-zinc-200",
  "prose-ol:text-zinc-200 prose-ul:text-zinc-200 prose-li:my-1 prose-li:marker:text-zinc-600",
  "prose-blockquote:border-accent prose-blockquote:text-zinc-400",
  "prose-table:text-sm prose-th:border prose-th:border-border prose-th:bg-surface-overlay prose-th:px-3 prose-th:py-2 prose-td:border prose-td:border-border prose-td:px-3 prose-td:py-2",
].join(" ");

export function PostBody({ children }: Props) {
  return (
    <article className={proseClass}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a({ href, children, ...props }) {
            if (href && isInternal(href)) {
              return (
                <Link href={href} {...props}>
                  {children}
                </Link>
              );
            }
            return (
              <a href={href} rel="noopener noreferrer" target="_blank" {...props}>
                {children}
              </a>
            );
          },
          img({ src, alt }) {
            if (!src) return null;
            return (
              <img
                src={src}
                alt={alt ?? ""}
                loading="lazy"
                className="my-6 w-full rounded-lg border border-border-subtle"
              />
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </article>
  );
}
