# NEXORA TECHNOLOGIES

Site vitrine premium de Nexora Technologies.

## Stack
- React
- Vite
- CSS responsive sur mesure
- Lucide React
- GitHub Pages via GitHub Actions

## Démarrage local

```powershell
npm install
npm run dev
```

## Build de production

```powershell
npm run build
npm run preview
```

## Photo du fondateur
La maquette utilise `public/portrait-placeholder.svg`.
Quand la vraie photo est prête, ajoute par exemple `public/founder.jpg`
et remplace la référence dans `src/App.jsx`.

## WhatsApp
Dans `src/App.jsx`, rechercher :

```js
const whatsappNumber = "223XXXXXXXX";
```

Remplacer par le numéro officiel au format international, sans `+` ni espace.

## GitHub Pages
Le workflow `.github/workflows/deploy.yml` est déjà prêt.
Après le push, aller dans GitHub > Settings > Pages > Source > GitHub Actions.
