import Link from "next/link";
import { Section } from "@/components/Section";
import { getPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const generateMetadata = () => buildMetadata({ title: "Blog", description: "Conseils et actualités.", path: "/blog" });

export default function BlogIndex() {
  const posts = getPosts();
  return (
    <Section>
      <h1 className="text-4xl font-heading text-primary">Blog</h1>
      <ul className="mt-8 space-y-6">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="text-xl font-heading text-primary hover:underline">{p.title}</Link>
            <p className="text-secondary mt-1">{p.description}</p>
          </li>
        ))}
        {posts.length === 0 && <li className="text-muted">Aucun article pour le moment.</li>}
      </ul>
    </Section>
  );
}
