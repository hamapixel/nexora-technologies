import { ArrowRight, ArrowUpRight, Boxes, Check, ExternalLink, Globe2, ShieldCheck, Shirt } from "lucide-react";

const WHATSAPP = "22374980744";

export function ProjectArtwork({ type, t }) {
  const a = t.artwork;
  if (type === "stockpro") {
    return (
      <div className="project-art project-art-stock">
        <div className="art-browser"><span/><span/><span/><em>StockPro Premium</em></div>
        <div className="art-stock-body">
          <div className="art-rail"><span/><span/><span/><span/></div>
          <div className="art-stock-content">
            <div className="art-small-title">{a.dashboard}</div>
            <div className="art-stat-row">
              <div><small>{a.stock}</small><Boxes size={19}/><b>{a.products}</b></div>
              <div><small>{a.sales}</small><ArrowUpRight size={19}/><b>{a.tracking}</b></div>
              <div><small>{a.management}</small><ShieldCheck size={19}/><b>{a.control}</b></div>
            </div>
            <div className="art-chart">
              <div className="art-chart-head"><span>{a.activity}</span><span>↗</span></div>
              <svg viewBox="0 0 440 100" preserveAspectRatio="none" aria-hidden="true">
                <defs><linearGradient id="stock-fill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#489aff" stopOpacity=".28"/><stop offset="1" stopColor="#489aff" stopOpacity="0"/></linearGradient></defs>
                <path d="M0 82C35 80 45 53 83 62S148 91 187 53 255 78 299 35 369 52 440 11V100H0Z" fill="url(#stock-fill)"/>
                <path d="M0 82C35 80 45 53 83 62S148 91 187 53 255 78 299 35 369 52 440 11" fill="none" stroke="#58a5ff" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
        <span className="art-note">{a.illustrative}</span>
      </div>
    );
  }
  if (type === "vestiflow") {
    return (
      <div className="project-art project-art-vesti">
        <div className="vesti-window">
          <div className="vesti-head"><span><Shirt size={16}/> VestiFlow</span><span className="window-controls">— □ ×</span></div>
          <div className="vesti-title">{a.pointOfSale} <span>{a.newSale}</span></div>
          <div className="vesti-items">
            {["one", "two", "three"].map((shade) => (
              <div className="vesti-product" key={shade}>
                <span className={"vesti-garment garment-" + shade}><Shirt size={23}/></span><i/><i/>
              </div>
            ))}
          </div>
          <div className="vesti-bottom"><span>{a.cart}</span><strong>{a.confirmSale} <ArrowRight size={14}/></strong></div>
        </div>
        <span className="art-note">{a.illustrative}</span>
      </div>
    );
  }
  return (
    <div className="project-art project-art-horizon">
      <div className="horizon-window">
        <div className="horizon-top"><span className="horizon-brand">HORIZON <b>VISA & IMMO</b></span><span>{a.horizonNav}</span></div>
        <div className="horizon-content">
          <span>{a.horizonTagline}</span>
          <strong>{a.horizonTitle1}<br/>{a.horizonTitle2}</strong>
          <div className="horizon-buttons"><i>{a.discoverServices}</i><i>{a.contactUs}</i></div>
        </div>
        <div className="horizon-globe"><Globe2 size={116} strokeWidth={0.65}/></div>
      </div>
      <span className="art-note">{a.illustrativeConcept}</span>
    </div>
  );
}

export function ProjectCard({ project, index, t }) {
  const content = t.portfolio.projects[index];
  const href = project.url || "https://wa.me/" + WHATSAPP + "?text=" +
    encodeURIComponent(t.contact.whatsappAbout + " " + project.title + ".");
  return (
    <article className={"project-card project-" + project.id}>
      <div className="project-media"><ProjectArtwork type={project.id} t={t}/></div>
      <div className="project-detail">
        <div className="project-meta"><span>{content.type}</span><span>{String(index + 1).padStart(2, "0")} / 03</span></div>
        <h3>{project.title}</h3>
        <p>{content.desc}</p>
        <ul>{content.features.map((feature) => <li key={feature}><Check size={15}/>{feature}</li>)}</ul>
        <div className="project-bottom">
          <span className="project-status"><span/>{content.status}</span>
          <a className="project-action" href={href} target="_blank" rel="noopener noreferrer"
            aria-label={content.action + " — " + project.title}>
            {content.action} {project.url ? <ExternalLink size={16}/> : <ArrowUpRight size={18}/>}
          </a>
        </div>
      </div>
    </article>
  );
}
