/**
 * One place to ask whether the visitor wants motion reduced, so every
 * animation path answers the question the same way.
 */

const QUERY = '(prefers-reduced-motion: reduce)';

export function prefersReducedMotion() {
  return typeof window !== 'undefined'
    && typeof window.matchMedia === 'function'
    && window.matchMedia(QUERY).matches;
}
