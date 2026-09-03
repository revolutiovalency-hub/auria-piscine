import Link from "next/link";

// Fin de page service : 3 points et lien vers /contact (conversion_rules), plus le maillage interne
// descriptif vers deux pages sœurs, la page zone et l'accueil (seo_rules).
export function EtapesSuivantes({
  title = "Les étapes suivantes",
  points,
  cta,
  links,
}: {
  title?: string;
  points: string[];
  cta: { label: string; href: string };
  links?: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="h2-md max-w-[20ch]">{title}</h2>
      <ol className="mt-8 grid list-none gap-6 p-0" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))" }}>
        {points.map((p, i) => (
          <li key={p} className="flex gap-5 border-t border-line-alt pt-5">
            <span className="font-mono text-[11px] text-faint-alt">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-[15px] leading-[1.65] text-muted">{p}</p>
          </li>
        ))}
      </ol>
      <Link href={cta.href} className="btn btn-primary mt-9">{cta.label}</Link>
      {links && links.length > 0 && (
        <nav aria-label="À lire aussi" className="mt-12 border-t border-line-alt pt-6">
          <h3 className="h3-sans">À lire aussi</h3>
          <ul className="mt-3 grid list-none gap-2 p-0">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="tap text-[15px] text-primary underline">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
