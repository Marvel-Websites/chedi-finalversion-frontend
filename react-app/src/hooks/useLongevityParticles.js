import { useEffect, useRef } from 'react';

export default function useLongevityParticles(count = 30) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.children.length > 0) return;

    for (let i = 0; i < count; i += 1) {
      const p = document.createElement('div');
      p.className = 'lng-particle';
      const size = Math.random() * 6 + 2;
      const color = Math.random() > 0.5 ? '64,145,108' : '201,150,62';
      p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;animation-duration:${Math.random() * 15 + 10}s;animation-delay:${Math.random() * 10}s;opacity:${Math.random() * 0.6 + 0.2};background:rgba(${color},${Math.random() * 0.5 + 0.2});`;
      container.appendChild(p);
    }
  }, [count]);

  return containerRef;
}
