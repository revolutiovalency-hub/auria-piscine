# Contexte du repo pour l'agent Dev 

Ce fichier est lu par Claude Code au démarrage. Il doit rester court et exact. À copier à la racine de chaque repo de site, puis à adapter.

## Stack
- Next.js (App Router), TypeScript, Tailwind. Déploiement Vercel sur push.
- Build : `npm run build`. Doit passer avant toute fin de mission.

## Où vivent les choses
- Pages : `app/<route>/page.tsx`
- Composants réutilisables : `components/` (Hero, Section, ServiceCard, Testimonial, Faq, CtaBand, Footer)
- Design system : `app/globals.css` (variables CSS) et `tailwind.config.ts` (tokens). On ne met jamais une couleur en dur dans un composant.
- Contenu blog : `content/blog/<slug>.mdx` avec frontmatter `title, description, date, cover`
- SEO : `lib/seo.ts` génère title, meta, canonical, JSON-LD. Chaque page l'utilise via `generateMetadata`.

- Images : `public/images/`. Les photos du client sont déposées dans `.agency/images/` et celles de la maquette dans `.agency/mockup/` : copie celles qui servent dans `public/images/` avec un nom explicite (kebab-case), et utilise-les via `next/image`. Jamais d'image externe hotlinkée, jamais de placeholder gris en prod.
- Contact : `components/ContactForm.tsx` + `app/api/contact/route.ts` (Resend). Ne pas réécrire, juste utiliser.
- Pages légales : `app/mentions-legales` et `app/confidentialite` lisent `site.config.ts`. Ton travail : remplir `site.legal` et `site.business` depuis `.agency/site_constitution.json` et l'entity bible, sans inventer un SIREN ou une adresse absents du brief (laisser vide et le noter dans DEV_NOTES).

## Règles
- Un H1 par page, dans le composant Hero.
- Chaque page appelle `<JsonLd />` avec le type Schema.org de sa page_matrix.
- Les images passent par `next/image` avec `alt` obligatoire.
- Interdit de modifier : `next.config.*`, `tailwind.config.*`, `package.json`, sauf issue explicite.

## Mission courante
Le contexte de la mission est dans `.agency/` : lis `design_spec.json`, `site_constitution.json`, `issues.json` (et `article.json` en mode article) avant de toucher au code.
