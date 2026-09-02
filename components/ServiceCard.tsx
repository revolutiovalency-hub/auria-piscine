import Link from "next/link";

export function ServiceCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="block rounded bg-surface p-6 hover:bg-background border border-transparent hover:border-primary/20">
      <h3 className="text-xl font-heading text-primary">{title}</h3>
      <p className="mt-2 text-secondary">{description}</p>
    </Link>
  );
}
