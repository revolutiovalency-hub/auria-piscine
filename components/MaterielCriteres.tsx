// « Matériel que nous installons et critères de choix » : formulation factuelle, sans logo,
// sans le mot partenaire ni agréé (décision D1, point 13).
export function MaterielCriteres({ title, intro, marques, criteres }: { title: string; intro: string; marques: string[]; criteres: { titre: string; texte: string }[] }) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-heading text-primary">{title}</h2>
      <p className="mt-4 text-secondary max-w-content">{intro}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {marques.map((m) => (
          <li key={m} className="rounded bg-surface px-4 py-2 text-primary">{m}</li>
        ))}
      </ul>
      <h3 className="mt-10 text-lg font-heading text-primary">Nos critères de choix</h3>
      <dl className="mt-4 grid gap-4 sm:grid-cols-2">
        {criteres.map((c) => (
          <div key={c.titre} className="rounded bg-surface p-5">
            <dt className="font-heading text-primary">{c.titre}</dt>
            <dd className="mt-1 text-secondary">{c.texte}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
