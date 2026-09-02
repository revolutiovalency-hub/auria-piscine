import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type Post = { slug: string; title: string; description: string; date: string; cover?: string; body: string };

export function getPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx")).map((f) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf8");
    const { data, content } = matter(raw);
    return { slug: f.replace(/\.mdx$/, ""), title: data.title, description: data.description, date: data.date, cover: data.cover, body: content };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}
