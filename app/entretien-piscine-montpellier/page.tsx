import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Faq } from "@/components/Faq";
import { EtapesSuivantes } from "@/components/EtapesSuivantes";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { relatedLinks } from "@/lib/nav";

const PATH = "/entretien-piscine-montpellier";
const NOM = "Contrat d’entretien de piscine";

export const generateMetadata = () =>
  buildMetadata({
    title: "Entretien de piscine à Montpellier : contrat 4 à 12 passages",
    description:
      "Contrat de 4 à 12 passages, ouverture, hivernage, analyses d’eau et dépannages : Aurea Piscines entretient votre piscine à Montpellier. Demandez un contrat.",
    path: PATH,
  });

const faq = [
  {
    q: "Un contrat d’entretien engage-t-il sur plusieurs années ?",
    a: "Un contrat d’entretien de piscine se construit sur une année, calée sur la saison de baignade, et se reconduit d’un commun accord. Ce qui compte est ce qu’il contient : le nombre de passages, la liste des opérations réalisées à chaque passage, ce qui reste à votre charge et les conditions de résiliation. Ces points figurent au contrat avant signature.",
  },
  {
    q: "Faut-il être présent pendant les passages d’entretien ?",
    a: "Non, dès lors que l’accès au bassin et au local technique est possible et convenu à l’avance. C’est même l’intérêt principal d’un contrat pour un propriétaire souvent absent : le bassin reste suivi entre deux séjours. Chaque passage donne lieu à un relevé écrit des valeurs mesurées et des opérations effectuées, transmis après l’intervention.",
  },
  {
    q: "Quel délai attendre pour un dépannage en été ?",
    a: "L’été est la période où les pannes se concentrent, et où les délais s’allongent chez tous les professionnels. Deux éléments les réduisent : être sous contrat d’entretien, car les clients suivis passent en priorité, et disposer d’un équipement dont les pièces d’usure sont approvisionnables. Le délai applicable à votre situation est indiqué dans les conditions du contrat.",
  },
];

export default function EntretienPiscine() {
  return (
    <>
      <Hero
        title="Contrat d’entretien de piscine à Montpellier : 4 à 12 passages par an"
        lead="Aurea Piscines entretient les piscines de Montpellier et d’un rayon d’environ 30 km sous contrat annuel : ouverture de saison, passages réguliers, analyses d’eau, hivernage et dépannages ponctuels. Le contrat se construit à partir de votre bassin, de son équipement et de la façon dont vous l’utilisez."
        cta={{ label: "Demander un contrat", href: "/contact" }}
      />

      <Section tone="surface">
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Construire votre contrat : de 4 à 12 passages selon le bassin</h2>
        <div className="mt-4 prose text-secondary">
          <p>
            Nous ne vendons pas un contrat pris sur étagère. Nous partons du bassin, puis nous fixons ensemble le nombre de
            passages, entre quatre et douze par an, et le contenu de chacun.
          </p>
          <h3>Ce qui détermine le nombre de passages</h3>
          <ul>
            <li>Le volume du bassin et sa surface exposée.</li>
            <li>L’environnement immédiat : arbres, pins, vent, poussières, proximité d’un chantier.</li>
            <li>Le niveau d’automatisation : régulation et électrolyse espacent les interventions, un traitement manuel non.</li>
            <li>La fréquentation réelle et la saison d’utilisation.</li>
            <li>Votre présence sur place, et ce que vous souhaitez faire vous-même entre deux passages.</li>
          </ul>
          <h3>Ce que contient un passage</h3>
          <ul>
            <li>Contrôle et relevé des paramètres de l’eau, ajustement du traitement.</li>
            <li>Nettoyage des paniers, du préfiltre, des parois et de la ligne d’eau, lavage du filtre selon la pression.</li>
            <li>Contrôle du fonctionnement de la pompe, du filtre, de la régulation et du dispositif de sécurité.</li>
            <li>Relevé écrit remis après chaque intervention, avec les valeurs mesurées et les points à surveiller.</li>
          </ul>
          <p>
            Le contrat écrit ce qu’il couvre et ce qu’il ne couvre pas. Les consommables, les pièces à remplacer et les
            interventions hors contrat sont annoncés avant d’être engagés.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Ouverture de saison et hivernage</h2>
        <div className="mt-4 prose text-secondary">
          <p>
            Sous le climat héraultais, la saison est longue et l’hiver est doux, ce qui change le calendrier par rapport au
            reste de la France. Deux repères de température comptent davantage que les dates du calendrier.
          </p>
          <ul>
            <li>
              <strong>Ouverture</strong> : elle se déclenche quand l’eau approche des 12 °C, avant que les algues ne démarrent.
              Ouvrir trop tard coûte un rattrapage de traitement complet.
            </li>
            <li>
              <strong>Hivernage</strong> : il se prépare quand l’eau descend durablement sous les 12 °C. Ici, cela arrive tard,
              et un hivernage lancé trop tôt sur une eau encore tiède se dégrade.
            </li>
          </ul>
          <p>
            L’hivernage actif, qui maintient une filtration réduite, est le plus courant dans la région parce que le gel
            prolongé y est rare. L’hivernage passif, avec vidange partielle et flotteurs, reste utilisé sur les bassins non
            suivis pendant l’hiver. Le choix figure au contrat.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Analyses d’eau et traitement</h2>
        <div className="mt-4 prose text-secondary">
          <p>
            À chaque passage, nous mesurons les paramètres qui pilotent la qualité de l’eau et la tenue des équipements : pH,
            désinfectant, alcalinité, dureté calcaire et taux de sel sur les bassins équipés d’une électrolyse. Les valeurs sont
            relevées par écrit, ce qui permet de raisonner sur une tendance et pas sur une mesure isolée.
          </p>
          <p>
            L’eau de la région est calcaire. Un pH mal tenu entartre les cellules d’électrolyse, encrasse le filtre et abîme le
            revêtement. Nous corrigeons dans l’ordre : équilibre calco-carbonique d’abord, désinfection ensuite, correction
            ponctuelle en dernier.
          </p>
          <p>
            Nos interventions de traitement s’appuient sur la certification IHB, qui porte sur l’hygiène et la qualité de l’eau
            de baignade.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Dépannages ponctuels</h2>
        <div className="mt-4 prose text-secondary">
          <h3>Ce que nous prenons</h3>
          <ul>
            <li>Pannes de pompe, de filtration, de régulation, d’électrolyseur et de pompe à chaleur.</li>
            <li>Fuites sur le local technique et les réseaux accessibles, et recherche de fuite sur le bassin.</li>
            <li>Dysfonctionnements de volet immergé et de dispositif de sécurité.</li>
            <li>Eau qui décroche : diagnostic, remise en équilibre et rattrapage.</li>
          </ul>
          <h3>Ce que nous ne prenons pas</h3>
          <ul>
            <li>Les bassins en coque polyester et les piscines en kit, qui ne relèvent pas de notre métier.</li>
            <li>Les réparations sur des équipements dont les pièces ne sont plus approvisionnables.</li>
            <li>Les interventions au-delà de 50 km du dépôt.</li>
            <li>Les travaux électriques sur le tableau général, confiés à une entreprise locale que nous coordonnons.</li>
          </ul>
          <p>
            Nous intervenons en dépannage hors contrat quand le planning le permet. Les clients sous contrat passent en
            priorité, y compris pendant la fermeture de deux semaines à la mi-août, couverte par une astreinte.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <Faq items={faq} />
      </Section>

      <Section>
        <EtapesSuivantes
          points={[
            "Vous nous décrivez le bassin, son équipement, votre commune et votre usage sur l’année.",
            "Nous venons voir le bassin et le local technique, puis nous proposons un nombre de passages et un contenu.",
            "Vous recevez le contrat écrit : passages, opérations couvertes, exclusions et conditions de dépannage.",
          ]}
          cta={{ label: "Demander un contrat", href: "/contact" }}
          links={relatedLinks(PATH)}
        />
      </Section>

      <JsonLd
        data={[
          serviceJsonLd({
            name: NOM,
            description:
              "Contrat annuel d’entretien de piscine de 4 à 12 passages, ouverture de saison, hivernage, analyses d’eau et dépannages, à Montpellier et dans un rayon d’environ 30 km.",
            path: PATH,
          }),
          breadcrumbJsonLd([{ name: "Entretien de piscine", path: PATH }]),
        ]}
      />
    </>
  );
}
