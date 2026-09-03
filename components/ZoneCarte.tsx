import Link from "next/link";

// Zone d'intervention : communes en intervention courante, puis anneau 30 à 50 km étudié au cas par cas
// et au-delà non couvert (décision D1, point 20). Aucune information portée uniquement par une image (aio_rules).
export type ZonePalier = { titre: string; texte: string; communes?: string[] };

export function ZoneCarte({ title, intro, paliers, lien }: { title: string; intro?: string; paliers: ZonePalier[]; lien?: { label: string; href: string } }) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-heading text-primary">{title}</h2>
      {intro && <p className="mt-4 text-secondary max-w-content">{intro}</p>}
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {paliers.map((p) => (
          <div key={p.titre} className="rounded bg-surface p-5">
            <h3 className="text-lg font-heading text-primary">{p.titre}</h3>
            <p className="mt-2 text-secondary">{p.texte}</p>
            {p.communes && (
              <ul className="mt-3 grid gap-1 text-secondary">
                {p.communes.map((c) => <li key={c}>{c}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
      {lien && <Link href={lien.href} className="mt-8 tap underline text-primary">{lien.label}</Link>}
    </div>
  );
}
