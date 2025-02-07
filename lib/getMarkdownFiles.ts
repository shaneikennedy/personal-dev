import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
}

export function getMarkdownFiles(): BlogPost[] {
  const contentDirectory = path.join(process.cwd(), "content")
  const fileNames = fs.readdirSync(contentDirectory)

  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data } = matter(fileContents)

      return {
        slug: fileName.replace(/\.md$/, ""),
        title: data.title || fileName.replace(/\.md$/, "").replace(/-/g, " "),
        date: data.date || "",
        description: data.description || "",
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1)) // Sort posts by date, newest first
}

