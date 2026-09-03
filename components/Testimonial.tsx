export type Avis = { citation: string; auteur: string; ville: string; projet: string };

// Citation client de la maquette : grande typographie serif, filet supérieur, légende en trois parties.
export function Testimonial({ avis }: { avis: Avis }) {
  return (
    <figure className="m-0 flex flex-col gap-5 border-t border-line-soft pt-[26px]">
      <blockquote className="m-0 font-heading text-[22px] leading-[1.45] text-text">« {avis.citation} »</blockquote>
      <figcaption className="text-[13.5px] tracking-[0.02em] text-muted">
        {avis.auteur} · {avis.ville}
        <br />
        {avis.projet}
      </figcaption>
    </figure>
  );
}
