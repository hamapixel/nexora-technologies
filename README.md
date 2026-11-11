# Nexora Technologies

Site vitrine et portfolio de **Nexora Technologies**, activité de création de sites web, d'applications et de logiciels de gestion basée à Bamako (Mali).

## Réalisations présentées

- **StockPro Premium** — plateforme SaaS de gestion commerciale : [stockpro.ml](https://stockpro.ml/).
- **VestiFlow** — logiciel Windows de vente d'habits, gestion d'articles et tickets de caisse ; présentation sur demande.
- **Horizon Visa & Immo** — projet de site web pour un client ; lien public à ajouter uniquement après validation.

Les visuels intégrés aux cartes sont des **illustrations de présentation**, et non des captures officielles des produits. Les liens des projets non publiés ne sont pas inventés.

## Identité visuelle

Trois fichiers SVG originaux et modifiables sont inclus :
- `public/nexora-symbol.svg` : monogramme N digital et favicon.
- `public/nexora-logo.svg` : logo horizontal pour fond sombre.
- `public/nexora-logo-light.svg` : logo horizontal pour fond clair.

## Développement

Stack : React 18, Vite 6, Lucide React et CSS responsive.

```bash
npm ci
npm run dev
```

Construire et vérifier la version de production :

```bash
npm run build
npm run preview
```

## Publication

Le site est publié via GitHub Pages. Le workflow `.github/workflows/deploy.yml` reconstruit et déploie automatiquement à chaque push sur `main`. Le workflow `ci.yml` contrôle le build des pull requests.

URL publique : https://hamapixel.github.io/nexora-technologies/

La base Vite `./` de `vite.config.js` est nécessaire pour les chemins des fichiers sous le sous-répertoire GitHub Pages.

## Contact

- WhatsApp : +223 74 98 07 44
- Email : hamaatraore@gmail.com

Le formulaire ne possède pas de backend. À la validation, il prépare un message pour WhatsApp dans le navigateur et n'enregistre pas les informations sur le site.

## À personnaliser

Ajouter ultérieurement des captures officielles, la fiche VestiFlow et l'URL publique validée d'Horizon Visa & Immo. Ne pas exposer de liens privés ou de données clients.
