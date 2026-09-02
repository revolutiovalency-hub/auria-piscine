import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/site.config";

export const generateMetadata = () => buildMetadata({ title: "Mentions légales", description: `Mentions légales du site ${site.name}.`, path: "/mentions-legales" });

export default function MentionsLegales() {
  const l = site.legal; const b = site.business;
  return (
    <Section>
      <article className="prose">
        <h1 className="text-3xl font-heading text-primary mb-6">Mentions légales</h1>
        <h2>Éditeur du site</h2>
        <p>{l.legalName || site.name}{l.legalForm && `, ${l.legalForm}`}{l.capital && ` au capital de ${l.capital}`}<br />
          {b.address.street}, {b.address.postalCode} {b.address.city}<br />
          {l.siren && <>SIREN : {l.siren}<br /></>}
          {l.vatNumber && <>TVA : {l.vatNumber}<br /></>}
          {b.telephone && <>Téléphone : {b.telephone}<br /></>}
          {b.email && <>Email : {b.email}</>}</p>
        <h2>Responsable de la publication</h2>
        <p>{l.director || l.legalName || site.name}</p>
        <h2>Hébergement</h2>
        <p>{l.host}</p>
        <h2>Propriété intellectuelle</h2>
        <p>L'ensemble des contenus de ce site (textes, images, logos) est la propriété de {l.legalName || site.name} ou de ses partenaires. Toute reproduction sans autorisation est interdite.</p>
      </article>
    </Section>
  );
}
