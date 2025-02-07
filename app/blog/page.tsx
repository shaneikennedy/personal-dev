import Link from "next/link"
import { getMarkdownFiles } from "@/lib/getMarkdownFiles"

export default function BlogPage() {
  const posts = getMarkdownFiles()

  return (
    <main className="space-y-8">
      <div className="terminal-line mb-8">
        <Link href="/" className="text-terminal-green hover:underline">
          cd ..
        </Link>
      </div>

      <pre className="ascii-art text-sm md:text-base mb-8">
        {`   ____  __
  / __ )/ /___  ____ _
 / __  / / __ \\/ __ \`/
/ /_/ / / /_/ / /_/ /
/_____/_/\\____/\\__, /
              /____/   `}
      </pre>

      <div className="space-y-6 mx-auto">
        {posts.map((post) => (
          <article key={post.slug} className="terminal-box max-w-[640px]">
            <Link href={`/blog/${post.slug}`} className="block hover:border-terminal-green">
              <h2 className="text-lg font-bold" dangerouslySetInnerHTML={{__html: post.title}} />
              <div className="text-sm opacity-80">
                <span className="text-terminal-green">{">"}</span> {post.date}
              </div>
              <p className="opacity-90">{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
