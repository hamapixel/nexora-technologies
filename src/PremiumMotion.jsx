/**
 * BTDIGIT premium interactions (original implementations).
 * Visual direction inspired by animated editorial typography in React Bits
 * and refined interactive surfaces in Skiper UI. No third-party component
 * source is copied, and no paid component or license is required.
 */
const words = (value) => String(value || "").trim().split(/\s+/).filter(Boolean);

function WordLine({ value, offset = 0, accent = false }) {
  return (
    <span className={"hero-title-line" + (accent ? " hero-title-accent" : "")} aria-hidden="true">
      {words(value).map((word, index) => (
        <span className="hero-word-clip" key={index}>
          <span
            className="hero-word"
            style={{ animationDelay: `${Math.min(0.12 + offset + index * 0.085, 1.4)}s` }}
          >{word}</span>
        </span>
      ))}
    </span>
  );
}

export function RevealHeadline({ first, second }) {
  return (
    <h1 className="hero-title-motion" aria-label={`${first} ${second}`}>
      <WordLine value={first} />
      <WordLine value={second} offset={0.18} accent />
    </h1>
  );
}

/** Cursor spotlight on cards: visual only; no layout transforms. */
export function moveSpotlight(event) {
  if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
  const node = event.currentTarget;
  const bounds = node.getBoundingClientRect();
  node.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
  node.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
}

export function resetSpotlight(event) {
  const node = event.currentTarget;
  node.style.removeProperty("--spotlight-x");
  node.style.removeProperty("--spotlight-y");
}

/** Gentle tilt on the hero's decorative showcase, desktop/pointer only. */
export function moveShowcase(event) {
  if (event.pointerType !== "mouse") return;
  const node = event.currentTarget;
  const bounds = node.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
  const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
  node.style.setProperty("--showcase-y", `${(-5 + x * 5).toFixed(2)}deg`);
  node.style.setProperty("--showcase-x", `${(2 - y * 4).toFixed(2)}deg`);
}

export function resetShowcase(event) {
  event.currentTarget.style.removeProperty("--showcase-y");
  event.currentTarget.style.removeProperty("--showcase-x");
}
