# DEV_NOTES — mission build (2026-09-03)

## Ce que j'ai fait
Construit les 9 pages de `design_spec.json` (accueil, 5 pages service, zone, à-propos, contact) section par section,
dans l'ordre du spec, à partir du template. Rempli `site.config.ts` (identité, coordonnées, SIREN/RCS/TVA/APE,
décennale) et branché le footer, les mentions légales et la page confidentialité dessus. Créé les 6 composants
décrits par le spec et absents du template : `PreuveBlock`, `EtapesProjet`, `EtapesSuivantes`, `ZoneCarte`,
`EncadreInformationGenerale`, `MaterielCriteres`. Réécrit `Header` (5 pages service, téléphone et rappel 24 h en
haut de chaque page, menu mobile en `details/summary` sans JS) et `Footer`. Étendu `lib/seo.ts` : `@id` stable du
LocalBusiness, `Service`, `BreadcrumbList`, `WebPage/AboutPage/ContactPage`. Retiré le LocalBusiness global du
layout : il n'existe plus qu'une fois, sur l'accueil, et les autres pages y renvoient par `@id` (décision D1, 9).
Vérifié sur le HTML produit : un seul H1 par page, aucun saut de niveau de titre, title 55-60 signes, meta
description 150-158, canonical et JSON-LD partout, réponse directe 45-51 mots, réponses de FAQ 54-63 mots, aucun
mot de la liste `forbidden_words`, aucun point d'exclamation, aucune entité HTML visible, aucun id dupliqué,
maillage complet (2 pages sœurs + zone + accueil + contact) sur chaque page service. `npm run build` passe
(exécuté via `./node_modules/.bin/next build` : le npm de la machine est cassé, `yarn install` a servi à installer).

## Ce que je n'ai pas pu faire
- **Aucune image.** Aucune maquette ni photo n'a été livrée (`.agency/mockup/` et `.agency/images/` n'existent pas),
  et `image_plan.json` décrit 8 visuels **à générer** que je ne peux pas produire ici. Par ailleurs `forbidden` interdit
  de publier une photo de piscine qui ne soit pas un chantier réalisé par Aurea : des visuels génériques seraient de
  toute façon à arbitrer. Les pages sont donc en texte seul, sans placeholder gris. À rouvrir avec les photos client.
- **Design system.** `design_spec.design_system` est intégralement « non fourni » (aucune couleur, police, échelle
  d'espacement, rayon). J'ai gardé les tokens du template dans `app/globals.css` sans rien inventer, et je n'ai touché
  ni `tailwind.config.ts` ni `next.config.mjs`. À reprendre dès réception de l'export de maquette.
- **Formulaire de contact à 5 champs.** `conversion_rules` et le spec demandent type de projet, commune, budget
  indicatif, échéance, téléphone ; CLAUDE.md interdit de réécrire `ContactForm.tsx` et `app/api/contact/route.ts`.
  J'ai laissé les deux intacts et la page contact demande explicitement ces 5 éléments dans le message. Il faut une
  issue explicite pour ajouter les champs au formulaire **et** au routeur Resend (sinon les valeurs seraient perdues).
- **Liste des 12 communes.** Seules Montpellier, Castelnau-le-Lez, Lattes et Pérols sont sourcées (page_matrix et
  décision D1, 20). Les 8 autres ne sont nulle part : je ne les ai pas inventées. La page zone annonce douze communes
  (décision D1) et nomme les quatre connues. À compléter.
- **Lien vers la fiche Google.** L'URL de la fiche n'a pas été fournie : le lien pointe vers une recherche Google Maps
  « Aurea Piscines Montpellier » plutôt que vers une URL inventée. À remplacer par l'URL réelle.
- **Comportements JS.** `behaviors` est « non fourni » sur les 4 entrées. J'ai retenu les replis standard que le spec
  lui-même décrit, sans animation ni durée inventée, et tout le contenu reste dans le HTML servi (aio_rules).

## Choix que j'ai dû faire seul
- **Libellé des 6 étapes** (`lib/site-content.ts`) : le spec impose « 6 étapes, du relevé à la mise en eau » sans les
  nommer. Je les ai formulées à partir du contenu des autres sections. Aucune durée en jours ou semaines n'est
  annoncée sur la page construction : les « délais annoncés » du spec ne sont chiffrés nulle part dans le brief, et
  `forbidden` interdit de promettre un délai non contractualisé.
- **`site.url` = `https://aurea-piscines.fr`**, déduit du domaine de `contact@aurea-piscines.fr`. À confirmer.
- **`legal.director` et `legal.capital` laissés vides** : absents du brief. La page mentions légales retombe sur la
  raison sociale. À remplir avant toute mise en ligne (`deploy_production` reste rouge, décision D1).
- **`buildMetadata` renvoie désormais un title absolu** (`title: { absolute }`) et le template `%s | Aurea Piscines`
  du layout a été neutralisé : sinon le suffixe faisait sortir tous les titles de la fourchette 55-60 signes.
- **Citations d'urbanisme** : je n'ai gardé que celles que je peux énoncer précisément (R.421-1, R.421-2, R.421-9,
  R.423-23, L.151-8 du code de l'urbanisme ; 1792, 1792-3, 1792-6 du code civil ; R.421-1 du code de justice
  administrative). J'ai retiré la taxe d'aménagement et les numéros d'articles du code de la construction sur la
  sécurité des piscines : recodifiés récemment, je ne pouvais pas les citer sans risque d'erreur. L'obligation est
  mentionnée en renvoyant au code, sans numéro.
- **`/blog` conservé** (page du template, aucun article) mais absent de la navigation : `/journal` est renvoyé en
  phase 2 par la décision D1.
- **Deux règles CSS ajoutées dans `globals.css`** : `font-size: 16px` sur les champs de formulaire (zoom iOS) et une
  utilitaire `.tap` à 44px pour les cibles tactiles.
