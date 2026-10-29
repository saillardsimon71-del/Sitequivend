# SiteQuiVend — AI video ads

Site statique bilingue, sans build. Le ZIP place `index.html` à sa racine et se déploie sur Netlify.

## Déploiement et modifications

- Décompresser `SiteQuiVend-Netlify.zip`, déposer son contenu sur Netlify, puis activer **Netlify Forms** après le premier déploiement. Le formulaire `creative-brief` utilise un honeypot et confirme l’envoi sur `merci.html`.
- Tarifs et textes : `index.html` + traductions dans `site.js`.
- Contact : rechercher `simon@sitequivend.fr` dans les fichiers HTML. Aucun paiement n’est actif. Après vérification d’un vrai lien Stripe, le renseigner dans `VERIFIED_STRIPE_CHECKOUT_URL` en haut de `site.js`.
- Portfolio : huit films de 13 à 21 s dans `assets/work/portfolio/`. Aperçus muets de 5 s, chargés uniquement à l'écran, avec pause globale et respect du mouvement réduit/économie de données. Lecture complète avec son dans une fenêtre au clic. Le showreel de 30 s reste accessible par un lien. Textes FR/EN et crédits dans `index.html` et `site.js`.

## À valider avant publication

Compléter l’identité juridique de l’éditeur dans `mentions-legales.html`. La page légale publique de [SiteQuiVend.com](https://sitequivend.com/pages/mentions-legales) cite Concas Corporate Company Ltd / Geoffrey Concas, à Bangkok, avec d’autres coordonnées. Le contact fourni pour cette version .fr étant `simon@sitequivend.fr`, ces informations n’ont pas été reprises sans confirmation.

`assets/hero-studio.jpg` est une image d’ambiance générée pour le site, pas une réalisation client. Le showreel utilise des photographies Pexels sous licence transformées par IA. Il est présenté comme une création illustrative du studio, sans commande client revendiquée.

Les films CAVAL, Pomponne et Atma sont des concepts indépendants non commandés par les marques. Les références produit ne sont pas présentées comme libres de droits. Les crédits musicaux CC BY 4.0 et les sources des bruitages CC0 sont accessibles dans le portfolio.
