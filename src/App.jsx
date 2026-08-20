import {
  ArrowRight,
  Boxes,
  Building2,
  CheckCircle2,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  Github,
  Globe2,
  HeartPulse,
  Layers3,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Moon,
  PackageSearch,
  Rocket,
  School,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const services = [
  {
    icon: Code2,
    title: "Développement sur mesure",
    text: "Applications métier pensées autour de vos processus, de vos équipes et de votre croissance.",
  },
  {
    icon: MonitorSmartphone,
    title: "Applications web & PWA",
    text: "Interfaces rapides, élégantes et responsives sur téléphone, tablette et ordinateur.",
  },
  {
    icon: Database,
    title: "Systèmes de gestion",
    text: "Stock, ventes, caisse, clients, rapports, automatisations et données centralisées.",
  },
  {
    icon: ShieldCheck,
    title: "Architecture & sécurité",
    text: "Séparation des accès, traçabilité, contrôle des rôles et fondations robustes pour la production.",
  },
  {
    icon: Layers3,
    title: "Modernisation digitale",
    text: "Transformation de tâches manuelles en workflows numériques plus simples et mesurables.",
  },
  {
    icon: Rocket,
    title: "Accompagnement produit",
    text: "De l’idée à la mise en ligne : conception, identité, expérience utilisateur et évolution.",
  },
];

const products = [
  {
    icon: Boxes,
    badge: "Produit phare",
    title: "StockPro Premium",
    text: "Gestion commerciale multi-entreprises : stock, ventes, achats, caisse, dettes, documents et rapports.",
    status: "En développement avancé",
  },
  {
    icon: School,
    badge: "Education",
    title: "Nexora School",
    text: "Une vision moderne de la gestion scolaire : élèves, notes, bulletins, présence et suivi académique.",
    status: "Roadmap",
  },
  {
    icon: HeartPulse,
    badge: "HealthTech",
    title: "Nexora Blood",
    text: "Traçabilité du don, prélèvement, analyses, stock sanguin et distribution pour centres de santé.",
    status: "Concept produit",
  },
];

const faqs = [
  {
    q: "Nexora Technologies développe quel type de solutions ?",
    a: "Nous concevons principalement des applications web, PWA et logiciels de gestion adaptés aux besoins opérationnels des entreprises et organisations.",
  },
  {
    q: "Vos applications fonctionnent-elles sur téléphone ?",
    a: "Oui. L’expérience mobile fait partie de la conception dès le départ : navigation claire, boutons adaptés au tactile et absence de débordement horizontal.",
  },
  {
    q: "Pouvez-vous créer une application spécifique à mon activité ?",
    a: "Oui. Nous pouvons partir de votre métier, analyser vos opérations puis créer une solution sur mesure ou adapter une base existante.",
  },
  {
    q: "Est-ce que Nexora peut accompagner un projet après sa mise en ligne ?",
    a: "Oui. Une application professionnelle doit évoluer : corrections, sécurité, nouvelles fonctionnalités et améliorations d’expérience peuvent être prévues dans l’accompagnement.",
  },
  {
    q: "Comment demander une démonstration ou un devis ?",
    a: "Utilisez la section Contact. Le formulaire prépare votre demande et l’envoie directement vers WhatsApp.",
  },
];

const navigation = [
  ["#accueil", "Accueil"],
  ["#services", "Services"],
  ["#produits", "Produits"],
  ["#apropos", "À propos"],
  ["#faq", "FAQ"],
  ["#contact", "Contact"],
];

function Logo() {
  return (
    <a href="#accueil" className="brand" aria-label="Nexora Technologies - Accueil">
      <span className="brand-mark" aria-hidden="true">
        <span>N</span>
      </span>
      <span className="brand-copy">
        <strong>NEXORA</strong>
        <small>TECHNOLOGIES</small>
      </span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <div className={`section-heading ${centered ? "is-centered" : ""}`}>
      <span className="eyebrow">
        <Sparkles size={15} />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function ThemeSwitch({ isDark, onToggle }) {
  return (
    <button
      type="button"
      className="theme-switch"
      onClick={onToggle}
      aria-label={isDark ? "Passer au mode jour" : "Passer au mode nuit"}
      aria-pressed={isDark}
      title={isDark ? "Mode jour" : "Mode nuit"}
    >
      <span className="theme-switch-icon theme-switch-sun" aria-hidden="true">
        <Sun size={15} />
      </span>
      <span className="theme-switch-icon theme-switch-moon" aria-hidden="true">
        <Moon size={15} />
      </span>
      <span className="theme-switch-thumb" aria-hidden="true">
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </span>
    </button>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = window.localStorage.getItem("nexora-theme");
    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
  });

  const year = useMemo(() => new Date().getFullYear(), []);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    window.localStorage.setItem("nexora-theme", isDark ? "dark" : "light");
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  }, [isDark]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 880px)");
    const syncBody = () => {
      document.body.style.overflow = menuOpen && media.matches ? "hidden" : "";
    };

    syncBody();
    media.addEventListener?.("change", syncBody);

    return () => {
      document.body.style.overflow = "";
      media.removeEventListener?.("change", syncBody);
    };
  }, [menuOpen]);

  const submitContact = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const body = [
      "Bonjour Nexora Technologies,",
      "",
      `Nom : ${data.get("name") || ""}`,
      `Entreprise : ${data.get("company") || "Non précisée"}`,
      `Email : ${data.get("email") || ""}`,
      `Besoin : ${data.get("service") || ""}`,
      "",
      `${data.get("message") || ""}`,
    ].join("\n");

    const whatsappNumber = "22374980744";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className={`site ${isDark ? "theme-dark" : "theme-light"}`}>
      <header className="header">
        <div className="container nav-wrap">
          <Logo />

          <nav
            className={`nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Navigation principale"
          >
            {navigation.map(([href, label]) => (
              <a key={href} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}

            <a href="#contact" className="nav-cta" onClick={closeMenu}>
              Parlons de votre projet
              <ArrowRight size={16} />
            </a>
          </nav>

          <div className="header-actions">
            <ThemeSwitch isDark={isDark} onToggle={() => setIsDark((value) => !value)} />

            <button
              type="button"
              className="menu-button"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="hero-pill">
                <span className="pulse-dot" />
                Software • Innovation • Digital
              </span>

              <h1>
                Nous construisons des <span>logiciels qui font avancer</span> les entreprises.
              </h1>

              <p>
                Nexora Technologies transforme des besoins métier complexes en produits
                numériques modernes, sécurisés, rapides et simples à utiliser.
              </p>

              <div className="hero-actions">
                <a href="#produits" className="button button-primary">
                  Découvrir nos solutions
                  <ArrowRight size={18} />
                </a>
                <a href="#contact" className="button button-secondary">
                  Démarrer un projet
                </a>
              </div>

              <div className="hero-trust">
                <div><ShieldCheck size={18} /> Architecture sécurisée</div>
                <div><MonitorSmartphone size={18} /> 100% responsive</div>
                <div><Zap size={18} /> Expérience rapide</div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Aperçu de l’univers Nexora">
              <div className="visual-glow" />

              <div className="dashboard-shell">
                <div className="dashboard-top">
                  <div className="mini-brand">
                    <span className="mini-mark">N</span>
                    Nexora OS
                  </div>
                  <span className="online-dot">Live</span>
                </div>

                <div className="dashboard-content">
                  <aside className="dashboard-side" aria-hidden="true">
                    <span className="side-item active" />
                    <span className="side-item" />
                    <span className="side-item" />
                    <span className="side-item short" />
                  </aside>

                  <div className="dashboard-main">
                    <div className="dash-hero-card">
                      <span>Smart business software</span>
                      <strong>Build. Scale. Grow.</strong>
                    </div>

                    <div className="metric-grid">
                      <div className="metric-card">
                        <span className="metric-icon"><PackageSearch size={17} /></span>
                        <small>Stock</small>
                        <strong>2,480</strong>
                      </div>
                      <div className="metric-card">
                        <span className="metric-icon violet"><Cpu size={17} /></span>
                        <small>Automations</small>
                        <strong>128</strong>
                      </div>
                      <div className="metric-card">
                        <span className="metric-icon cyan"><Globe2 size={17} /></span>
                        <small>Disponibilité</small>
                        <strong>24/7</strong>
                      </div>
                    </div>

                    <div className="graph-card">
                      <div className="graph-labels">
                        <span>Performance</span>
                        <strong>+38%</strong>
                      </div>
                      <svg viewBox="0 0 420 110" role="img" aria-label="Courbe de performance">
                        <path
                          d="M4 89 C58 95 64 58 118 67 S178 44 224 51 S290 20 340 29 S382 8 416 14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-card floating-card-one">
                <span><ShieldCheck size={18} /></span>
                <div>
                  <strong>Secure by design</strong>
                  <small>Contrôle & traçabilité</small>
                </div>
              </div>

              <div className="floating-card floating-card-two">
                <span><Rocket size={18} /></span>
                <div>
                  <strong>Ready to scale</strong>
                  <small>Architecture évolutive</small>
                </div>
              </div>
            </div>
          </div>

          <div className="container logo-strip">
            <span>Des solutions pensées pour</span>
            <strong>Commerce</strong>
            <strong>Éducation</strong>
            <strong>Santé</strong>
            <strong>PME</strong>
            <strong>Services</strong>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <SectionHeading
              centered
              eyebrow="Nos services"
              title="La technologie utile, du besoin à la mise en production."
              text="Chaque écran, automatisation et règle métier doit résoudre un vrai problème."
            />

            <div className="service-grid">
              {services.map(({ icon: Icon, title, text }, index) => (
                <article className="service-card" key={title}>
                  <div className="service-top">
                    <span className="service-number">0{index + 1}</span>
                    <span className="service-icon"><Icon size={22} /></span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="service-link">
                    En savoir plus <ArrowRight size={15} />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section products-section" id="produits">
          <div className="container">
            <div className="products-heading-row">
              <SectionHeading
                eyebrow="Produits"
                title="Un écosystème de logiciels signé Nexora."
                text="Des produits capables de grandir avec leurs utilisateurs, avec une attention forte portée à la sécurité, au mobile et à la simplicité."
              />

              <div className="product-heading-badge">
                <Sparkles size={18} />
                Nexora Product Lab
              </div>
            </div>

            <div className="product-grid">
              {products.map(({ icon: Icon, badge, title, text, status }, index) => (
                <article
                  className={`product-card ${index === 0 ? "featured" : ""}`}
                  key={title}
                >
                  <div className="product-card-head">
                    <span className="product-icon"><Icon size={28} /></span>
                    <span className="product-badge">{badge}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="product-footer">
                    <span><CheckCircle2 size={16} /> {status}</span>
                    <span className="product-arrow" aria-hidden="true"><ArrowRight size={18} /></span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="apropos">
          <div className="container about-grid">
            <div className="about-copy">
              <SectionHeading
                eyebrow="À propos"
                title="Nexora Technologies, une vision tournée vers des logiciels plus intelligents."
                text="Nous voulons rendre la technologie professionnelle plus accessible, plus claire et mieux adaptée aux réalités des organisations."
              />

              <div className="about-points">
                {[
                  ["Construire pour durer", "Des fondations propres avant les effets visuels et les fonctionnalités secondaires."],
                  ["Concevoir d’abord pour l’utilisateur", "Une application doit rester compréhensible même lorsque le métier devient complexe."],
                  ["Penser mobile dès le premier écran", "Pas de version téléphone bricolée à la fin : le responsive fait partie du produit."],
                ].map(([title, text]) => (
                  <div key={title}>
                    <span><CheckCircle2 /></span>
                    <div>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href="#contact" className="text-button">
                Construisons quelque chose de solide
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="founder-visual">
              <span className="shape shape-circle" aria-hidden="true" />
              <span className="shape shape-square" aria-hidden="true" />
              <span className="shape shape-dots" aria-hidden="true" />

              <div className="portrait-frame">
                <img
                  src={`${import.meta.env.BASE_URL}NEXO.webp`}
                  alt="Fondateur de Nexora Technologies"
                  className="portrait-image"
                  loading="lazy"
                />
              </div>

              <div className="founder-card">
                <small>Founder / Technology</small>
                <strong>Nexora Technologies</strong>
                <span>
                  Une vision : créer des produits numériques propres, utiles, sécurisés et prêts à évoluer.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section tech-section">
          <div className="container tech-panel">
            <div>
              <span className="eyebrow eyebrow-dark">
                <Cpu size={15} />
                Notre approche
              </span>
              <h2>Modernes à l’extérieur. Solides à l’intérieur.</h2>
              <p>
                Design premium, architecture claire, données structurées et expérience adaptée
                aux environnements réels.
              </p>
            </div>

            <div className="tech-tags">
              {["React", "Django", "PostgreSQL", "PWA", "REST", "Security", "Responsive UI", "Automation"].map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro">
              <SectionHeading
                eyebrow="FAQ"
                title="Les réponses avant même de nous écrire."
                text="Une question sur nos solutions, notre méthode ou un futur projet ?"
              />

              <div className="faq-help">
                <span><MessageCircle /></span>
                <div>
                  <strong>Une autre question ?</strong>
                  <p>Notre espace contact est juste en dessous.</p>
                </div>
              </div>
            </div>

            <div className="accordion">
              {faqs.map((item, index) => {
                const isOpen = index === openFaq;
                return (
                  <article className={`faq-item ${isOpen ? "is-open" : ""}`} key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <ChevronDown size={20} />
                    </button>
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-orb" aria-hidden="true" />

          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="eyebrow eyebrow-dark">
                <MessageCircle size={15} />
                Contact
              </span>
              <h2>Une idée, un besoin, un projet ? Parlons-en.</h2>
              <p>
                Décrivez votre activité et le problème que vous souhaitez résoudre. Nexora pourra
                ensuite proposer une direction claire.
              </p>

              <div className="contact-info">
                <div>
                  <span><MessageCircle size={19} /></span>
                  <div>
                    <small>WhatsApp</small>
                    <strong>+223 74 98 07 44</strong>
                  </div>
                </div>
                <div>
                  <span><Rocket size={19} /></span>
                  <div>
                    <small>Demandes</small>
                    <strong>Projet • Démo • Devis</strong>
                  </div>
                </div>
                <div>
                  <span><Building2 size={19} /></span>
                  <div>
                    <small>Zone</small>
                    <strong>Afrique • International</strong>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={submitContact}>
              <div className="form-row">
                <label>
                  <span>Nom complet</span>
                  <input name="name" placeholder="Votre nom" required />
                </label>
                <label>
                  <span>Entreprise</span>
                  <input name="company" placeholder="Nom de l’entreprise" />
                </label>
              </div>

              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="vous@entreprise.com" required />
              </label>

              <label>
                <span>Service recherché</span>
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Choisir un service</option>
                  <option>Application de gestion</option>
                  <option>Application web / PWA</option>
                  <option>Développement sur mesure</option>
                  <option>Modernisation d’un système</option>
                  <option>Autre projet</option>
                </select>
              </label>

              <label>
                <span>Votre projet</span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Expliquez brièvement ce que vous souhaitez construire..."
                  required
                />
              </label>

              <button type="submit" className="button button-primary form-submit">
                Envoyer sur WhatsApp
                <ArrowRight size={18} />
              </button>

              <p className="form-note">
                Cette version statique n’enregistre aucune donnée sur un serveur.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>Des logiciels modernes pour construire des organisations plus efficaces.</p>
          </div>

          <div className="footer-links">
            <div>
              <strong>Navigation</strong>
              <a href="#services">Services</a>
              <a href="#produits">Produits</a>
              <a href="#apropos">À propos</a>
            </div>
            <div>
              <strong>Ressources</strong>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
              <a href="#accueil">Retour en haut</a>
            </div>
          </div>

          <div className="footer-social">
            <strong>Suivez Nexora</strong>
            <div>
              <a href="#!" aria-label="GitHub"><Github /></a>
              <a href="#contact" aria-label="Contact"><Globe2 /></a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {year} Nexora Technologies. Tous droits réservés.</span>
          <span>Built for the next generation.</span>
        </div>
      </footer>
    </div>
  );
}