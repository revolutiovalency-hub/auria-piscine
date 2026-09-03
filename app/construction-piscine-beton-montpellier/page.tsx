import { Hero } from "@/components/Hero";
import { Section, SectionHead } from "@/components/Section";
import { IntroSplit } from "@/components/IntroSplit";
import { FactRow } from "@/components/FactRow";
import { PoolTypeCard } from "@/components/PoolTypeCard";
import { OptionList } from "@/components/OptionList";
import { EtapesProjet } from "@/components/EtapesProjet";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaCard } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { EtapesSuivantes } from "@/components/EtapesSuivantes";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { relatedLinks } from "@/lib/nav";
import {
  etapesProjet,
  faitsConstruction,
  typesBassins,
  optionsConstruction,
  projets,
  MENTION_PROJETS,
} from "@/lib/site-content";

const PATH = "/construction-piscine-beton-montpellier";
const NOM = "Construction de piscine en béton armé projeté";

export const generateMetadata = () =>
  buildMetadata({
    title: "Construction de piscine béton sur mesure à Montpellier (34)",
    description:
      "Aurea Piscines construit votre bassin en béton armé projeté à Montpellier et à 30 km : forme libre, maçons salariés, date tenue. Demandez un devis détaillé.",
    path: PATH,
  });

const faq = [
  {
    q: "Combien de temps dure la construction d’une piscine en béton ?",
    a: "La durée dépend de trois choses : l’instruction du dossier d’urbanisme par la mairie, l’accès au terrain pour les engins et la météo, qui conditionne le terrassement et la projection du béton. Le chantier lui-même enchaîne terrassement, structure, étanchéité, plages puis local technique. Nous annonçons la date de démarrage et le calendrier de chaque phase dans le devis, avant signature.",
  },
  {
    q: "Faut-il un permis de construire pour une piscine enterrée ?",
    a: "Cela dépend de la surface du bassin. Une piscine dont le bassin fait 10 m² ou moins est dispensée de formalité hors secteur protégé (article R.421-2 du code de l’urbanisme). Entre 10 et 100 m², non couverte ou avec une couverture de moins de 1,80 m de haut, elle relève de la déclaration préalable (article R.421-9). Au-delà, le permis de construire s’applique.",
  },
  {
    q: "Quelles garanties couvrent une piscine neuve ?",
    a: "Trois garanties légales se cumulent après la réception des travaux. La garantie de parfait achèvement couvre un an les désordres signalés (article 1792-6 du code civil). La garantie de bon fonctionnement couvre deux ans les équipements dissociables comme la pompe ou le volet (article 1792-3). La garantie décennale couvre dix ans les dommages compromettant la solidité ou l’étanchéité de l’ouvrage (article 1792).",
  },
];

export default function ConstructionPiscine() {
  return (
    <>
      <Hero
        breadcrumb="Piscine sur mesure"
        title="Faire construire une piscine béton sur mesure à Montpellier"
        lead="Aurea Piscines construit des bassins en béton armé projeté à Montpellier et dans un rayon d’environ 30 km. Le bassin est dessiné pour votre terrain, sans forme imposée par un moule, et la structure est réalisée par notre équipe de maçonnerie salariée, du relevé de terrain à la mise en eau."
        cta={{ label: "Demander un devis détaillé", href: "/contact" }}
        secondary={{ label: "Voir la zone d’intervention", href: "/zone-intervention-montpellier" }}
      />

      <Section size="sm">
        <IntroSplit
          title="Une piscine dessinée, pas choisie sur catalogue."
          min="280px"
          gap="clamp(28px,4vw,72px)"
          aside={<FactRow faits={faitsConstruction} />}
        >
          <p className="m-0 text-[16.5px] leading-[1.75] text-body">
            Nous construisons en béton armé projeté, une technique qui autorise toutes les formes, toutes les profondeurs et une
            durée de vie de plusieurs décennies. Chaque projet démarre par un relevé du terrain, et par une étude de sol lorsque
            la pente ou la nature du sol l’exige.
          </p>
          <p className="m-0 text-[16.5px] leading-[1.75] text-body">
            Nous prenons en charge le dossier de déclaration préalable ou de permis de construire, la coordination des corps de
            métier et la réception de chantier. Comptez en moyenne 10 à 16 semaines entre le début des travaux et la mise en
            eau ; la date qui vous engage est celle du planning annexé au devis signé.
          </p>
        </IntroSplit>
      </Section>

      <Section tone="surface" size="sm">
        <h2 className="h2-md max-w-[20ch]">Le béton armé projeté : principe et durée de vie</h2>
        <div className="prose mt-4">
          <p>
            Le béton armé projeté est un béton envoyé sous pression sur une armature en acier montée dans la fouille : la matière
            se compacte au contact du ferraillage et forme une coque monolithique, sans joint de reprise. C’est cette technique
            que nous employons sur tous nos bassins.
          </p>
          <p>
            Elle a deux conséquences concrètes. La structure est solidaire du terrain et reprend les efforts du sol, ce qui la
            rend durable dès lors que le ferraillage et l’épaisseur ont été dimensionnés à partir d’un vrai relevé. Et la forme
            n’est pas contrainte par un moule : angles droits, courbes, plage immergée, banquette, couloir de nage, escalier
            maçonné intégré, profondeur variable.
          </p>
          <p>
            Cette liberté de forme se paie en temps de chantier et en préparation. Elle se décide au relevé de terrain, pas
            après la signature.
          </p>
        </div>
      </Section>

      <Section size="sm">
        <h2 className="h2-md mb-[clamp(26px,3vw,44px)] max-w-[20ch]">Types de piscines que nous réalisons</h2>
        <div className="grid gap-[clamp(18px,2vw,28px)]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(250px,100%),1fr))" }}>
          {typesBassins.map((t) => (
            <PoolTypeCard key={t.titre} type={t} />
          ))}
        </div>
      </Section>

      <Section tone="surface" size="sm">
        <div className="grid gap-[clamp(30px,4vw,72px)]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(290px,100%),1fr))" }}>
          <div>
            <p className="eyebrow mb-4">Personnalisation</p>
            <h2 className="h2-md max-w-[18ch]">Ce que vous choisissez réellement</h2>
            <p className="mt-4 max-w-[48ch] text-[16px] leading-[1.7] text-muted">
              Nous présentons chaque option avec son entretien et sa durée de vie, échantillons en main. Une membrane armée, par
              exemple, est un revêtement d’étanchéité en PVC composé de deux feuilles soudées autour d’une trame textile, posée
              et soudée sur place au fond et sur les parois du bassin.
            </p>
          </div>
          <OptionList options={optionsConstruction} />
        </div>
      </Section>

      <Section size="sm">
        <h2 className="h2-md max-w-[20ch]">Comment nous chiffrons</h2>
        <div className="prose mt-4">
          <p>
            Nous ne publions pas de grille de prix, parce qu’un bassin béton se chiffre à partir du terrain et pas à partir d’un
            catalogue. Le devis est établi après le relevé, poste par poste.
          </p>
          <h3>Les postes du devis</h3>
          <ul>
            <li>Terrassement, évacuation des terres et accès chantier.</li>
            <li>Structure : ferraillage, béton armé projeté, épaisseurs dimensionnées selon le sol.</li>
            <li>Étanchéité et revêtement intérieur.</li>
            <li>Réseaux hydrauliques, local technique, filtration et équipements retenus.</li>
            <li>Margelles, plages et raccords avec le jardin existant.</li>
            <li>Étude, plans et dossier d’urbanisme quand ils sont à notre charge.</li>
          </ul>
          <h3>Ce qui fait varier le chiffrage</h3>
          <ul>
            <li>La nature du sol et la présence de roche ou de remblai, révélées par l’étude de sol.</li>
            <li>L’accès au terrain : un accès étroit impose du matériel plus petit et davantage d’heures.</li>
            <li>La distance entre le bassin et le local technique, qui pilote le linéaire de réseaux.</li>
            <li>La forme du bassin, la profondeur et les éléments maçonnés comme un escalier ou une banquette.</li>
            <li>Le niveau d’équipement : chauffage, traitement automatique, volet immergé.</li>
            <li>Le revêtement et la nature des margelles et des plages.</li>
          </ul>
          <p>
            Une fois le devis signé, le prix est contractualisé. Les seules variations possibles sont celles que vous demandez
            ou celles qu’impose un aléa de sol constaté au terrassement, et elles font l’objet d’un avenant écrit avant exécution.
          </p>
        </div>
      </Section>

      <Section tone="surface" size="sm">
        <h2 className="h2-md max-w-[20ch]">Ce que nous ne faisons pas</h2>
        <div className="prose mt-4">
          <ul>
            <li>Nous ne vendons ni ne posons de coques polyester.</li>
            <li>Nous ne vendons pas de piscines en kit et nous n’accompagnons pas les chantiers en auto-construction.</li>
            <li>Nous ne reprenons pas un chantier de gros œuvre commencé par une autre entreprise.</li>
          </ul>
        </div>
      </Section>

      <Section tone="dark" size="sm">
        <EtapesProjet
          title="Les étapes de votre projet"
          intro="Chaque étape fait l’objet d’une date annoncée dans le devis et le planning contractualisé, y compris le délai d’instruction du dossier d’urbanisme, qui dépend de la mairie et non de nous."
          etapes={etapesProjet}
        />
      </Section>

      <Section size="sm">
        <SectionHead title="Réalisations sur mesure récentes" />
        <div className="grid gap-[clamp(16px,2vw,26px)]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(260px,100%),1fr))" }}>
          {projets.slice(0, 2).map((p) => (
            <ProjectCard key={p.titre} projet={p} />
          ))}
          <CtaCard
            title="Votre terrain mérite une étude, pas une estimation au hasard."
            cta={{ label: "Demander un devis", href: "/contact" }}
          />
        </div>
        <p className="mt-6 text-[12.5px] text-faint">{MENTION_PROJETS}</p>
      </Section>

      <Section tone="surface" size="sm">
        <Faq title="Questions sur la piscine sur mesure" items={faq} soft />
      </Section>

      <Section size="sm">
        <EtapesSuivantes
          points={[
            "Vous nous décrivez le projet, la commune et l’échéance souhaitée. Nous vous rappelons sous 24 h ouvrées.",
            "Nous venons relever le terrain, vérifier l’accès et la faisabilité, et nous vous disons ce qui est possible.",
            "Vous recevez un devis détaillé poste par poste, avec le planning et la date de démarrage.",
          ]}
          cta={{ label: "Demander un devis détaillé", href: "/contact" }}
          links={relatedLinks(PATH)}
        />
      </Section>

      <JsonLd
        data={[
          serviceJsonLd({
            name: NOM,
            description:
              "Construction de piscines en béton armé projeté sur mesure à Montpellier et dans un rayon d’environ 30 km, structure réalisée par les équipes de maçonnerie d’Aurea Piscines.",
            path: PATH,
          }),
          breadcrumbJsonLd([{ name: "Construction de piscine béton", path: PATH }]),
        ]}
      />
    </>
  );
}
