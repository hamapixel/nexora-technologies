import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { LANGUAGES, translations, getTranslation } from "../src/i18n.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function verifyShape(expected, actual, path) {
  if (Array.isArray(expected)) {
    assert.ok(Array.isArray(actual), path + " must be an array");
    assert.equal(actual.length, expected.length, path + " item count");
    expected.forEach((entry, index) => verifyShape(entry, actual[index], path + "[" + index + "]"));
    return;
  }
  if (typeof expected === "object" && expected !== null) {
    assert.ok(actual && typeof actual === "object" && !Array.isArray(actual), path + " must be an object");
    assert.deepEqual(Object.keys(actual).sort(), Object.keys(expected).sort(), path + " keys");
    for (const key of Object.keys(expected)) verifyShape(expected[key], actual[key], path + "." + key);
    return;
  }
  assert.equal(typeof actual, "string", path + " must be text");
  assert.ok(actual.trim().length > 0, path + " must not be empty");
}

test("four expected locales and complete dictionaries", () => {
  assert.deepEqual(LANGUAGES.map((language) => language.code), ["fr", "en", "bm", "es"]);
  for (const { code } of LANGUAGES) {
    assert.ok(translations[code], "missing translations for " + code);
    verifyShape(translations.fr, translations[code], code);
  }
});

test("language fallback", () => {
  assert.strictEqual(getTranslation("unexpected"), translations.fr);
  assert.strictEqual(getTranslation("bm"), translations.bm);
});

test("every locale has a local SVG flag", () => {
  for (const { flag } of LANGUAGES) {
    assert.ok(existsSync(resolve(root, "public", "flags", flag + ".svg")), "missing SVG flag for " + flag);
  }
});

test("contact and portfolio data are complete in all four languages", () => {
  for (const { code } of LANGUAGES) {
    const data = translations[code];
    assert.equal(data.portfolio.projects.length, 3);
    data.portfolio.projects.forEach((project) => assert.equal(project.features.length, 3));
    assert.equal(data.services.items.length, 4);
    assert.equal(data.method.items.length, 4);
    assert.equal(data.faq.items.length, 4);
    assert.equal(data.contact.needOptions.length, 5);
    assert.equal(data.contact.formFields.length, 4);
  }
});
