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
      <h2 className="text-2xl sm:text-3xl font-heading text-primary">{title}</h2>
      <ol className="mt-6 grid gap-4 sm:grid-cols-3">
        {points.map((p, i) => (
          <li key={p} className="rounded bg-surface p-5 text-secondary">
            <span className="block text-sm text-muted">{i + 1}</span>
            {p}
          </li>
        ))}
      </ol>
      <Link href={cta.href} className="mt-8 tap rounded bg-accent px-5 py-3 font-medium text-background">{cta.label}</Link>
      {links && links.length > 0 && (
        <div className="mt-10">
          <h3 className="text-lg font-heading text-primary">À lire aussi</h3>
          <ul className="mt-3 grid gap-1 text-secondary">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="tap underline">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
