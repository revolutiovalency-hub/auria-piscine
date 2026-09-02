import { JsonLd } from "./JsonLd";
import { faqJsonLd } from "@/lib/seo";

// FAQ sémantique (details/summary) + JSON-LD FAQPage généré automatiquement.
export function Faq({ items, title = "Questions fréquentes" }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-heading text-primary">{title}</h2>
      <div className="mt-6 divide-y divide-muted/30">
        {items.map((it) => (
          <details key={it.q} className="py-4 group">
            <summary className="cursor-pointer font-medium text-primary list-none flex justify-between">
              {it.q}<span aria-hidden="true" className="ml-4 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-3 text-secondary max-w-content">{it.a}</p>
          </details>
        ))}
      </div>
      <JsonLd data={faqJsonLd(items)} />
    </div>
  );
}
