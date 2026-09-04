import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { InfoContact } from "@/components/InfoContact";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/site.config";
import { zonePage } from "@/lib/nav";
import { communesCourantes } from "@/lib/site-content";

const PATH = "/contact";

export const generateMetadata = () =>
  buildMetadata({
    title: "Contact et devis détaillé pour votre piscine à Montpellier",
    description:
      "Construction, rénovation, équipements ou entretien : décrivez votre projet à Aurea Piscines, à Montpellier. Rappel sous 24 h ouvrées pour le chiffrer.",
    path: PATH,
  });

export default function Contact() {
  const b = site.business;
  return (
    <>
      <Hero
        variant="plain"
        breadcrumb="Contact"
        title="Demandez votre devis détaillé"
        lead="Décrivez votre projet en quelques lignes : type de projet, commune, budget indicatif, échéance souhaitée et téléphone. Nous vous rappelons sous 24 h ouvrées et, si besoin, nous passons sur place pour un relevé de terrain, qui n’est pas facturé."
      />

      <Section size="sm" className="pt-[clamp(28px,3vw,44px)]">
        <div
          className="grid items-start gap-[clamp(28px,3.4vw,56px)]"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))" }}
        >
          <div>
            <h2 className="sr-only">Formulaire de demande de devis</h2>
            <ContactForm />
          </div>
          <InfoContact />
        </div>
      </Section>

      <Section tone="surface" size="sm">
        <h2 className="h2-md max-w-[20ch]">Ce qui est payant</h2>
        <div className="prose mt-4">
          <p>Nous l’annonçons avant de commencer, pas au moment de la facture.</p>
          <ul>
            <li>Le premier échange, la visite de terrain et le devis de travaux ne sont pas facturés.</li>
            <li>
              L’étude de faisabilité, les plans d’implantation et le montage du dossier d’urbanisme sont facturés au montant
              annoncé avant leur lancement, et restent dus si le projet ne se concrétise pas.
            </li>
            <li>Ces prestations sont intégrées au devis de travaux lorsque le chantier est signé.</li>
            <li>L’étude de sol est réalisée par un bureau d’études indépendant et facturée par lui, ou refacturée à l’identique.</li>
          </ul>
          <p>
            Le détail figure sur la page{" "}
            <Link href="/etude-faisabilite-demarches-urbanisme">étude de faisabilité et démarches d’urbanisme</Link>.
          </p>
        </div>
      </Section>

      <Section size="sm">
        <h2 className="h2-md max-w-[20ch]">Accès au dépôt et zone couverte</h2>
        <div className="prose mt-4">
          <p>
            Le siège et le dépôt d’Aurea Piscines se trouvent {b.address.street}, {b.address.postalCode} {b.address.city}, dans
            le quartier de la Pompignane. L’accès se fait sur rendez-vous, aux horaires d’atelier. Le dépôt n’est pas un
            show-room.
          </p>
          <p>
            Nous construisons, rénovons et entretenons les piscines de Montpellier et de sa première couronne, dans un rayon
            d’environ 30 km, notamment à {communesCourantes.filter((c) => c !== "Montpellier").join(", ")}. Entre 30 et 50 km,
            Sète incluse, l’intervention est étudiée au cas par cas. Au-delà de 50 km, nous n’intervenons pas.
          </p>
          <p>
            <Link href={zonePage.href}>Voir le détail de la zone d’intervention autour de Montpellier</Link>.
          </p>
        </div>
      </Section>

      <JsonLd
        data={[
          webPageJsonLd({
            type: "ContactPage",
            name: "Contacter Aurea Piscines à Montpellier",
            description:
              "Coordonnées, horaires et formulaire de demande de devis détaillé d’Aurea Piscines, 128 avenue de la Pompignane à Montpellier.",
            path: PATH,
          }),
          breadcrumbJsonLd([{ name: "Contact", path: PATH }]),
        ]}
      />
    </>
  );
}
