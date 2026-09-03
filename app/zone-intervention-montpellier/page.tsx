import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ZoneCarte } from "@/components/ZoneCarte";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/site.config";
import { services } from "@/lib/nav";
import { communesCourantes } from "@/lib/site-content";
import Link from "next/link";

const PATH = "/zone-intervention-montpellier";

export const generateMetadata = () =>
  buildMetadata({
    title: "Pisciniste à Castelnau-le-Lez, Lattes, Pérols et Montpellier",
    description:
      "Aurea Piscines construit, rénove et entretient les piscines de Montpellier et de sa première couronne, à 30 km autour. Vérifiez si votre commune est couverte.",
    path: PATH,
  });

export default function ZoneIntervention() {
  const b = site.business;
  return (
    <>
      <Hero
        breadcrumb="Zone d’intervention"
        title="Où intervient Aurea Piscines autour de Montpellier"
        lead="Aurea Piscines construit des bassins béton, rénove et entretient les piscines de Montpellier et de sa première couronne, dans un rayon d’environ 30 km autour de son dépôt de la Pompignane. Au-delà, l’intervention dépend de l’accès au terrain et du calendrier des équipes, et se décide au cas par cas."
        cta={{ label: "Vérifier ma commune", href: "/contact" }}
      />

      <Section tone="surface">
        <ZoneCarte
          title="Les communes couvertes en intervention courante"
          intro="Douze communes de Montpellier et de sa première couronne sont desservies en intervention courante, pour la construction, la rénovation, les équipements et les contrats d’entretien. Voici celles que nous nommons aujourd’hui."
          paliers={[
            {
              titre: "Montpellier et première couronne",
              texte: "Intervention courante, sans condition particulière d’accès, pour toutes nos prestations.",
              communes: communesCourantes,
            },
            {
              titre: "Un rayon d’environ 30 km",
              texte: "Le périmètre se mesure depuis le dépôt du 128 avenue de la Pompignane, à Montpellier. Si votre commune n’est pas nommée ici, indiquez-la nous : nous vous répondons précisément.",
            },
            {
              titre: "Ce que la zone change",
              texte: "Elle conditionne la fréquence des passages d’entretien et la réactivité en dépannage, pas la façon dont nous construisons.",
            },
          ]}
        />
      </Section>

      <Section>
        <ZoneCarte
          title="Au-delà de 30 km"
          intro="Nous préférons annoncer les limites plutôt que de les découvrir en cours de chantier."
          paliers={[
            {
              titre: "Entre 30 et 50 km",
              texte: "Étude au cas par cas, selon l’accès au terrain, la nature du chantier et le calendrier des équipes. Sète est incluse dans ce périmètre.",
            },
            {
              titre: "Au-delà de 50 km",
              texte: "Nous n’intervenons pas, ni en construction, ni en rénovation, ni en entretien. Nous vous le disons dès le premier échange.",
            },
            {
              titre: "Contrats d’entretien",
              texte: "Au-delà de 30 km, un contrat d’entretien n’est proposé que si la fréquence des passages reste tenable sur l’année.",
            },
          ]}
        />
      </Section>

      <Section tone="surface">
        <h2 className="h2-md">Siège et dépôt de la Pompignane</h2>
        <div className="prose mt-4">
          <p>
            Notre siège et notre dépôt se trouvent au {b.address.street}, {b.address.postalCode} {b.address.city}. Le matériel,
            les pièces d’usure courantes et les véhicules d’intervention y sont stockés.
          </p>
          <p>
            La proximité change deux choses concrètes. Sur un dépannage, une pièce courante disponible au dépôt évite un
            deuxième déplacement. Sur un contrat d’entretien, une tournée courte permet de tenir la fréquence de passages
            prévue au contrat, y compris en pleine saison.
          </p>
          <p>
            Le dépôt n’est pas un show-room et ne se visite pas librement : les rendez-vous se tiennent sur votre terrain ou au
            dépôt, sur rendez-vous, du lundi au vendredi de 8h à 18h.
          </p>
        </div>
        <h3 className="mt-10 h3-sans">Nos prestations sur cette zone</h3>
        <ul className="mt-3 grid list-none gap-2 p-0 text-[15px]">
          {services.map((s) => (
            <li key={s.href}><Link href={s.href} className="tap underline">{s.label}</Link></li>
          ))}
        </ul>
      </Section>

      <CtaBand
          title="Vérifier votre commune"
          text="Indiquez votre commune et votre projet. Nous vous rappelons sous 24 h ouvrées pour vous dire si nous intervenons et à quelles conditions."
          cta={{ label: "Demander un rappel", href: "/contact" }}
      />

      <JsonLd
        data={[
          webPageJsonLd({
            type: "WebPage",
            name: "Zone d’intervention d’Aurea Piscines autour de Montpellier",
            description:
              "Communes couvertes en intervention courante autour de Montpellier, périmètre étudié au cas par cas entre 30 et 50 km, et limite au-delà de 50 km.",
            path: PATH,
          }),
          breadcrumbJsonLd([{ name: "Zone d’intervention", path: PATH }]),
        ]}
      />
    </>
  );
}
