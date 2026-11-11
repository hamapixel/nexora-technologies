import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Boxes, Check, ChevronDown, Code2,
  Database, ExternalLink, Globe2, Github, Mail, MapPin, Menu, MessageCircle,
  MonitorSmartphone, Moon, ShieldCheck, Shirt, Sparkles, Sun, Workflow, X,
} from "lucide-react";
import { LANGUAGES, getTranslation } from "./i18n";
import { ProjectCard } from "./ProjectArtwork";

const BASE = import.meta.env.BASE_URL;
const WHATSAPP = "22374980744";
const EMAIL = "hamaatraore@gmail.com";
const LANGUAGE_KEY = "btdigit-language";
const THEME_KEY = "btdigit-theme";
const PROJECTS = [
  { id: "stockpro", title: "StockPro Premium", url: "https://stockpro.ml/" },
  { id: "vestiflow", title: "VestiFlow", url: null },
  { id: "horizon", title: "Horizon Visa & Immo", url: null },
];
const serviceIcons = [Code2, MonitorSmartphone, Database, Workflow];
const heroIcons = [Boxes, Shirt, Globe2];

function getInitialLanguage() {
  try {
    const stored = localStorage.getItem(LANGUAGE_KEY);
    if (LANGUAGES.some(({ code }) => code === stored)) return stored;
  } catch { /* Local storage is optional */ }
  return "fr";
}

function Brand({ onClick, t }) {
  return (
    <a className="brand" href="#accueil" onClick={onClick} aria-label={t.common.brandHome}>
      <img className="brand-logo" src={BASE + "btdigit-logo.webp"} alt={"BTDIGIT — " + t.common.agency} width="205" height="74" />
    </a>
  );
}

function Eyebrow({ children }) {
  return <span className="eyebrow"><span className="eyebrow-dot" />{children}</span>;
}

function LanguageSelector({ language, onChange, t }) {
  const [open, setOpen] = useState(false);
  const container = useRef(null);
  const current = LANGUAGES.find(({ code }) => code === language) || LANGUAGES[0];

  useEffect(() => {
    if (!open) return;
    const onPointer = (event) => {
      if (!container.current?.contains(event.target)) setOpen(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="language-selector" ref={container}>
      <button
        type="button" className="language-trigger"
        aria-label={t.common.chooseLanguage + ": " + current.name}
        aria-haspopup="true" aria-expanded={open}
        onClick={() => setOpen((previous) => !previous)}
        title={t.common.chooseLanguage}
      >
        <img src={BASE + "flags/" + current.flag + ".svg"} alt="" width="23" height="16" />
        <span>{current.short}</span>
        <ChevronDown size={14} aria-hidden="true" />
      </button>
      {open && (
        <div className="language-menu" role="group" aria-label={t.common.selectLanguage}>
          {LANGUAGES.map((item) => (
            <button key={item.code} className={"language-choice" + (item.code === language ? " is-active" : "")}
              type="button" lang={item.code} aria-pressed={item.code === language}
              onClick={() => { onChange(item.code); setOpen(false); }}>
              <img src={BASE + "flags/" + item.flag + ".svg"} width="24" height="16" alt="" />
              <span>{item.name}</span>
              {item.code === language && <Check size={15} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [dark, setDark] = useState(() => {
    try {
      const current = localStorage.getItem(THEME_KEY) || localStorage.getItem("nexora-theme");
      return current !== "light";
    } catch { return true; }
  });
  const t = getTranslation(language);
  const year = new Date().getFullYear();
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    try { localStorage.setItem(LANGUAGE_KEY, language); } catch { /* Storage optional */ }
    document.documentElement.lang = language;
    document.title = t.seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.seo.description);
  }, [language, t]);

  useEffect(() => {
    try { localStorage.setItem(THEME_KEY, dark ? "dark" : "light"); } catch { /* Storage optional */ }
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-locked", menuOpen);
    return () => document.body.classList.remove("menu-locked");
  }, [menuOpen]);

  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll(
      ".portfolio-section .project-card, .services-section .service-card, .method-section .process-step, .about-section .about-content"
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -25px 0px" });
    elements.forEach((item) => {
      item.classList.add("reveal-pending");
      observer.observe(item);
    });
    return () => {
      observer.disconnect();
      elements.forEach((item) => item.classList.remove("reveal-pending", "reveal-visible"));
    };
  }, []);

  const sendContact = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const [name, company, service, email] = t.contact.formFields;
    const message = [
      t.contact.whatsappIntro,
      "",
      name + ": " + (data.get("name") || ""),
      company + ": " + (data.get("company") || t.contact.unspecified),
      service + ": " + (data.get("service") || t.contact.unspecified),
      email + ": " + (data.get("email") || t.contact.unspecified),
      "",
      String(data.get("message") || ""),
    ].join("\n");
    window.location.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(message);
  };

  return (
    <div className={"site " + (dark ? "theme-dark" : "theme-light")}>
      <a className="skip-link" href="#contenu">{t.common.skip}</a>
      <header className="header">
        <div className="container nav-inner">
          <Brand onClick={closeMenu} t={t}/>
          <nav className={"navigation " + (menuOpen ? "is-open" : "")} id="site-navigation"
            aria-label={t.common.home + ", " + t.common.portfolio + ", " + t.common.services + ", " + t.common.about}>
            <a href="#accueil" onClick={closeMenu}>{t.common.home}</a>
            <a href="#realisations" onClick={closeMenu}>{t.common.portfolio}</a>
            <a href="#services" onClick={closeMenu}>{t.common.services}</a>
            <a href="#apropos" onClick={closeMenu}>{t.common.about}</a>
            <a className="nav-mobile-contact" href="#contact" onClick={closeMenu}>{t.common.contact} <ArrowRight size={16}/></a>
          </nav>
          <div className="nav-actions">
            <LanguageSelector language={language} onChange={setLanguage} t={t}/>
            <button className="theme-toggle" type="button" onClick={() => setDark((value) => !value)}
              title={dark ? t.common.lightMode : t.common.darkMode}
              aria-label={dark ? t.common.lightMode : t.common.darkMode}>
              {dark ? <Sun size={19}/> : <Moon size={19}/>}
            </button>
            <a className="nav-contact" href="#contact">{t.banner.action} <ArrowUpRight size={17}/></a>
            <button className="mobile-menu" type="button" onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? t.common.menuClose : t.common.menuOpen}
              aria-controls="site-navigation" aria-expanded={menuOpen}>
              {menuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
        </div>
      </header>

      <main id="contenu">
        <section className="hero" id="accueil">
          <div className="hero-grid" aria-hidden="true"/>
          <div className="hero-ribbon" aria-hidden="true"/>
          <div className="hero-aurora" aria-hidden="true"/>
          <div className="container hero-layout">
            <div className="hero-copy">
              <Eyebrow>{t.hero.eyebrow}</Eyebrow>
              <h1>{t.hero.title1}<br/><span>{t.hero.title2}</span></h1>
              <p className="hero-description">{t.hero.description}</p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="#realisations">{t.hero.actionPortfolio} <ArrowUpRight size={19}/></a>
                <a className="btn btn-outline" href="#contact">{t.hero.actionContact} <ArrowRight size={18}/></a>
              </div>
              <div className="hero-footnotes">
                <span><BadgeCheck size={17}/>{t.hero.trust1}</span>
                <span><ShieldCheck size={17}/>{t.hero.trust2}</span>
                <span><MapPin size={17}/>{t.hero.trust3}</span>
              </div>
            </div>
            <div className="hero-showcase" aria-label={t.hero.showcaseAlt}>
              <div className="showcase-halo" aria-hidden="true"/>
              <div className="showcase-main">
                <div className="showcase-top"><span><span className="showcase-signal"/> BTDIGIT / {t.common.portfolio.toUpperCase()}</span><span>2026</span></div>
                <div className="showcase-identity">
                  <img src={BASE + "btdigit-logo.webp"} alt={t.common.logoAlt} width="190" height="70"/>
                  <div><small>{t.hero.cardLabel}</small><strong>{t.hero.cardHeading}<br/>{t.hero.cardHeading2}</strong></div>
                </div>
                <div className="showcase-list">
                  {PROJECTS.map((project, index) => {
                    const Icon = heroIcons[index];
                    return (
                      <div key={project.id}>
                        <span className={"showcase-list-icon icon-" + (index === 0 ? "stock" : index === 1 ? "vesti" : "horizon")}><Icon size={20}/></span>
                        <span><strong>{project.title}</strong><small>{t.hero.projectTypes[index]}</small></span>
                        <ArrowUpRight size={17}/>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="showcase-tag tag-top"><Sparkles size={17}/>{t.hero.cardTag}</div>
              <div className="showcase-tag tag-bottom"><span>03</span><small>{t.hero.cardCount}<br/>{t.hero.cardCount2}</small></div>
            </div>
          </div>
          <div className="container hero-marquee" aria-label={t.hero.expertiseLabel}>
            <span>{t.hero.expertiseLabel}</span>
            <span>{t.hero.expertise.map((item, index) => (
              <span className="expertise-item" key={item}>{index > 0 && <i/>}{item}</span>
            ))}</span>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-head"><div><Eyebrow>{t.services.eyebrow}</Eyebrow><h2>{t.services.title1}<br/><span>{t.services.title2}</span></h2></div><p>{t.services.intro}</p></div>
            <div className="services-grid">
              {t.services.items.map(([title, description], index) => {
                const Icon = serviceIcons[index];
                return (
                  <article className="service-card" key={index}>
                    <div className="service-card-top"><span>{String(index + 1).padStart(2, "0")}</span><span className="service-icon"><Icon size={24}/></span></div>
                    <h3>{title}</h3><p>{description}</p>
                    <a href="#contact" aria-label={t.services.actionLabel + ": " + title}>{t.services.action} <ArrowUpRight size={17}/></a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section portfolio-section" id="realisations">
          <div className="container">
            <div className="section-head portfolio-heading">
              <div><Eyebrow>{t.portfolio.eyebrow}</Eyebrow><h2>{t.portfolio.title1}<br/><span>{t.portfolio.title2}</span></h2></div>
              <p>{t.portfolio.intro}</p>
            </div>
            <div className="portfolio-grid">{PROJECTS.map((project, index) => <ProjectCard project={project} index={index} t={t} key={project.id}/>)}</div>
            <p className="portfolio-caption"><Sparkles size={16}/>{t.portfolio.note}</p>
          </div>
        </section>

        <section className="agency-banner" aria-label={t.banner.aria}>
          <div className="banner-ribbon" aria-hidden="true"/>
          <div className="container agency-banner-inner">
            <Eyebrow>{t.banner.eyebrow}</Eyebrow>
            <h2>{t.banner.title1}<br/><span>{t.banner.title2}</span></h2>
            <p>{t.banner.intro}</p>
            <a href="#contact" className="btn btn-primary">{t.banner.action} <ArrowUpRight size={19}/></a>
          </div>
        </section>

        <section className="section about-section" id="apropos">
          <div className="container about-grid">
            <div className="about-image-block">
              <div className="about-image-surface"><img src={BASE + "NEXO.webp"} alt={t.common.photoAlt} loading="lazy"/></div>
              <div className="about-stamp"><span><img src={BASE + "btdigit-icon.svg"} alt=""/></span><strong>{t.about.badge}</strong><small>{t.about.badgeDetail}</small></div>
            </div>
            <div className="about-content">
              <Eyebrow>{t.about.eyebrow}</Eyebrow>
              <h2>{t.about.title1} <span>{t.about.title2}</span></h2>
              <p>{t.about.intro}</p>
              <p>{t.about.intro2}</p>
              <div className="about-values">
                {t.about.values.map((value) => <div key={value}><Check size={18}/><span>{value}</span></div>)}
              </div>
              <a className="text-link" href="#contact">{t.about.action} <ArrowUpRight size={18}/></a>
            </div>
          </div>
        </section>

        <section className="section method-section">
          <div className="container">
            <div className="section-head"><div><Eyebrow>{t.method.eyebrow}</Eyebrow><h2>{t.method.title1} <span>{t.method.title2}</span></h2></div><p>{t.method.intro}</p></div>
            <div className="process-grid">
              {t.method.items.map(([title, description], index) => (
                <div className="process-step" key={index}>
                  <span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <div className="faq-intro">
              <Eyebrow>{t.faq.eyebrow}</Eyebrow>
              <h2>{t.faq.title1}<br/><span>{t.faq.title2}</span></h2>
              <p>{t.faq.intro}</p>
              <a href="#contact" className="text-link">{t.faq.action} <ArrowUpRight size={18}/></a>
            </div>
            <div className="faq-list">
              {t.faq.items.map(([question, answer], index) => (
                <article className={"faq-item " + (activeFaq === index ? "faq-active" : "")} key={index}>
                  <button type="button" onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} aria-expanded={activeFaq === index}>
                    <span>{question}</span><ChevronDown size={20}/>
                  </button>
                  {activeFaq === index && <p>{answer}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy">
              <Eyebrow>{t.contact.eyebrow}</Eyebrow>
              <h2>{t.contact.title1} <span>{t.contact.title2}</span></h2>
              <p>{t.contact.intro}</p>
              <div className="contact-links">
                <a href={"https://wa.me/" + WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <span><MessageCircle size={20}/></span><span><small>{t.common.whatsapp}</small><strong>+223 74 98 07 44</strong></span><ArrowUpRight size={18}/>
                </a>
                <a href={"mailto:" + EMAIL}>
                  <span><Mail size={20}/></span><span><small>{t.common.email}</small><strong>{EMAIL}</strong></span><ArrowUpRight size={18}/>
                </a>
                <div><span><MapPin size={20}/></span><span><small>{t.contact.location}</small><strong>{t.common.location}</strong></span></div>
              </div>
            </div>
            <form className="contact-form" onSubmit={sendContact}>
              <div className="form-heading"><h3>{t.contact.formTitle}</h3><p>{t.contact.formIntro}</p></div>
              <div className="form-row">
                <label>{t.contact.name}<input type="text" name="name" placeholder={t.contact.namePlaceholder} required maxLength={100}/></label>
                <label>{t.contact.company}<input name="company" placeholder={t.contact.companyPlaceholder} maxLength={100}/></label>
              </div>
              <label>{t.contact.email}<input type="email" name="email" placeholder={t.contact.emailPlaceholder} maxLength={150}/></label>
              <label>{t.contact.need}
                <select name="service" required defaultValue="">
                  <option value="" disabled>{t.contact.choose}</option>
                  {t.contact.needOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
              <label>{t.contact.message}<textarea name="message" placeholder={t.contact.messagePlaceholder} rows={4} minLength={10} maxLength={2000} required/></label>
              <button className="btn btn-primary contact-submit" type="submit">{t.contact.send} <ArrowUpRight size={19}/></button>
              <small className="privacy-note">{t.contact.privacy}</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top">
          <div><Brand t={t}/><p>{t.footer.intro}</p></div>
          <div className="footer-column">
            <strong>{t.footer.explore}</strong>
            <a href="#realisations">{t.common.portfolio}</a>
            <a href="#services">{t.common.services}</a>
            <a href="#apropos">{t.common.about}</a>
            <a href="#faq">{t.common.faq}</a>
          </div>
          <div className="footer-column">
            <strong>{t.footer.find}</strong>
            <a href="https://stockpro.ml/" target="_blank" rel="noopener noreferrer">StockPro Premium <ExternalLink size={13}/></a>
            <a href="https://github.com/hamapixel" target="_blank" rel="noopener noreferrer">GitHub <Github size={14}/></a>
            <a href={"mailto:" + EMAIL}>{t.common.email} <Mail size={14}/></a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {year} BTDIGIT. {t.footer.rights}</span><span>{t.footer.signature}</span>
        </div>
      </footer>
      <a className="floating-whatsapp" href={"https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(t.contact.whatsappIntro)}
        target="_blank" rel="noopener noreferrer" aria-label={t.common.contactUs + " — WhatsApp"}>
        <MessageCircle size={23}/>
      </a>
    </div>
  );
}
