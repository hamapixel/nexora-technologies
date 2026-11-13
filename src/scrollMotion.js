/**
 * GSAP + ScrollTrigger animations for the BTDIGIT agency site.
 *
 * GSAP is loaded through pinned CDN script tags in index.html. When unavailable
 * (for example offline), the entire site remains visible and usable.
 *
 * No scroll-jacking, no pinned content, no animations on the sticky header,
 * and no transform applied to page layout containers.
 */
export function setupScrollAnimations() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const root = document.querySelector(".site");
  if (!gsap || !ScrollTrigger || !root) return () => {};

  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();
  let isDisposed = false;
  let hasEnhancedMotion = false;

  media.add({
    animate: "(prefers-reduced-motion: no-preference)",
    desktop: "(min-width: 900px)",
    mobile: "(max-width: 899px)",
  }, (mediaContext) => {
    if (!mediaContext.conditions.animate) return;

    const { desktop } = mediaContext.conditions;
    const context = gsap.context(() => {
      const select = (selector) => Array.from(root.querySelectorAll(selector));

      // One-time entrance transitions, using transform and opacity only.
      const reveal = (selector, options = {}) => {
        select(selector).forEach((node) => {
          gsap.from(node, {
            y: options.y ?? (desktop ? 42 : 18),
            x: options.x ?? 0,
            autoAlpha: 0,
            duration: options.duration ?? (desktop ? 0.88 : 0.58),
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: node,
              start: desktop ? "top 88%" : "top 94%",
              once: true,
            },
          });
        });
      };

      reveal(".services-section .section-head, .portfolio-section .section-head, .method-section .section-head");
      reveal(".services-grid .service-card", { y: desktop ? 38 : 12, duration: desktop ? 0.8 : 0.53 });
      reveal(".portfolio-grid .project-card", { y: desktop ? 48 : 16, duration: desktop ? 0.9 : 0.58 });
      reveal(".about-section .about-content", { y: desktop ? 32 : 14 });
      reveal(".about-image-surface", { y: desktop ? 35 : 12 });
      reveal(".method-section .process-step", { y: desktop ? 29 : 12 });
      reveal(".faq-intro, .faq-list, .contact-copy, .contact-form", { y: desktop ? 36 : 12 });
      reveal(".agency-banner-inner", { y: desktop ? 26 : 10 });

      // A discreet site-wide progress indicator.
      const progress = root.querySelector(".scroll-progress__bar");
      if (progress) {
        gsap.fromTo(progress, { scaleX: 0 }, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }

      // Only the decorative layers move with the scroll; text remains stable.
      if (desktop) {
        const heroRibbon = root.querySelector(".hero-ribbon");
        const heroGlow = root.querySelector(".hero-aurora");
        const showcase = root.querySelector(".hero-showcase");
        const bannerRibbon = root.querySelector(".banner-ribbon");

        if (heroRibbon) gsap.to(heroRibbon, {
          yPercent: 22, xPercent: -4, rotation: -5, ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.7 },
        });
        if (heroGlow) gsap.to(heroGlow, {
          yPercent: 12, xPercent: -8, ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.8 },
        });
        if (showcase) gsap.to(showcase, {
          yPercent: 8, ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 },
        });
        if (bannerRibbon) gsap.to(bannerRibbon, {
          yPercent: -13, rotation: -4, ease: "none",
          scrollTrigger: { trigger: ".agency-banner", start: "top bottom", end: "bottom top", scrub: 0.8 },
        });
      }
    }, root);

    hasEnhancedMotion = true;
    root.classList.add("gsap-enhanced");
    return () => context.revert();
  });

  // FAQ accordion and translated content can change ScrollTrigger positions.
  const faq = root.querySelector(".faq-list");
  const observer = faq && typeof ResizeObserver !== "undefined"
    ? new ResizeObserver(() => {
        if (!isDisposed && hasEnhancedMotion) ScrollTrigger.refresh();
      })
    : null;
  if (observer && faq) observer.observe(faq);

  // Fonts can load after animation setup, affecting element positions.
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      if (!isDisposed && hasEnhancedMotion) ScrollTrigger.refresh();
    });
  }

  return () => {
    isDisposed = true;
    observer?.disconnect();
    media.revert();
    root.classList.remove("gsap-enhanced");
  };
}
