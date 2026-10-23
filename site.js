(() => {
  'use strict';
  document.documentElement.classList.add('js-enabled');

  // Deliberately blank: expose checkout only after a real Stripe link is manually verified.
  const VERIFIED_STRIPE_CHECKOUT_URL = '';

  const translations = {
    fr: {
      pageTitle: 'AI UGC & Creative Video Ads for E-commerce | SiteQuiVend',
      pageDescription: 'Des publicités vidéo e-commerce prêtes à tester : AI UGC, films produit cinématiques et variations créatives, conçus par SiteQuiVend.',
      'legal.description': 'Mentions légales de SiteQuiVend : informations éditeur à confirmer, hébergement Netlify et médias intégrés.',
      'privacy.description': 'Politique de confidentialité SiteQuiVend : données du formulaire de contact, usages et droits.',
      'thanks.description': 'Votre demande a bien été transmise à SiteQuiVend.',
      skipLink: 'Aller au contenu',
      navigationLabel: 'Navigation principale',
      languageSwitchLabel: 'Passer en anglais',
      'menu.open': 'Ouvrir le menu',
      'menu.close': 'Fermer le menu',
      'nav.work': 'Réalisations',
      'nav.services': 'Services',
      'nav.process': 'Méthode',
      'nav.offers': 'Offres',
      'nav.cta': 'Parlons de votre projet <span aria-hidden="true">↗</span>',
      'hero.eyebrow': 'STUDIO CRÉATIF · VIDÉO E-COMMERCE',
      'hero.lead': 'Des publicités vidéo originales, pensées pour les marques e-commerce — sans tournage traditionnel. À partir de votre fiche produit, de vos photos ou de vos vidéos.',
      'hero.primary': 'Recevoir mes 3 premières pubs',
      'hero.secondary': 'Voir les réalisations',
      'hero.footnote': 'Direction créative humaine · production assistée par IA',
      'hero.sideLabel': 'CRÉATION · PAS PROMESSE',
      'hero.specOne': 'formats courts',
      'hero.specTwo': 'vertical ready',
      'hero.imageCaption': 'Visuel d’ambiance · pas une réalisation client',
      'work.eyebrow': 'RÉALISATIONS',
      'work.title': 'Du travail réel.<br><span class="heading-serif">Rien d’inventé.</span>',
      'work.intro': 'Les vidéos sont prêtes à recevoir leurs vrais fichiers. Aucun MP4 vérifiable n’était présent dans ce dépôt : aucun projet n’est simulé ici.',
      'work.status': 'EMPLACEMENTS PRÊTS · MÉDIAS À AJOUTER',
      'work.slot': 'MP4 À INTÉGRER',
      'work.card1Alt': 'Emplacement réservé à la vidéo vitrine SiteQuiVend de 26 secondes ; le fichier MP4 n’est pas inclus dans le ZIP.',
      'work.card1Category': 'VITRINE DE MARQUE · 26 S',
      'work.card1Title': 'SiteQuiVend — brand film',
      'work.card1Text': 'Réalisation signalée par l’équipe. Le fichier vidéo source n’était pas accessible dans les éléments fournis.',
      'work.card2Alt': 'Emplacement de démonstration AI UGC, vidéo source à ajouter après vérification.',
      'work.card2Category': 'DÉMONSTRATION · PERSONNAGE SYNTHÉTIQUE',
      'work.card2Title': 'AI UGC ad',
      'work.card2Text': 'Une démonstration studio pourra être intégrée dès que son fichier et ses droits d’usage auront été vérifiés.',
      'work.card3Alt': 'Emplacement réservé à une démonstration video-to-video avec morph zoom ; aucun extrait n’est fourni.',
      'work.card3Category': 'TRANSFORMATION CRÉATIVE · MORPH ZOOM',
      'work.card3Title': 'Video-to-video',
      'work.card3Text': 'L’emplacement est prévu pour une transformation validée, sans présenter un aperçu artificiel comme une réalisation.',
      'work.note': 'Ces visuels sont des repères d’intégration, pas des publicités finies. Ajoutez uniquement des médias réels et validés avant publication.',
      'work.link': 'Parler d’un premier concept',
      'services.eyebrow': 'SERVICES',
      'services.title': 'Plus que de l’IA.<br><span class="heading-serif">Des pubs prêtes à tester.</span>',
      'services.intro': 'La technologie sert l’idée. Chaque format est pensé comme un actif publicitaire : accroche, produit, montage, sous-titres et plateforme.',
      'services.ugcTitle': 'AI UGC Ads',
      'services.ugcText': 'Des personnages synthétiques présentent le produit en face caméra, en démonstration ou en storytelling. Le script reste fidèle aux informations que vous validez.',
      'services.ugcTag1': 'Personnages IA',
      'services.ugcTag2': 'Hooks',
      'services.ugcTag3': 'Démo produit',
      'services.cinematicTitle': 'Cinematic Product Ads',
      'services.cinematicText': 'La lumière, le mouvement et le sound design révèlent les détails du produit à partir de vos photos, vidéos ou visuels de référence.',
      'services.cinematicTag1': 'Direction lumière',
      'services.cinematicTag2': 'Détails produit',
      'services.cinematicTag3': 'Sound design',
      'services.transformTitle': 'Creative Video Transformations',
      'services.transformText': 'Des transformations video-to-video, transitions seamless morph zoom, loops ou changements de scène — selon les fichiers source et l’effet recherché.',
      'services.transformTag': 'Transitions',
      'services.variationTitle': 'Ad Variations &amp; Creative Testing',
      'services.variationText': 'Déclinez les accroches, angles, CTA et rythmes pour tester des créations sur TikTok, Instagram Reels et Meta Ads. Aucune performance n’est promise.',
      'process.eyebrow': 'MÉTHODE',
      'process.title': 'Un brief clair.<br><span class="heading-serif">Une création cadrée.</span>',
      'process.intro': 'Vous transmettez le produit, les visuels et le contexte. Nous construisons les angles, produisons les vidéos puis validons les livrables avec vous.',
      'process.note': 'Ce n’est pas un pipeline automatisé en un clic : chaque concept et chaque version sont suivis par une direction créative humaine.',
      'process.step1Title': 'Product URL / assets',
      'process.step1Text': 'Partagez une fiche Shopify, des photos ou des vidéos, avec les informations produit à respecter.',
      'process.step2Title': 'Creative concepts',
      'process.step2Text': 'Nous définissons des angles et des hooks distincts, en fonction de la marque et de l’objectif de test.',
      'process.step3Title': 'AI production',
      'process.step3Text': 'Production assistée par IA, montage, sous-titres et sound design, avec vérification humaine.',
      'process.step4Title': 'Ready-to-test ads',
      'process.step4Text': 'Recevez les fichiers finaux en 9:16, prêts à être testés sur vos plateformes publicitaires.',
      'offers.eyebrow': 'OFFRES',
      'offers.title': 'Un premier test clair.<br><span class="heading-serif">Sans promesse gonflée.</span>',
      'offers.intro': 'Testez trois directions créatives différentes avant de décider de la suite.',
      'offers.starterTag': 'POUR UN PREMIER TEST',
      'offers.starterTitle': 'Starter Creative Test',
      'offers.oneTime': 'pour un test créatif',
      'offers.starterDesc': 'Un pack de création publicitaire, hors budget média et achat d’espace.',
      'offers.feature1': '3 vidéos de 15 à 25 secondes',
      'offers.feature2': '3 angles créatifs différents',
      'offers.feature3': 'Format vertical 9:16',
      'offers.feature4': 'Sous-titres et sound design',
      'offers.feature5': 'Une révision par vidéo',
      'offers.starterCta': 'Demander mon test créatif',
      'offers.payWithStripe': 'Payer par carte via Stripe',
      'offers.customTag': 'POUR UN BESOIN RÉCURRENT',
      'offers.customTitle': 'Creative Packs',
      'offers.customPrice': 'Sur devis',
      'offers.customPriceNote': 'selon le volume et le rythme',
      'offers.customDesc': 'Variations d’accroches, déclinaisons de concepts et production régulière, cadrées selon vos besoins.',
      'offers.customFeature1': 'Variations de hooks et de CTA',
      'offers.customFeature2': 'Déclinaisons de concepts',
      'offers.customFeature3': 'Calendrier de production défini ensemble',
      'offers.customFeature4': 'Devis adapté au périmètre validé',
      'offers.customCta': 'Demander un devis personnalisé',
      'offers.paymentNote': 'Le formulaire ouvre une demande de projet. Aucun paiement en ligne n’est activé sans lien de paiement réel et vérifié.',
      'faq.eyebrow': 'AVANT DE LANCER',
      'faq.title': 'Good creative.<br><span class="heading-serif">Clear expectations.</span>',
      'faq.intro': 'Quelques réponses pour savoir exactement ce qui est — et ce qui n’est pas — inclus.',
      'faq.q1': 'De quoi avez-vous besoin pour démarrer ?<span aria-hidden="true">+</span>',
      'faq.a1': 'Une URL produit ou des photos/vidéos, les faits produit validés, votre identité de marque si disponible et l’objectif de campagne. Le brief est confirmé avant la production.',
      'faq.q2': 'Les personnages AI UGC sont-ils de vrais clients ?<span aria-hidden="true">+</span>',
      'faq.a2': 'Non. Ce sont des personnages synthétiques. Ils ne sont pas présentés comme des clients réels et aucun témoignage n’est inventé. Les contenus sont identifiés comme générés par IA lorsque c’est pertinent ou requis.',
      'faq.q3': 'Garantissez-vous les performances publicitaires ?<span aria-hidden="true">+</span>',
      'faq.a3': 'Non. Nous livrons des créations prêtes à tester ; les résultats dépendent aussi de l’offre, de l’audience, du paramétrage et du budget média.',
      'faq.q4': 'Qu’en est-il des droits d’utilisation ?<span aria-hidden="true">+</span>',
      'faq.a4': 'Les livrables, les droits d’usage et les éventuels éléments sous licence sont précisés dans le devis ou les conditions validées avant le démarrage.',
      'contact.eyebrow': 'BRIEF & CONTACT',
      'contact.title': 'Donnons à votre produit<br><span class="heading-serif">une place dans le feed.</span>',
      'contact.intro': 'Parlez-nous de votre produit, de vos plateformes et de ce que vous aimeriez tester. Nous vous répondrons avec la prochaine étape adaptée.',
      'contact.emailLabel': 'Une question rapide ?',
      'contact.small': 'Pas de paiement caché ni de génération automatique en un clic : un échange, un brief cadré, puis une proposition claire.',
      'form.title': 'Parlons de votre brief.',
      'form.name': 'Nom',
      'form.namePlaceholder': 'Votre nom',
      'form.email': 'E-mail professionnel',
      'form.emailPlaceholder': 'vous@marque.com',
      'form.company': 'Marque / société',
      'form.companyPlaceholder': 'Nom de la marque',
      'form.productUrl': 'URL produit / boutique',
      'form.optional': 'facultatif',
      'form.productUrlPlaceholder': 'https://votreboutique.com/produit',
      'form.platform': 'Plateforme publicitaire',
      'form.platformPlaceholder': 'Sélectionner',
      'form.platformTikTok': 'TikTok / TikTok Shop',
      'form.platformReels': 'Instagram Reels',
      'form.platformMeta': 'Meta Ads (Facebook / Instagram)',
      'form.platformMulti': 'Plusieurs plateformes',
      'form.platformUnsure': 'Je ne sais pas encore',
      'form.budget': 'Budget indicatif',
      'form.budgetPlaceholder': 'Sélectionner une fourchette',
      'form.budgetStarter': '299 € — Starter Creative Test',
      'form.budgetRange1': '300–750 €',
      'form.budgetRange2': '751–1 500 €',
      'form.budgetRange3': 'Plus de 1 500 €',
      'form.budgetUnsure': 'Je ne sais pas encore',
      'form.project': 'Décrivez votre projet',
      'form.projectPlaceholder': 'Produit, audience, objectif, références, vidéos déjà disponibles…',
      'form.privacyBefore': 'Vos informations servent uniquement à répondre à votre demande. Consultez notre',
      'form.privacyLink': 'politique de confidentialité',
      'form.submit': 'Envoyer le brief',
      'form.required': '* Champs obligatoires',
      'form.sending': 'Envoi du brief…',
      'form.honeypot': 'Ignorer l’envoi automatisé.',
      'footer.tagline': 'Des publicités vidéo faites pour les produits réels, les marques ambitieuses et les prochains tests créatifs.',
      'footer.top': 'Retour en haut',
      'footer.legal': 'Mentions légales',
      'footer.privacy': 'Confidentialité',
      'footer.credit': 'Des créations, pas des promesses de performance.',
      'legal.title': 'Mentions légales | SiteQuiVend',
      'legal.eyebrow': 'INFORMATIONS DU SITE',
      'legal.heading': 'Mentions légales',
      'legal.lead': 'Informations relatives à l’éditeur de ce site, à son hébergement et à ses contenus.',
      'legal.alertTitle': 'Informations éditeur à confirmer avant publication',
      'legal.alertText': 'L’identité juridique de l’éditeur de cette nouvelle version .fr n’a pas été confirmée. Le nom ou la raison sociale, la forme juridique, l’adresse professionnelle, le téléphone et les identifiants d’immatriculation applicables doivent être renseignés avant la mise en ligne. Ces données ne sont pas inventées. Contact opérationnel fourni : simon@sitequivend.fr. Les mentions publiées sur SiteQuiVend.com ne sont pas transposées ici sans confirmation qu’elles s’appliquent à ce service.',
      'legal.editorTitle': 'Éditeur du site',
      'legal.editorText': 'SiteQuiVend est le nom de marque utilisé pour cette activité de création de publicités vidéo pour l’e-commerce. Les coordonnées d’édition et l’identité juridique de l’entité responsable de cette version du site restent à confirmer avant publication.',
      'legal.contactText': 'Contact pour le site et les demandes :',
      'legal.hostTitle': 'Hébergement',
      'legal.hostText': 'Hébergement et traitement du formulaire prévus sur Netlify : Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, États-Unis. Contact publié par l’hébergeur :',
      'legal.hostLink': 'Conditions d’utilisation de Netlify',
      'legal.ipTitle': 'Propriété intellectuelle et médias',
      'legal.ipText': 'Les textes et éléments graphiques créés pour ce site appartiennent à leurs auteurs respectifs, sous réserve des droits applicables. Le visuel d’ambiance du hero a été généré pour ce site et ne représente ni un produit client ni une publicité livrée. Aucun média stock tiers ni témoignage client n’est intégré à cette version. Tout média ajouté ensuite doit être vérifié : origine, licence, droit à l’image, autorisation des voix et droits d’usage publicitaire.',
      'legal.dataTitle': 'Données personnelles',
      'legal.dataText': 'Les données envoyées via le formulaire servent à répondre à votre demande et à préparer une proposition. Aucun pixel publicitaire ni outil d’analytics n’est intégré dans cette version. Consultez la politique de confidentialité pour les détails.',
      'legal.dataLink': 'Lire la politique de confidentialité',
      'legal.updated': 'Dernière mise à jour : 23 octobre 2026.',
      'privacy.title': 'Politique de confidentialité | SiteQuiVend',
      'privacy.eyebrow': 'DONNÉES PERSONNELLES',
      'privacy.heading': 'Politique de confidentialité',
      'privacy.lead': 'Cette page explique comment les informations transmises via le formulaire de SiteQuiVend sont utilisées.',
      'privacy.collectTitle': 'Données collectées',
      'privacy.collectText': 'Le formulaire recueille votre nom, votre adresse e-mail, votre marque ou société, l’URL produit si vous la fournissez, la plateforme publicitaire envisagée, une fourchette de budget et la description de votre projet. Ne transmettez pas de données personnelles sensibles ni d’informations confidentielles qui ne sont pas nécessaires au premier échange.',
      'privacy.useTitle': 'Finalité et base de traitement',
      'privacy.useText': 'Ces informations sont utilisées pour lire et qualifier votre demande, vous répondre, préparer un brief ou un devis et assurer le suivi de l’échange. Le traitement est limité à la demande de contact et aux démarches précontractuelles que vous initiez. Aucune newsletter n’est envoyée à partir de ce formulaire.',
      'privacy.processorsTitle': 'Prestataires et hébergement',
      'privacy.processorsText': 'Le site et le formulaire sont prévus pour Netlify Forms, un service technique de Netlify, Inc. Les informations soumises sont transmises à Netlify pour permettre la réception et la gestion du message par SiteQuiVend. Netlify peut traiter les données depuis ses infrastructures et celles de ses prestataires, y compris hors de l’Espace économique européen. Consultez la politique de confidentialité de Netlify pour ses conditions et garanties. Aucun autre outil publicitaire, outil d’analytics, service de paiement ou police distante n’est intégré dans cette livraison.',
      'privacy.retentionTitle': 'Durée de conservation',
      'privacy.retentionText': 'Les données sont conservées le temps de répondre à votre demande et de gérer l’échange commercial qui s’ensuit, puis supprimées ou archivées uniquement si une obligation légale ou la défense de droits l’exige. Elles ne sont pas utilisées pour une prospection sans rapport avec votre demande.',
      'privacy.rightsTitle': 'Vos droits',
      'privacy.rightsText': 'Selon la législation applicable, vous pouvez demander l’accès, la rectification, l’effacement ou la limitation du traitement de vos informations, et vous opposer au traitement dans les cas prévus. Pour exercer vos droits, écrire à simon@sitequivend.fr en précisant votre demande. Vous pouvez également adresser une réclamation à l’autorité de protection des données compétente, notamment la CNIL en France.',
      'privacy.cookiesTitle': 'Cookies et mesure d’audience',
      'privacy.cookiesText': 'Cette version du site n’utilise aucun cookie publicitaire ou outil de mesure d’audience. Elle ne charge pas de police externe et ne contient pas de pixel marketing. Le choix FR/EN peut être mémorisé dans le stockage local de votre navigateur (sqv-language), sans suivi de navigation. Les données techniques éventuellement nécessaires au fonctionnement et à la sécurité de l’hébergement relèvent de Netlify et de ses propres conditions. Si des outils de mesure ou de publicité sont ajoutés ultérieurement, cette politique devra être mise à jour avant leur activation.',
      'privacy.contactTitle': 'Contact',
      'privacy.contactText': 'Pour toute question concernant les données transmises via ce site :',
      'privacy.updated': 'Dernière mise à jour : 23 octobre 2026.',
      'thanks.title': 'Demande envoyée | SiteQuiVend',
      'thanks.eyebrow': 'BRIEF TRANSMIS',
      'thanks.heading': 'Votre demande<br><span class="heading-serif">est bien transmise.</span>',
      'thanks.text': 'Merci pour votre brief. L’équipe SiteQuiVend pourra l’examiner et vous répondre à l’adresse indiquée. Si des photos ou des vidéos sont nécessaires, nous vous préciserons la meilleure façon de les partager.',
      'thanks.home': 'Retourner au site',
      'thanks.email': 'Écrire un e-mail'
    },
    en: {
      pageTitle: 'AI UGC & Creative Video Ads for E-commerce | SiteQuiVend',
      pageDescription: 'E-commerce video ads built to test: AI UGC, cinematic product films and creative variations, made by SiteQuiVend.',
      'legal.description': 'SiteQuiVend legal notice: publisher details to confirm, Netlify hosting and media information.',
      'privacy.description': 'SiteQuiVend privacy notice: contact form data, how it is used and your rights.',
      'thanks.description': 'Your enquiry has been sent to SiteQuiVend.',
      skipLink: 'Skip to content',
      navigationLabel: 'Main navigation',
      languageSwitchLabel: 'Passer en français',
      'menu.open': 'Open menu',
      'menu.close': 'Close menu',
      'nav.work': 'Work',
      'nav.services': 'Services',
      'nav.process': 'Process',
      'nav.offers': 'Pricing',
      'nav.cta': 'Let’s talk about your project <span aria-hidden="true">↗</span>',
      'hero.eyebrow': 'CREATIVE STUDIO · E-COMMERCE VIDEO',
      'hero.lead': 'Original short-form video ads for e-commerce brands — without a traditional shoot. Built from your product page, photos or footage.',
      'hero.primary': 'Get Your First 3 Ads',
      'hero.secondary': 'View Our Work',
      'hero.footnote': 'Human creative direction · AI-assisted production',
      'hero.sideLabel': 'CREATIVE · NOT A CLAIM',
      'hero.specOne': 'short-form ads',
      'hero.specTwo': 'vertical ready',
      'hero.imageCaption': 'Art direction image · not client work',
      'work.eyebrow': 'SELECTED WORK',
      'work.title': 'Real work.<br><span class="heading-serif">Nothing made up.</span>',
      'work.intro': 'The reel slots are ready for verified studio footage. No accessible MP4 was included in this repository, so no project is being simulated.',
      'work.status': 'REEL SLOTS READY · MEDIA TO ADD',
      'work.slot': 'ADD MP4',
      'work.card1Alt': 'Reserved slot for the 26-second SiteQuiVend brand film; the MP4 is not included in this ZIP.',
      'work.card1Category': 'BRAND FILM · 26 SEC',
      'work.card1Title': 'SiteQuiVend — brand film',
      'work.card1Text': 'A real studio piece identified by the team. Its source video was not accessible in the supplied files.',
      'work.card2Alt': 'AI UGC demo slot; add the source video after verification.',
      'work.card2Category': 'DEMO · SYNTHETIC CHARACTER',
      'work.card2Title': 'AI UGC ad',
      'work.card2Text': 'A studio demo can be added once its file and usage rights have been verified.',
      'work.card3Alt': 'Reserved slot for a video-to-video morph zoom demo; no footage was supplied.',
      'work.card3Category': 'CREATIVE TRANSFORMATION · MORPH ZOOM',
      'work.card3Title': 'Video-to-video',
      'work.card3Text': 'A verified transformation can be added here without presenting an artificial preview as a finished project.',
      'work.note': 'These graphics are integration placeholders, not finished ads. Add only real, verified media before launch.',
      'work.link': 'Talk through a first concept',
      'services.eyebrow': 'SERVICES',
      'services.title': 'More than AI.<br><span class="heading-serif">Ads made to be tested.</span>',
      'services.intro': 'Technology serves the idea. Each format is treated as an ad asset: hook, product, edit, captions and placement.',
      'services.ugcTitle': 'AI UGC Ads',
      'services.ugcText': 'Synthetic characters present the product on camera, in a demonstration or a story-led format. Scripts stay grounded in the product facts you approve.',
      'services.ugcTag1': 'AI characters',
      'services.ugcTag2': 'Hooks',
      'services.ugcTag3': 'Product demo',
      'services.cinematicTitle': 'Cinematic Product Ads',
      'services.cinematicText': 'Use lighting, movement and sound design to bring out product details from your photos, video or visual references.',
      'services.cinematicTag1': 'Lighting direction',
      'services.cinematicTag2': 'Product detail',
      'services.cinematicTag3': 'Sound design',
      'services.transformTitle': 'Creative Video Transformations',
      'services.transformText': 'Video-to-video treatments, seamless morph zoom transitions, loops and scene changes — shaped around the source footage and intended effect.',
      'services.transformTag': 'Transitions',
      'services.variationTitle': 'Ad Variations &amp; Creative Testing',
      'services.variationText': 'Vary hooks, angles, CTAs and pacing for creative tests across TikTok, Instagram Reels and Meta Ads. No performance outcome is promised.',
      'process.eyebrow': 'HOW IT WORKS',
      'process.title': 'A clear brief.<br><span class="heading-serif">A considered process.</span>',
      'process.intro': 'You share the product, visuals and context. We shape the angles, produce the videos and review the deliverables with you.',
      'process.note': 'This is not a one-click automated pipeline: a human creative lead guides every concept and version.',
      'process.step1Title': 'Product URL / assets',
      'process.step1Text': 'Share a Shopify listing, product photos or footage, plus the approved product facts we need to respect.',
      'process.step2Title': 'Creative concepts',
      'process.step2Text': 'We shape distinct angles and hooks around your brand and the question you want to test.',
      'process.step3Title': 'AI production',
      'process.step3Text': 'AI-assisted production, editing, captions and sound design, with human review.',
      'process.step4Title': 'Ready-to-test ads',
      'process.step4Text': 'Receive the final 9:16 files, ready to test on your chosen ad platforms.',
      'offers.eyebrow': 'OFFERS',
      'offers.title': 'A clear first test.<br><span class="heading-serif">No inflated promises.</span>',
      'offers.intro': 'Test three distinct creative directions before deciding what comes next.',
      'offers.starterTag': 'A FIRST CREATIVE TEST',
      'offers.starterTitle': 'Starter Creative Test',
      'offers.oneTime': 'for one creative test',
      'offers.starterDesc': 'A creative production package, excluding media spend and media buying.',
      'offers.feature1': '3 videos, 15–25 seconds each',
      'offers.feature2': '3 different creative angles',
      'offers.feature3': 'Vertical 9:16 format',
      'offers.feature4': 'Captions and sound design',
      'offers.feature5': 'One revision per video',
      'offers.starterCta': 'Request my creative test',
      'offers.payWithStripe': 'Pay securely by card with Stripe',
      'offers.customTag': 'FOR ONGOING NEEDS',
      'offers.customTitle': 'Creative Packs',
      'offers.customPrice': 'Custom quote',
      'offers.customPriceNote': 'based on volume and cadence',
      'offers.customDesc': 'Hook variations, concept extensions and regular production, scoped to your needs.',
      'offers.customFeature1': 'Hook and CTA variations',
      'offers.customFeature2': 'Concept extensions',
      'offers.customFeature3': 'Production cadence agreed together',
      'offers.customFeature4': 'Quote based on an approved scope',
      'offers.customCta': 'Request a custom quote',
      'offers.paymentNote': 'The form starts a project enquiry. No online payment is enabled without a real, verified payment link.',
      'faq.eyebrow': 'BEFORE WE START',
      'faq.title': 'Good creative.<br><span class="heading-serif">Clear expectations.</span>',
      'faq.intro': 'A few answers so you know exactly what is — and is not — included.',
      'faq.q1': 'What do you need to get started?<span aria-hidden="true">+</span>',
      'faq.a1': 'A product URL or product photos/video, approved product facts, brand guidelines if available and your campaign goal. We confirm the brief before production.',
      'faq.q2': 'Are AI UGC characters real customers?<span aria-hidden="true">+</span>',
      'faq.a2': 'No. They are synthetic characters. We do not present them as real customers or invent testimonials. Content is identified as AI-generated where appropriate or required.',
      'faq.q3': 'Do you guarantee ad performance?<span aria-hidden="true">+</span>',
      'faq.a3': 'No. We deliver creative assets ready to test; results also depend on the offer, audience, campaign setup and media spend.',
      'faq.q4': 'What about usage rights?<span aria-hidden="true">+</span>',
      'faq.a4': 'Deliverables, usage rights and any licensed elements are described in the quote or terms approved before work begins.',
      'contact.eyebrow': 'PROJECT BRIEF & CONTACT',
      'contact.title': 'Give your product<br><span class="heading-serif">a place in the feed.</span>',
      'contact.intro': 'Tell us what you sell, where you want to advertise and what you would like to test. We’ll reply with a clear next step.',
      'contact.emailLabel': 'A quick question?',
      'contact.small': 'No hidden checkout or one-click generator: a conversation, a scoped brief and a clear proposal.',
      'form.title': 'Tell us about your brief.',
      'form.name': 'Name',
      'form.namePlaceholder': 'Your name',
      'form.email': 'Work email',
      'form.emailPlaceholder': 'you@brand.com',
      'form.company': 'Brand / company',
      'form.companyPlaceholder': 'Brand name',
      'form.productUrl': 'Product / store URL',
      'form.optional': 'optional',
      'form.productUrlPlaceholder': 'https://yourstore.com/product',
      'form.platform': 'Ad platform',
      'form.platformPlaceholder': 'Choose one',
      'form.platformTikTok': 'TikTok / TikTok Shop',
      'form.platformReels': 'Instagram Reels',
      'form.platformMeta': 'Meta Ads (Facebook / Instagram)',
      'form.platformMulti': 'Multiple platforms',
      'form.platformUnsure': 'Not sure yet',
      'form.budget': 'Indicative budget',
      'form.budgetPlaceholder': 'Choose a range',
      'form.budgetStarter': '€299 — Starter Creative Test',
      'form.budgetRange1': '€300–€750',
      'form.budgetRange2': '€751–€1,500',
      'form.budgetRange3': 'More than €1,500',
      'form.budgetUnsure': 'Not sure yet',
      'form.project': 'Tell us about your project',
      'form.projectPlaceholder': 'Product, audience, objective, references, existing footage…',
      'form.privacyBefore': 'Your details are used only to reply to this enquiry. Read our',
      'form.privacyLink': 'privacy notice',
      'form.submit': 'Send project brief',
      'form.required': '* Required fields',
      'form.sending': 'Sending your brief…',
      'form.honeypot': 'Ignore automated submission.',
      'footer.tagline': 'Video ads for real products, ambitious brands and the next round of creative tests.',
      'footer.top': 'Back to top',
      'footer.legal': 'Legal notice',
      'footer.privacy': 'Privacy',
      'footer.credit': 'Creative assets, not performance promises.',
      'legal.title': 'Legal Notice | SiteQuiVend',
      'legal.eyebrow': 'SITE INFORMATION',
      'legal.heading': 'Legal notice',
      'legal.lead': 'Information about this website’s publisher, hosting and content.',
      'legal.alertTitle': 'Publisher details must be confirmed before launch',
      'legal.alertText': 'The legal identity of the publisher for this new .fr version has not been confirmed. Add the name or legal entity, legal form, business address, telephone number and any applicable registration identifiers before publication. These details are not invented here. Project contact provided: simon@sitequivend.fr. Information published on SiteQuiVend.com is not carried over unless it is confirmed to apply to this service.',
      'legal.editorTitle': 'Website publisher',
      'legal.editorText': 'SiteQuiVend is the brand name used for this e-commerce video advertising service. The publishing details and legal identity of the entity responsible for this version of the website must be confirmed before publication.',
      'legal.contactText': 'Website and project enquiries:',
      'legal.hostTitle': 'Hosting',
      'legal.hostText': 'Hosting and form processing are intended to run on Netlify: Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, United States. Contact published by the host:',
      'legal.hostLink': 'Netlify Terms of Use',
      'legal.ipTitle': 'Intellectual property and media',
      'legal.ipText': 'Texts and graphic elements created for this website remain with their respective authors, subject to applicable rights. The hero art-direction image was generated for this website and is not a client product or a delivered advertisement. No third-party stock media or customer testimonial is included in this version. Any media added later must be checked for provenance, licence, image rights, voice consent and advertising usage rights.',
      'legal.dataTitle': 'Personal data',
      'legal.dataText': 'Information submitted through the form is used to respond to your enquiry and prepare a proposal. This version includes no advertising pixels or analytics tools. See the privacy notice for details.',
      'legal.dataLink': 'Read the privacy notice',
      'legal.updated': 'Last updated: 23 October 2026.',
      'privacy.title': 'Privacy Notice | SiteQuiVend',
      'privacy.eyebrow': 'PERSONAL DATA',
      'privacy.heading': 'Privacy notice',
      'privacy.lead': 'This page explains how information submitted through the SiteQuiVend contact form is used.',
      'privacy.collectTitle': 'Information collected',
      'privacy.collectText': 'The form collects your name, email address, brand or company, product URL if provided, intended advertising platform, indicative budget range and project description. Do not send sensitive personal data or confidential information that is not needed for an initial discussion.',
      'privacy.useTitle': 'Purpose and legal basis',
      'privacy.useText': 'This information is used to review and qualify your enquiry, reply, prepare a brief or quote and follow up on the conversation. Processing is limited to the contact request and pre-contractual steps you initiate. This form is not used to subscribe you to a newsletter.',
      'privacy.processorsTitle': 'Service providers and hosting',
      'privacy.processorsText': 'The website and form are intended to use Netlify Forms, a technical service provided by Netlify, Inc. Submitted information is sent to Netlify so SiteQuiVend can receive and manage your message. Netlify may process data through its infrastructure and service providers, including outside the European Economic Area. Refer to Netlify’s privacy policy for its terms and safeguards. This delivery includes no other advertising, analytics, payment or remote-font service.',
      'privacy.retentionTitle': 'Retention',
      'privacy.retentionText': 'Information is kept for as long as needed to answer your enquiry and manage the resulting business conversation, then deleted or archived only where a legal obligation or the defence of legal claims requires it. It is not used for unrelated prospecting.',
      'privacy.rightsTitle': 'Your rights',
      'privacy.rightsText': 'Depending on applicable law, you may request access, correction, erasure or restriction of your information and object to processing where the law allows. To exercise your rights, email simon@sitequivend.fr and describe your request. You may also complain to the competent data protection authority, including the CNIL in France.',
      'privacy.cookiesTitle': 'Cookies and analytics',
      'privacy.cookiesText': 'This version of the website does not use advertising cookies or analytics tools. It does not load remote fonts or marketing pixels. Your FR/EN language preference may be saved in your browser’s local storage (sqv-language), without tracking your browsing. Any technical data needed to operate and secure the hosting is subject to Netlify’s own terms. If analytics or advertising tools are added later, this notice must be updated before they are activated.',
      'privacy.contactTitle': 'Contact',
      'privacy.contactText': 'For questions about information sent through this website:',
      'privacy.updated': 'Last updated: 23 October 2026.',
      'thanks.title': 'Enquiry sent | SiteQuiVend',
      'thanks.eyebrow': 'BRIEF RECEIVED',
      'thanks.heading': 'Your enquiry<br><span class="heading-serif">is on its way.</span>',
      'thanks.text': 'Thanks for sharing your brief. The SiteQuiVend team can review it and reply to the email address you provided. If we need product photos or footage, we’ll let you know how best to share them.',
      'thanks.home': 'Back to the website',
      'thanks.email': 'Send an email'
    }
  };

  const html = document.documentElement;
  const localeQuery = new URLSearchParams(window.location.search).get('lang');
  const localeStored = (() => {
    try { return localStorage.getItem('sqv-language'); } catch (_) { return null; }
  })();
  let locale = (localeQuery === 'en' || localeQuery === 'fr') ? localeQuery : (localeStored === 'en' ? 'en' : 'fr');

  function setMeta(selector, content) {
    const element = document.querySelector(selector);
    if (element && content) element.setAttribute('content', content);
  }

  function applyLocale(nextLocale, updateUrl = false) {
    locale = nextLocale === 'en' ? 'en' : 'fr';
    const dictionary = translations[locale];
    html.lang = locale;
    html.dataset.lang = locale;
    const pageName = document.body ? document.body.dataset.page : 'home';
    const pageTitle = dictionary[`${pageName}.title`] || dictionary.pageTitle;
    const pageDescription = dictionary[`${pageName}.description`] || dictionary.pageDescription;
    document.title = pageTitle;
    setMeta('meta[name="description"]', pageDescription);
    setMeta('meta[property="og:description"]', pageDescription);
    setMeta('meta[property="og:title"]', pageTitle);
    setMeta('meta[property="og:locale"]', locale === 'fr' ? 'fr_FR' : 'en_US');

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) element.innerHTML = dictionary[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) element.setAttribute('placeholder', dictionary[key]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const key = element.dataset.i18nAria;
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) element.setAttribute('aria-label', dictionary[key]);
    });
    document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
      element.dataset.i18nAttr.split(',').forEach((pair) => {
        const [attribute, key] = pair.trim().split(':');
        if (attribute && key && Object.prototype.hasOwnProperty.call(dictionary, key)) {
          element.setAttribute(attribute, dictionary[key]);
        }
      });
    });
    document.querySelectorAll('[data-language-next]').forEach((element) => {
      element.textContent = locale === 'fr' ? 'EN' : 'FR';
    });
    const languageSwitch = document.querySelector('[data-language-toggle]');
    if (languageSwitch) languageSwitch.setAttribute('aria-label', dictionary.languageSwitchLabel);
    const menuToggle = document.querySelector('[data-menu-toggle]');
    if (menuToggle) menuToggle.setAttribute('aria-label', menuToggle.getAttribute('aria-expanded') === 'true' ? dictionary['menu.close'] : dictionary['menu.open']);

    try { localStorage.setItem('sqv-language', locale); } catch (_) { /* optional preference */ }
    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', locale);
      window.history.replaceState({}, '', url);
    }
  }

  applyLocale(locale);

  const stripeCheckout = document.querySelector('[data-stripe-checkout]');
  if (stripeCheckout && VERIFIED_STRIPE_CHECKOUT_URL) {
    try {
      const checkoutUrl = new URL(VERIFIED_STRIPE_CHECKOUT_URL);
      const isStripeDomain = ['buy.stripe.com', 'checkout.stripe.com'].includes(checkoutUrl.hostname);
      if (checkoutUrl.protocol === 'https:' && isStripeDomain && checkoutUrl.pathname.length > 1) {
        stripeCheckout.href = checkoutUrl.href;
        stripeCheckout.hidden = false;
      }
    } catch (_) {
      // Invalid or unverified links remain hidden; enquiry flow stays available.
    }
  }

  document.querySelectorAll('[data-language-toggle]').forEach((button) => {
    button.addEventListener('click', () => applyLocale(locale === 'fr' ? 'en' : 'fr', true));
  });

  const menuToggle = document.querySelector('[data-menu-toggle]');
  const navigation = document.querySelector('#primary-navigation');
  if (menuToggle && navigation) {
    const closeMenu = () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
      menuToggle.setAttribute('aria-label', translations[locale]['menu.open']);
    };
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      navigation.classList.toggle('is-open', !isOpen);
      menuToggle.setAttribute('aria-label', translations[locale][isOpen ? 'menu.open' : 'menu.close']);
    });
    navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', (event) => {
      if (navigation.classList.contains('is-open') && !navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
  }

  const briefForm = document.querySelector('form[name="creative-brief"]');
  if (briefForm) {
    const offerInput = briefForm.querySelector('[name="selected-offer"]');
    const budgetSelect = briefForm.querySelector('[name="budget"]');
    const submitButton = briefForm.querySelector('button[type="submit"]');
    const status = briefForm.querySelector('[data-form-status]');

    document.querySelectorAll('[data-offer]').forEach((link) => {
      link.addEventListener('click', () => {
        const offer = link.dataset.offer;
        if (offerInput) offerInput.value = offer === 'starter' ? 'Starter Creative Test — 299 EUR' : 'Creative Packs — custom quote';
        if (budgetSelect) budgetSelect.value = offer === 'starter' ? '299 EUR - Starter Creative Test' : 'Not sure yet';
      });
    });

    briefForm.addEventListener('submit', (event) => {
      const honeypot = briefForm.querySelector('[name="bot-field"]');
      if (honeypot && honeypot.value.trim() !== '') {
        event.preventDefault();
        window.location.assign(briefForm.getAttribute('action') || '/merci.html');
        return;
      }
      if (status) status.textContent = translations[locale]['form.sending'];
      if (submitButton) {
        submitButton.disabled = true;
        const label = submitButton.querySelector('[data-i18n="form.submit"]');
        if (label) label.textContent = translations[locale]['form.sending'];
      }
    });
  }

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  const revealItems = document.querySelectorAll('[data-reveal]');
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((element) => element.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    revealItems.forEach((element) => observer.observe(element));
  }
})();
