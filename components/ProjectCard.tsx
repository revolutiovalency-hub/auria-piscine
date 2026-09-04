import { MediaZone } from "./MediaZone";

export type Projet = { titre: string; meta: string; texte: string; specs?: string };

// Carte de réalisation de la maquette. Variante « featured » : bandeau large, texte superposé
// sur l'aplat sombre et dégradé de lisibilité.
export function ProjectCard({ projet, featured = false }: { projet: Projet; featured?: boolean }) {
  if (featured) {
    return (
      <article
        className="span-2 relative flex items-end overflow-hidden rounded-card bg-primary-dark texture"
        style={{ minHeight: "clamp(320px,42vw,520px)" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top,rgba(8,28,30,0.78),transparent 62%)" }}
        />
        <div className="relative p-[clamp(22px,3vw,38px)]">
          <p className="mb-2.5 text-[11.5px] uppercase tracking-[0.2em] text-on-dark-72">{projet.meta}</p>
          <h3 className="mb-2.5 font-heading text-[clamp(26px,3vw,38px)] font-medium leading-tight text-on-dark">{projet.titre}</h3>
          <p className="max-w-[52ch] text-[15.5px] leading-[1.6] text-on-dark-78">{projet.texte}</p>
          {projet.specs && <p className="mt-3 text-[13px] tracking-[0.02em] text-on-dark-72">{projet.specs}</p>}
        </div>
      </article>
    );
  }
  return (
    <article className="flex flex-col overflow-hidden rounded-card border border-line bg-background">
      <MediaZone ratio="3/2" />
      <div className="flex flex-1 flex-col gap-2 p-6">
        <p className="text-[11.5px] uppercase tracking-[0.18em] text-primary">{projet.meta}</p>
        <h3 className="font-heading text-[23px] font-semibold leading-tight">{projet.titre}</h3>
        <p className="flex-1 text-[15px] leading-[1.6] text-muted">{projet.texte}</p>
        {projet.specs && <p className="mt-1.5 text-[13px] tracking-[0.02em] text-faint">{projet.specs}</p>}
      </div>
    </article>
  );
}
