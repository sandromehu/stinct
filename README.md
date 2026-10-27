# STINCT — prototype React

Prototype interactif de STINCT, la plateforme de notation et d’avis sur les projets musicaux. Il reprend à l’identique les 17 écrans de la maquette Claude Design, avec toutes leurs interactions et des données fictives.

Le projet utilise React, TypeScript et Vite.

## Importer dans Google AI Studio

AI Studio importe un projet existant depuis un dépôt GitHub :

1. Sur GitHub, créez un nouveau dépôt (par exemple `stinct`), puis cliquez sur « uploading an existing file ».
2. Glissez **le contenu** de ce dossier, pas le dossier lui-même, puis validez avec « Commit changes ».
3. Dans AI Studio, ouvrez **Build**. Cliquez sur **+** dans la zone de saisie, puis sur **Import from GitHub**, et choisissez le dépôt.

AI Studio adapte le projet à son environnement. Vous pouvez ensuite demander vos modifications à Gemini, par exemple :

> Garde exactement le design actuel. Crée un état partagé entre les écrans (abonnements, bibliothèque, avis publiés) pour qu’une action faite sur un écran se retrouve sur les autres.

## Lancer le projet sur votre ordinateur

Il faut Node.js 20 ou une version plus récente. Dans ce dossier :

```
npm install
npm run dev
```

Ouvrez ensuite http://localhost:3000.

## Organisation

| Fichier | Rôle |
| --- | --- |
| `index.html` | Page qui charge l’app et la police Plus Jakarta Sans |
| `App.tsx` | Liste des écrans et navigation (adresses en `#/…`) |
| `pages/` | Un fichier par écran. `renderVals()` contient les données et les actions, `render()` la mise en page |
| `public/images/` | Pochettes et avatars fictifs |
| `metadata.json` | Nom et description de l’app pour AI Studio |

Les styles sont écrits directement sur les éléments. Chaque écran a aussi une petite feuille de style : la constante `CSS` en tête de son fichier.

## Écrans

| Adresse | Écran |
| --- | --- |
| `#/` | Découvrir |
| `#/decouvrir/profil-prive` | Découvrir, avec l’aperçu d’un profil privé |
| `#/tendances` | Tendances |
| `#/projets` | Tous les projets |
| `#/projet` | Page projet (Marée basse) |
| `#/projet/ajouter` | Page projet, fenêtre « Ajouter à ma bibliothèque » ouverte |
| `#/avis` | Avis détaillé |
| `#/bibliotheque` | Ma bibliothèque |
| `#/profil` | Profil d’un membre (Sillon) |
| `#/profil-prive` | Profil privé (Basse Continue) |
| `#/profil/notes` | Toutes les notes d’un membre |
| `#/profil/collection` | Collection d’un membre |
| `#/mon-profil` | Mon profil |
| `#/parametres/confidentialite` | Paramètres : confidentialité |
| `#/parametres/profil` | Paramètres : profil |
| `#/parametres/compte` | Paramètres : compte |
| `#/connexion` | Connexion et inscription |

## À savoir

- Les données sont fictives et rien n’est enregistré : chaque écran repart de son état initial quand on y revient.
- Les écrans « Profil » et « Collection » servent de modèles. Tous les profils publics ouvrent celui de Sillon, et toutes les collections ouvrent sa collection « 2026 ».
- Palette : fond `#F5F2EC`, surfaces `#ECE8E0`, éléments interactifs `#E2DDD3`, état actif `#D6D0C4`, texte `#1E1D1A`, texte secondaire `#8C877D`.
