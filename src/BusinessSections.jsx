import { ArrowUpRight, Building2, Hotel, ShoppingBag, Truck, Globe2 } from "lucide-react";
import AutoCarousel from "./AutoCarousel";

const BASE = import.meta.env.BASE_URL;
const industries = [
  { id: "btp", Icon: Building2, number: "01", motif: "blueprint" },
  { id: "hospitality", Icon: Hotel, number: "02", motif: "hospitality" },
  { id: "transport", Icon: Truck, number: "03", motif: "transport" },
  { id: "commerce", Icon: ShoppingBag, number: "04", motif: "commerce" },
];
const partners = [
  { id: "msf", name: "MSF-SARL", image: "msf-sarl.webp", url: null },
  { id: "horizon", name: "Horizon Visa & Immo", image: "horizon-visa-immo.webp", url: "https://horizon-immo-services.com/" },
];

function Heading({ eyebrow, title, emphasis, intro }) {
  return (
    <div className="section-head">
      <div><span className="eyebrow"><span className="eyebrow-dot"/>{eyebrow}</span>
        <h2>{title}<br/><span>{emphasis}</span></h2></div>
      <p>{intro}</p>
    </div>
  );
}

export function IndustriesSection({ t }) {
  return (
    <section className="section industries-section" id="secteurs">
      <div className="container">
        <Heading eyebrow={t.sectors.eyebrow} title={t.sectors.title1}
          emphasis={t.sectors.title2} intro={t.sectors.intro}/>
        <AutoCarousel
          carouselId={t.sectors.carouselLabel}
          label={t.sectors.carouselLabel}
          previousLabel={t.sectors.previous}
          nextLabel={t.sectors.next}
          items={industries}
          interval={4800}
          renderSlide={({ id, Icon, number, motif }, index) => {
            const item = t.sectors.items[index];
            return (
              <article className={"industry-card industry-card--" + motif}>
                <div className="industry-card__copy">
                  <div className="industry-card__top">
                    <span className="industry-card__icon"><Icon size={27} strokeWidth={1.7}/></span>
                    <span className="industry-card__count">{number} / 04</span>
                  </div>
                  <p className="industry-card__eyebrow">{t.sectors.focus}</p>
                  <h3>{item.title}</h3>
                  <p className="industry-card__lead">{item.description}</p>
                  <div className="industry-card__benefit"><span/>{item.benefit}</div>
                  <a href="#contact" className="industry-card__link">{t.sectors.cta}<ArrowUpRight size={18}/></a>
                </div>
                <div className="industry-card__visual" aria-hidden="true">
                  <span className="industry-orbit orbit-one"/>
                  <span className="industry-orbit orbit-two"/>
                  <span className="industry-orbit orbit-three"/>
                  <div className="industry-visual__plate"><Icon size={95} strokeWidth={0.7}/></div>
                  <span className="industry-visual__dot"/>
                </div>
              </article>
            );
          }}/>
      </div>
    </section>
  );
}

export function PartnersSection({ t }) {
  return (
    <section className="section partners-section" id="partenaires">
      <div className="container">
        <Heading eyebrow={t.partners.eyebrow} title={t.partners.title1}
          emphasis={t.partners.title2} intro={t.partners.intro}/>
        <AutoCarousel carouselId={t.partners.carouselLabel}
          label={t.partners.carouselLabel} previousLabel={t.partners.previous} nextLabel={t.partners.next}
          items={partners} interval={5900}
          renderSlide={(partner, index) => (
            <article className="partner-card">
              <div className="partner-card__logo">
                <img src={BASE + "partners/" + partner.image} alt={partner.name}
                  loading="lazy" width="510" height="235"/>
              </div>
              <div className="partner-card__copy">
                <span className="partner-card__eyebrow">{t.partners.partnerLabel}</span>
                <h3>{partner.name}</h3>
                <p>{t.partners.items[index].description}</p>
                {partner.url ? (
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className="partner-card__link">
                    {t.partners.visit}<ArrowUpRight size={17}/>
                  </a>
                ) : (
                  <span className="partner-card__tag"><Globe2 size={16}/>{t.partners.relationship}</span>
                )}
              </div>
            </article>
          )}/>
        <p className="partners-note">{t.partners.note}</p>
      </div>
    </section>
  );
}
