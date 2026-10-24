# SiteQuiVend — AI video ads

Site statique bilingue, sans build. Le ZIP place `index.html` à sa racine et se déploie sur Netlify.

## Déploiement et modifications

- Décompresser `SiteQuiVend-Netlify.zip`, déposer son contenu sur Netlify, puis activer **Netlify Forms** après le premier déploiement. Le formulaire `creative-brief` utilise un honeypot et confirme l’envoi sur `merci.html`.
- Tarifs et textes : `index.html` + traductions dans `site.js`.
- Contact : rechercher `simon@sitequivend.fr` dans les fichiers HTML. Aucun paiement n’est actif. Après vérification d’un vrai lien Stripe, le renseigner dans `VERIFIED_STRIPE_CHECKOUT_URL` en haut de `site.js`.
- Vidéo : showreel studio de 30 s en 9:16 dans `assets/work/`, avec sa couverture WebP. Lecteur natif, lecture au clic, `preload="none"`, son et plein écran. Textes FR/EN dans `index.html` et `site.js`.

## À valider avant publication

Compléter l’identité juridique de l’éditeur dans `mentions-legales.html`. La page légale publique de [SiteQuiVend.com](https://sitequivend.com/pages/mentions-legales) cite Concas Corporate Company Ltd / Geoffrey Concas, à Bangkok, avec d’autres coordonnées. Le contact fourni pour cette version .fr étant `simon@sitequivend.fr`, ces informations n’ont pas été reprises sans confirmation.

`assets/hero-studio.jpg` est une image d’ambiance générée pour le site, pas une réalisation client. Le showreel utilise des photographies Pexels sous licence transformées par IA. Il est présenté comme une création illustrative du studio, sans commande client revendiquée.
