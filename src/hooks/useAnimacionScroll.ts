import { useEffect } from 'react';

function useAnimacionScroll(dep?: unknown) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 60px 0px' }
    );

    const elementos = document.querySelectorAll('[data-animar]');
    elementos.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [dep]);
}

export default useAnimacionScroll;
