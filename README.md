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
