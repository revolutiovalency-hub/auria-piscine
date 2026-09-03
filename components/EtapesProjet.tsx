// Déroulé d'un projet, du relevé de terrain à la mise en eau. Liste ordonnée réelle (aio_rules).
export type Etape = { titre: string; texte: string };

export function EtapesProjet({ title, intro, etapes }: { title: string; intro?: string; etapes: Etape[] }) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-heading text-primary">{title}</h2>
      {intro && <p className="mt-4 text-secondary max-w-content">{intro}</p>}
      <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {etapes.map((e, i) => (
          <li key={e.titre} className="rounded bg-surface p-5">
            <p className="text-sm text-muted">Étape {i + 1}</p>
            <h3 className="mt-1 text-lg font-heading text-primary">{e.titre}</h3>
            <p className="mt-2 text-secondary">{e.texte}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
