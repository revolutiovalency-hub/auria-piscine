import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHead } from "@/components/Section";
import { IntroSplit } from "@/components/IntroSplit";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { EtapesProjet } from "@/components/EtapesProjet";
import { PreuveBlock } from "@/components/PreuveBlock";
import { Testimonial } from "@/components/Testimonial";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, businessJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/site.config";
import { services, zonePage } from "@/lib/nav";
import {
  etapesProjet,
  preuvesAurea,
  chiffresCles,
  projets,
  avisClients,
  MENTION_CHIFFRES,
  MENTION_PROJETS,
  MENTION_AVIS,
} from "@/lib/site-content";

export const generateMetadata = () =>
  buildMetadata({
    title: "Constructeur de piscine béton à Montpellier | Aurea Piscines",
    description:
      "Aurea Piscines construit vos bassins en béton armé projeté à Montpellier et à 30 km, avec ses propres maçons et une date tenue. Demandez un devis détaillé.",
    path: "/",
  });

const faq = [
  {
    q: "Quelle solution de traitement de l’eau choisir ?",
    a: "L’électrolyse au sel produit le désinfectant en continu à partir du sel dissous dans l’eau : elle convient aux bassins familiaux utilisés régulièrement. Le chlore apporté manuellement reste adapté aux petits volumes peu fréquentés. Le choix se décide sur le volume du bassin, son exposition, la dureté de l’eau et la fréquence d’usage réelle.",
  },
  {
    q: "Peut-on construire une piscine sur un terrain en pente ?",
    a: "Oui, à condition de dimensionner la structure et les soutènements à partir d’une étude de sol. La pente impose de reprendre les poussées des terres et d’organiser le drainage autour du bassin. Autour de Montpellier, la configuration est courante, et souvent l’occasion d’un bassin à débordement dont la lame d’eau prolonge la vue.",
  },
  {
    q: "Quelle différence entre un bassin en béton projeté et une coque polyester ?",
    a: "Le béton armé projeté est mis en œuvre sur place sur une armature en acier : la forme, la profondeur et les dimensions sont libres, et le bassin se rénove indéfiniment. Une coque polyester est moulée en usine et posée en quelques jours, mais ses dimensions et sa forme sont imposées. Aurea Piscines construit uniquement des bassins béton.",
  },
];

export default function Home() {
  const b = site.business;
  return (
    <>
      <Hero
        variant="home"
        eyebrow="Constructeur de piscines · Hérault"
        title="Votre piscine, pensée pour votre maison."
        lead="Aurea Piscines construit des bassins en béton armé projeté à Montpellier et dans un rayon d’environ 30 km, à Castelnau-le-Lez, Lattes, Pérols et alentours. Nous concevons, construisons, rénovons, équipons et entretenons le bassin avec nos propres équipes de maçonnerie, et un seul interlocuteur du premier croquis au premier bain."
        cta={{ label: "Demander un devis", href: "/contact" }}
        secondary={{ label: "Voir la zone d’intervention", href: zonePage.href }}
        trust="Entreprise locale · Plus de 15 ans d’expérience · Intervention autour de Montpellier"
      />

      <Section>
        <IntroSplit eyebrow="Notre approche" title="Un projet de piscine ne commence pas par un bassin." badges={["Conception", "Construction", "Rénovation", "Entretien"]}>
          <p className="m-0 text-[17px] leading-[1.75] text-body">
            Il commence par une maison, un terrain, une exposition, une manière de vivre dehors. Avant de parler dimensions ou
            revêtement, nous regardons comment vous occupez votre extérieur : où passe le soleil en fin de journée, où l’on
            s’assoit, ce que l’on voit depuis le salon.
          </p>
          <p className="m-0 text-[17px] leading-[1.75] text-body">
            De cette lecture naît une implantation juste, puis un bassin dessiné pour elle. Nous assurons ensuite le gros œuvre
            et l’étanchéité avec nos salariés, nous coordonnons les plages, la pierre et l’électricité avec des entreprises
            locales, et nous restons présents une fois l’eau remplie : mise en route, réglages, entretien saisonnier.
          </p>
        </IntroSplit>
      </Section>

      <Section tone="surface">
        <SectionHead
          eyebrow="Nos expertises"
          title="Cinq métiers, une même exigence."
          aside={
            <p className="m-0 max-w-[42ch] text-[16px] text-muted">
              Que votre projet parte de zéro ou d’un bassin existant, nous intervenons avec les mêmes équipes et le même niveau
              de suivi.
            </p>
          }
        />
        <div className="grid gap-[clamp(18px,2vw,30px)]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(258px,100%),1fr))" }}>
          {services.map((s) => (
            <ServiceCard key={s.href} title={s.short} description={s.description} href={s.href} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Réalisations"
          title="Des bassins dessinés pour un lieu précis."
          aside={<Link href="/contact" className="link-underline">Parler d’un projet similaire</Link>}
        />
        <div className="grid gap-[clamp(16px,1.8vw,26px)]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))" }}>
          <ProjectCard projet={projets[0]} featured />
          {projets.slice(1, 3).map((p) => (
            <ProjectCard key={p.titre} projet={p} />
          ))}
        </div>
        <p className="mt-6 text-[12.5px] text-faint">{MENTION_PROJETS}</p>
      </Section>

      <Section tone="dark">
        <EtapesProjet
          eyebrow="Notre méthode"
          title="Cinq étapes, aucune zone d’ombre."
          intro="Vous savez à chaque instant où en est votre projet, qui intervient et ce qui reste à valider. Chaque étape se termine par un document écrit."
          etapes={etapesProjet}
        />
      </Section>

      <Section>
        <PreuveBlock
          eyebrow="Pourquoi Aurea"
          title="Une entreprise que l’on peut appeler en août."
          items={preuvesAurea}
          chiffres={chiffresCles}
          note={MENTION_CHIFFRES}
        />
      </Section>

      <Section tone="surface">
        <h2 className="h2-md mb-[clamp(30px,3.6vw,52px)] max-w-[22ch]">Ce qu’en disent nos clients.</h2>
        <div className="grid gap-[clamp(20px,2.4vw,36px)]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))" }}>
          {avisClients.map((a) => (
            <Testimonial key={a.auteur} avis={a} />
          ))}
        </div>
        <p className="mt-8 text-[12.5px] text-faint">{MENTION_AVIS}</p>
      </Section>

      <Section size="sm">
        <h2 className="h2-md max-w-[24ch]">Où nous intervenons.</h2>
        <p className="mt-6 max-w-[62ch] text-[16.5px] leading-[1.75] text-body">
          Aurea Piscines construit des bassins béton à Montpellier et dans un rayon d’environ 30 km depuis son dépôt du
          {" "}{b.address.street}.{" "}
          <Link href={zonePage.href} className="link-underline">{zonePage.label}</Link>
        </p>
      </Section>

      <Section>
        <Faq
          eyebrow="Questions fréquentes"
          title="Les réponses que l’on nous demande le plus."
          items={faq}
          intro={
            <p className="m-0">
              Une question qui n’apparaît pas ici ? Appelez-nous au{" "}
              <a href={`tel:${b.telephoneE164}`}>{b.telephone}</a>, nous répondons sous 24 h ouvrées.
            </p>
          }
        />
      </Section>

      <CtaBand
        title="Parlons de votre projet."
        text="Décrivez votre extérieur, votre commune et votre échéance : nous vous rappelons sous 24 h ouvrées pour cadrer le besoin, le budget et le calendrier."
        cta={{ label: "Demander un devis", href: "/contact" }}
        secondary={{ label: "Voir l’étude et les démarches d’urbanisme", href: "/etude-faisabilite-demarches-urbanisme" }}
      />

      <JsonLd data={[businessJsonLd(), breadcrumbJsonLd([])]} />
    </>
  );
}
