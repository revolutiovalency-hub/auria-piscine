import type { Metadata } from "next";
import { site } from "@/site.config";

type PageSeo = { title: string; description: string; path: string; image?: string };

// Identifiant stable de l'entité : un seul LocalBusiness sur l'accueil, les autres pages y font référence (décision D1, point 9).
export const BUSINESS_ID = `${site.url}/#business`;

export function pageUrl(path: string) {
  return new URL(path, site.url).toString();
}

// Chaque page appelle buildMetadata dans generateMetadata : title, description, canonical, OpenGraph.
export function buildMetadata(p: PageSeo): Metadata {
  const url = pageUrl(p.path);
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: url },
    openGraph: {
      title: p.title,
      description: p.description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      ...(p.image ? { images: [p.image] } : {}),
    },
  };
}

export function businessJsonLd() {
  const b = site.business;
  const l = site.legal;
  return {
    "@context": "https://schema.org",
    "@type": b.type,
    "@id": BUSINESS_ID,
    name: site.name,
    legalName: l.legalName || site.name,
    url: site.url,
    description: site.description,
    foundingDate: b.foundingYear,
    telephone: b.telephoneE164 || undefined,
    email: b.email || undefined,
    address: { "@type": "PostalAddress", streetAddress: b.address.street, addressLocality: b.address.city, postalCode: b.address.postalCode, addressCountry: b.address.country },
    areaServed: b.areaServed || undefined,
    vatID: l.vatNumber || undefined,
    identifier: l.siren ? [{ "@type": "PropertyValue", name: "SIREN", value: l.siren }, { "@type": "PropertyValue", name: "APE", value: l.ape }] : undefined,
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    ],
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: "Qualibat 2181" },
      { "@type": "EducationalOccupationalCredential", name: "Propiscines®" },
      { "@type": "EducationalOccupationalCredential", name: "Certification IHB" },
      l.insurance ? { "@type": "EducationalOccupationalCredential", credentialCategory: "insurance", name: l.insurance } : undefined,
    ].filter(Boolean),
    // Pas d'aggregateRating : la note Google reste en texte sourcé et daté (décision D1, point 18).
  };
}

// Référence à l'entité pour les pages autres que l'accueil.
export function businessRef() {
  return { "@id": BUSINESS_ID };
}

export function serviceJsonLd(s: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    url: pageUrl(s.path),
    serviceType: s.name,
    provider: businessRef(),
    areaServed: site.business.areaServed,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Accueil", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: pageUrl(it.path),
    })),
  };
}

export function webPageJsonLd(p: { type: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage"; name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": p.type,
    name: p.name,
    description: p.description,
    url: pageUrl(p.path),
    about: businessRef(),
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
}
