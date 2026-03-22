# Grenade Auto-Ecole

Site vitrine moderne pour une auto-ecole locale a Grenade.

## Apercu

Le projet est construit avec :

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

Le site contient notamment :

- une landing page immersive
- une page formations
- une page label qualite
- une page avis
- une page contact avec carte integree

## Lancer le projet en local

Dans le terminal VS Code, a la racine du projet :

```bash
npm install
npm run dev
```

Puis ouvre :

```bash
http://localhost:3000
```

## Scripts utiles

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Structure rapide

```bash
app/                # pages Next.js App Router
components/         # composants reutilisables et sections
public/             # images, logo, assets statiques
styles/             # styles additionnels si besoin
lib/                # helpers utilitaires
```

## Deploiement sur GitHub Pages

Oui, GitHub Pages peut etre utilise gratuitement pour heberger un site statique.

Important pour ce projet :

- GitHub Pages n'heberge pas un serveur Next.js complet
- donc il faut deployer une version statique du site
- avec Next.js, cela passe par `output: "export"`

En clair :

- si le site reste 100% statique, GitHub Pages est une bonne option gratuite
- si tu ajoutes plus tard des fonctions serveur, API routes, auth serveur ou contenu dynamique, GitHub Pages ne suffira plus

Documentation officielle :

- [Next.js Static Export](https://nextjs.org/docs/pages/guides/static-exports)
- [GitHub Pages](https://docs.github.com/pages)

## Etat actuel

Le projet peut etre adapte pour GitHub Pages, mais il n'est pas encore entierement configure pour ce deploiement.

Si tu veux, je peux faire la suite pour toi :

1. configurer Next.js pour l'export statique
2. ajouter le bon `basePath` si besoin
3. preparer le workflow GitHub Actions
4. te laisser un deploy automatique vers GitHub Pages

## Auteur

Projet realise pour Grenade Auto-Ecole.
