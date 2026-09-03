import type { Etape } from "@/components/EtapesProjet";
import type { Preuve } from "@/components/PreuveBlock";

// Déroulé d'un projet en 6 étapes, du relevé à la mise en eau (design_spec, composant EtapesProjet).
// Partagé par l'accueil et la page construction pour que les libellés restent identiques partout (geo_rules).
export const etapesProjet: Etape[] = [
  {
    titre: "Relevé de terrain et faisabilité",
    texte: "Visite sur place, mesures, examen de l’accès, du sol, de l’exposition et des réseaux existants.",
  },
  {
    titre: "Plans d’implantation et urbanisme",
    texte: "Dessin du bassin, plans d’implantation, montage et dépôt du dossier de déclaration préalable ou de permis.",
  },
  {
    titre: "Devis détaillé et planning",
    texte: "Chiffrage poste par poste, prix contractualisé et date de démarrage annoncée avant signature.",
  },
  {
    titre: "Terrassement et structure",
    texte: "Ouverture de la fouille, ferraillage et projection du béton armé par nos équipes de maçonnerie.",
  },
  {
    titre: "Étanchéité, revêtement et plages",
    texte: "Pose du revêtement, des margelles et des plages, réalisées avec les entreprises locales que nous coordonnons.",
  },
  {
    titre: "Local technique et mise en eau",
    texte: "Raccordement de la filtration et des équipements, remplissage, réglages et remise du bassin en service.",
  },
];

// Preuves de fiabilité, datées et sourcées. Aucune note d'avis en AggregateRating (décision D1, point 18).
export const FICHE_GOOGLE = "https://www.google.com/maps/search/?api=1&query=Aurea+Piscines+Montpellier";

export const preuves: Preuve[] = [
  { label: "Plus de 300 projets", detail: "Piscines construites et rénovées depuis la création de l’entreprise en 2009." },
  { label: "Assurance décennale", detail: "MAAF Pro, police n° 8842-117-04, pour les travaux de construction et de rénovation." },
  { label: "Qualification Qualibat 2181", detail: "Qualification professionnelle pour la construction de piscines en béton." },
  { label: "Propiscines®", detail: "Charte professionnelle de la filière piscine, engagements de méthode et d’information du client." },
  {
    label: "Note Google 4,8 sur 5",
    detail: "Sur 87 avis publiés. Chiffre relevé en septembre 2026, il évolue avec les nouveaux avis.",
    source: "Consulter la fiche Google d’Aurea Piscines",
    href: FICHE_GOOGLE,
  },
  { label: "Certification IHB", detail: "Hygiène et traitement de l’eau de baignade, appliquée sur les contrats d’entretien." },
];

// Communes citées par le brief. La liste nominative complète des douze communes n'a pas été fournie
// (design_spec, open_questions) : rien n'est ajouté ici sans source.
export const communesCourantes = ["Montpellier", "Castelnau-le-Lez", "Lattes", "Pérols"];
