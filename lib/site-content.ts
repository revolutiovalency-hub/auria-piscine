import type { Etape } from "@/components/EtapesProjet";
import type { Preuve, Chiffre } from "@/components/PreuveBlock";
import type { Projet } from "@/components/ProjectCard";
import type { TypeBassin } from "@/components/PoolTypeCard";
import type { Option } from "@/components/OptionList";
import type { Avis } from "@/components/Testimonial";
import type { Fait } from "@/components/FactRow";

// Déroulé d'un projet en cinq étapes (maquette, section « Notre méthode » et page sur mesure).
// Partagé par l'accueil et la page construction pour que les libellés restent identiques partout (geo_rules).
export const etapesProjet: Etape[] = [
  { titre: "Échange", texte: "Un premier appel ou une visite pour comprendre votre usage, votre terrain et votre budget." },
  { titre: "Étude du projet", texte: "Relevé, faisabilité technique, étude de sol si nécessaire et chiffrage détaillé poste par poste." },
  { titre: "Conception", texte: "Plans d’implantation, choix des matériaux et des équipements, dossier administratif déposé par nos soins." },
  { titre: "Réalisation", texte: "Terrassement, structure, réseaux, revêtement et plages, avec un conducteur de travaux dédié." },
  { titre: "Suivi et entretien", texte: "Mise en route, formation à l’usage, puis contrat d’entretien ou interventions à la demande." },
];

// Mentions reprises de la maquette : les chiffres, les projets et les avis de cette version sont
// des données de démonstration, non vérifiées par le client (décision D1, point 1 ; forbidden
// interdit de publier un avis ou un chiffre non vérifié).
export const MENTION_CHIFFRES = "Chiffres indicatifs présentés à titre de démonstration.";
export const MENTION_PROJETS = "Réalisations présentées à titre de démonstration.";
export const MENTION_AVIS = "Témoignages présentés à titre de démonstration.";

export const chiffresCles: Chiffre[] = [
  { valeur: "15+", legende: "ans d’expérience" },
  { valeur: "300+", legende: "projets accompagnés" },
  { valeur: "100 %", legende: "sur mesure" },
];

// Preuves numérotées de la section « Pourquoi Aurea » (maquette).
export const preuvesAurea: Preuve[] = [
  {
    label: "Expertise locale",
    detail:
      "Nous connaissons les sols de la région, les règles d’urbanisme des communes autour de Montpellier et les contraintes du climat méditerranéen.",
  },
  {
    label: "Un interlocuteur unique",
    detail: "Le même conducteur de travaux du premier rendez-vous à la réception du chantier, joignable directement.",
  },
  {
    label: "Bassins dessinés, pas catalogués",
    detail: "Aucune forme imposée : le bassin est dessiné pour votre terrain, pas l’inverse.",
  },
  {
    label: "Matériel choisi poste par poste",
    detail: "Équipements de marques établies, retenus pour leur fiabilité et la disponibilité des pièces détachées.",
  },
  {
    label: "Suivi dans le temps",
    detail: "Nous restons votre interlocuteur après la mise en eau : réglages, saison suivante, évolutions d’équipement.",
  },
];

// Fiche Google : la note reste en texte sourcé et daté, jamais en AggregateRating (décision D1, point 18).
export const FICHE_GOOGLE = "https://www.google.com/maps/search/?api=1&query=Aurea+Piscines+Montpellier";

// Réalisations de la maquette (script renderVals, tableau projects).
export const projets: Projet[] = [
  {
    titre: "Bassin miroir sur terrain en pente",
    meta: "Construction sur mesure · Castelnau-le-Lez",
    texte:
      "Débordement sur trois côtés, margelles en pierre de Pouillenay et local technique enterré sous la terrasse pour préserver la vue depuis la maison.",
    specs: "12 × 4 m · béton armé projeté · 2025",
  },
  {
    titre: "Couloir de nage en bord de garrigue",
    meta: "Construction · Clapiers",
    texte:
      "Bassin étroit orienté nord-sud, volet immergé et plage minérale prolongeant la terrasse existante.",
    specs: "14 × 3 m · profondeur 1,45 m · 2024",
  },
  {
    titre: "Rénovation complète d’un bassin des années 90",
    meta: "Rénovation · Lattes",
    texte:
      "Reprise de structure, nouvelle membrane armée gris perle, margelles remplacées et filtration entièrement repensée.",
    specs: "9 × 4,5 m · chantier de 5 semaines · 2025",
  },
];

export const avisClients: Avis[] = [
  {
    citation:
      "Nous avions un terrain compliqué, en pente et difficile d’accès. Aurea a proposé une implantation à laquelle nous n’avions pas pensé, et le chantier s’est terminé dans les délais annoncés.",
    auteur: "Claire et Julien M.",
    ville: "Castelnau-le-Lez",
    projet: "Construction sur mesure · 2025",
  },
  {
    citation:
      "Rénovation complète d’une piscine de 1994. Devis clair, aucune mauvaise surprise, et une équipe qui laisse le chantier propre chaque soir. Le résultat a transformé le jardin.",
    auteur: "Nathalie R.",
    ville: "Lattes",
    projet: "Rénovation · 2024",
  },
  {
    citation:
      "Nous avons pris un contrat d’entretien après la construction. L’eau est impeccable toute la saison et nous n’avons plus à y penser. C’est exactement ce que nous cherchions.",
    auteur: "Pierre D.",
    ville: "Pérols",
    projet: "Construction et entretien · 2023",
  },
];

// Fiche technique de la page construction (maquette, customFacts). La ligne « budget indicatif »
// de la maquette est retirée : aucun montant sur le site (décision D1, point 5).
export const faitsConstruction: Fait[] = [
  { cle: "Technique", valeur: "Béton armé projeté" },
  { cle: "Durée du chantier", valeur: "10 à 16 semaines en moyenne" },
  { cle: "Garantie structure", valeur: "Décennale" },
  { cle: "Zone d’intervention", valeur: "Montpellier et 30 km" },
];

export const typesBassins: TypeBassin[] = [
  {
    titre: "Bassin classique",
    texte:
      "Rectangulaire ou de forme libre, avec escalier maçonné et plages de plain-pied. La configuration la plus polyvalente pour un usage familial.",
    note: "8 × 4 m à 11 × 5 m",
  },
  {
    titre: "Couloir de nage",
    texte:
      "Bassin long et étroit pour la nage sportive, adapté aux terrains en longueur ou à un alignement le long d’un mur existant.",
    note: "12 à 16 m de long",
  },
  {
    titre: "Bassin à débordement",
    texte:
      "Lame d’eau affleurante sur un ou plusieurs côtés, adaptée aux terrains en pente avec une vue dégagée depuis la maison.",
    note: "Étude de structure requise",
  },
];

export const optionsConstruction: Option[] = [
  {
    titre: "Revêtement",
    texte:
      "Membrane armée, enduit minéral ou carrelage. Teinte gris perle, sable ou bleu profond selon la couleur d’eau recherchée.",
  },
  {
    titre: "Plages et margelles",
    texte:
      "Pierre naturelle, béton désactivé, bois ou travertin. Nous privilégions les matériaux qui restent tempérés en plein été.",
  },
  {
    titre: "Filtration",
    texte: "Filtre à sable ou à verre, pompe à vitesse variable, local technique enterré ou intégré à un abri de jardin.",
  },
  {
    titre: "Sécurité",
    texte: "Volet immergé, barrière rigide, alarme périmétrique ou abri bas. Un dispositif conforme est obligatoire.",
  },
  {
    titre: "Chauffage",
    texte:
      "Pompe à chaleur dimensionnée au volume, couplée le cas échéant à une couverture pour limiter les pertes nocturnes.",
  },
  {
    titre: "Éclairage",
    texte: "Projecteurs à diodes en blanc chaud ou en couleur, pilotables depuis la régulation du bassin.",
  },
];

// Communes nommées dans la maquette (script renderVals, tableau zones). La décision D1 (point 20) parle
// de douze communes en intervention courante mais la liste nominative complète n'a jamais été fournie :
// la maquette n'en nomme que dix et rien n'est ajouté ici sans source (design_spec, open_questions).
export const communesCourantes = [
  "Montpellier",
  "Castelnau-le-Lez",
  "Lattes",
  "Pérols",
  "Saint-Jean-de-Védas",
  "Le Crès",
  "Clapiers",
  "Mauguio",
  "Grabels",
  "Juvignac",
];
