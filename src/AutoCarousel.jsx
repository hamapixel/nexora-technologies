import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * Accessible, reusable automatic slider. Pauses on hover/focus, on hidden tabs,
 * off-screen and for users requesting reduced motion. Buttons and dots always work.
 */
export default function AutoCarousel({
  items, renderSlide, label, interval = 5200, carouselId = "slider",
  previousLabel = "Previous", nextLabel = "Next",
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const root = useRef(null);
  const length = items.length;
  const activeIndex = Math.min(index, Math.max(length - 1, 0));

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(preference.matches);
    onChange();
    preference.addEventListener?.("change", onChange);
    return () => preference.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (!root.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, { threshold: 0.15 });
    observer.observe(root.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibility = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    onVisibility();
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const running = length > 1 && !paused && visible && tabVisible && !reduced;
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % length), interval);
    return () => window.clearInterval(timer);
  }, [length, running, interval]);

  const move = (amount) => setIndex((value) => (value + amount + length) % length);

  return (
    <div ref={root} className="auto-carousel" aria-roledescription="carousel"
      aria-label={label} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}>
      <div className="auto-carousel__viewport">
        <div className="auto-carousel__track" style={{
          transform: "translate3d(-" + (activeIndex * 100) + "%, 0, 0)",
          transitionDuration: reduced ? "0ms" : "750ms",
        }} aria-live={running ? "off" : "polite"}>
          {items.map((item, itemIndex) => (
            <div key={item.id || itemIndex} className="auto-carousel__slide"
              aria-roledescription="slide" aria-label={(itemIndex + 1) + " / " + length}
              aria-hidden={itemIndex !== activeIndex}
              inert={itemIndex !== activeIndex ? "" : undefined}>
              {renderSlide(item, itemIndex)}
            </div>
          ))}
        </div>
      </div>
      {length > 1 && (
        <div className="auto-carousel__controls">
          <div className="auto-carousel__dots" aria-label={label}>
            {items.map((item, itemIndex) => (
              <button key={item.id || itemIndex} className={"auto-carousel__dot" + (activeIndex === itemIndex ? " is-active" : "")}
                type="button" aria-label={(itemIndex + 1) + " / " + length} aria-current={activeIndex === itemIndex ? "true" : undefined}
                onClick={() => setIndex(itemIndex)}/>
            ))}
          </div>
          <div className="auto-carousel__arrows">
            <button type="button" onClick={() => move(-1)} aria-label={carouselId + " — " + previousLabel}><ArrowLeft size={19}/></button>
            <button type="button" onClick={() => move(1)} aria-label={carouselId + " — " + nextLabel}><ArrowRight size={19}/></button>
          </div>
        </div>
      )}
    </div>
  );
}
