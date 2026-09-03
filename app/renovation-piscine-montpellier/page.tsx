import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Faq } from "@/components/Faq";
import { EtapesSuivantes } from "@/components/EtapesSuivantes";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { relatedLinks } from "@/lib/nav";

const PATH = "/renovation-piscine-montpellier";
const NOM = "Rénovation de piscine";

export const generateMetadata = () =>
  buildMetadata({
    title: "Rénovation de piscine à Montpellier : diagnostic et travaux",
    description:
      "Fuite, fissures, revêtement usé : Aurea Piscines diagnostique la structure de votre bassin à Montpellier, puis le remet en état. Demandez un diagnostic.",
    path: PATH,
  });

const faq = [
  {
    q: "Combien de temps une piscine reste-t-elle indisponible pendant une rénovation ?",
    a: "Cela dépend de la nature des travaux. Un changement de revêtement mobilise la vidange, la préparation du support, la pose et la remise en eau. Une reprise de structure ou d’étanchéité ajoute des temps de séchage incompressibles, qui dépendent aussi de la saison. Le calendrier est établi après le diagnostic et figure dans le devis, avec une date de remise en eau annoncée.",
  },
  {
    q: "Peut-on rénover une piscine et s’en servir la même saison ?",
    a: "C’est possible quand les travaux se limitent au revêtement, aux margelles ou aux équipements, et que le chantier est lancé assez tôt dans l’année. Dès qu’une reprise de structure ou une recherche de fuite est nécessaire, les temps de séchage et les investigations rendent la baignade incertaine sur la saison en cours. Le diagnostic tranche ce point avant l’engagement.",
  },
  {
    q: "Quelles garanties s’appliquent à des travaux de rénovation ?",
    a: "Les garanties légales des travaux de construction s’appliquent aussi à la rénovation. La garantie de parfait achèvement couvre un an les désordres signalés après réception (article 1792-6 du code civil). La garantie de bon fonctionnement couvre deux ans les équipements dissociables (article 1792-3). Les travaux touchant à l’étanchéité ou à la solidité relèvent de la garantie décennale (article 1792).",
  },
];

export default function RenovationPiscine() {
  return (
    <>
      <Hero
        title="Rénover une piscine vieillissante à Montpellier et alentours"
        lead="Aurea Piscines rénove les bassins existants à Montpellier et dans un rayon d’environ 30 km. Nous commençons toujours par un diagnostic de la structure et de l’étanchéité, puis nous reprenons ce qui doit l’être et posons un nouveau revêtement, avec les mêmes équipes que sur nos chantiers neufs."
        cta={{ label: "Demander un diagnostic", href: "/contact" }}
      />

      <Section tone="surface">
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Les signes qui imposent une rénovation</h2>
        <div className="mt-4 prose text-secondary">
          <ul>
            <li>Une baisse du niveau d’eau supérieure à l’évaporation normale, surtout filtration à l’arrêt.</li>
            <li>Des fissures traversantes, des faïençages qui s’élargissent ou une zone de paroi qui sonne creux.</li>
            <li>Un revêtement décoloré, plissé, décollé aux angles ou dont les soudures s’ouvrent.</li>
            <li>Des margelles descellées, des plages qui se soulèvent ou qui s’affaissent au droit du bassin.</li>
            <li>Une eau qui se déséquilibre en permanence malgré un traitement correct.</li>
            <li>Un local technique et des réseaux hors d’âge, avec des reprises successives sur les canalisations.</li>
          </ul>
          <p>
            Un seul de ces signes ne dit pas encore quoi faire. C’est leur combinaison, et surtout l’état réel de la structure,
            qui décide.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Le diagnostic : ce que nous contrôlons</h2>
        <div className="mt-4 prose text-secondary">
          <p>
            Le diagnostic est une visite technique, pas une visite commerciale. Nous contrôlons la structure du bassin, l’état
            et la tenue du revêtement, les margelles et les plages, le local technique, les réseaux hydrauliques et les pièces à
            sceller, ainsi que l’environnement du bassin : terrain, drainage, mouvements visibles.
          </p>
          <h3>Ce que contient le rapport</h3>
          <ul>
            <li>L’état constaté de chaque poste, avec ce qui est sain et ce qui ne l’est pas.</li>
            <li>L’origine probable des désordres, et les points qui restent à confirmer par une investigation complémentaire.</li>
            <li>Les travaux nécessaires, distingués des travaux souhaitables.</li>
            <li>Notre avis argumenté sur la rénovation ou la reconstruction.</li>
          </ul>
        </div>
      </Section>

      <Section tone="surface">
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Les travaux possibles</h2>
        <div className="mt-4 prose text-secondary">
          <ul>
            <li>
              <strong>Reprise de structure</strong> : traitement des fissures, renforcement local, reprise en béton armé projeté
              lorsque la paroi est atteinte.
            </li>
            <li>
              <strong>Étanchéité et revêtement</strong> : dépose de l’ancien revêtement, préparation du support et pose d’une
              membrane armée, c’est-à-dire un revêtement en PVC composé de deux feuilles soudées autour d’une trame textile,
              soudé sur place.
            </li>
            <li>
              <strong>Margelles et plages</strong> : redescellement, remplacement, reprise des pentes et des évacuations.
            </li>
            <li>
              <strong>Local technique et réseaux</strong> : remplacement des canalisations, redimensionnement de la filtration,
              mise en place d’un traitement automatique.
            </li>
            <li>
              <strong>Sécurité</strong> : mise en conformité du dispositif de sécurité, volet immergé, alarme ou barrière.
            </li>
          </ul>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Rénover ou reconstruire</h2>
        <div className="mt-4 prose text-secondary">
          <p>
            Nous le disons sans détour, y compris quand la réponse ne va pas dans notre sens commercial immédiat. Trois critères
            décident.
          </p>
          <ul>
            <li>
              <strong>L’état de la structure.</strong> Une coque saine se rénove. Une structure fissurée en profondeur, qui
              travaille avec le terrain, ne se rattrape pas durablement par un revêtement neuf.
            </li>
            <li>
              <strong>La cohérence du bassin avec l’usage.</strong> Une forme, une profondeur ou une implantation qui ne
              conviennent plus ne se corrigent pas en rénovation.
            </li>
            <li>
              <strong>Le cumul des postes.</strong> Quand structure, réseaux, plages et local technique sont tous à reprendre,
              la reconstruction redevient l’option raisonnable.
            </li>
          </ul>
          <p>
            Quand la reconstruction s’impose, nous vous orientons vers notre page construction plutôt que de vendre une
            rénovation qui ne tiendra pas.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Comment nous chiffrons</h2>
        <div className="mt-4 prose text-secondary">
          <p>
            Nous ne publions pas de grille de prix : deux bassins du même âge peuvent demander des travaux sans rapport. Le
            chiffrage vient du diagnostic, par type d’intervention.
          </p>
          <h3>Les postes du devis, selon l’intervention</h3>
          <ul>
            <li>
              <strong>Revêtement seul</strong> : vidange, dépose de l’ancien revêtement, préparation du support, pièces à
              sceller, pose et remise en eau.
            </li>
            <li>
              <strong>Structure et étanchéité</strong> : investigations, traitement des fissures, reprise en béton projeté,
              temps de séchage, puis revêtement.
            </li>
            <li>
              <strong>Margelles et plages</strong> : dépose, support, fourniture et pose, reprise des évacuations.
            </li>
            <li>
              <strong>Local technique</strong> : réseaux, filtration, traitement, électricité coordonnée avec une entreprise locale.
            </li>
          </ul>
          <h3>Ce qui fait varier le chiffrage</h3>
          <ul>
            <li>L’étendue réelle des désordres, souvent confirmée seulement après la vidange et la dépose.</li>
            <li>L’accès au bassin pour évacuer les gravats et amener le matériel.</li>
            <li>L’état des réseaux enterrés, qui peut imposer de rouvrir les plages.</li>
            <li>La saison : une rénovation lancée au printemps subit une pression de calendrier que l’automne n’a pas.</li>
          </ul>
        </div>
      </Section>

      <Section>
        <Faq items={faq} />
      </Section>

      <Section tone="surface">
        <EtapesSuivantes
          points={[
            "Vous nous décrivez le bassin, son âge, les désordres observés et votre commune.",
            "Nous venons faire le diagnostic de structure et d’étanchéité, et nous vous remettons le rapport.",
            "Vous recevez un devis détaillé par poste, avec le planning et la date de remise en eau.",
          ]}
          cta={{ label: "Demander un diagnostic", href: "/contact" }}
          links={relatedLinks(PATH)}
        />
      </Section>

      <JsonLd
        data={[
          serviceJsonLd({
            name: NOM,
            description:
              "Diagnostic de structure et d’étanchéité, reprise du bassin, revêtement, margelles et plages, pour les piscines de Montpellier et d’un rayon d’environ 30 km.",
            path: PATH,
          }),
          breadcrumbJsonLd([{ name: "Rénovation de piscine", path: PATH }]),
        ]}
      />
    </>
  );
}
