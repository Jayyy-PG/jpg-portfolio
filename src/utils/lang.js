/**
 * Active UI language.
 *
 * Most bilingual copy is rendered twice and toggled by CSS (`data-show`), so
 * it needs no React state. This store exists for the cases CSS cannot cover —
 * document metadata, `alt` text, `aria-label` — where the real string has to
 * be chosen in JavaScript.
 *
 * A module-level store plus `useSyncExternalStore` keeps a single source of
 * truth without prop drilling and without a state library.
 */

import { useSyncExternalStore } from 'react';

const STORAGE_KEY = 'jpg.lang';
const SUPPORTED = ['en', 'de'];

const listeners = new Set();

function normalize(value) {
  return SUPPORTED.includes(value) ? value : 'en';
}

function readStored() {
  // Storage can throw outright in some privacy modes, not just return null.
  try {
    return normalize(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return 'en';
  }
}

let current = typeof window === 'undefined' ? 'en' : readStored();

function syncDocument(lang) {
  const root = document.documentElement;
  root.dataset.lang = lang;
  root.lang = lang;
}

export function getLang() {
  return current;
}

export function setLang(next) {
  const lang = normalize(next);
  if (lang === current) return;
  current = lang;
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Preference simply does not persist — the UI still switches.
  }
  syncDocument(lang);
  listeners.forEach((fn) => fn());
}

function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function useLang() {
  return useSyncExternalStore(subscribe, getLang, () => 'en');
}

/** Pick the active-language string from a `{ en, de }` value (or pass through). */
export function t(value, lang) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  return value[lang] || value.en || '';
}

/** Apply the stored preference to <html> before first paint. */
export function initLang() {
  current = readStored();
  syncDocument(current);
  return current;
}
