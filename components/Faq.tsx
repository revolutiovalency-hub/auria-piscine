import type { ReactNode } from "react";
import { JsonLd } from "./JsonLd";
import { faqJsonLd } from "@/lib/seo";

// FAQ de la maquette : bouton pleine largeur portant le libellé et un signe à droite (+ fermé, – ouvert),
// réponse affichée sous le bouton. Reproduit avec details/summary : une seule réponse ouverte à la fois
// grâce à l'attribut name, bascule instantanée (aucune durée ni courbe déclarée dans le CSS de la maquette)
// et réponses présentes dans le HTML servi (aio_rules). JSON-LD FAQPage généré automatiquement.
export function Faq({
  items,
  title = "Questions fréquentes",
  eyebrow,
  intro,
  name = "faq",
  soft = false,
}: {
  items: { q: string; a: string }[];
  title?: string;
  eyebrow?: string;
  intro?: ReactNode;
  name?: string;
  soft?: boolean;
}) {
  const border = soft ? "border-line-soft" : "border-line-alt";
  return (
    <div className="grid items-start gap-[clamp(28px,4vw,72px)]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(290px,100%),1fr))" }}>
      <div>
        {eyebrow && <p className="eyebrow mb-[18px]">{eyebrow}</p>}
        <h2 className="h2-lg max-w-[16ch]">{title}</h2>
        {intro && <div className="mt-[18px] max-w-[44ch] text-[16px] text-muted">{intro}</div>}
      </div>
      <div className={`border-t ${border}`}>
        {items.map((it) => (
          <details key={it.q} name={name} className={`group border-b ${border}`}>
            <summary className="flex w-full cursor-pointer list-none items-start justify-between gap-5 py-[22px] text-left [&::-webkit-details-marker]:hidden">
              <span className="text-[17px] font-medium leading-[1.45] text-text">{it.q}</span>
              <span aria-hidden="true" className="shrink-0 text-[20px] leading-none text-primary">
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">–</span>
              </span>
            </summary>
            <p className="max-w-[64ch] pb-6 text-[15.5px] leading-[1.7] text-muted">{it.a}</p>
          </details>
        ))}
      </div>
      <JsonLd data={faqJsonLd(items)} />
    </div>
  );
}
