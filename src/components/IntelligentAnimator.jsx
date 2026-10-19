import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function IntelligentAnimator() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Initial run immediately to catch above-the-fold elements with zero flicker
    const handleAnimations = () => {
      // 1. Target sections, articles, cards, statement blocks
      const sections = document.querySelectorAll(
        'section, article, .bg-\\(--grey\\), .app-card, .zumera-statement-section'
      );

      // 2. Target images and media containers
      const images = document.querySelectorAll('img:not(.no-animate)');

      // 3. Target headings & titles for subtle editorial entrance
      const titles = document.querySelectorAll(
        'h1:not(.no-animate), h2:not(.no-animate), h3:not(.no-animate)'
      );

      if (!('IntersectionObserver' in window)) {
        sections.forEach(el => el.classList.add('reveal-visible'));
        images.forEach(el => el.classList.add('img-reveal-visible'));
        titles.forEach(el => el.classList.add('reveal-visible'));
        return;
      }

      // Observer for sections and text blocks
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
              sectionObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -40px 0px'
        }
      );

      // Dedicated Observer for images (scale and opacity reveal)
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('img-reveal-visible');
              imageObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -30px 0px'
        }
      );

      // Process sections & cards
      sections.forEach((el) => {
        // Skip sticky headers, top bars, and navigation
        if (
          el.classList.contains('sticky') ||
          el.classList.contains('sticky-intersection') ||
          el.closest('nav') ||
          el.closest('.navlinks') ||
          el.closest('.navlinks-dark')
        ) {
          return;
        }

        const rect = el.getBoundingClientRect();
        const isAboveFold = rect.top < window.innerHeight && rect.bottom > 0;

        if (isAboveFold) {
          el.classList.add('reveal-visible');
        } else {
          el.classList.add('reveal-init');
          sectionObserver.observe(el);
        }

        // Stagger child cards if inside a grid or flex row
        const childCards = el.querySelectorAll('.grid > div, .flex-col > div.shadow-2xl, .space-y-6 > div');
        childCards.forEach((card, idx) => {
          if (!card.classList.contains('stagger-1')) {
            const staggerIdx = (idx % 4) + 1;
            card.classList.add(`stagger-${staggerIdx}`);
          }
        });
      });

      // Process images
      images.forEach((img) => {
        // Skip nav icons or tiny logos
        if (img.closest('nav') || img.classList.contains('w-[100px]') || img.classList.contains('w-[150px]')) {
          return;
        }

        const rect = img.getBoundingClientRect();
        const isAboveFold = rect.top < window.innerHeight && rect.bottom > 0;

        if (isAboveFold) {
          img.classList.add('img-reveal-visible');
        } else {
          img.classList.add('img-reveal-init');
          imageObserver.observe(img);
        }
      });

      // Clean up observers on unmount or route change
      return () => {
        sectionObserver.disconnect();
        imageObserver.disconnect();
      };
    };

    const cleanup = handleAnimations();
    // Also re-run after a short delay in case async images or layout settled
    const secondaryTimer = setTimeout(handleAnimations, 200);

    return () => {
      clearTimeout(secondaryTimer);
      if (cleanup) cleanup();
    };
  }, [pathname]);

  return null;
}
