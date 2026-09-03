import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { EtapesProjet } from "@/components/EtapesProjet";
import { Faq } from "@/components/Faq";
import { EtapesSuivantes } from "@/components/EtapesSuivantes";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { relatedLinks } from "@/lib/nav";
import { etapesProjet } from "@/lib/site-content";

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
        title="Faire construire une piscine béton sur mesure à Montpellier"
        lead="Aurea Piscines construit des bassins en béton armé projeté à Montpellier et dans un rayon d’environ 30 km. Le bassin est dessiné pour votre terrain, sans forme imposée par un moule, et la structure est réalisée par notre équipe de maçonnerie salariée, du relevé de terrain à la mise en eau."
        cta={{ label: "Demander un devis détaillé", href: "/contact" }}
      />

      <Section tone="surface">
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Le béton armé projeté : principe et durée de vie</h2>
        <div className="mt-4 prose text-secondary">
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

      <Section>
        <EtapesProjet
          title="Du relevé de terrain à la mise en eau"
          intro="Six étapes. Chacune fait l’objet d’une date annoncée dans le devis et le planning contractualisé, y compris le délai d’instruction du dossier d’urbanisme, qui dépend de la mairie et non de nous."
          etapes={etapesProjet}
        />
      </Section>

      <Section tone="surface">
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Revêtements et finitions</h2>
        <div className="mt-4 prose text-secondary">
          <p>
            Une membrane armée est un revêtement d’étanchéité en PVC composé de deux feuilles soudées autour d’une trame
            textile, posée et soudée sur place au fond et sur les parois du bassin. Nous posons de la membrane armée Renolit
            Alkorplan.
          </p>
          <p>
            L’autre voie est l’enduit, appliqué directement sur la structure. Le choix se fait sur l’aspect recherché, la
            tolérance aux mouvements de structure et la façon dont vous comptez entretenir le bassin.
          </p>
          <p>
            Les margelles et les plages ferment l’ouvrage : pierre naturelle, pierre reconstituée, bois ou carrelage extérieur.
            Ces lots sont réalisés par des entreprises locales que nous coordonnons, sous notre planning.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Comment nous chiffrons</h2>
        <div className="mt-4 prose text-secondary">
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

      <Section tone="surface">
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Ce que nous ne faisons pas</h2>
        <ul className="mt-4 grid gap-2 text-secondary max-w-content list-disc pl-5">
          <li>Nous ne vendons ni ne posons de coques polyester.</li>
          <li>Nous ne vendons pas de piscines en kit et nous n’accompagnons pas les chantiers en auto-construction.</li>
          <li>Nous ne reprenons pas un chantier de gros œuvre commencé par une autre entreprise.</li>
        </ul>
      </Section>

      <Section>
        <Faq items={faq} />
      </Section>

      <Section tone="surface">
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
