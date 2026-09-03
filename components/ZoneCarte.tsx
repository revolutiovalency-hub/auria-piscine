import Link from "next/link";

// Zone d'intervention : communes en intervention courante, puis anneau 30 à 50 km étudié au cas par cas
// et au-delà non couvert (décision D1, point 20). Aucune information portée uniquement par une image (aio_rules).
export type ZonePalier = { titre: string; texte: string; communes?: string[] };

export function ZoneCarte({
  title,
  intro,
  paliers,
  lien,
}: {
  title: string;
  intro?: string;
  paliers: ZonePalier[];
  lien?: { label: string; href: string };
}) {
  return (
    <div>
      <h2 className="h2-md max-w-[20ch]">{title}</h2>
      {intro && <p className="mt-4 max-w-[62ch] text-[16.5px] leading-[1.75] text-body">{intro}</p>}
      <div
        className="mt-[clamp(30px,3.6vw,52px)] grid gap-[clamp(18px,2vw,30px)]"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(258px,100%),1fr))" }}
      >
        {paliers.map((p) => (
          <div key={p.titre} className="flex flex-col gap-3 rounded-card border border-line bg-background p-6">
            <h3 className="h3-serif">{p.titre}</h3>
            <p className="text-[15px] leading-[1.65] text-muted">{p.texte}</p>
            {p.communes && (
              <ul className="mt-1 flex list-none flex-wrap gap-2 p-0">
                {p.communes.map((c) => (
                  <li key={c} className="pill">{c}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      {lien && (
        <p className="mt-9">
          <Link href={lien.href} className="link-underline">{lien.label}</Link>
        </p>
      )}
    </div>
  );
}
