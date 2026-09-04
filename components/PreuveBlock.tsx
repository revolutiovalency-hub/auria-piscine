import type { ReactNode } from "react";

// Bloc « Pourquoi Aurea » de la maquette : à gauche surtitre, H2 et chiffres clés ; à droite
// une colonne de preuves numérotées séparées par des filets.
// Chaque élément porte sa source ou sa date quand elle existe (aeo_rules).
export type Preuve = { label: string; detail: string; source?: string; href?: string };
export type Chiffre = { valeur: string; legende: string };

export function PreuveBlock({
  title,
  intro,
  eyebrow,
  items,
  chiffres,
  note,
  children,
}: {
  title: string;
  intro?: string;
  eyebrow?: string;
  items: Preuve[];
  chiffres?: Chiffre[];
  note?: string;
  children?: ReactNode;
}) {
  return (
    <div className="grid gap-[clamp(34px,5vw,80px)]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(310px,100%),1fr))" }}>
      <div>
        {eyebrow && <p className="eyebrow mb-[18px]">{eyebrow}</p>}
        <h2 className="h2-lg max-w-[16ch]">{title}</h2>
        {intro && <p className="mt-[26px] max-w-[52ch] text-[16px] text-muted">{intro}</p>}
        {chiffres && (
          <ul className="mt-[26px] flex list-none flex-wrap gap-[38px] border-t border-line-alt p-0 pt-3.5">
            {chiffres.map((c) => (
              <li key={c.legende}>
                <span className="stat mb-0.5 mt-3.5 block">{c.valeur}</span>
                <span className="block text-[13.5px] text-muted">{c.legende}</span>
              </li>
            ))}
          </ul>
        )}
        {note && <p className="mt-[22px] text-[12.5px] text-faint">{note}</p>}
        {children}
      </div>
      <ol className="flex list-none flex-col p-0">
        {items.map((it, i) => (
          <li key={it.label} className="flex gap-5 border-b border-line py-[22px]">
            <span className="pt-[5px] font-mono text-[11px] text-faint-alt">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="mb-1.5 h3-sans">{it.label}</h3>
              <p className="max-w-[52ch] text-[15px] leading-[1.65] text-muted">{it.detail}</p>
              {it.source && (
                <p className="mt-2 text-[13.5px] text-faint">
                  {it.href ? (
                    <a href={it.href} rel="nofollow noopener" target="_blank" className="underline">{it.source}</a>
                  ) : (
                    it.source
                  )}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
