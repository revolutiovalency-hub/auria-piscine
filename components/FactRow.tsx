export type Fait = { cle: string; valeur: string };

// Fiche technique clé/valeur de la maquette : lignes séparées par un filet, valeur alignée à droite.
export function FactRow({ faits }: { faits: Fait[] }) {
  return (
    <dl className="flex flex-col self-start border-t border-line-alt">
      {faits.map((f) => (
        <div key={f.cle} className="flex justify-between gap-6 border-b border-line-alt py-4">
          <dt className="text-[14.5px] text-muted">{f.cle}</dt>
          <dd className="text-right text-[14.5px] font-medium">{f.valeur}</dd>
        </div>
      ))}
    </dl>
  );
}
