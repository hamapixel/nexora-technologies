import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Boxes, Check, ChevronDown, Code2,
  Database, ExternalLink, Globe2, Github, Laptop, Layers3, Mail, MapPin,
  Menu, MessageCircle, MonitorSmartphone, Moon, Package, Phone, Rocket,
  ShieldCheck, Shirt, Sparkles, Sun, Workflow, X,
} from "lucide-react";

const BASE = import.meta.env.BASE_URL;
const WHATSAPP = "22374980744";
const EMAIL = "hamaatraore@gmail.com";

const projects = [
  {
    id: "stockpro",
    number: "01",
    type: "SaaS · Gestion commerciale",
    title: "StockPro Premium",
    description: "Une plateforme de gestion commerciale conçue pour aider les entreprises à piloter leurs opérations depuis un seul espace.",
    features: ["Stocks & multi-dépôts", "Ventes, achats & caisse", "Factures & suivi client"],
    status: "Plateforme en ligne",
    url: "https://stockpro.ml/",
    action: "Visiter StockPro",
  },
  {
    id: "vestiflow",
    number: "02",
    type: "Logiciel Windows · Commerce textile",
    title: "VestiFlow",
    description: "Un logiciel de vente d'habits pensé pour le quotidien des boutiques : gestion des articles, encaissement et tickets de caisse.",
    features: ["Vente en boutique", "Gestion des articles", "Tickets & base locale"],
    status: "Logiciel de bureau",
    action: "Demander une démonstration",
  },
  {
    id: "horizon",
    number: "03",
    type: "Site web · Projet client",
    title: "Horizon Visa & Immo",
    description: "Conception d'un site professionnel pour présenter les activités d'Horizon Visa & Immo autour des visas et de l'immobilier.",
    features: ["Présence en ligne", "Présentation des services", "Expérience responsive"],
    status: "Réalisation client",
    action: "Parler d'un site similaire",
  },
];

const services = [
  { icon: Code2, number: "01", title: "Sites web professionnels", description: "Des sites vitrines rapides, élégants et conçus pour inspirer confiance." },
  { icon: MonitorSmartphone, number: "02", title: "Applications web & PWA", description: "Des outils accessibles sur téléphone et ordinateur, adaptés à chaque activité." },
  { icon: Database, number: "03", title: "Logiciels de gestion", description: "Stocks, ventes, caisse, facturation et processus métier réunis dans une interface claire." },
  { icon: Workflow, number: "04", title: "Solutions sur mesure", description: "Du besoin métier au déploiement, des solutions conçues pour votre fonctionnement réel." },
];

const process = [
  { number: "01", title: "Comprendre", description: "Écouter votre activité, vos contraintes et vos objectifs." },
  { number: "02", title: "Concevoir", description: "Définir un parcours fluide et une identité visuelle cohérente." },
  { number: "03", title: "Développer", description: "Construire une solution propre, rapide et maintenable." },
  { number: "04", title: "Accompagner", description: "Tester, mettre en ligne et améliorer selon les retours." },
];

const questions = [
  { q: "Quels types de projets réalisez-vous ?", a: "Nous réalisons des sites web professionnels, applications web, PWA et logiciels de gestion adaptés aux besoins des entreprises et des commerces." },
  { q: "StockPro Premium est-il accessible en ligne ?", a: "Oui. Vous pouvez découvrir la plateforme sur stockpro.ml. Les fonctionnalités et formules disponibles sont présentées sur son site officiel." },
  { q: "Peut-on demander une démonstration de VestiFlow ?", a: "Oui. Contactez Nexora par WhatsApp pour discuter du logiciel Windows et organiser une présentation." },
  { q: "Comment obtenir un devis pour mon entreprise ?", a: "Présentez votre projet dans le formulaire de contact. Votre demande est préparée pour WhatsApp, sans enregistrement sur ce site vitrine." },
];

function Brand({ onClick }) {
  return (
    <a className="brand" href="#accueil" onClick={onClick} aria-label="Nexora Technologies, retour à l'accueil">
      <img className="brand-symbol" src={BASE + "nexora-symbol.svg"} alt="" width="46" height="46" />
      <span className="brand-words"><strong>NEXORA</strong><small>TECHNOLOGIES</small></span>
    </a>
  );
}

function Eyebrow({ children }) {
  return <span className="eyebrow"><span className="eyebrow-dot" />{children}</span>;
}

function ProjectArtwork({ type }) {
  if (type === "stockpro") {
    return (
      <div className="project-art project-art-stock">
        <div className="art-browser"><span /><span /><span /><em>StockPro Premium</em></div>
        <div className="art-stock-body">
          <div className="art-rail"><span /><span /><span /><span /></div>
          <div className="art-stock-content">
            <div className="art-small-title">Vue d'ensemble</div>
            <div className="art-stat-row">
              <div><small>Stock</small><Boxes size={19} /><b>Produits</b></div>
              <div><small>Ventes</small><ArrowUpRight size={19} /><b>Suivi</b></div>
              <div><small>Gestion</small><ShieldCheck size={19} /><b>Contrôle</b></div>
            </div>
            <div className="art-chart">
              <div className="art-chart-head"><span>Activité commerciale</span><span>↗</span></div>
              <svg viewBox="0 0 440 100" preserveAspectRatio="none" aria-hidden="true">
                <defs><linearGradient id="stock-fill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#489aff" stopOpacity=".28"/><stop offset="1" stopColor="#489aff" stopOpacity="0"/></linearGradient></defs>
                <path d="M0 82C35 80 45 53 83 62S148 91 187 53 255 78 299 35 369 52 440 11V100H0Z" fill="url(#stock-fill)"/>
                <path d="M0 82C35 80 45 53 83 62S148 91 187 53 255 78 299 35 369 52 440 11" fill="none" stroke="#58a5ff" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
        <span className="art-note">Illustration d'interface</span>
      </div>
    );
  }
  if (type === "vestiflow") {
    return (
      <div className="project-art project-art-vesti">
        <div className="vesti-window">
          <div className="vesti-head"><span><Shirt size={16}/> VestiFlow</span><span className="window-controls">— □ ×</span></div>
          <div className="vesti-title">Point de vente <span>Nouvelle vente</span></div>
          <div className="vesti-items">
            <div className="vesti-product"><span className="vesti-garment garment-one"><Shirt size={23}/></span><i /><i /></div>
            <div className="vesti-product"><span className="vesti-garment garment-two"><Shirt size={23}/></span><i /><i /></div>
            <div className="vesti-product"><span className="vesti-garment garment-three"><Shirt size={23}/></span><i /><i /></div>
          </div>
          <div className="vesti-bottom"><span>Panier & encaissement</span><strong>Valider la vente <ArrowRight size={14}/></strong></div>
        </div>
        <span className="art-note">Illustration d'interface</span>
      </div>
    );
  }
  return (
    <div className="project-art project-art-horizon">
      <div className="horizon-window">
        <div className="horizon-top"><span className="horizon-brand">HORIZON <b>VISA & IMMO</b></span><span>Accueil &nbsp; Services &nbsp; Contact</span></div>
        <div className="horizon-content">
          <span>VOTRE AVENIR, NOTRE HORIZON</span>
          <strong>Voyagez plus loin.<br/>Imaginez demain.</strong>
          <div className="horizon-buttons"><i>Découvrir les services</i><i>Nous contacter</i></div>
        </div>
        <div className="horizon-globe"><Globe2 size={116} strokeWidth={0.65} /></div>
      </div>
      <span className="art-note">Concept visuel illustratif</span>
    </div>
  );
}

function ProjectCard({ project }) {
  const isExternal = !!project.url;
  const href = project.url || "https://wa.me/" + WHATSAPP + "?text=" +
    encodeURIComponent("Bonjour Nexora Technologies, je souhaite en savoir plus sur " + project.title + ".");
  return (
    <article className={"project-card project-" + project.id}>
      <div className="project-media"><ProjectArtwork type={project.id}/></div>
      <div className="project-detail">
        <div className="project-meta"><span>{project.type}</span><span>{project.number} / 03</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>{project.features.map((feature) => <li key={feature}><Check size={15}/>{feature}</li>)}</ul>
        <div className="project-bottom">
          <span className="project-status"><span />{project.status}</span>
          <a className="project-action" href={href} target="_blank" rel="noopener noreferrer" aria-label={project.action + " — " + project.title}>{project.action}{isExternal ? <ExternalLink size={16}/> : <ArrowUpRight size={18}/>}</a>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("nexora-theme") !== "light"; } catch { return true; }
  });
  useEffect(() => {
    try { localStorage.setItem("nexora-theme", dark ? "dark" : "light"); } catch { /* stockage indisponible */ }
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  }, [dark]);
  useEffect(() => {
    const closeOnEscape = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
  useEffect(() => {
    document.body.classList.toggle("menu-locked", menuOpen);
    return () => document.body.classList.remove("menu-locked");
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  const year = new Date().getFullYear();

  const sendContact = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Bonjour Nexora Technologies, je souhaite discuter d'un projet.",
      "",
      "Nom : " + (data.get("name") || ""),
      "Entreprise : " + (data.get("company") || "Non précisée"),
      "Service : " + (data.get("service") || ""),
      "Email : " + (data.get("email") || "Non précisé"),
      "",
      String(data.get("message") || ""),
    ].join("\n");
    window.location.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(message);
  };

  return (
    <div className={"site " + (dark ? "theme-dark" : "theme-light")}>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <header className="header">
        <div className="container nav-inner">
          <Brand onClick={closeMenu}/>
          <nav className={"navigation " + (menuOpen ? "is-open" : "")} id="site-navigation" aria-label="Navigation principale">
            <a href="#accueil" onClick={closeMenu}>Accueil</a>
            <a href="#realisations" onClick={closeMenu}>Réalisations</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#apropos" onClick={closeMenu}>À propos</a>
            <a className="nav-mobile-contact" href="#contact" onClick={closeMenu}>Contact <ArrowRight size={16}/></a>
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle" type="button" onClick={() => setDark(!dark)} title={dark ? "Activer le mode clair" : "Activer le mode sombre"} aria-label={dark ? "Activer le mode clair" : "Activer le mode sombre"}>{dark ? <Sun size={19}/> : <Moon size={19}/>}</button>
            <a className="nav-contact" href="#contact">Démarrer un projet <ArrowUpRight size={17}/></a>
            <button className="mobile-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-controls="site-navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={24}/> : <Menu size={24}/>}</button>
          </div>
        </div>
      </header>

      <main id="contenu">
        <section className="hero" id="accueil">
          <div className="hero-grid" aria-hidden="true"/>
          <div className="container hero-layout">
            <div className="hero-copy">
              <Eyebrow>Studio digital · Bamako, Mali</Eyebrow>
              <h1>Des idées ambitieuses.<br/><span>Des solutions</span><br/>qui prennent vie.</h1>
              <p className="hero-description">Nexora Technologies conçoit des sites web et logiciels métier professionnels. Pas seulement des promesses : découvrez des réalisations concrètes, pensées pour les entreprises et les commerces.</p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="#realisations">Explorer nos réalisations <ArrowUpRight size={19}/></a>
                <a className="btn btn-outline" href="#contact">Discutons de votre projet <ArrowRight size={18}/></a>
              </div>
              <div className="hero-footnotes">
                <span><BadgeCheck size={17}/> Projets réels</span>
                <span><ShieldCheck size={17}/> Solutions adaptées</span>
                <span><MapPin size={17}/> Créé au Mali</span>
              </div>
            </div>
            <div className="hero-showcase" aria-label="Présentation illustrée de nos réalisations">
              <div className="showcase-halo" aria-hidden="true"/>
              <div className="showcase-main">
                <div className="showcase-top"><span><span className="showcase-signal"/> NEXORA / PORTFOLIO</span><span>2026</span></div>
                <div className="showcase-identity"><img src={BASE + "nexora-symbol.svg"} alt="" width="76" height="76"/><div><small>DESIGN • CODE • IMPACT</small><strong>Le digital, pensé<br/>pour le réel.</strong></div></div>
                <div className="showcase-list">
                  <div><span className="showcase-list-icon icon-stock"><Boxes size={20}/></span><span><strong>StockPro Premium</strong><small>SaaS de gestion commerciale</small></span><ArrowUpRight size={17}/></div>
                  <div><span className="showcase-list-icon icon-vesti"><Shirt size={20}/></span><span><strong>VestiFlow</strong><small>Logiciel de vente textile</small></span><ArrowUpRight size={17}/></div>
                  <div><span className="showcase-list-icon icon-horizon"><Globe2 size={20}/></span><span><strong>Horizon Visa & Immo</strong><small>Site web professionnel</small></span><ArrowUpRight size={17}/></div>
                </div>
              </div>
              <div className="showcase-tag tag-top"><Sparkles size={17}/> Identité digitale</div>
              <div className="showcase-tag tag-bottom"><span>03</span><small>réalisations<br/>à découvrir</small></div>
            </div>
          </div>
          <div className="container hero-marquee" aria-label="Nos domaines d'expertise"><span>UNE EXPERTISE CONCRÈTE</span><span>Sites web <i/> Logiciels métier <i/> Applications web <i/> Design d'interfaces</span></div>
        </section>

        <section className="section portfolio-section" id="realisations">
          <div className="container">
            <div className="section-head portfolio-heading">
              <div><Eyebrow>Notre portfolio</Eyebrow><h2>Du concret.<br/><span>Pas seulement des concepts.</span></h2></div>
              <p>Trois projets qui illustrent notre savoir-faire : une plateforme SaaS, un logiciel de bureau et un site web client.</p>
            </div>
            <div className="portfolio-grid">{projects.map((project) => <ProjectCard project={project} key={project.id}/>)}</div>
            <p className="portfolio-caption"><Sparkles size={16}/> Les visuels des projets sont des illustrations de présentation et non des captures d'écran officielles.</p>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-head"><div><Eyebrow>Nos expertises</Eyebrow><h2>La bonne technologie.<br/><span>Pour vos vrais besoins.</span></h2></div><p>Nous associons conception, développement et sens du détail pour vous donner des outils utiles, beaux et faciles à utiliser.</p></div>
            <div className="services-grid">
              {services.map(({ icon: Icon, number, title, description }) => (
                <article className="service-card" key={number}>
                  <div className="service-card-top"><span>{number}</span><span className="service-icon"><Icon size={24}/></span></div>
                  <h3>{title}</h3><p>{description}</p><a href="#contact" aria-label={"Demander un devis : " + title}>Parlons-en <ArrowUpRight size={17}/></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="apropos">
          <div className="container about-grid">
            <div className="about-image-block">
              <div className="about-image-surface"><img src={BASE + "NEXO.webp"} alt="Univers visuel de Nexora Technologies" loading="lazy"/></div>
              <div className="about-stamp"><span><img src={BASE + "nexora-symbol.svg"} alt=""/></span><strong>Made with purpose.</strong><small>Créativité & rigueur technique</small></div>
            </div>
            <div className="about-content">
              <Eyebrow>À propos de Nexora</Eyebrow>
              <h2>Une passion pour le code. <span>Un engagement pour vos projets.</span></h2>
              <p>Nexora Technologies est une activité de développement digital basée à Bamako. Notre objectif : rendre les technologies modernes accessibles aux entreprises, avec des solutions qui répondent à leurs usages quotidiens.</p>
              <p>De StockPro Premium à VestiFlow, nous privilégions une expérience claire, une architecture solide et une identité visuelle soignée.</p>
              <div className="about-values"><div><Check size={18}/><span>Écoute des besoins métier</span></div><div><Check size={18}/><span>Design responsive et accessible</span></div><div><Check size={18}/><span>Conception et développement soignés</span></div></div>
              <a className="text-link" href="#contact">Construisons votre solution <ArrowUpRight size={18}/></a>
            </div>
          </div>
        </section>

        <section className="section method-section">
          <div className="container">
            <div className="section-head"><div><Eyebrow>Notre méthode</Eyebrow><h2>De l'idée à <span>la réalisation.</span></h2></div><p>Un projet réussi commence par la compréhension de votre activité et se construit avec vous, étape par étape.</p></div>
            <div className="process-grid">{process.map((step) => <div className="process-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></div>)}</div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <div className="faq-intro"><Eyebrow>Questions fréquentes</Eyebrow><h2>Un projet en tête ?<br/><span>On vous répond.</span></h2><p>Quelques réponses aux questions qui reviennent le plus souvent.</p><a href="#contact" className="text-link">Nous contacter <ArrowUpRight size={18}/></a></div>
            <div className="faq-list">
              {questions.map(({ q, a }, index) => <article className={"faq-item " + (activeFaq === index ? "faq-active" : "")} key={q}><button type="button" onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} aria-expanded={activeFaq === index}><span>{q}</span><ChevronDown size={20}/></button>{activeFaq === index && <p>{a}</p>}</article>)}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy"><Eyebrow>Créons quelque chose ensemble</Eyebrow><h2>Votre prochain projet <span>commence ici.</span></h2><p>Vous avez besoin d'un site web, d'une application ou d'un logiciel pour votre entreprise ? Parlons de ce que vous souhaitez construire.</p>
              <div className="contact-links">
                <a href={"https://wa.me/" + WHATSAPP} target="_blank" rel="noopener noreferrer"><span><MessageCircle size={20}/></span><span><small>WhatsApp</small><strong>+223 74 98 07 44</strong></span><ArrowUpRight size={18}/></a>
                <a href={"mailto:" + EMAIL}><span><Mail size={20}/></span><span><small>Email</small><strong>{EMAIL}</strong></span><ArrowUpRight size={18}/></a>
                <div><span><MapPin size={20}/></span><span><small>Localisation</small><strong>Bamako, Mali</strong></span></div>
              </div>
            </div>
            <form className="contact-form" onSubmit={sendContact}>
              <div className="form-heading"><h3>Parlez-nous de votre idée</h3><p>Une demande simple, envoyée directement sur WhatsApp.</p></div>
              <div className="form-row"><label>Votre nom <input type="text" name="name" placeholder="Nom complet" required maxLength={100}/></label><label>Entreprise <input name="company" placeholder="Facultatif" maxLength={100}/></label></div>
              <label>Votre email <input type="email" name="email" placeholder="vous@exemple.com" maxLength={150}/></label>
              <label>Votre besoin <select name="service" required defaultValue=""><option value="" disabled>Sélectionnez un service</option><option>Création de site web</option><option>Application web ou PWA</option><option>Logiciel de gestion</option><option>Développement sur mesure</option><option>Autre</option></select></label>
              <label>Votre projet <textarea name="message" placeholder="Décrivez votre besoin en quelques phrases..." rows={4} minLength={10} maxLength={2000} required/></label>
              <button className="btn btn-primary contact-submit" type="submit">Envoyer via WhatsApp <ArrowUpRight size={19}/></button>
              <small className="privacy-note">Ce formulaire n'enregistre aucune donnée sur notre site. Il prépare un message WhatsApp que vous choisissez d'envoyer.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top"><div><Brand/><p>Sites web, applications et logiciels de gestion. La technologie au service de vos ambitions.</p></div><div className="footer-column"><strong>Explorer</strong><a href="#realisations">Réalisations</a><a href="#services">Services</a><a href="#apropos">À propos</a><a href="#faq">FAQ</a></div><div className="footer-column"><strong>Nous retrouver</strong><a href="https://stockpro.ml/" target="_blank" rel="noopener noreferrer">StockPro Premium <ExternalLink size={13}/></a><a href="https://github.com/hamapixel" target="_blank" rel="noopener noreferrer">GitHub <Github size={14}/></a><a href={"mailto:" + EMAIL}>Email <Mail size={14}/></a></div></div>
        <div className="container footer-bottom"><span>© {year} Nexora Technologies. Tous droits réservés.</span><span>Conçu avec passion à Bamako, Mali.</span></div>
      </footer>
      <a className="floating-whatsapp" href={"https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent("Bonjour Nexora Technologies, j'aimerais discuter d'un projet.")} target="_blank" rel="noopener noreferrer" aria-label="Contacter Nexora Technologies sur WhatsApp"><MessageCircle size={23}/></a>
    </div>
  );
}
