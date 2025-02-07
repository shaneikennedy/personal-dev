import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Markdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import Link from "next/link"

export async function generateStaticParams() {
  const contentDirectory = path.join(process.cwd(), "content")
  const fileNames = fs.readdirSync(contentDirectory)

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents);

  return (
    <main className="space-y-8">
      <div className="terminal-line mb-8">
        <Link href="/blog" className="text-terminal-green hover:underline">
          cd ..
        </Link>
      </div>

      <article className="space-y-6">
        <header className="space-y-4">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <div className="text-sm opacity-80">
            <span className="text-terminal-green">{">"}</span> {data.date}
          </div>
          <p className="opacity-90">{data.description}</p>
        </header>

        <div className="terminal-box mx-auto prose prose-invert prose-terminal">
          <Markdown className="mx-auto" remarkPlugins={[remarkGfm]}>{content}</Markdown>
        </div>
      </article>
    </main>
  )
}
