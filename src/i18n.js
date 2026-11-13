// BTDIGIT internationalization: all public UI copy, artwork and contact text.
// Proper names and technical product names remain unchanged across languages.
// The Bamanankan (bm) draft uses Latin script and should be reviewed by a native speaker
// for brand-specific terminology before use in high-stakes commercial materials.

export const LANGUAGES = [
  { code: "fr", name: "Français", short: "FR", flag: "fr" },
  { code: "en", name: "English", short: "EN", flag: "en" },
  { code: "bm", name: "Bamanankan", short: "BM", flag: "bm" },
  { code: "es", name: "Español", short: "ES", flag: "es" },
];

export const translations = {
  fr: {
    seo: {
      title: "BTDIGIT — Agence Digitale | Sites web, applications & logiciels",
      description: "BTDIGIT à Bamako : sites web professionnels, applications sur mesure et logiciels de gestion. Découvrez notre portfolio : StockPro Premium, VestiFlow et Horizon Visa & Immo.",
    },
    common: {
      home: "Accueil", portfolio: "Portfolio", services: "Services", about: "À propos",
      contact: "Contact", faq: "FAQ", menuOpen: "Ouvrir le menu", menuClose: "Fermer le menu",
      lightMode: "Activer le mode clair", darkMode: "Activer le mode sombre",
      skip: "Aller au contenu", brandHome: "BTDIGIT, retour à l'accueil",
      chooseLanguage: "Choisir la langue", selectLanguage: "Langue du site",
      photoAlt: "Portrait du fondateur de BTDIGIT", logoAlt: "Logo BTDIGIT",
      view: "Découvrir", contactUs: "Nous contacter",
      location: "Bamako, Mali", email: "Email", whatsapp: "WhatsApp",
      agency: "Agence Digitale", follow: "Nous retrouver",
    },
    hero: {
      eyebrow: "BTDIGIT · Agence digitale · Bamako",
      title1: "Vos ambitions méritent",
      title2: "un digital à la hauteur.",
      description: "BTDIGIT accompagne les entreprises dans leur transformation digitale : sites web élégants, applications sur mesure et logiciels de gestion adaptés à leur activité.",
      actionPortfolio: "Voir le portfolio", actionContact: "Discutons de votre projet",
      trust1: "Portfolio réel", trust2: "Solutions adaptées", trust3: "Agence malienne",
      cardHeading: "Du concept", cardHeading2: "à l'expérience.",
      cardLabel: "AGENCE DIGITALE • MALI", cardTag: "Identité BTDIGIT",
      cardCount: "réalisations", cardCount2: "à découvrir",
      expertiseLabel: "NOTRE SAVOIR-FAIRE",
      expertise: ["Sites web", "Logiciels métier", "Applications web", "Design d'interfaces"],
      projectTypes: ["SaaS de gestion commerciale", "Logiciel de vente textile", "Site web professionnel"],
      showcaseAlt: "Présentation illustrée de notre portfolio",
    },
    services: {
      eyebrow: "Nos expertises", title1: "La bonne technologie.", title2: "Pour vos vrais besoins.",
      intro: "Nous associons conception, développement et sens du détail pour vous donner des outils utiles, beaux et faciles à utiliser.",
      action: "Parlons-en", actionLabel: "Demander un devis",
      items: [
        ["Sites web professionnels", "Des sites vitrines rapides, élégants et conçus pour inspirer confiance."],
        ["Applications web & PWA", "Des outils accessibles sur téléphone et ordinateur, adaptés à chaque activité."],
        ["Logiciels de gestion", "Stocks, ventes, caisse, facturation et processus métier réunis dans une interface claire."],
        ["Solutions sur mesure", "Du besoin métier au déploiement, des solutions conçues pour votre fonctionnement réel."],
      ],
    },
    portfolio: {
      eyebrow: "Portfolio", title1: "Du concret.", title2: "Pas seulement des concepts.",
      intro: "Des projets réels qui racontent ce que nous savons construire : une plateforme SaaS, un logiciel de bureau et un site web client.",
      note: "Les visuels des projets sont des illustrations de présentation et non des captures d'écran officielles.",
      projects: [
        { type: "SaaS · Gestion commerciale", desc: "Une plateforme de gestion commerciale conçue pour aider les entreprises à piloter leurs opérations depuis un seul espace.", features: ["Stocks & multi-dépôts", "Ventes, achats & caisse", "Factures & suivi client"], status: "Plateforme en ligne", action: "Visiter StockPro" },
        { type: "Logiciel Windows · Commerce textile", desc: "Un logiciel de vente d'habits pensé pour le quotidien des boutiques : gestion des articles, encaissement et tickets de caisse.", features: ["Vente en boutique", "Gestion des articles", "Tickets & base locale"], status: "Logiciel de bureau", action: "Demander une démonstration" },
        { type: "Site web · Projet client", desc: "Conception d'un site professionnel pour présenter les activités d'Horizon Visa & Immo autour des visas et de l'immobilier.", features: ["Présence en ligne", "Présentation des services", "Expérience responsive"], status: "Réalisation client", action: "Visiter Horizon" },
      ],
    },
    artwork: {
      dashboard: "Vue d'ensemble", stock: "Stock", sales: "Ventes", management: "Gestion", products: "Produits", tracking: "Suivi", control: "Contrôle", activity: "Activité commerciale",
      illustrative: "Illustration d'interface", illustrativeConcept: "Concept visuel illustratif",
      pointOfSale: "Point de vente", newSale: "Nouvelle vente", cart: "Panier & encaissement", confirmSale: "Valider la vente",
      horizonNav: "Accueil · Services · Contact", horizonTagline: "VOTRE AVENIR, NOTRE HORIZON",
      horizonTitle1: "Voyagez plus loin.", horizonTitle2: "Imaginez demain.",
      discoverServices: "Découvrir les services", contactUs: "Nous contacter",
    },
    banner: {
      eyebrow: "Des idées aux résultats", title1: "Chaque projet est unique.",
      title2: "Faisons briller le vôtre.",
      intro: "Une identité forte, une expérience fluide et une solution qui répond aux vrais besoins de votre entreprise.",
      action: "Parlons de votre projet", aria: "Discutons de votre projet",
    },
    about: {
      name: "Hama A Traoré",
      tagline: "Passionné par le numérique et le digital",
      eyebrow: "Le fondateur de BTDIGIT", title1: "Une passion pour le code.",
      title2: "Une agence tournée vers vos ambitions.",
      intro: "Passionné par le numérique depuis mon plus jeune âge, j'ai fondé BTDIGIT à Bamako pour créer des solutions digitales utiles aux entreprises. Je conçois des sites web, des applications et des logiciels de gestion avec une attention particulière à la qualité, à la simplicité et à la fiabilité.",
      intro2: "Avec StockPro Premium, VestiFlow et Horizon Visa & Immo, je transforme cette passion en projets concrets. Mon ambition est d'aider chaque entreprise à gagner en crédibilité, en visibilité et en efficacité.",
      values: ["Écoute des besoins métier", "Design responsive et accessible", "Conception et développement soignés"],
      badge: "Fondateur de BTDIGIT", badgeDetail: "Développement & innovation", action: "Construisons votre solution",
    },
    method: {
      eyebrow: "Notre méthode", title1: "De l'idée à", title2: "la réalisation.",
      intro: "Un projet réussi commence par la compréhension de votre activité et se construit avec vous, étape par étape.",
      items: [
        ["Comprendre", "Écouter votre activité, vos contraintes et vos objectifs."],
        ["Concevoir", "Définir un parcours fluide et une identité visuelle cohérente."],
        ["Développer", "Construire une solution propre, rapide et maintenable."],
        ["Accompagner", "Tester, mettre en ligne et améliorer selon les retours."],
      ],
    },
    faq: {
      eyebrow: "Questions fréquentes", title1: "Un projet en tête ?", title2: "On vous répond.",
      intro: "Quelques réponses aux questions qui reviennent le plus souvent.",
      action: "Nous contacter",
      items: [
        ["Quels types de projets réalisez-vous ?", "Nous réalisons des sites web professionnels, applications web, PWA et logiciels de gestion adaptés aux besoins des entreprises et des commerces."],
        ["StockPro Premium est-il accessible en ligne ?", "Oui. Vous pouvez découvrir la plateforme sur stockpro.ml. Les fonctionnalités et formules disponibles sont présentées sur son site officiel."],
        ["Peut-on demander une démonstration de VestiFlow ?", "Oui. Contactez BTDIGIT par WhatsApp pour discuter du logiciel Windows et organiser une présentation."],
        ["Comment obtenir un devis pour mon entreprise ?", "Présentez votre projet dans le formulaire de contact. Votre demande est préparée pour WhatsApp, sans enregistrement sur ce site vitrine."],
      ],
    },
    contact: {
      eyebrow: "Créons quelque chose ensemble", title1: "Votre prochain projet", title2: "commence ici.",
      intro: "Vous avez besoin d'un site web, d'une application ou d'un logiciel pour votre entreprise ? Parlons de ce que vous souhaitez construire.",
      location: "Localisation", formTitle: "Parlez-nous de votre idée",
      formIntro: "Une demande simple, envoyée directement sur WhatsApp.",
      name: "Votre nom", namePlaceholder: "Nom complet",
      company: "Entreprise", companyPlaceholder: "Facultatif",
      email: "Votre email", emailPlaceholder: "vous@exemple.com",
      need: "Votre besoin", choose: "Sélectionnez un service",
      needOptions: ["Création de site web", "Application web ou PWA", "Logiciel de gestion", "Développement sur mesure", "Autre"],
      message: "Votre projet", messagePlaceholder: "Décrivez votre besoin en quelques phrases...",
      send: "Envoyer via WhatsApp",
      privacy: "Ce formulaire n'enregistre aucune donnée sur notre site. Il prépare un message WhatsApp que vous choisissez d'envoyer.",
      whatsappIntro: "Bonjour BTDIGIT, je souhaite discuter d'un projet.",
      whatsappAbout: "Bonjour BTDIGIT, je souhaite en savoir plus sur",
      formFields: ["Nom", "Entreprise", "Service", "Email"],
      unspecified: "Non précisée",
    },
    sectors: {
      "eyebrow": "Chaque secteur mérite sa place en ligne",
      "title1": "Quel que soit votre métier,",
      "title2": "faites rayonner votre entreprise.",
      "intro": "BTP, hôtellerie, transport ou commerce général : BTDIGIT vous aide à présenter vos services, inspirer confiance et faciliter la prise de contact.",
      "focus": "UNE SOLUTION POUR VOTRE ACTIVITÉ",
      "cta": "Parlons de votre activité",
      "carouselLabel": "Solutions pour les secteurs d'activité",
      "previous": "Secteur précédent",
      "next": "Secteur suivant",
      "items": [
        {
          "title": "BTP & construction",
          "description": "Montrez vos réalisations et votre savoir-faire avec un site professionnel qui rassure vos futurs clients.",
          "benefit": "Portfolio de chantiers, demandes de devis et contact direct."
        },
        {
          "title": "Hôtellerie & restauration",
          "description": "Présentez vos chambres, prestations, menus ou espaces dans une vitrine élégante accessible sur mobile.",
          "benefit": "Plus de visibilité et demandes de réservation simplifiées."
        },
        {
          "title": "Transport & logistique",
          "description": "Mettez en avant vos services, vos destinations ou votre flotte pour être trouvé facilement.",
          "benefit": "Services clairs, demandes de devis et contact rapide."
        },
        {
          "title": "Commerce général",
          "description": "Présentez vos produits et facilitez les demandes de commande avec un catalogue moderne.",
          "benefit": "Catalogue, visibilité et relation client améliorée."
        }
      ]
    },
    partners: {
      "nav": "Partenaires",      "eyebrow": "Ils avancent avec BTDIGIT",
      "title1": "Des relations qui comptent.",
      "title2": "Nos partenaires.",
      "intro": "Nous mettons en lumière les entreprises avec lesquelles nous collaborons.",
      "carouselLabel": "Carrousel de nos partenaires",
      "previous": "Partenaire précédent",
      "next": "Partenaire suivant",
      "partnerLabel": "PARTENAIRE",
      "relationship": "Partenaire BTDIGIT",
      "visit": "Visiter leur site",
      "note": "Les logos appartiennent à leurs marques respectives.",
      "items": [
        {
          "description": "MSF-SARL, partenaire de BTDIGIT."
        },
        {
          "description": "Horizon Visa & Immo, partenaire actif dans les services de visa, voyages et immobilier."
        }
      ]
    },
    support: {
      "trigger": "Support",
      "open": "Ouvrir l'assistance BTDIGIT",
      "title": "Comment pouvons-nous vous aider ?",
      "intro": "Choisissez le moyen de contact qui vous convient.",
      "close": "Fermer l'assistance",
      "call": "Appeler",
      "whatsapp": "WhatsApp",
      "whatsappSub": "Échangez directement avec notre équipe",
      "write": "Écrire un message",
      "help": "Ouvrir le centre d'aide",
      "safety": "Ne communiquez jamais vos mots de passe ni vos codes de paiement."
    },
    footer: {
      intro: "Sites web, applications et logiciels de gestion. La technologie au service de vos ambitions.",
      explore: "Explorer", find: "Nous retrouver", rights: "Tous droits réservés.",
      signature: "Conçu avec passion à Bamako, Mali.",
    },
  },

  en: {
    seo: {
      title: "BTDIGIT — Digital Agency | Websites, Apps & Software",
      description: "BTDIGIT in Bamako: professional websites, custom applications and business management software. Explore StockPro Premium, VestiFlow and Horizon Visa & Immo.",
    },
    common: {
      home: "Home", portfolio: "Portfolio", services: "Services", about: "About",
      contact: "Contact", faq: "FAQ", menuOpen: "Open menu", menuClose: "Close menu",
      lightMode: "Switch to light mode", darkMode: "Switch to dark mode",
      skip: "Skip to content", brandHome: "BTDIGIT, back to home",
      chooseLanguage: "Choose language", selectLanguage: "Website language",
      photoAlt: "Portrait of the founder of BTDIGIT", logoAlt: "BTDIGIT logo",
      view: "Discover", contactUs: "Contact us",
      location: "Bamako, Mali", email: "Email", whatsapp: "WhatsApp",
      agency: "Digital Agency", follow: "Find us",
    },
    hero: {
      eyebrow: "BTDIGIT · Digital agency · Bamako",
      title1: "Your ambitions deserve",
      title2: "digital excellence.",
      description: "BTDIGIT helps businesses thrive through digital transformation: elegant websites, custom applications and management software built around their needs.",
      actionPortfolio: "Explore our portfolio", actionContact: "Let's discuss your project",
      trust1: "Real projects", trust2: "Tailored solutions", trust3: "Based in Mali",
      cardHeading: "From concept", cardHeading2: "to experience.",
      cardLabel: "DIGITAL AGENCY • MALI", cardTag: "BTDIGIT identity",
      cardCount: "projects", cardCount2: "to discover",
      expertiseLabel: "WHAT WE DO",
      expertise: ["Websites", "Business software", "Web applications", "Interface design"],
      projectTypes: ["Business management SaaS", "Clothing retail software", "Professional website"],
      showcaseAlt: "Illustrated preview of our portfolio",
    },
    services: {
      eyebrow: "Our expertise", title1: "The right technology.", title2: "For your real needs.",
      intro: "We combine thoughtful design, development and attention to detail to create tools that are useful, beautiful and easy to use.",
      action: "Let's talk", actionLabel: "Request a quote for",
      items: [
        ["Professional websites", "Fast, elegant business websites designed to build trust."],
        ["Web apps & PWAs", "Tools that work on phones and computers, built for each business."],
        ["Management software", "Inventory, sales, cash registers, invoicing and workflows in one clear interface."],
        ["Custom solutions", "From business requirements to launch, solutions built around how you work."],
      ],
    },
    portfolio: {
      eyebrow: "Portfolio", title1: "Real solutions.", title2: "Not just concepts.",
      intro: "Real projects that demonstrate what we build: a SaaS platform, a desktop application and a client website.",
      note: "Project visuals are illustrative mockups, not official product screenshots.",
      projects: [
        { type: "SaaS · Business management", desc: "A management platform helping companies run their daily operations from one place.", features: ["Inventory & multiple warehouses", "Sales, purchasing & cash register", "Invoices & customer tracking"], status: "Live platform", action: "Visit StockPro" },
        { type: "Windows software · Clothing retail", desc: "A clothing retail application designed for day-to-day shop operations: product management, checkout and receipts.", features: ["In-store sales", "Product management", "Receipts & local database"], status: "Desktop application", action: "Request a demo" },
        { type: "Website · Client project", desc: "A professional website designed to present Horizon Visa & Immo's visa and real-estate services.", features: ["Online presence", "Service presentation", "Responsive experience"], status: "Client project", action: "Visit Horizon" },
      ],
    },
    artwork: {
      dashboard: "Overview", stock: "Inventory", sales: "Sales", management: "Management", products: "Products", tracking: "Tracking", control: "Control", activity: "Business activity",
      illustrative: "Interface illustration", illustrativeConcept: "Illustrative visual concept",
      pointOfSale: "Point of sale", newSale: "New sale", cart: "Cart & checkout", confirmSale: "Complete sale",
      horizonNav: "Home · Services · Contact", horizonTagline: "YOUR FUTURE, OUR HORIZON",
      horizonTitle1: "Travel further.", horizonTitle2: "Imagine tomorrow.",
      discoverServices: "Explore services", contactUs: "Contact us",
    },
    banner: {
      eyebrow: "From ideas to results", title1: "Every project is unique.",
      title2: "Let's make yours shine.",
      intro: "A strong identity, a smooth experience and a solution that meets your business's real needs.",
      action: "Tell us about your project", aria: "Talk about your project",
    },
    about: {
      name: "Hama A Traoré",
      tagline: "Passionate about technology and the digital world",
      eyebrow: "The founder of BTDIGIT", title1: "A passion for code.",
      title2: "An agency driven by your goals.",
      intro: "Passionate about technology from an early age, I founded BTDIGIT in Bamako to create useful digital solutions for businesses. I design websites, applications and management software with a focus on quality, simplicity and reliability.",
      intro2: "Through StockPro Premium, VestiFlow and Horizon Visa & Immo, I turn that passion into real projects. My goal is to help businesses build credibility, increase visibility and work more efficiently.",
      values: ["Listening to business needs", "Responsive and accessible design", "Thoughtful design and development"],
      badge: "Founder of BTDIGIT", badgeDetail: "Development & innovation", action: "Let's build your solution",
    },
    method: {
      eyebrow: "Our approach", title1: "From an idea to", title2: "a real solution.",
      intro: "A successful project starts with understanding your business and takes shape with you, step by step.",
      items: [
        ["Understand", "Learn about your business, constraints and goals."],
        ["Design", "Plan a smooth journey and a consistent visual identity."],
        ["Develop", "Build clean, fast and maintainable software."],
        ["Support", "Test, launch and improve based on feedback."],
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions", title1: "Have a project in mind?", title2: "We've got answers.",
      intro: "Answers to a few of the questions we hear most often.",
      action: "Contact us",
      items: [
        ["What types of projects do you build?", "We build professional websites, web apps, PWAs and management software tailored to businesses and retail shops."],
        ["Is StockPro Premium available online?", "Yes. Visit stockpro.ml to explore the platform. Its official website lists the available features and plans."],
        ["Can I request a VestiFlow demo?", "Yes. Contact BTDIGIT on WhatsApp to discuss the Windows application and arrange a presentation."],
        ["How can I request a quote?", "Describe your project in the contact form. Your message is prepared for WhatsApp without storing your details on this website."],
      ],
    },
    contact: {
      eyebrow: "Let's build something together", title1: "Your next project", title2: "starts here.",
      intro: "Need a website, an application or business software? Let's talk about what you want to build.",
      location: "Location", formTitle: "Tell us about your idea",
      formIntro: "A simple request sent straight through WhatsApp.",
      name: "Your name", namePlaceholder: "Full name",
      company: "Company", companyPlaceholder: "Optional",
      email: "Your email", emailPlaceholder: "you@example.com",
      need: "What do you need?", choose: "Select a service",
      needOptions: ["Website development", "Web app or PWA", "Management software", "Custom development", "Other"],
      message: "Your project", messagePlaceholder: "Tell us a little about your project...",
      send: "Send through WhatsApp",
      privacy: "This form does not store data on our website. It prepares a WhatsApp message that you choose to send.",
      whatsappIntro: "Hello BTDIGIT, I'd like to discuss a project.",
      whatsappAbout: "Hello BTDIGIT, I'd like to know more about",
      formFields: ["Name", "Company", "Service", "Email"],
      unspecified: "Not specified",
    },
    sectors: {
      "eyebrow": "Every industry deserves to be seen",
      "title1": "Whatever your business,",
      "title2": "make your brand stand out.",
      "intro": "Construction, hospitality, transport or general trading: BTDIGIT helps you showcase your services, build trust and make it easier for customers to reach you.",
      "focus": "DIGITAL SOLUTIONS FOR YOUR BUSINESS",
      "cta": "Tell us about your business",
      "carouselLabel": "Solutions for different industries",
      "previous": "Previous industry",
      "next": "Next industry",
      "items": [
        {
          "title": "Construction & building",
          "description": "Show your projects and expertise with a professional site that gives future clients confidence.",
          "benefit": "Project gallery, quote requests and direct contact."
        },
        {
          "title": "Hotels & restaurants",
          "description": "Present your rooms, services, menus or venues with an elegant mobile-friendly website.",
          "benefit": "Better visibility and easier booking enquiries."
        },
        {
          "title": "Transport & logistics",
          "description": "Highlight your services, destinations or fleet so customers can find you easily.",
          "benefit": "Clear offers, quote requests and quick contact."
        },
        {
          "title": "General trading",
          "description": "Showcase your products and make order enquiries easier with a modern catalogue.",
          "benefit": "Product catalogue, visibility and better customer relationships."
        }
      ]
    },
    partners: {
      "nav": "Partners",      "eyebrow": "Growing alongside BTDIGIT",
      "title1": "Relationships that matter.",
      "title2": "Our partners.",
      "intro": "Meet the companies we collaborate with.",
      "carouselLabel": "Our partners carousel",
      "previous": "Previous partner",
      "next": "Next partner",
      "partnerLabel": "PARTNER",
      "relationship": "BTDIGIT partner",
      "visit": "Visit their website",
      "note": "All trademarks and logos belong to their respective owners.",
      "items": [
        {
          "description": "MSF-SARL, a BTDIGIT partner."
        },
        {
          "description": "Horizon Visa & Immo, a partner providing visa, travel and property services."
        }
      ]
    },
    support: {
      "trigger": "Support",
      "open": "Open BTDIGIT support",
      "title": "How can we help you?",
      "intro": "Choose how you would like to contact us.",
      "close": "Close support",
      "call": "Call us",
      "whatsapp": "WhatsApp",
      "whatsappSub": "Chat directly with our team",
      "write": "Send an email",
      "help": "Open the help centre",
      "safety": "Never share passwords or payment verification codes."
    },
    footer: {
      intro: "Websites, applications and management software. Technology to help you achieve your ambitions.",
      explore: "Explore", find: "Find us", rights: "All rights reserved.",
      signature: "Made with passion in Bamako, Mali.",
    },
  },

  bm: {
    seo: {
      title: "BTDIGIT — Digitali baarakɛyɔrɔ | Site web ani logiciel",
      description: "BTDIGIT bɛ Bamako. An bɛ site web, application ani jago baarakɛminɛnw dilan. Aw ye an ka baara ye: StockPro Premium, VestiFlow ani Horizon Visa & Immo.",
    },
    common: {
      home: "Daminɛ", portfolio: "An ka baaraw", services: "An ka baaraw", about: "An kan", 
      contact: "An wele", faq: "Ɲininkaliw", menuOpen: "Meni dabɔ", menuClose: "Meni datugu",
      lightMode: "Kɛnɛya sugu sugandi", darkMode: "Dibi sugu sugandi",
      skip: "Taa kunnafoni ma", brandHome: "BTDIGIT, segin daminɛ na",
      chooseLanguage: "Kan sugandi", selectLanguage: "Site kan",
      photoAlt: "BTDIGIT daminɛbagaa ja", logoAlt: "BTDIGIT logo",
      view: "A lajɛ", contactUs: "An wele",
      location: "Bamako, Mali", email: "Email", whatsapp: "WhatsApp",
      agency: "Digitali baarakɛyɔrɔ", follow: "An sɔrɔ",
    },
    hero: {
      eyebrow: "BTDIGIT · Digitali baarakɛyɔrɔ · Bamako",
      title1: "Aw ka miiriyaw",
      title2: "ka kan ni fɛn ɲuman ye.",
      description: "BTDIGIT bɛ jago tigiw dɛmɛ u ka baaraw ka nɔgɔya ni digitali ye. An bɛ site web ɲumanw, application kɛrɛnkɛrɛnnenw ani jago baarakɛminɛnw dilan.",
      actionPortfolio: "An ka baaraw lajɛ", actionContact: "An ka aw ka baara kuma",
      trust1: "Baara kɛlenw", trust2: "Fɛnw min bɛ aw ka ko ma", trust3: "Mali baarakɛyɔrɔ",
      cardHeading: "Ka daminɛ miiriya la", cardHeading2: "ka se baara ma.",
      cardLabel: "DIGITALI BAARAKƐYƆRƆ • MALI", cardTag: "BTDIGIT tɔgɔ",
      cardCount: "baara", cardCount2: "min bɛ yen",
      expertiseLabel: "AN KA BAARAW",
      expertise: ["Site web", "Jago logiciel", "Application web", "Interface dilanni"],
      projectTypes: ["Jago ɲɛnabɔli SaaS", "Fani feereli logiciel", "Site web ɲuman"],
      showcaseAlt: "An ka baaraw jirali",
    },
    services: {
      eyebrow: "An ka dɔnko", title1: "Fɛn min ka ɲi.", title2: "Aw ka haminanko kama.",
      intro: "An bɛ dilanni ni programmation kɛ ni hakilijagabɔ ye, walasa aw ka baara ka nɔgɔya ani ka di ka kɛ.",
      action: "An ka kuma", actionLabel: "Sɔngɔ ɲininkali kɛ",
      items: [
        ["Site web ɲumanw", "Site web teliw ani ɲumanw, minnu bɛ jago ka danaya bonya."],
        ["Application web ani PWA", "Baarakɛminɛnw minnu bɛ baara kɛ telefɔni ni ordinatɛri kan."],
        ["Jago ɲɛnabɔli logiciel", "Stock, feereli, caisse ani facture ɲɛnabɔli yɔrɔ kelen na."],
        ["Aw yɛrɛ ka baarakɛminɛn", "An bɛ logiciel dilan kɛrɛnkɛrɛnnen na, ka kɛɲɛ ni aw ka baara ye."],
      ],
    },
    portfolio: {
      eyebrow: "An ka baaraw", title1: "Baara kɛlenw.", title2: "Miiriya dɔrɔn tɛ.",
      intro: "Aw bɛ an ka baaraw lajɛ yan: SaaS jago kɔlɔsili, ordinatɛri logiciel ani an ka kliyan dɔ ka site web.",
      note: "Ja minnu bɛ yan, olu ye jirali-jaw ye. U tɛ logiciel yɛrɛ ka ja kɔrɔlenw ye.",
      projects: [
        { type: "SaaS · Jago ɲɛnabɔli", desc: "Jago ɲɛnabɔli baarakɛminɛn min bɛ jago tigiw dɛmɛ u ka baaraw ɲɛnabɔli la yɔrɔ kelen na.", features: ["Stock ani magazin caman", "Feereli, sanli ani caisse", "Facture ani kliyan kɔlɔsili"], status: "Bɛ internet kan", action: "StockPro lajɛ" },
        { type: "Windows logiciel · Fani feereli", desc: "Logiciel min dilannen don fani feereli yɔrɔw kama: fɛn ɲɛnabɔli, feereli ani tikɛtiw.", features: ["Butiki feereli", "Fɛnw ɲɛnabɔli", "Tikɛtiw ani donanw"], status: "Ordinatɛri logiciel", action: "Jirali ɲini" },
        { type: "Site web · Kliyan ka baara", desc: "An ye Horizon Visa & Immo ka site web dilan walasa u ka visa ani imobilier baaraw ka jira.", features: ["Internet kan jirali", "Baaraw jirali", "Telefɔni kan fana"], status: "Kliyan ka baara", action: "Horizon ka site lajɛ" },
      ],
    },
    artwork: {
      dashboard: "Baaraw lajɛ", stock: "Stock", sales: "Feereli", management: "Ɲɛnabɔli", products: "Fɛnw", tracking: "Kɔlɔsili", control: "Kɔlɔsili", activity: "Jago baaraw",
      illustrative: "Interface jirali-ja", illustrativeConcept: "Jirali-ja dɔ",
      pointOfSale: "Feereli yɔrɔ", newSale: "Feereli kura", cart: "Panier ani wari sarali", confirmSale: "Feereli dafa",
      horizonNav: "Daminɛ · Baaraw · An wele", horizonTagline: "AW KA SINI, AN KA HORIZON",
      horizonTitle1: "Taa yɔrɔ jan.", horizonTitle2: "Sini miiri.",
      discoverServices: "Baaraw lajɛ", contactUs: "An wele",
    },
    banner: {
      eyebrow: "Miiriya ka kɛ baara ye", title1: "Baara kelen-kelen bɛ dan.",
      title2: "An k'an ka aw ta yirali ka ɲi.",
      intro: "Tɔgɔ ɲuman, baarakɛminɛn nɔgɔman ani fɛn min bɛ aw ka jago haminanko ma.",
      action: "An ka aw ka baara kuma", aria: "Aw ka baara ko",
    },
    about: {
      name: "Hama A Traoré",
      tagline: "N bɛ teknolojii ni digitali fɛ kosɛbɛ",
      eyebrow: "BTDIGIT daminɛbagaa", title1: "N bɛ programmation fɛ.",
      title2: "N bɛ baara kɛ aw ka miiriyaw kama.",
      intro: "N denmisɛnnin tuma kabini, teknolojii ni digitali ka di n ye. N ye BTDIGIT daminɛ Bamako walasa n ka site web, application ani jago ɲɛnabɔli logiciel ɲumanw dilan jago tigiw kama. N bɛ baara kɛ ni hakilijagabɔ ye, ka a kɛ nɔgɔman ani danayalen ye.",
      intro2: "StockPro Premium, VestiFlow ani Horizon Visa & Immo bɛ nin kanuya in jira baara kɛlenw fɛ. N b'a fɛ ka jago tigiw dɛmɛ u ka danaya ani u ka dɔnniya ka bonya, ka u ka baaraw ka nɔgɔya.",
      values: ["Ka kliyan ka kuma lamɛn", "Site web min bɛ telefɔni kan", "Dilanni ani programmation ɲuman"],
      badge: "BTDIGIT daminɛbagaa", badgeDetail: "Programmation ani kurayali", action: "An ka aw ka baara dilan",
    },
    method: {
      eyebrow: "An ka baarakɛcogo", title1: "Ka daminɛ miiriya la", title2: "ka se dilanni ma.",
      intro: "Baara ɲuman bɛ daminɛ ni aw ka haminankow faamuyali ye. O kɔfɛ an bɛ baara kɛ ni aw ye hakɛ hakɛ.",
      items: [
        ["Ka faamu", "Ka aw ka jago ani aw ka hakilina lamɛn."],
        ["Ka miiri", "Ka site ani a ka ɲɛ dilan ɲuman na."],
        ["Ka dilan", "Ka logiciel teli ani sabatilen dilan."],
        ["Ka dɛmɛ", "Ka a lajɛ, ka a bila baara la, ka a ka ɲi kosɛbɛ."],
      ],
    },
    faq: {
      eyebrow: "Ɲininkali minnu ka ca", title1: "Baara dɔ b'aw hakili la?", title2: "An bɛ jaabi di.",
      intro: "Aw ka ɲininkali dɔw jaabiw filɛ.",
      action: "An wele",
      items: [
        ["Aw bɛ mun baara kɛ?", "An bɛ site web, application web, PWA ani jago ɲɛnabɔli logiciel dilan jago tigiw kama."],
        ["StockPro Premium bɛ internet kan wa?", "Ɔwɔ. Aw bɛ se ka a lajɛ stockpro.ml kan. A ka baaraw ani a ka sɔngɔw bɛ o yɔrɔ la."],
        ["N bɛ se ka VestiFlow jirali ɲini wa?", "Ɔwɔ. Aw ye BTDIGIT wele WhatsApp kan walasa an ka VestiFlow ko kuma."],
        ["N bɛ sɔngɔ ɲininkali kɛ cogo di?", "Aw ye aw ka baara ko sɛbɛn an ka fɔrmilɛri kɔnɔ. O bɛ WhatsApp kuma labɛn, a tɛ aw ka kunnafoni mara site kan."],
      ],
    },
    contact: {
      eyebrow: "An ka baara kɛ ɲɔgɔn fɛ", title1: "Aw ka baara kura", title2: "bɛ daminɛ yan.",
      intro: "Aw mago bɛ site web, application walima logiciel la wa? An ka aw ka baara ko kuma.",
      location: "Yɔrɔ", formTitle: "Aw ka miiriya fɔ an ye",
      formIntro: "Aw ka kuma bɛ ci WhatsApp kan.",
      name: "Aw tɔgɔ", namePlaceholder: "Tɔgɔ bɛɛ",
      company: "Aw ka jago", companyPlaceholder: "A man kan",
      email: "Aw ka email", emailPlaceholder: "aw@exemple.com",
      need: "Aw mago bɛ mun na?", choose: "Baara dɔ sugandi",
      needOptions: ["Site web dilanni", "Application web walima PWA", "Jago ɲɛnabɔli logiciel", "Logiciel kɛrɛnkɛrɛnnen", "Fɛn wɛrɛ"],
      message: "Aw ka baara", messagePlaceholder: "Aw ye aw ka baara ko fɔ dɔɔnin...",
      send: "A ci WhatsApp kan",
      privacy: "Nin fɔrmilɛri tɛ aw ka kunnafoni mara site kan. A bɛ WhatsApp kuma labɛn; aw yɛrɛ bɛ a ci.",
      whatsappIntro: "I ni ce BTDIGIT, n b'a fɛ an ka baara dɔ ko kuma.",
      whatsappAbout: "I ni ce BTDIGIT, n b'a fɛ ka kunnafoni sɔrɔ nin ko kan:",
      formFields: ["Tɔgɔ", "Jago", "Baara", "Email"],
      unspecified: "A ma fɔ",
    },
    sectors: {
      "eyebrow": "Jago sugu bɛɛ ka kan ka a yɛrɛ jira",
      "title1": "Aw ka baara sugu o sugu,",
      "title2": "BTDIGIT bɛ aw dɛmɛ.",
      "intro": "BTP, otɛli, transport walima jago bɛɛ: BTDIGIT bɛ aw dɛmɛ ka aw ka baaraw jira, ka danaya sɔrɔ ani ka kliyanw ka aw wele.",
      "focus": "AW KA BAARA KAMA",
      "cta": "An ka aw ka baara kuma",
      "carouselLabel": "Jago suguw ka baaraw",
      "previous": "Jago kɔrɔlen",
      "next": "Jago nata",
      "items": [
        {
          "title": "BTP ani so dilanni",
          "description": "Aw ye aw ka so dilanni baaraw ni aw ka dɔnko jira site web ɲuman kan.",
          "benefit": "Baaraw ka jaw, sɔngɔ ɲininkali ani weleli."
        },
        {
          "title": "Otɛli ani dumunikɛyɔrɔ",
          "description": "Aw ye aw ka so dɔw, dumuniw ani baaraw jira telefɔni kan fana.",
          "benefit": "Aw ka jago ka dɔn ani réservation ɲininkali ka nɔgɔya."
        },
        {
          "title": "Transport ani fɛn tawuli",
          "description": "Aw ye aw ka transport baaraw, taama yɔrɔw ani mobiliw jira.",
          "benefit": "Baaraw ka ɲɛfɔli ani kliyanw ka weleli ka nɔgɔya."
        },
        {
          "title": "Jago bɛɛ",
          "description": "Aw ye aw ka feerefɛnw jira catalogue kura kan, walasa kliyanw ka se ka ɲininkali kɛ.",
          "benefit": "Catalogue, jago jirali ani kliyanw ni ɲɔgɔnci."
        }
      ]
    },
    partners: {
      "nav": "Partenɛriw",      "eyebrow": "An ka baarakɛɲɔgɔnw",
      "title1": "Baarakɛɲɔgɔnya ka fisa.",
      "title2": "An ka partenɛriw.",
      "intro": "Aw ye jago minnu bɛ baara kɛ ni BTDIGIT ye, olu lajɛ.",
      "carouselLabel": "An ka partenɛriw jirali",
      "previous": "Partenɛri kɔrɔlen",
      "next": "Partenɛri nata",
      "partnerLabel": "PARTENƐRI",
      "relationship": "BTDIGIT partenɛri",
      "visit": "U ka site lajɛ",
      "note": "Logo bɛɛ bɛ a tɔgɔtigi ta ye.",
      "items": [
        {
          "description": "MSF-SARL ye BTDIGIT partenɛri ye."
        },
        {
          "description": "Horizon Visa & Immo ye partenɛri ye visa, taama ani so ko la."
        }
      ]
    },
    support: {
      "trigger": "Dɛmɛ",
      "open": "BTDIGIT dɛmɛ yɔrɔ dabɔ",
      "title": "An bɛ se k'aw dɛmɛ cogo di?",
      "intro": "Aw ye kuma cogo sugandi.",
      "close": "Dɛmɛ datugu",
      "call": "An wele",
      "whatsapp": "WhatsApp",
      "whatsappSub": "An ka ɲɔgɔn kuma WhatsApp kan",
      "write": "Email ci",
      "help": "Dɛmɛ yɔrɔ dabɔ",
      "safety": "Aw kana aw ka mot de passe ani wari sarali kodew di mɔgɔ si ma."
    },
    footer: {
      intro: "Site web, application ani jago logiciel. Digitali bɛ aw ka miiriyaw dɛmɛ.",
      explore: "Baaraw lajɛ", find: "An sɔrɔ", rights: "Hakɛ bɛɛ maralen don.",
      signature: "A dilannen don ni kanuya ye Bamako, Mali.",
    },
  },

  es: {
    seo: {
      title: "BTDIGIT — Agencia Digital | Sitios web, aplicaciones y software",
      description: "BTDIGIT en Bamako: sitios web profesionales, aplicaciones a medida y software de gestión. Descubre StockPro Premium, VestiFlow y Horizon Visa & Immo.",
    },
    common: {
      home: "Inicio", portfolio: "Portafolio", services: "Servicios", about: "Nosotros",
      contact: "Contacto", faq: "Preguntas", menuOpen: "Abrir menú", menuClose: "Cerrar menú",
      lightMode: "Activar modo claro", darkMode: "Activar modo oscuro",
      skip: "Ir al contenido", brandHome: "BTDIGIT, volver al inicio",
      chooseLanguage: "Elegir idioma", selectLanguage: "Idioma del sitio",
      photoAlt: "Retrato del fundador de BTDIGIT", logoAlt: "Logotipo de BTDIGIT",
      view: "Descubrir", contactUs: "Contáctanos",
      location: "Bamako, Mali", email: "Correo electrónico", whatsapp: "WhatsApp",
      agency: "Agencia Digital", follow: "Encuéntranos",
    },
    hero: {
      eyebrow: "BTDIGIT · Agencia digital · Bamako",
      title1: "Tus ambiciones merecen",
      title2: "una presencia digital a la altura.",
      description: "BTDIGIT acompaña a las empresas en su transformación digital con sitios web elegantes, aplicaciones a medida y software de gestión adaptado a sus necesidades.",
      actionPortfolio: "Ver nuestro portafolio", actionContact: "Hablemos de tu proyecto",
      trust1: "Proyectos reales", trust2: "Soluciones a medida", trust3: "Agencia en Mali",
      cardHeading: "De la idea", cardHeading2: "a la experiencia.",
      cardLabel: "AGENCIA DIGITAL • MALI", cardTag: "Identidad BTDIGIT",
      cardCount: "proyectos", cardCount2: "por descubrir",
      expertiseLabel: "NUESTRA EXPERIENCIA",
      expertise: ["Sitios web", "Software empresarial", "Aplicaciones web", "Diseño de interfaces"],
      projectTypes: ["SaaS de gestión comercial", "Software para tiendas de ropa", "Sitio web profesional"],
      showcaseAlt: "Vista ilustrativa de nuestro portafolio",
    },
    services: {
      eyebrow: "Nuestros servicios", title1: "La tecnología adecuada.", title2: "Para tus necesidades reales.",
      intro: "Combinamos diseño, desarrollo y atención al detalle para crear herramientas útiles, atractivas y fáciles de usar.",
      action: "Hablemos", actionLabel: "Solicitar presupuesto de",
      items: [
        ["Sitios web profesionales", "Sitios web rápidos y elegantes, diseñados para generar confianza."],
        ["Aplicaciones web y PWA", "Herramientas accesibles desde el móvil y el ordenador, adaptadas a cada actividad."],
        ["Software de gestión", "Inventario, ventas, caja, facturación y procesos en una interfaz clara."],
        ["Soluciones a medida", "Desde el análisis de necesidades hasta el lanzamiento, adaptadas a tu forma de trabajar."],
      ],
    },
    portfolio: {
      eyebrow: "Portafolio", title1: "Proyectos reales.", title2: "No solo conceptos.",
      intro: "Trabajos que reflejan lo que desarrollamos: una plataforma SaaS, una aplicación de escritorio y un sitio web para un cliente.",
      note: "Las imágenes de los proyectos son ilustraciones, no capturas oficiales de los productos.",
      projects: [
        { type: "SaaS · Gestión comercial", desc: "Una plataforma de gestión comercial que permite a las empresas controlar sus operaciones desde un único lugar.", features: ["Inventario y varios almacenes", "Ventas, compras y caja", "Facturas y seguimiento de clientes"], status: "Plataforma en línea", action: "Visitar StockPro" },
        { type: "Software Windows · Tiendas de ropa", desc: "Un programa de ventas para tiendas de ropa: gestión de artículos, cobros y recibos.", features: ["Ventas en tienda", "Gestión de artículos", "Recibos y base de datos local"], status: "Aplicación de escritorio", action: "Solicitar una demostración" },
        { type: "Sitio web · Proyecto de cliente", desc: "Diseño de un sitio web profesional para presentar los servicios de visados e inmobiliaria de Horizon Visa & Immo.", features: ["Presencia en línea", "Presentación de servicios", "Diseño adaptable"], status: "Proyecto de cliente", action: "Visitar Horizon" },
      ],
    },
    artwork: {
      dashboard: "Vista general", stock: "Inventario", sales: "Ventas", management: "Gestión", products: "Productos", tracking: "Seguimiento", control: "Control", activity: "Actividad comercial",
      illustrative: "Ilustración de interfaz", illustrativeConcept: "Concepto visual ilustrativo",
      pointOfSale: "Punto de venta", newSale: "Nueva venta", cart: "Carrito y cobro", confirmSale: "Confirmar venta",
      horizonNav: "Inicio · Servicios · Contacto", horizonTagline: "TU FUTURO, NUESTRO HORIZONTE",
      horizonTitle1: "Viaja más lejos.", horizonTitle2: "Imagina el mañana.",
      discoverServices: "Descubrir servicios", contactUs: "Contáctanos",
    },
    banner: {
      eyebrow: "De las ideas a los resultados", title1: "Cada proyecto es único.",
      title2: "Hagamos que el tuyo destaque.",
      intro: "Una identidad sólida, una experiencia fluida y una solución adaptada a las necesidades reales de tu empresa.",
      action: "Cuéntanos tu proyecto", aria: "Hablemos de tu proyecto",
    },
    about: {
      name: "Hama A Traoré",
      tagline: "Apasionado por la tecnología y el mundo digital",
      eyebrow: "El fundador de BTDIGIT", title1: "Pasión por el código.",
      title2: "Una agencia enfocada en tus objetivos.",
      intro: "Apasionado por la tecnología desde muy joven, fundé BTDIGIT en Bamako para crear soluciones digitales útiles para las empresas. Diseño sitios web, aplicaciones y programas de gestión con especial atención a la calidad, la sencillez y la fiabilidad.",
      intro2: "Con StockPro Premium, VestiFlow y Horizon Visa & Immo, convierto esa pasión en proyectos reales. Mi objetivo es ayudar a las empresas a ganar credibilidad, visibilidad y eficiencia.",
      values: ["Escucha de las necesidades de cada negocio", "Diseño adaptable y accesible", "Diseño y desarrollo cuidados"],
      badge: "Fundador de BTDIGIT", badgeDetail: "Desarrollo e innovación", action: "Creemos tu solución",
    },
    method: {
      eyebrow: "Nuestro método", title1: "De la idea", title2: "a la realidad.",
      intro: "Un buen proyecto empieza por comprender tu actividad y se desarrolla contigo, paso a paso.",
      items: [
        ["Comprender", "Escuchar tu actividad, tus dificultades y tus objetivos."],
        ["Diseñar", "Definir una experiencia fluida y una identidad visual coherente."],
        ["Desarrollar", "Crear soluciones limpias, rápidas y fáciles de mantener."],
        ["Acompañar", "Probar, publicar y mejorar a partir de los comentarios."],
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes", title1: "¿Tienes un proyecto?", title2: "Te respondemos.",
      intro: "Respuestas a algunas de las dudas más habituales.",
      action: "Contáctanos",
      items: [
        ["¿Qué tipos de proyectos realizáis?", "Creamos sitios web profesionales, aplicaciones web, PWA y software de gestión para empresas y comercios."],
        ["¿StockPro Premium está disponible en línea?", "Sí. Puedes visitar stockpro.ml para conocer la plataforma. Su sitio oficial presenta las funciones y los planes disponibles."],
        ["¿Puedo pedir una demostración de VestiFlow?", "Sí. Contacta con BTDIGIT por WhatsApp para hablar del software Windows y organizar una presentación."],
        ["¿Cómo puedo solicitar un presupuesto?", "Describe tu proyecto en el formulario de contacto. Tu mensaje se prepara para WhatsApp sin almacenar tus datos en esta web."],
      ],
    },
    contact: {
      eyebrow: "Construyamos algo juntos", title1: "Tu próximo proyecto", title2: "empieza aquí.",
      intro: "¿Necesitas una web, una aplicación o un software de gestión? Hablemos de lo que quieres crear.",
      location: "Ubicación", formTitle: "Cuéntanos tu idea",
      formIntro: "Una solicitud sencilla enviada directamente por WhatsApp.",
      name: "Tu nombre", namePlaceholder: "Nombre completo",
      company: "Empresa", companyPlaceholder: "Opcional",
      email: "Tu correo", emailPlaceholder: "tu@ejemplo.com",
      need: "¿Qué necesitas?", choose: "Selecciona un servicio",
      needOptions: ["Creación de sitios web", "Aplicación web o PWA", "Software de gestión", "Desarrollo a medida", "Otro"],
      message: "Tu proyecto", messagePlaceholder: "Describe brevemente lo que deseas crear...",
      send: "Enviar por WhatsApp",
      privacy: "Este formulario no almacena datos en nuestro sitio. Prepara un mensaje de WhatsApp que tú decides enviar.",
      whatsappIntro: "Hola BTDIGIT, me gustaría hablar sobre un proyecto.",
      whatsappAbout: "Hola BTDIGIT, me gustaría obtener información sobre",
      formFields: ["Nombre", "Empresa", "Servicio", "Correo"],
      unspecified: "Sin especificar",
    },
    sectors: {
      "eyebrow": "Cada sector merece visibilidad",
      "title1": "Sea cual sea tu negocio,",
      "title2": "haz destacar tu empresa.",
      "intro": "Construcción, hostelería, transporte o comercio general: BTDIGIT te ayuda a presentar tus servicios, generar confianza y facilitar el contacto.",
      "focus": "SOLUCIONES PARA TU NEGOCIO",
      "cta": "Hablemos de tu actividad",
      "carouselLabel": "Soluciones por sector de actividad",
      "previous": "Sector anterior",
      "next": "Sector siguiente",
      "items": [
        {
          "title": "Construcción y obras",
          "description": "Muestra tus proyectos y experiencia con una web profesional que inspire confianza a futuros clientes.",
          "benefit": "Galería de proyectos, solicitudes de presupuesto y contacto directo."
        },
        {
          "title": "Hoteles y restaurantes",
          "description": "Presenta habitaciones, servicios, menús o espacios con una web elegante y adaptada al móvil.",
          "benefit": "Más visibilidad y consultas de reserva sencillas."
        },
        {
          "title": "Transporte y logística",
          "description": "Destaca tus servicios, destinos o flota para que tus clientes te encuentren fácilmente.",
          "benefit": "Ofertas claras, solicitudes de presupuesto y contacto rápido."
        },
        {
          "title": "Comercio general",
          "description": "Presenta tus productos y facilita las consultas de pedido con un catálogo moderno.",
          "benefit": "Catálogo, visibilidad y mejores relaciones con clientes."
        }
      ]
    },
    partners: {
      "nav": "Socios",      "eyebrow": "Crecemos con nuestros aliados",
      "title1": "Relaciones que importan.",
      "title2": "Nuestros socios.",
      "intro": "Conoce a las empresas con las que colaboramos.",
      "carouselLabel": "Carrusel de socios",
      "previous": "Socio anterior",
      "next": "Socio siguiente",
      "partnerLabel": "SOCIO",
      "relationship": "Socio de BTDIGIT",
      "visit": "Visitar su web",
      "note": "Los logotipos pertenecen a sus respectivas marcas.",
      "items": [
        {
          "description": "MSF-SARL, socio de BTDIGIT."
        },
        {
          "description": "Horizon Visa & Immo, socio que ofrece servicios de visados, viajes e inmobiliaria."
        }
      ]
    },
    support: {
      "trigger": "Ayuda",
      "open": "Abrir soporte BTDIGIT",
      "title": "¿Cómo podemos ayudarte?",
      "intro": "Elige cómo deseas ponerte en contacto.",
      "close": "Cerrar soporte",
      "call": "Llamar",
      "whatsapp": "WhatsApp",
      "whatsappSub": "Habla directamente con nuestro equipo",
      "write": "Enviar un mensaje",
      "help": "Abrir el centro de ayuda",
      "safety": "Nunca compartas contraseñas ni códigos de verificación de pagos."
    },
    footer: {
      intro: "Sitios web, aplicaciones y software de gestión. Tecnología al servicio de tus objetivos.",
      explore: "Explorar", find: "Encuéntranos", rights: "Todos los derechos reservados.",
      signature: "Creado con pasión en Bamako, Mali.",
    },
  },
};

export function getTranslation(code) {
  return translations[code] || translations.fr;
}
