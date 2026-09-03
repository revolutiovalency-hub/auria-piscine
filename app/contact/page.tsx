import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
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
        title="Demander un devis détaillé pour votre piscine"
        lead="Pour chiffrer un projet, nous avons besoin du type de projet, de votre commune, de votre budget indicatif, de l’échéance souhaitée et d’un téléphone. Indiquez ces cinq éléments dans votre message : nous vous rappelons sous 24 h ouvrées pour convenir du relevé de terrain ou du diagnostic."
      />

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-heading text-primary">Votre demande</h2>
            <p className="mt-4 text-secondary max-w-content">
              Reprenez ces cinq points dans le champ « votre besoin » : type de projet, commune, budget indicatif, échéance
              souhaitée et téléphone. Plus votre message est précis, plus notre réponse l’est.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-heading text-primary">Nos coordonnées</h2>
            <address className="mt-4 not-italic text-secondary">
              <p className="font-heading text-primary">{site.name}</p>
              <p className="mt-2">
                {b.address.street}
                <br />
                {b.address.postalCode} {b.address.city}
              </p>
              <p className="mt-2">
                <a href={`tel:${b.telephoneE164}`} className="tap underline text-primary">{b.telephone}</a>
              </p>
              <p className="mt-1">
                <a href={`mailto:${b.email}`} className="tap underline text-primary">{b.email}</a>
              </p>
            </address>

            <h3 className="mt-10 text-lg font-heading text-primary">Horaires d’atelier</h3>
            <div className="mt-3 text-secondary max-w-content">
              <p>Du lundi au vendredi, de 8h à 18h, uniquement sur rendez-vous.</p>
              <p className="mt-2">
                Nous n’avons pas de show-room : les rendez-vous se tiennent sur votre terrain, ou au dépôt lorsqu’il s’agit de
                voir du matériel.
              </p>
              <p className="mt-2">
                L’atelier ferme deux semaines à la mi-août. Une astreinte de dépannage est assurée pendant cette période pour
                les clients sous contrat d’entretien.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Ce qui est payant</h2>
        <div className="mt-4 prose text-secondary">
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

      <Section tone="surface">
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Accès au dépôt et zone couverte</h2>
        <div className="mt-4 prose text-secondary">
          <p>
            Le siège et le dépôt d’Aurea Piscines se trouvent {b.address.street}, {b.address.postalCode} {b.address.city}, dans
            le quartier de la Pompignane. L’accès se fait sur rendez-vous, aux horaires d’atelier.
          </p>
          <p>
            Nous construisons, rénovons et entretenons les piscines de Montpellier et de sa première couronne, dans un rayon
            d’environ 30 km, notamment à {communesCourantes.filter((c) => c !== "Montpellier").join(", ")}. Entre 30 et 50 km, Sète incluse, l’intervention est
            étudiée au cas par cas. Au-delà de 50 km, nous n’intervenons pas.
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
