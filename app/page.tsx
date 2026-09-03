import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { PreuveBlock } from "@/components/PreuveBlock";
import { EtapesProjet } from "@/components/EtapesProjet";
import { ZoneCarte } from "@/components/ZoneCarte";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, businessJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { services, zonePage } from "@/lib/nav";
import { etapesProjet, preuves, communesCourantes } from "@/lib/site-content";

export const generateMetadata = () =>
  buildMetadata({
    title: "Constructeur de piscine béton à Montpellier | Aurea Piscines",
    description:
      "Aurea Piscines construit vos bassins en béton armé projeté à Montpellier et à 30 km, avec ses propres maçons et une date tenue. Demandez un devis détaillé.",
    path: "/",
  });

export default function Home() {
  return (
    <>
      <Hero
        title="Constructeur de piscines béton à Montpellier depuis 2009"
        lead="Aurea Piscines est un constructeur-pisciniste installé 128 avenue de la Pompignane à Montpellier. Nous construisons des bassins en béton armé projeté à Montpellier et dans un rayon d’environ 30 km, avec nos propres équipes de maçonnerie et un seul interlocuteur, du relevé de terrain à la mise en eau."
        cta={{ label: "Demander un devis détaillé", href: "/contact" }}
        secondary={{ label: "Voir la zone d’intervention", href: zonePage.href }}
      />

      <Section tone="surface">
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Nos cinq prestations</h2>
        <p className="mt-4 text-secondary max-w-content">
          Construire, rénover, équiper, entretenir un bassin et préparer le dossier d’urbanisme : chaque prestation a sa page,
          avec la méthode et les conditions.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.href} title={s.label} description={s.description} href={s.href} />
          ))}
        </div>
      </Section>

      <Section>
        <PreuveBlock
          title="Ce que nous faisons et ce que nous ne faisons pas"
          intro="Notre métier est la construction de bassins en béton armé projeté, coulés sur place, et leur suivi dans le temps. Le reste, nous ne le vendons pas."
          items={[
            { label: "Bassins en béton armé projeté", detail: "Structure construite sur place par nos salariés, forme libre, dimensions adaptées au terrain." },
            { label: "Rénovation de bassins existants", detail: "Diagnostic de structure et d’étanchéité, reprise, nouveau revêtement, margelles et plages." },
            { label: "Équipements et entretien", detail: "Filtration, chauffage, traitement de l’eau, sécurité, puis contrat d’entretien annuel." },
          ]}
        >
          <h3 className="mt-10 text-lg font-heading text-primary">Ce que nous ne faisons pas</h3>
          <ul className="mt-3 grid gap-2 text-secondary max-w-content list-disc pl-5">
            <li>Nous ne vendons pas de coques polyester.</li>
            <li>Nous ne vendons pas de piscines en kit et nous n’assistons pas les chantiers montés par le particulier.</li>
            <li>Nous n’avons pas de show-room : les rendez-vous se tiennent sur votre terrain ou au dépôt, sur rendez-vous.</li>
          </ul>
        </PreuveBlock>
      </Section>

      <Section tone="surface">
        <PreuveBlock
          title="Nos références, avec leur date et leur source"
          intro="Les qualifications, assurances et chiffres ci-dessous sont ceux que nous pouvons documenter. Chacun porte sa date ou son organisme."
          items={preuves}
        />
      </Section>

      <Section>
        <EtapesProjet
          title="Le déroulé d’un projet, du relevé à la mise en eau"
          intro="Six étapes, un interlocuteur unique, un prix contractualisé avant le démarrage et une date de chantier annoncée."
          etapes={etapesProjet}
        />
      </Section>

      <Section tone="surface">
        <ZoneCarte
          title="Où nous intervenons"
          intro="Aurea Piscines construit des bassins béton à Montpellier et dans un rayon d’environ 30 km, depuis son dépôt de la Pompignane."
          paliers={[
            { titre: "Intervention courante", texte: "Montpellier et sa première couronne, soit douze communes desservies depuis le dépôt.", communes: communesCourantes },
            { titre: "Entre 30 et 50 km", texte: "Étude au cas par cas selon l’accès au terrain et le calendrier des équipes, Sète incluse." },
            { titre: "Au-delà de 50 km", texte: "Nous n’intervenons pas et nous vous le disons dès le premier échange." },
          ]}
          lien={{ label: "Voir le détail de la zone d’intervention autour de Montpellier", href: zonePage.href }}
        />
      </Section>

      <Section>
        <CtaBand
          title="Demander un devis détaillé"
          text="Décrivez votre projet, votre commune et votre échéance. Nous vous rappelons sous 24 h ouvrées pour convenir du relevé de terrain."
          cta={{ label: "Demander un devis détaillé", href: "/contact" }}
        />
        <p className="mt-6 text-secondary">
          Vous préparez un dossier de mairie ?{" "}
          <Link href="/etude-faisabilite-demarches-urbanisme" className="tap underline">
            Voir l’étude de faisabilité et les démarches d’urbanisme
          </Link>
          .
        </p>
      </Section>

      <JsonLd data={[businessJsonLd(), breadcrumbJsonLd([])]} />
    </>
  );
}
