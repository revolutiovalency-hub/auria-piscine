import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/site.config";

export const generateMetadata = () => buildMetadata({ title: "Politique de confidentialité", description: `Comment ${site.name} traite vos données personnelles.`, path: "/confidentialite" });

export default function Confidentialite() {
  const l = site.legal; const b = site.business;
  return (
    <Section>
      <article className="prose">
        <h1 className="text-3xl font-heading text-primary mb-6">Politique de confidentialité</h1>
        <h2>Responsable du traitement</h2>
        <p>{l.legalName || site.name}, {b.address.postalCode} {b.address.city}{b.email && `, ${b.email}`}.</p>
        <h2>Données collectées</h2>
        <p>Le formulaire de contact collecte votre nom, votre email, votre téléphone si vous le renseignez, et votre message. Ces données servent uniquement à répondre à votre demande. Base légale : votre consentement et l'exécution de mesures précontractuelles.</p>
        <h2>Durée de conservation</h2>
        <p>Les demandes sont conservées 3 ans après le dernier contact, puis supprimées.</p>
        <h2>Destinataires</h2>
        <p>Vos données sont transmises par email à {l.legalName || site.name} via le prestataire Resend, hébergé aux États-Unis dans le cadre de clauses contractuelles types. Elles ne sont ni vendues ni cédées.</p>
        <h2>Cookies</h2>
        <p>{l.analytics ? "Ce site utilise un outil de mesure d'audience. Vous pouvez refuser les cookies via le bandeau affiché à votre première visite." : "Ce site ne dépose aucun cookie de suivi."}</p>
        <h2>Vos droits</h2>
        <p>Vous pouvez accéder à vos données, les rectifier, les supprimer ou vous opposer à leur traitement en écrivant à {b.email || "l'adresse indiquée dans les mentions légales"}. Vous pouvez aussi saisir la CNIL.</p>
      </article>
      <JsonLd data={breadcrumbJsonLd([{ name: "Politique de confidentialité", path: "/confidentialite" }])} />
    </Section>
  );
}
