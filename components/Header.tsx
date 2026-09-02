import Link from "next/link";
import { site } from "@/site.config";

// Navigation. L'agent Dev remplace `links` par les pages de la page_matrix.
const links = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="border-b border-muted/20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-lg text-primary">{site.name}</Link>
        <nav aria-label="Navigation principale">
          <ul className="flex gap-6 text-sm">
            {links.map((l) => <li key={l.href}><Link href={l.href} className="text-secondary hover:text-primary">{l.label}</Link></li>)}
          </ul>
        </nav>
      </div>
    </header>
  );
}
