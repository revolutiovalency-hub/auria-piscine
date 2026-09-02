// Identité du site. Rempli par l'agent Dev à partir de .agency/site_constitution.json et entity_bible.
export const site = {
  name: "Nom du client",
  url: "https://example.com",
  description: "Description courte du site, 140 à 160 caractères.",
  locale: "fr-FR",
  business: {
    type: "LocalBusiness",
    telephone: "",
    email: "",
    address: { street: "", city: "", postalCode: "", country: "FR" },
    areaServed: "",
  },
  // Rempli par l'agent Dev depuis l'entity bible. Obligatoire en France.
  legal: {
    legalName: "",          // raison sociale
    legalForm: "",          // SASU, EI, SARL...
    siren: "",
    vatNumber: "",          // ou "non applicable, art. 293 B du CGI"
    capital: "",            // si société
    director: "",           // responsable de la publication
    host: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA",
    analytics: false,       // true si un outil de mesure est installé : active le bandeau cookies
  },
};
