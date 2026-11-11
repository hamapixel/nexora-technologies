# BTDIGIT — Agence Digitale

Site vitrine de **BTDIGIT**, agence de solutions digitales basée à Bamako (Mali), réalisée dans le dépôt historique `hamapixel/nexora-technologies` pour préserver l'adresse GitHub Pages.

## Direction artistique

- Logo BTDIGIT blanc et violet fourni par le fondateur : `public/btdigit-logo.webp`.
- Favicon BT et orbite assorti : `public/btdigit-icon.svg`.
- Palette : **bleu nuit**, violet de marque, nuances glacées et petites touches orange.
- Police des titres : **Plus Jakarta Sans** ; police des textes : **DM Sans**, avec fallbacks système.
- Fond abstrait fluide : `src/assets/btdigit-ribbon.svg`, intégré au build Vite.
- Animations CSS `@keyframes` : `ribbonDrift`, `auroraFloat`, `orbitBreathe`, `showcaseFloat` et `heroAppear`.
- Sections animées à l'apparition par `IntersectionObserver`; adaptation `prefers-reduced-motion` pour éviter les animations imposées.
- Thème sombre/clair, navigation responsive, portrait du fondateur dont la tête reste visible.

**La démonstration automobile 3D et le moteur WebGL ont été retirés** : ce site présente uniquement les véritables services et projets de l'agence.

## Portfolio

- **StockPro Premium** — plateforme SaaS de gestion commerciale : https://stockpro.ml/
- **VestiFlow** — logiciel Windows de vente de vêtements et gestion des tickets.
- **Horizon Visa & Immo** — site web conçu pour un client ; URL publique à compléter après validation.

Les aperçus des produits sont des illustrations de présentation, pas des captures officielles.

## Stack

React 18 · Vite 6 · CSS responsive · Lucide React.

```bash
npm ci
npm run dev
npm run build
npm run preview
```

GitHub Actions vérifie le build des pull requests puis déploie le site sur GitHub Pages après fusion dans `main`.

URL : https://hamapixel.github.io/nexora-technologies/

## Contact

- WhatsApp : +223 74 98 07 44
- Email : hamaatraore@gmail.com

Le formulaire prépare un message WhatsApp sans enregistrer les coordonnées sur le site.
