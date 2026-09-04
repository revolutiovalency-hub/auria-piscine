// Les 5 prestations de la page_matrix. Source unique pour le header, le footer et les cartes de l'accueil.
export type NavItem = { label: string; short: string; href: string; description: string };

export const services: NavItem[] = [
  {
    label: "Construction de piscine béton",
    short: "Construction",
    href: "/construction-piscine-beton-montpellier",
    description:
      "Bassin en béton armé projeté dessiné pour votre terrain, construit par nos équipes de maçonnerie, du relevé à la mise en eau.",
  },
  {
    label: "Rénovation de piscine",
    short: "Rénovation",
    href: "/renovation-piscine-montpellier",
    description:
      "Diagnostic de la structure et de l’étanchéité, reprise du bassin, nouveau revêtement, margelles et plages.",
  },
  {
    label: "Équipements de piscine",
    short: "Équipements",
    href: "/equipements-piscine-montpellier",
    description:
      "Filtration, pompe à chaleur, électrolyse au sel, régulation automatique, volet immergé et mise aux normes de sécurité.",
  },
  {
    label: "Entretien de piscine",
    short: "Entretien",
    href: "/entretien-piscine-montpellier",
    description:
      "Contrat annuel de 4 à 12 passages, ouverture de saison, hivernage, analyses d’eau et dépannages ponctuels.",
  },
  {
    label: "Étude de faisabilité et démarches d’urbanisme",
    short: "Étude et urbanisme",
    href: "/etude-faisabilite-demarches-urbanisme",
    description:
      "Faisabilité du projet, plans d’implantation, étude de sol si nécessaire, montage et dépôt du dossier d’urbanisme.",
  },
];

export const zonePage = {
  label: "Zone d’intervention autour de Montpellier",
  short: "Zone d’intervention",
  href: "/zone-intervention-montpellier",
};

export const aboutPage = { label: "Aurea Piscines, l’entreprise", short: "À propos", href: "/a-propos" };
export const contactPage = { label: "Demander un devis détaillé", short: "Contact", href: "/contact" };
export const homePage = { label: "Aurea Piscines, constructeur de piscines béton à Montpellier", short: "Accueil", href: "/" };

export function serviceByHref(href: string) {
  return services.find((s) => s.href === href);
}

// Deux pages sœurs + page zone + accueil, avec des ancres explicites (seo_rules).
export function relatedLinks(currentHref: string) {
  const siblings = services.filter((s) => s.href !== currentHref).slice(0, 2);
  return [...siblings.map((s) => ({ label: s.label, href: s.href })), { label: zonePage.label, href: zonePage.href }, { label: homePage.label, href: homePage.href }];
}

// Navigation principale : 8 entrées comme le header de la maquette, mappées sur les pages réelles
// de la page_matrix. La maquette listait « Réalisations » et « Conseils » ; ces deux pages n'existent pas
// (décision D1, retrait de /journal), elles sont remplacées par « Équipements » et « Étude et urbanisme ».
export const navItems: { label: string; href: string }[] = [
  { label: "Accueil", href: homePage.href },
  { label: "Piscines", href: services[0].href },
  { label: "Rénovation", href: services[1].href },
  { label: "Équipements", href: services[2].href },
  { label: "Entretien", href: services[3].href },
  { label: "Étude et urbanisme", href: services[4].href },
  { label: "À propos", href: aboutPage.href },
  { label: "Contact", href: contactPage.href },
];
