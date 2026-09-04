import { MediaZone } from "./MediaZone";

export type TypeBassin = { titre: string; texte: string; note: string };

// Carte « type de piscine » de la maquette : zone média 4/3, titre serif, texte, note courte.
export function PoolTypeCard({ type }: { type: TypeBassin }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-card border border-line bg-background">
      <MediaZone ratio="4/3" />
      <div className="flex flex-1 flex-col gap-2.5 p-6">
        <h3 className="h3-serif">{type.titre}</h3>
        <p className="flex-1 text-[15px] leading-[1.65] text-muted">{type.texte}</p>
        <p className="text-[13px] tracking-[0.03em] text-primary">{type.note}</p>
      </div>
    </article>
  );
}
