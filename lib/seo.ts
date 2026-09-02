import type { Metadata } from "next";
import { site } from "@/site.config";

type PageSeo = { title: string; description: string; path: string; image?: string };

// Chaque page appelle buildMetadata dans generateMetadata : title, description, canonical, OpenGraph.
export function buildMetadata(p: PageSeo): Metadata {
  const url = new URL(p.path, site.url).toString();
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: url },
    openGraph: { title: p.title, description: p.description, url, siteName: site.name, locale: site.locale, type: "website", images: p.image ? [p.image] : undefined },
  };
}

export function businessJsonLd() {
  const b = site.business;
  return {
    "@context": "https://schema.org",
    "@type": b.type,
    name: site.name,
    url: site.url,
    telephone: b.telephone || undefined,
    email: b.email || undefined,
    address: { "@type": "PostalAddress", streetAddress: b.address.street, addressLocality: b.address.city, postalCode: b.address.postalCode, addressCountry: b.address.country },
    areaServed: b.areaServed || undefined,
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
}
