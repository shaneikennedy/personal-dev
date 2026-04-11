import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type Props = {
  children: string;
  className?: string;
};

/**
 * Renders short strings that may include inline HTML (e.g. &lt;del&gt; in titles).
 */
export function InlineMarkdown({ children, className }: Props) {
  return (
    <span className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          p: ({ children }) => <>{children}</>,
        }}
      >
        {children}
      </ReactMarkdown>
    </span>
  );
}
