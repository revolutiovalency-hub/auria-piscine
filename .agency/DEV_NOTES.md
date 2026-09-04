# DEV_NOTES — mission build (2026-09-03)

## Ce que j'ai fait
Transposé la maquette `.agency/mockup/Aurea Piscines.dc.html` sur les 9 pages de la `page_matrix`. Le design system
du nouveau `design_spec.json` est intégralement passé dans `app/globals.css` (21 couleurs, les deux polices chargées
par `next/font` depuis `app/layout.tsx`, rayons 2/3/999px, `--space-section`, gouttière `clamp(18px,4vw,56px)`,
conteneur 1360px) : aucune couleur ni taille en dur dans un composant, `tailwind.config.ts` et `next.config.mjs`
intacts. Réécrit `Header` (sticky, logo AUREA/PISCINES, 8 items, seuil 1080px, panneau mobile), `Footer`
(5 colonnes sur #0F2B2D), `Hero` (3 variantes : accueil, page interne, bandeau clair), `Section`/`SectionHead`,
`ServiceCard`, `EtapesProjet` (bandeau numéroté sombre), `PreuveBlock` (chiffres clés + preuves numérotées), `Faq`
(accordéon, signe + / –), `CtaBand`, `EtapesSuivantes`, `ZoneCarte`, `MaterielCriteres`, `EncadreInformationGenerale`,
`ContactForm`. Créé les composants de la maquette absents du template : `IntroSplit`, `ProjectCard`, `PoolTypeCard`,
`OptionList`, `FactRow`, `Testimonial`, `CtaCard`, `InfoContact`, `MediaZone`. Accueil et page construction
reconstruites section par section dans l'ordre du spec ; les 7 autres pages gardent leur contenu (conforme aux
décisions) et passent au nouveau design system. Vérifié sur le HTML produit : un seul H1 par page, aucun saut de
niveau de titre, title 55-60 signes, meta description 150-158, canonical et JSON-LD partout, réponse directe 40-51
mots, réponses de FAQ 53-63 mots, aucun mot de `forbidden_words`, aucun point d'exclamation, aucune entité HTML
visible, aucun id dupliqué. `next build` passe (le `npm` de la machine est cassé, `yarn install` a servi à installer ;
`yarn.lock` et `next-env.d.ts` ont été retirés pour laisser le repo propre).

## Ce que je n'ai pas pu faire
- **Aucune image.** `.agency/mockup/` ne contient que le HTML et son script, `.agency/images/` n'existe pas, et
  `image_plan.json` décrit 8 visuels **à générer** que je ne peux pas produire ici. Les zones média des cartes et les
  fonds de hero sont donc rendus comme dans la maquette : un aplat vert texturé en CSS (`MediaZone`, `.texture`), pas
  une image ni un placeholder gris. Elles ont déjà le bon ratio : les photos de `image_plan.json` s'y déposeront en
  `next/image` avec `sizes` sans changer la mise en page. Les annotations monospace « IMG — … » de la maquette sont
  des repères d'intégration, elles ne sont pas reprises.
- **Pages sans maquette dédiée.** Rénovation, équipements, entretien, étude, zone et à-propos n'ont aucun bloc `sc-if`
  dans le HTML fourni (`open_questions`). Leur structure reste celle de la version précédente, re-stylée avec les
  composants de la maquette. À revalider dès qu'une maquette dédiée existe.
- **Liste des 12 communes.** La maquette n'en nomme que dix (`zones` du script) et la décision D1 (point 20) en
  annonce douze. Les dix sourcées sont affichées, la page zone annonce douze communes sans en inventer deux.
- **Lien vers la fiche Google.** L'URL réelle n'a pas été fournie : le lien pointe vers une recherche Google Maps
  plutôt que vers une URL inventée. À remplacer.
- **Réseaux sociaux du footer.** La maquette liste Instagram, Facebook et Pinterest en `href="#"`. Aucune URL n'ayant
  été fournie, la ligne est retirée plutôt que de laisser trois liens morts. À rouvrir avec les comptes réels.
- **Pas de page /realisations ni /journal** (hors `page_matrix`, décision D1) : la section « Conseils » de l'accueil
  et les liens « Voir toutes nos réalisations » de la maquette ne sont pas repris, et la navigation les remplace par
  « Équipements » et « Étude et urbanisme » pour rester à 8 entrées sans lien mort.

## Choix que j'ai dû faire seul
- **Comportements JS de la maquette recréés sans JS.** Le menu mobile et l'accordéon FAQ sont des `details/summary`
  (`name` sur la FAQ pour n'ouvrir qu'une réponse à la fois) : même bascule instantanée que la maquette, qui ne
  déclare ni durée ni courbe, et tout le contenu reste dans le HTML servi (aio_rules).
- **Aplats de prix et FAQ de la maquette écartés** : `customFacts` « budget indicatif à partir de 38 000 € TTC » et la
  FAQ tarifaire tombent sous la décision D1 (points 5 et 10). La ligne budget est remplacée par « Zone
  d'intervention », et les FAQ des pages restent celles, factuelles et générales, de la version précédente. Écrit une
  FAQ d'accueil de 3 questions (traitement de l'eau, terrain en pente, béton contre coque), sans doublon avec les
  autres pages.
- **Données de démonstration signalées.** Les réalisations, les avis et les chiffres clés viennent du script de la
  maquette et ne sont pas vérifiés par le client, ce que `forbidden` interdit de publier tel quel. Ils sont repris,
  comme le fait la maquette pour les chiffres, avec une mention explicite (`MENTION_CHIFFRES`, `MENTION_PROJETS`,
  `MENTION_AVIS`) plutôt que supprimés ou inventés.
- **Horaires** : ceux de la décision D1 (8h-18h du lundi au vendredi sur rendez-vous, fermeture mi-août) remplacent
  ceux du HTML de la maquette (Lun-Ven 8h30-18h30, Sam 9h-12h30), la décision primant.
- **Ligne de confiance des heros internes** : la maquette ne met le téléphone que dans le header desktop. Pour que le
  téléphone et l'engagement de rappel sous 24 h ouvrées restent visibles en haut de chaque page (conversion_rules),
  la ligne de confiance du hero d'accueil est reprise sur les pages internes avec ces deux informations.
- **Formulaire de contact** : les champs de la maquette (Prénom, Type de projet) ont été ajoutés à `ContactForm.tsx`,
  et `app/api/contact/route.ts` relaie les deux nouvelles valeurs dans le mail Resend — sans quoi elles seraient
  perdues. La mécanique d'envoi (POST, honeypot, Resend) n'a pas été réécrite.
- **Grilles `auto-fit`** : les `minmax(Npx,1fr)` de la maquette sont écrits `minmax(min(Npx,100%),1fr)`, sinon un
  écran de 320px déborde horizontalement. La carte de réalisation en avant porte `.span-2`, neutralisé sous 720px :
  un `span 2` dans une grille à une colonne crée une colonne implicite et casse la mise en page mobile.
- **Cibles tactiles** : 44px appliqués aux commandes autonomes (navigation, menu mobile, footer, boutons, hamburger).
  Les liens de texte en ligne dans les paragraphes gardent leur hauteur naturelle.
- **Hauteurs de hero en `svh`** et non `vh`, et `min-h-svh` sur le body.
- **Nommage du design system** : `--color-secondary` vaut `#8FB6B2` comme le spec ; la couleur de texte courant de la
  maquette, `#3C4A46`, n'est dans aucune liste du spec et a été ajoutée sous `--color-body` (utilitaire `.text-body`).
- **`site.url` = `https://aurea-piscines.fr`**, déduit du domaine de `contact@aurea-piscines.fr`. À confirmer.
  `legal.director` et `legal.capital` restent vides, absents du brief. `deploy_production` reste rouge (décision D1).

# DEV_NOTES — mission fix (2026-09-04)

## Ce que j'ai fait
La majorité des issues `tech_qa` « Section absente du rendu » (accueil, 1440 et 390px) et l'issue `aio_qa` sur le
lien `tel:` manquant en gabarit se sont révélées déjà résolues dans le code livré : vérifié section par section sur
le HTML produit par `next build`, tous les titres cités y figurent mot pour mot (dont les liens `tel:` du Header et
du Footer), sauf les deux signalées ci-dessous. Je n'ai rien touché à ces sections pour ne pas refaire un travail
déjà fait (règle « ne pas refactorer » du mode fix). Corrigé les issues restantes qui étaient réellement actives :
`app/robots.ts` et `app/sitemap.ts` (absents, blocking), le téléphone du JSON-LD LocalBusiness passé au format
E.164 déjà présent dans `site.config.ts` (`b.telephoneE164` au lieu de `b.telephone`), l'assurance décennale ajoutée
à `hasCredential` dans `lib/seo.ts` (donnée déjà dans `site.legal.insurance`), le fil d'Ariane visible passé de
`<p>` à `<nav aria-label="Fil d'Ariane">` dans `Hero.tsx` pour correspondre au `BreadcrumbList` JSON-LD, et l'ajout
d'un favicon (`app/icon.tsx`) et d'une image de partage (`app/opengraph-image.tsx`) générés avec `next/og` à partir
des couleurs et du nom du design system, faute de visuel fourni. `next build` passe (`.next`, `yarn.lock` et
`next-env.d.ts` retirés pour laisser le repo propre, comme lors du build initial).

## Ce que je n'ai pas pu faire
- **Effectif « 9 personnes »** (issue `ba3eb9ce`) et toute correction de `page_matrix` (issues `d989a313`,
  `1106469e`, `6c6701fe`, `d7e88438`, `f7a15e33`, `2013ffd9`, `baec0c9c`) : ces issues citent un `entity_bible` et un
  `page_matrix` qui ne sont pas dans `.agency/` de cette mission (seuls `design_spec.json`, `decisions.json`,
  `site_constitution.json`, `image_plan.json` sont fournis). Impossible de vérifier ou reprendre ces chiffres et
  libellés sans inventer une donnée absente du brief (règle 1).
- **`sameAs` vers la fiche Google** (issues `809a9068`, `6e38cf28`, `16c19938`) : aucune URL réelle de fiche Google
  Business fournie ; le lien texte pointe toujours vers une recherche Google Maps plutôt qu'une URL inventée
  (limitation déjà notée à la mission précédente).
- **Sections de maquette non reproductibles** : « Quatre métiers, une même exigence. » et « Comprendre avant de se
  lancer. » (issues `32eedc3b`, `45c21eba`) n'existent dans aucune source disponible ici (ni `design_spec.json`, ni
  maquette, absente de ce dossier `.agency/`). La section services actuelle compte 5 métiers (« Cinq métiers, une
  même exigence. ») parce que la 5ᵉ prestation (étude et démarches d'urbanisme) a été ajoutée après la maquette
  d'origine, décision déjà actée dans le code (`lib/nav.ts`) ; je n'ai pas renommé le titre en « Quatre » pour ne
  pas revenir sur ce choix. Je n'ai pas non plus inventé une section « Comprendre avant de se lancer. » : aucune
  source ne dit ce qu'elle doit contenir.

## Choix que j'ai dû faire seul
- Favicon et image de partage générés en code (fond `#0F2B2D`, wordmark AUREA/PISCINES) plutôt que par un fichier
  image : aucune photo ni maquette de logo n'est disponible dans `.agency/images/`, et le brief interdit le
  placeholder gris, pas un visuel généré à partir du design system.
