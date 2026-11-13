# BTDIGIT — Agence Digitale

Vitrine de **BTDIGIT**, agence de solutions digitales à Bamako, publiée via GitHub Pages dans le dépôt historique `hamapixel/nexora-technologies`.

## Site multilingue

Le site propose quatre langues avec drapeaux vectoriels dans la barre de navigation :

- 🇫🇷 **Français** (`fr`) — langue par défaut.
- 🇬🇧 **English** (`en`).
- 🇲🇱 **Bamanankan / Bambara** (`bm`) — transcription latine.
- 🇪🇸 **Español** (`es`).

Tous les textes de l'interface sont centralisés dans `src/i18n.js` : menus, titres, slogans, services, trois projets du portfolio, maquettes illustratives, présentation du fondateur, étapes de réalisation, FAQ, formulaire, boutons, messages WhatsApp, libellés accessibles et pied de page.

Le changement de langue s'applique immédiatement, sans rechargement de page, et est mémorisé sur l'appareil dans `localStorage` (`btdigit-language`). Le code met également à jour l'attribut HTML `lang`, le titre de l'onglet et la description affichée dans le document côté navigateur. Les drapeaux SVG indépendants du système d'exploitation se trouvent dans `public/flags/`.

**Qualité linguistique :** la version bambara est une première adaptation complète proposée en alphabet latin. Une relecture par un locuteur natif / traducteur spécialisé est recommandée avant d'utiliser ces formulations dans des engagements commerciaux. Les noms de marques et termes techniques courants (SaaS, PWA, WhatsApp) sont conservés.

## Animations au défilement — GSAP, ScrollTrigger et Three.js

Le site utilise maintenant **GSAP + ScrollTrigger 3.15.1** pour un défilement animé mais naturel :

- Apparition des titres, cartes de services, projets du portfolio, fondateur, étapes, FAQ et contact.
- Effets de parallaxe légers sur les rubans abstraits et la carte du portfolio.
- Barre discrète de progression de lecture, liée au défilement.
- Effets plus légers sur mobile, désactivés si l'utilisateur préfère les animations réduites.
- Nettoyage des animations lors des changements de langue, du démontage React et des changements de préférences d'accessibilité.

Un accent visuel abstrait basé sur **Three.js 0.187.0** est présent en arrière-plan de l'accueil, uniquement sur ordinateurs compatibles. Sa rotation suit la progression du défilement. Il **ne s'agit pas d'un véhicule**, ni d'un nouveau showroom automobile.

Pour préserver les performances, cette scène n'est pas chargée sur petit écran, lorsque le mode économie de données est activé, sur des appareils à mémoire limitée ou si l'utilisateur a demandé une réduction des animations. Elle ne fait pas tourner un rendu 60 images/seconde en continu. Le fond SVG demeure visible comme alternative.

Les deux bibliothèques sont chargées depuis des URLs **CDN versionnées** (voir `index.html` et `src/ThreeAccent.jsx`). En l'absence d'accès au CDN, le site et ses fonctions restent accessibles, avec le fond CSS statique.

### Vérifications locales

```powershell
cd "$env:USERPROFILE\Desktop\BTDIGIT"
git status
git switch main
git pull --ff-only origin main
npm ci
npm run test:i18n
npm run test:motion
npm run build
npm run dev
```

En cas de modifications locales non enregistrées, ne pas forcer le `git pull` : sauvegarder ou committer ces changements avant la synchronisation.

## Identité et portfolio

- Logo officiel BTDIGIT blanc et violet : `public/btdigit-logo.webp`.
- Typographies : Plus Jakarta Sans et DM Sans.
- Fonds animés en bleu nuit et violet : `src/assets/btdigit-ribbon.svg`.
- Animations CSS `@keyframes`, avec respect de `prefers-reduced-motion`.
- **StockPro Premium** : https://stockpro.ml/
- **VestiFlow** : logiciel Windows pour la vente textile.
- **Horizon Visa & Immo** : réalisation client.

Les visuels de projets restent des illustrations : ne pas les présenter comme des captures officielles. Le showroom automobile 3D a été retiré.

## Mise à jour locale (Windows PowerShell)

Se placer dans **le dossier réel du dépôt cloné**, sans créer un second projet :

```powershell
git status
git switch main
git pull --ff-only origin main
npm ci
npm run test:i18n
npm run dev
```

Ouvrir l'adresse locale affichée par Vite (généralement http://localhost:5173).

Si `git status` montre des fichiers modifiés, **ne pas forcer `git pull`** : sauvegarder, committer ou mettre les changements de côté avant de synchroniser. Le dépôt GitHub ne permet pas de modifier directement les fichiers sur le PC Windows sans exécuter ces commandes localement.

## Tests et déploiement

```bash
npm ci
npm run test:i18n
npm run build
npm run preview
```

Le workflow `.github/workflows/ci.yml` valide les quatre langues et la compilation sur les pull requests. Le workflow GitHub Pages publie la branche `main` après fusion.

Site : https://hamapixel.github.io/nexora-technologies/

## Contact

- WhatsApp : +223 74 98 07 44
- Email : hamaatraore@gmail.com

Le formulaire prépare un message dans la langue sélectionnée et ne stocke pas les informations sur le serveur.
