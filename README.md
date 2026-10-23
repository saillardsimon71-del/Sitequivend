# SiteQuiVend — AI video ads

Site statique bilingue, sans build. Le ZIP place `index.html` à sa racine et se déploie sur Netlify.

## Déploiement et modifications

- Décompresser `SiteQuiVend-Netlify.zip`, déposer son contenu sur Netlify, puis activer **Netlify Forms** après le premier déploiement. Le formulaire `creative-brief` utilise un honeypot et confirme l’envoi sur `merci.html`.
- Tarifs et textes : `index.html` + traductions dans `site.js`.
- Contact : rechercher `simon@sitequivend.fr` dans les fichiers HTML. Aucun paiement n’est actif. Après vérification d’un vrai lien Stripe, le renseigner dans `VERIFIED_STRIPE_CHECKOUT_URL` en haut de `site.js`.
- Vidéos : aucun MP4 n’est fourni. Ajouter les fichiers autorisés dans `assets/work/` (`sitequivend-26s.mp4`, `ai-ugc-demo.mp4`, `video-to-video-demo.mp4`), puis remplacer les trois emplacements de `index.html` par des `<video controls preload="none">`.

## À valider avant publication

Compléter l’identité juridique de l’éditeur dans `mentions-legales.html`. La page légale publique de [SiteQuiVend.com](https://sitequivend.com/pages/mentions-legales) cite Concas Corporate Company Ltd / Geoffrey Concas, à Bangkok, avec d’autres coordonnées. Le contact fourni pour cette version .fr étant `simon@sitequivend.fr`, ces informations n’ont pas été reprises sans confirmation.

`assets/hero-studio.jpg` est une image d’ambiance générée pour le site, pas une réalisation client. Aucun témoignage, résultat publicitaire, média stock ou paiement n’est inventé.
