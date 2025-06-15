import Link from "next/link"
import { getMarkdownFiles } from "@/lib/getMarkdownFiles"

export default function BlogPage() {
  const posts = getMarkdownFiles()

  return (
    <main className="min-h-screen p-4" style={{ backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)' }}>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="terminal-line mb-8">
          <Link href="/" className="hover:underline" style={{ color: 'var(--theme-text)' }}>
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
            <article key={post.slug} className="terminal-box max-w-full">
              <Link href={`/blog/${post.slug}`} className="block hover:border-current">
                <h2 className="text-lg font-bold" dangerouslySetInnerHTML={{__html: post.title}} />
                <div className="text-sm opacity-80">
                  <span style={{ color: 'var(--theme-text)' }}>{">"}</span> {post.date}
                </div>
                <p className="opacity-90">{post.description}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
