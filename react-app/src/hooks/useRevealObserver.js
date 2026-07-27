import { useEffect } from 'react';

/**
 * Container-scoped scroll-reveal observer — mirrors the original
 * ScrollAnimation/initRevealAnimations behavior of watching many
 * `.hp-reveal` / `.fg-reveal` descendants with a single IntersectionObserver.
 */
export default function useRevealObserver(containerRef, selectors = '.hp-reveal', options = {}) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const { threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = options;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold, rootMargin }
    );

    const list = Array.isArray(selectors) ? selectors : [selectors];
    list.forEach((sel) => {
      container.querySelectorAll(sel).forEach((el) => observer.observe(el));
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);
}
