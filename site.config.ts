// Identité du site. Rempli par l'agent Dev à partir de .agency/site_constitution.json et entity_bible.
export const site = {
  name: "Aurea Piscines",
  url: "https://aurea-piscines.fr",
  description:
    "Aurea Piscines construit des piscines en béton armé projeté à Montpellier et dans un rayon d’environ 30 km. Construction, rénovation, équipements, entretien.",
  locale: "fr-FR",
  business: {
    type: "LocalBusiness",
    telephone: "04 67 00 00 00",
    telephoneE164: "+33467000000",
    email: "contact@aurea-piscines.fr",
    address: { street: "128 avenue de la Pompignane", city: "Montpellier", postalCode: "34000", country: "FR" },
    areaServed: "Montpellier et un rayon d’environ 30 km",
    foundingYear: "2009",
    openingHours: "Du lundi au vendredi, 8h-18h, uniquement sur rendez-vous",
  },
  // Rempli par l'agent Dev depuis l'entity bible. Obligatoire en France.
  legal: {
    legalName: "Aurea Piscines",          // raison sociale
    legalForm: "SARL",                    // SASU, EI, SARL...
    siren: "512 340 887",
    vatNumber: "FR 42 512340887",         // ou "non applicable, art. 293 B du CGI"
    rcs: "RCS Montpellier",
    ape: "4399C",
    capital: "",                          // si société
    director: "",                         // responsable de la publication
    insurance: "Assurance décennale MAAF Pro n° 8842-117-04",
    host: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA",
    analytics: false,                     // true si un outil de mesure est installé : active le bandeau cookies
  },
};
