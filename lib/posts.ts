import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type PostFrontmatter = {
  title: string;
  date: string;
  description?: string;
};

export type PostListItem = PostFrontmatter & { slug: string };

export type Post = PostListItem & { content: string };

function parseFrontmatter(data: Record<string, unknown>): PostFrontmatter {
  const title = typeof data.title === "string" ? data.title : "Untitled";
  const date = typeof data.date === "string" ? data.date : "1970-01-01";
  const description = typeof data.description === "string" ? data.description : undefined;
  return { title, date, description };
}

export async function getAllPosts(): Promise<PostListItem[]> {
  let files: string[];
  try {
    files = await fs.readdir(contentDir);
  } catch {
    return [];
  }

  const mdFiles = files.filter((f) => f.endsWith(".md"));
  const posts = await Promise.all(
    mdFiles.map(async (file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = await fs.readFile(path.join(contentDir, file), "utf-8");
      const { data } = matter(raw);
      const fm = parseFrontmatter(data);
      return { slug, ...fm };
    }),
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(contentDir, `${slug}.md`);
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(raw);
    const fm = parseFrontmatter(data);
    return { slug, ...fm, content };
  } catch {
    return null;
  }
}
