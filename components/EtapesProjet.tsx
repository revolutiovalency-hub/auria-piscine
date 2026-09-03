// Déroulé d'un projet. Grille de blocs numérotés sur aplat sombre, filets fins entre les cellules
// (maquette, sections « Notre méthode » et « Les étapes de votre projet »). Liste ordonnée réelle (aio_rules).
export type Etape = { titre: string; texte: string };

export function EtapesProjet({ title, intro, eyebrow, etapes }: { title: string; intro?: string; eyebrow?: string; etapes: Etape[] }) {
  return (
    <div>
      <div className="mb-[clamp(38px,4.6vw,64px)] max-w-[60ch]">
        {eyebrow && <p className="eyebrow-on-dark mb-[18px]">{eyebrow}</p>}
        <h2 className="h2-lg text-on-dark">{title}</h2>
        {intro && <p className="mt-[18px] text-[16.5px] text-on-dark-78">{intro}</p>}
      </div>
      <ol className="grid list-none border-t border-on-dark p-0" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(210px,100%),1fr))" }}>
        {etapes.map((e, i) => (
          <li
            key={e.titre}
            className="cell-etape flex min-h-[210px] flex-col gap-3 px-6 pb-[34px] pt-[30px]"
          >
            <span className="font-heading text-[30px] leading-none text-secondary">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="h3-sans text-on-dark">{e.titre}</h3>
            <p className="text-[14.5px] leading-[1.6] text-on-dark-72">{e.texte}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
