import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { translations, LANGUAGES } from "../src/i18n.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const content = (path) => readFileSync(resolve(root,path), "utf8");

test("the real user-supplied partner logos are bundled", () => {
  for (const asset of ["msf-sarl.webp", "horizon-visa-immo.webp"]) {
    const path = resolve(root, "public/partners", asset);
    assert.ok(existsSync(path), "missing " + asset);
    const bytes = readFileSync(path);
    assert.equal(bytes.toString("ascii", 0, 4), "RIFF", "not a WebP: " + asset);
    assert.equal(bytes.toString("ascii", 8, 12), "WEBP", "not a WebP: " + asset);
  }
});

test("business and support copy is translated into four locales", () => {
  for (const { code } of LANGUAGES) {
    const t = translations[code];
    assert.equal(t.sectors.items.length, 4, code + " industries count");
    assert.equal(t.partners.items.length, 2, code + " partners count");
    assert.ok(t.partners.nav.trim().length > 0);
    for (const sector of t.sectors.items) {
      assert.ok(sector.title && sector.description && sector.benefit);
    }
    for (const key of ["title", "intro", "call", "whatsapp", "write", "help", "safety"]) {
      assert.ok(t.support[key].trim(), code + " support: " + key);
    }
  }
});

test("the auto carousels respect accessibility and motion settings", () => {
  const carousel = content("src/AutoCarousel.jsx");
  assert.match(carousel, /setInterval/);
  assert.match(carousel, /prefers-reduced-motion: reduce/);
  assert.match(carousel, /visibilitychange/);
  assert.match(carousel, /IntersectionObserver/);
  assert.match(carousel, /onFocusCapture/);
  assert.match(carousel, /aria-roledescription="carousel"/);
});

test("support is a dialog with actual phone, WhatsApp, email and FAQ targets", () => {
  const support = content("src/SupportModal.jsx");
  const app = content("src/App.jsx");
  assert.match(support, /role="dialog"/);
  assert.match(support, /aria-modal="true"/);
  assert.match(support, /tel:\+22374980744/);
  assert.match(support, /https:\/\/wa\.me\//);
  assert.match(support, /mailto:/);
  assert.match(support, /href="#faq"/);
  assert.match(app, /setSupportOpen\(true\)/);
  assert.doesNotMatch(app, /href="https:\/\/github\.com\/hamapixel"/);
});

test("Horizon URL is verified and linked in portfolio and partner sections", () => {
  assert.match(content("src/BusinessSections.jsx"), /https:\/\/horizon-immo-services\.com\//);
  assert.match(content("src/App.jsx"), /https:\/\/horizon-immo-services\.com\//);
});

test("GSAP includes new sections without reintroducing a 3D car showroom", () => {
  assert.match(content("src/scrollMotion.js"), /industries-section/);
  assert.match(content("src/scrollMotion.js"), /partners-section/);
  assert.doesNotMatch(content("src/App.jsx"), /Showroom3D/);
});
