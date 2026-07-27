import { useEffect, useRef } from 'react';

export default function useParallax({ speed = 0.25, max = 120 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let ticking = false;
    const update = () => {
      const offset = Math.min(window.scrollY * speed, max);
      el.style.transform = `translateY(${offset}px)`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed, max]);

  return ref;
}
