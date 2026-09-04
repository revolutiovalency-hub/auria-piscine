import type { MetadataRoute } from "next";
import { pageUrl } from "@/lib/seo";
import { getPosts } from "@/lib/content";

// Pages statiques de la page_matrix, plus les pages légales du template et les articles publiés.
const STATIC_PATHS = [
  "/",
  "/construction-piscine-beton-montpellier",
  "/renovation-piscine-montpellier",
  "/equipements-piscine-montpellier",
  "/entretien-piscine-montpellier",
  "/etude-faisabilite-demarches-urbanisme",
  "/zone-intervention-montpellier",
  "/a-propos",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PATHS.map((path) => ({ url: pageUrl(path) }));
  const postEntries = getPosts().map((p) => ({ url: pageUrl(`/blog/${p.slug}`), lastModified: p.date }));
  return [...staticEntries, ...postEntries];
}
