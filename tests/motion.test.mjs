import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { setupScrollAnimations } from "../src/scrollMotion.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");

test("GSAP fallback does not hide or break content when CDN is offline", () => {
  const formerWindow = globalThis.window;
  const formerDocument = globalThis.document;
  try {
    globalThis.window = {};
    globalThis.document = { querySelector: () => ({}) };
    const teardown = setupScrollAnimations();
    assert.equal(typeof teardown, "function");
    teardown();
  } finally {
    if (formerWindow === undefined) delete globalThis.window;
    else globalThis.window = formerWindow;
    if (formerDocument === undefined) delete globalThis.document;
    else globalThis.document = formerDocument;
  }
});

test("ScrollTrigger and Three.js scripts use known pinned CDN versions", () => {
  const html = read("index.html");
  const three = read("src/ThreeAccent.jsx");
  assert.match(html, /gsap@3\.15\.1\/dist\/gsap\.min\.js/);
  assert.match(html, /gsap@3\.15\.1\/dist\/ScrollTrigger\.min\.js/);
  assert.match(three, /three@0\.187\.0\/build\/three\.module\.js/);
});

test("animation accessibility and mobile fallbacks are present", () => {
  const motion = read("src/scrollMotion.js");
  const three = read("src/ThreeAccent.jsx");
  const app = read("src/App.jsx");
  assert.match(motion, /prefers-reduced-motion: no-preference/);
  assert.match(motion, /media\.revert\(\)/);
  assert.match(motion, /context\.revert\(\)/);
  assert.match(three, /navigator\.connection\?\.saveData/);
  assert.match(three, /innerWidth < 1100/);
  assert.match(app, /setupScrollAnimations/);
  assert.doesNotMatch(app, /Showroom3D/);
});

test("motion has CSS fallback if animation scripts cannot load", () => {
  const styles = read("src/styles.css");
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styles, /\.hero-three-stage/);
  assert.match(styles, /\.scroll-progress/);
});
