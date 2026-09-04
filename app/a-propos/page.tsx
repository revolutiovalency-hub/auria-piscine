import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { PreuveBlock } from "@/components/PreuveBlock";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/site.config";
import { FICHE_GOOGLE } from "@/lib/site-content";

const PATH = "/a-propos";

export const generateMetadata = () =>
  buildMetadata({
    title: "Aurea Piscines, constructeur-pisciniste à Montpellier (34)",
    description:
      "SARL créée en 2009, plus de 300 projets et maçonnerie intégrée : découvrez comment Aurea Piscines travaille à Montpellier. Demandez un devis détaillé.",
    path: PATH,
  });

export default function APropos() {
  const l = site.legal;
  const b = site.business;
  return (
    <>
      <Hero
        breadcrumb="À propos"
        title="Aurea Piscines, constructeur-pisciniste à Montpellier depuis 2009"
        lead="Aurea Piscines est une SARL créée en 2009, dont le siège et le dépôt se trouvent 128 avenue de la Pompignane à Montpellier. Plus de 300 projets de construction et de rénovation ont été menés depuis, à Montpellier et dans un rayon d’environ 30 km, avec une équipe de maçonnerie salariée et une note de 4,8 sur 5 sur les avis clients Google."
        cta={{ label: "Demander un devis détaillé", href: "/contact" }}
      />

      <Section tone="surface">
        <h2 className="h2-md">L’équipe et la répartition des lots</h2>
        <div className="prose mt-4">
          <p>
            Deux conducteurs de travaux suivent les chantiers, du relevé de terrain à la réception. C’est l’un d’eux qui reste
            votre interlocuteur pendant toute la durée du projet.
          </p>
          <p>Nous écrivons noir sur blanc qui fait quoi, parce que c’est la première question qui se pose sur un chantier.</p>
          <ul>
            <li>
              <strong>Gros œuvre et étanchéité</strong> : réalisés par les salariés d’Aurea Piscines. Terrassement, ferraillage,
              béton armé projeté et étanchéité ne sont pas sous-traités.
            </li>
            <li>
              <strong>Plages, pierre et électricité</strong> : réalisées par des entreprises locales, coordonnées par Aurea
              Piscines sous notre planning et notre responsabilité de suivi.
            </li>
          </ul>
          <p>
            Cette répartition explique pourquoi nous tenons à faire nous-mêmes la structure : c’est le lot qui engage la durée
            de vie du bassin, et celui sur lequel un défaut ne se rattrape pas.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="h2-md">Notre façon de travailler</h2>
        <div className="prose mt-4">
          <ul>
            <li>
              <strong>Un prix contractualisé.</strong> Le devis est établi poste par poste après le relevé de terrain. Une fois
              signé, il ne bouge que sur votre demande ou sur un aléa de sol constaté, et toujours par avenant écrit avant
              exécution.
            </li>
            <li>
              <strong>Une date annoncée.</strong> Le planning figure au devis, avec la date de démarrage et l’enchaînement des
              phases. Quand une date bouge, nous le disons au moment où nous l’apprenons.
            </li>
            <li>
              <strong>Un seul interlocuteur.</strong> Le même conducteur de travaux du premier rendez-vous à la mise en eau,
              puis pour l’entretien si vous prenez un contrat.
            </li>
          </ul>
        </div>
      </Section>

      <Section tone="surface">
        <PreuveBlock
          title="Qualifications et assurances"
          intro="Nos qualifications et nos couvertures d’assurance, telles qu’elles figurent sur nos documents contractuels."
          items={[
            { label: "Qualification Qualibat 2181", detail: "Qualification professionnelle pour la construction de piscines en béton." },
            { label: "Propiscines®", detail: "Charte professionnelle de la filière piscine, engagements de méthode et d’information du client." },
            { label: "Certification IHB", detail: "Hygiène et qualité de l’eau de baignade, appliquée sur les contrats d’entretien." },
            { label: "Assurance décennale", detail: "MAAF Pro, police n° 8842-117-04, pour les travaux de construction et de rénovation." },
          ]}
        />
      </Section>

      <Section>
        <PreuveBlock
          title="Nos chiffres de fiabilité, datés"
          intro="Chaque chiffre porte sa période de mesure. Ils évoluent, et nous les mettons à jour plutôt que de les figer."
          items={[
            { label: "96 % de chantiers livrés dans le délai annoncé", detail: "Mesuré sur les chantiers réceptionnés en 2024 et 2025, par rapport à la date figurant au devis signé." },
            { label: "Plus de 300 projets", detail: "Constructions et rénovations menées depuis la création de l’entreprise en 2009." },
            {
              label: "Note Google 4,8 sur 5",
              detail: "Sur 87 avis publiés. Chiffre relevé en septembre 2026, il évolue avec les nouveaux avis.",
              source: "Consulter la fiche Google d’Aurea Piscines",
              href: FICHE_GOOGLE,
            },
          ]}
        />
      </Section>

      <Section tone="surface">
        <h2 className="h2-md">Ce que nous refusons de faire</h2>
        <div className="prose mt-4">
          <ul>
            <li>Nous ne vendons pas de coques polyester ni de piscines en kit, et nous n’assistons pas l’auto-construction.</li>
            <li>Nous ne reprenons pas un gros œuvre commencé par une autre entreprise.</li>
            <li>Nous n’intervenons pas au-delà de 50 km du dépôt.</li>
            <li>Nous ne chiffrons pas un bassin sans être venus sur le terrain.</li>
          </ul>
          <p>
            Il nous arrive d’orienter une demande vers un confrère. C’est le cas quand le projet relève d’une technique que nous
            ne pratiquons pas, quand le terrain est hors de notre périmètre, ou quand notre calendrier ne permet pas de tenir
            l’échéance que vous visez. Le dire tout de suite vous fait gagner des semaines.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="h2-md">Informations légales</h2>
        <div className="prose mt-4">
          <ul>
            <li>Raison sociale : {l.legalName}, {l.legalForm}</li>
            <li>SIREN : {l.siren}</li>
            <li>Immatriculation : {l.rcs}</li>
            <li>TVA intracommunautaire : {l.vatNumber}</li>
            <li>Code APE : {l.ape}</li>
            <li>Siège : {b.address.street}, {b.address.postalCode} {b.address.city}</li>
            <li>{l.insurance}</li>
          </ul>
          <p>
            Le détail figure sur la page <a href="/mentions-legales">mentions légales</a>.
          </p>
        </div>
      </Section>

      <CtaBand
          title="Parler de votre projet"
          text="Décrivez votre terrain, votre commune et votre échéance. Nous vous rappelons sous 24 h ouvrées."
          cta={{ label: "Demander un devis détaillé", href: "/contact" }}
      />

      <JsonLd
        data={[
          webPageJsonLd({
            type: "AboutPage",
            name: "Aurea Piscines, constructeur-pisciniste à Montpellier depuis 2009",
            description:
              "Présentation d’Aurea Piscines : SARL créée en 2009, équipe de maçonnerie salariée, qualifications, assurances et informations légales.",
            path: PATH,
          }),
          breadcrumbJsonLd([{ name: "À propos", path: PATH }]),
        ]}
      />
    </>
  );
}
