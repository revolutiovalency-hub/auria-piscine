import type { ReactNode } from "react";

// Regroupe les preuves de fiabilité placées au contact de la demande de devis (conversion_rules).
// Chaque élément porte sa source ou sa date quand elle existe (aeo_rules).
export type Preuve = { label: string; detail: string; source?: string; href?: string };

export function PreuveBlock({ title, intro, items, children }: { title: string; intro?: string; items: Preuve[]; children?: ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-heading text-primary">{title}</h2>
      {intro && <p className="mt-4 text-secondary max-w-content">{intro}</p>}
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <li key={it.label} className="rounded bg-surface p-5">
            <p className="font-heading text-primary">{it.label}</p>
            <p className="mt-1 text-secondary">{it.detail}</p>
            {it.source && (
              <p className="mt-2 text-sm text-muted">
                {it.href ? <a href={it.href} rel="nofollow noopener" target="_blank" className="underline">{it.source}</a> : it.source}
              </p>
            )}
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
