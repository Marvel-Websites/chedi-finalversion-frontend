import { useEffect } from 'react';

/**
 * Container-scoped counter animation — mirrors the original
 * CounterAnimation class watching all `[data-target]` descendants.
 */
export default function useCounterObserver(containerRef, selector = '[data-target]', { duration = 2000, threshold = 0.4 } = {}) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const animated = new WeakSet();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || animated.has(entry.target)) return;
          animated.add(entry.target);
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10) || 0;
          const suffix = el.getAttribute('data-suffix') || '';
          const increment = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target.toLocaleString() + suffix;
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current).toLocaleString();
            }
          }, 16);
        });
      },
      { threshold }
    );

    container.querySelectorAll(selector).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);
}
