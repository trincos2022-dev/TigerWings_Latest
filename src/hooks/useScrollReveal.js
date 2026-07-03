import { useEffect } from 'react';

// Adds a fade-up reveal to below-the-fold sections as they scroll into view.
// The hero (first section) is left untouched so it paints immediately.
export function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('main > section:not(:first-child)');
    if (!targets.length) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      targets.forEach((el) => el.classList.add('reveal', 'reveal--in'));
      return;
    }

    targets.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    targets.forEach((el) => observer.observe(el));

    // Safety net: never leave a section stuck invisible (e.g. very short
    // viewports where the last section can't reach the threshold).
    const failSafe = setTimeout(() => {
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) el.classList.add('reveal--in');
      });
    }, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(failSafe);
    };
  }, []);
}
