import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Faq } from "@/components/Faq";
import { MaterielCriteres } from "@/components/MaterielCriteres";
import { EtapesSuivantes } from "@/components/EtapesSuivantes";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { relatedLinks } from "@/lib/nav";

const PATH = "/equipements-piscine-montpellier";
const NOM = "Installation d’équipements de piscine";

export const generateMetadata = () =>
  buildMetadata({
    title: "Équipements de piscine à Montpellier : filtration, sel, PAC",
    description:
      "Filtration, pompe à chaleur, électrolyse au sel, régulation, volet immergé : Aurea Piscines équipe votre bassin à Montpellier. Demandez un devis détaillé.",
    path: PATH,
  });

const faq = [
  {
    q: "Peut-on ajouter ces équipements sur un bassin déjà construit ?",
    a: "Dans la plupart des cas oui, à condition que le local technique et les réseaux le permettent. Les points à vérifier sont le débit et la section des canalisations, la place disponible dans le local, la puissance électrique arrivant au tableau et la distance entre le bassin et le local. Une visite technique tranche avant tout engagement, équipement par équipement.",
  },
  {
    q: "Combien de temps prend la pose d’un équipement de piscine ?",
    a: "Un équipement qui se raccorde dans le local technique existant, comme un électrolyseur ou une régulation, se pose en intervention courte. Une pompe à chaleur demande en plus une dalle, un emplacement ventilé et une ligne électrique dédiée. Un volet immergé suppose des travaux de maçonnerie dans le bassin et se traite comme un chantier, avec vidange.",
  },
  {
    q: "Quel entretien demandent ces équipements ?",
    a: "La filtration demande un nettoyage régulier du préfiltre et des paniers, et un contrôle de la pression du filtre. Un électrolyseur demande le contrôle et le détartrage périodique de sa cellule, et le contrôle du taux de sel. Une pompe à chaleur demande de garder l’échangeur dégagé et propre. Une sonde de régulation se contrôle et se réétalonne périodiquement.",
  },
];

export default function EquipementsPiscine() {
  return (
    <>
      <Hero
        title="Équiper ou moderniser sa piscine à Montpellier"
        lead="Aurea Piscines installe et remplace les équipements de piscine à Montpellier et dans un rayon d’environ 30 km : filtration et hydraulique, pompe à chaleur, électrolyse au sel, régulation automatique du traitement, volet immergé et dispositifs de sécurité. Nous intervenons sur nos bassins comme sur des piscines construites par d’autres."
        cta={{ label: "Demander un devis détaillé", href: "/contact" }}
      />

      <Section tone="surface">
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Filtration et hydraulique</h2>
        <div className="mt-4 prose text-secondary">
          <p>
            La filtration est le poste qui décide de la qualité de l’eau et de la consommation électrique du bassin. Elle se
            dimensionne à partir du volume d’eau, du temps de renouvellement visé, du linéaire de canalisation entre le bassin
            et le local, et du nombre de bouches de refoulement et de reprises.
          </p>
          <ul>
            <li>Une pompe surdimensionnée consomme plus sans mieux filtrer, et fatigue le média filtrant.</li>
            <li>Une pompe à vitesse variable permet de filtrer plus longtemps à débit réduit, pour une consommation plus basse.</li>
            <li>Des canalisations sous-dimensionnées créent des pertes de charge que la pompe compense en énergie.</li>
            <li>Le média filtrant, sable, verre recyclé ou cartouche, change la finesse de filtration et l’entretien.</li>
          </ul>
          <p>
            Sur un bassin existant, nous relevons l’installation avant de proposer quoi que ce soit : un remplacement à
            l’identique reproduit un sous-dimensionnement s’il y en avait un.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Chauffage et saison de baignade</h2>
        <div className="mt-4 prose text-secondary">
          <p>
            Une pompe à chaleur de piscine prélève des calories dans l’air extérieur et les transfère à l’eau du bassin. Sous le
            climat héraultais, elle sert surtout à avancer le début de saison au printemps et à la prolonger à l’automne, quand
            l’air reste doux mais que l’eau décroche.
          </p>
          <p>
            Son efficacité dépend de trois choses : la puissance rapportée au volume du bassin, la température de l’air au
            moment où vous chauffez, et la présence d’une couverture. Sans couverture, une part importante de la chaleur repart
            par évaporation la nuit. Un volet ou une bâche à bulles change davantage le résultat qu’une puissance supérieure.
          </p>
          <h3>Comment nous chiffrons</h3>
          <p>Le devis se construit poste par poste, à partir de l’installation existante et du terrain.</p>
          <ul>
            <li>Le matériel retenu et sa puissance, calculée sur le volume du bassin et la saison visée.</li>
            <li>Le support et l’emplacement : dalle, dégagement, distance au local technique.</li>
            <li>Les travaux hydrauliques de raccordement et le by-pass.</li>
            <li>L’alimentation électrique, réalisée avec une entreprise locale que nous coordonnons.</li>
            <li>La mise en service, les réglages et l’explication du pilotage.</li>
          </ul>
          <p>
            Ce qui fait varier le chiffrage : la distance au local technique, l’état du tableau électrique, la nécessité de
            créer une dalle et le choix ou non d’une couverture associée.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Traitement de l’eau</h2>
        <div className="mt-4 prose text-secondary">
          <p>
            L’électrolyse au sel est un procédé qui produit le désinfectant directement dans le circuit : une cellule traversée
            par un courant transforme le sel dissous dans l’eau en chlore actif, lequel se recombine ensuite en sel après avoir
            agi. Le bassin n’est pas une piscine sans chlore, c’est une piscine qui fabrique son chlore en continu au lieu de le
            recevoir en bidons.
          </p>
          <ul>
            <li>La production dépend de la température de l’eau, du taux de sel et de la durée de filtration.</li>
            <li>La cellule s’entartre et se contrôle, d’autant plus vite que l’eau est calcaire.</li>
            <li>Le sel est corrosif pour certains métaux et certaines pierres : les abords se vérifient avant la pose.</li>
          </ul>
          <p>
            La régulation automatique complète le dispositif : des sondes mesurent en continu le pH et le potentiel redox, et
            pilotent l’injection de correcteur et la production de l’électrolyseur. C’est ce qui évite les dérives entre deux
            passages, en particulier pendant les fortes chaleurs et les périodes d’absence.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl font-heading text-primary">Sécurité et mise aux normes</h2>
        <div className="mt-4 prose text-secondary">
          <p>
            Une piscine enterrée non close à usage privatif doit être pourvue d’un dispositif de sécurité normalisé destiné à
            prévenir la noyade des enfants de moins de cinq ans, obligation prévue par le code de la construction et de
            l’habitation.
          </p>
          <ul>
            <li>
              <strong>Volet immergé</strong> : il ferme la surface, sert aussi de couverture thermique et reste invisible une
              fois ouvert. Sa pose demande un logement maçonné et se traite comme un chantier.
            </li>
            <li>
              <strong>Barrière</strong> : elle protège l’accès au bassin, indépendamment de son utilisation.
            </li>
            <li>
              <strong>Alarme</strong> : elle signale une immersion ou un franchissement, sans empêcher l’accès.
            </li>
          </ul>
          <p>
            Aucun de ces dispositifs ne remplace la surveillance d’un adulte. Nous posons celui qui correspond à votre bassin et
            à son usage, et nous vous expliquons ses limites.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <MaterielCriteres
          title="Matériel que nous installons et critères de choix"
          intro="Nous installons des équipements Pentair, Zodiac et Aqualux. Nous choisissons le matériel poste par poste, selon le bassin et l’installation en place."
          marques={["Pentair", "Zodiac", "Aqualux"]}
          criteres={[
            { titre: "Adaptation au bassin", texte: "Puissance et débit calculés sur le volume réel et le linéaire hydraulique, pas sur un forfait." },
            { titre: "Disponibilité des pièces", texte: "Nous retenons des gammes dont les pièces d’usure restent approvisionnables dans la durée." },
            { titre: "Réparabilité sur place", texte: "Un appareil que nos équipes savent démonter et diagnostiquer sans renvoi en atelier." },
            { titre: "Consommation", texte: "Vitesse variable, régulation et pilotage, évalués sur une saison complète et non sur une puissance nominale." },
            { titre: "Compatibilité avec l’existant", texte: "Raccordements, sections de canalisation et alimentation électrique vérifiés avant commande." },
            { titre: "Conditions de garantie", texte: "Durée, périmètre et modalités du fabricant, indiqués au devis avant la commande." },
          ]}
        />
      </Section>

      <Section>
        <Faq items={faq} />
      </Section>

      <Section tone="surface">
        <EtapesSuivantes
          points={[
            "Vous nous indiquez votre bassin, son volume, votre commune et l’équipement envisagé.",
            "Nous relevons le local technique, les réseaux et l’alimentation électrique sur place.",
            "Vous recevez un devis détaillé par poste, avec le matériel retenu et la date de pose.",
          ]}
          cta={{ label: "Demander un devis détaillé", href: "/contact" }}
          links={[
            { label: "Étude de faisabilité et démarches d’urbanisme pour votre piscine", href: "/etude-faisabilite-demarches-urbanisme" },
            ...relatedLinks(PATH),
          ]}
        />
      </Section>

      <JsonLd
        data={[
          serviceJsonLd({
            name: NOM,
            description:
              "Installation et remplacement d’équipements de piscine à Montpellier et dans un rayon d’environ 30 km : filtration, pompe à chaleur, électrolyse au sel, régulation, volet immergé et sécurité.",
            path: PATH,
          }),
          breadcrumbJsonLd([{ name: "Équipements de piscine", path: PATH }]),
        ]}
      />
    </>
  );
}
