# BTDIGIT — Agence Digitale

Site vitrine de l'agence **BTDIGIT** et de son fondateur, développeur web à Bamako (Mali). Le site s'appuie sur le dépôt historique `hamapixel/nexora-technologies` pour conserver l'adresse GitHub Pages existante.

## Identité

- **Logo :** `public/btdigit-logo.webp` — logo BTDIGIT blanc et violet fourni par le fondateur, recadré et optimisé pour l'affichage web.
- **Favicon :** `public/btdigit-icon.svg` — emblème BT/orbite assorti.
- Direction artistique : violet, noir profond, blanc ; thème jour/nuit.
- **Portfolio** conservé, sans projets inventés.

## Portfolio

- **StockPro Premium** — SaaS de gestion commerciale : https://stockpro.ml/
- **VestiFlow** — logiciel Windows de vente de vêtements.
- **Horizon Visa & Immo** — réalisation de site web pour un client (URL publique à valider).

Les aperçus de produits existants sont des **illustrations de présentation**. Les remplacer par des captures officielles après vérification.

## Démonstration 3D

`src/Showroom3D.jsx` implémente un **prototype automobile 3D interactif** :
- rotation de la caméra par glissement ;
- zoom à la molette ;
- quatre couleurs de carrosserie ;
- animation des deux portes ;
- boutons de rotation et remise à zéro ;
- version mobile tactile et prise en compte des préférences de réduction du mouvement.

Le moteur Three.js est chargé **sur demande**, uniquement après clic sur « Lancer la démo 3D », depuis un CDN public. En cas de coupure réseau ou d'absence de WebGL, un message d'erreur clair s'affiche : le reste du site reste utilisable. Le modèle est schématique : **il ne représente aucun véhicule commercial réel**.

Pour un véritable showroom de véhicules avec carrosserie fidèle, textures et portes réalistes, fournir les modèles 3D GLB/glTF optimisés ou une scène Spline autorisée. Ne pas faire passer un prototype conceptuel pour un modèle officiel.

## Stack

- React 18, Vite 6, CSS responsive, Lucide React.
- Démonstration WebGL : Three.js 0.180.0 chargé à la demande via jsDelivr.
- CI : GitHub Actions, `npm ci && npm run build`.

Démarrer en local :

```bash
npm ci
npm run dev
```

Build :

```bash
npm run build
npm run preview
```

## Déploiement

GitHub Pages : https://hamapixel.github.io/nexora-technologies/

Le workflow `.github/workflows/deploy.yml` publie les modifications poussées sur `main`.

## Contact

- WhatsApp : +223 74 98 07 44
- Email : hamaatraore@gmail.com

Le formulaire de contact prépare un message WhatsApp sans conserver les informations sur le site.
