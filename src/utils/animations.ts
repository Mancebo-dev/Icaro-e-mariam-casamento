import { animate, createTimeline } from 'animejs';

/**
 * Animate elements on initial page load (Hero Section)
 */
export const initHeroAnimations = () => {
  try {
    const tl = createTimeline({
      defaults: {
        ease: 'outExpo',
      }
    });

    tl.add('.hero-title-first', {
      opacity: [0, 1],
      translateY: [-30, 0],
      duration: 1200,
      delay: 200,
    })
    .add('.hero-ampersand', {
      opacity: [0, 1],
      scale: [0.5, 1],
      rotate: [-15, 0],
      duration: 900,
    }, '-=700')
    .add('.hero-title-second', {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1200,
    }, '-=700')
    .add('.hero-date', {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1000,
    }, '-=500');
  } catch (err) {
    console.warn('Hero animation fallback', err);
  }
};

/**
 * Animate elements when they enter viewport (Intersection Observer + AnimeJS v4)
 */
export const setupScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const animType = el.dataset.animate;

        try {
          if (animType === 'fade-up') {
            animate(el, {
              opacity: [0, 1],
              translateY: [35, 0],
              duration: 900,
              ease: 'outCubic',
            });
          } else if (animType === 'fade-in') {
            animate(el, {
              opacity: [0, 1],
              scale: [0.94, 1],
              duration: 900,
              ease: 'outCubic',
            });
          } else if (animType === 'slide-left') {
            animate(el, {
              opacity: [0, 1],
              translateX: [-35, 0],
              duration: 850,
              ease: 'outQuad',
            });
          } else if (animType === 'slide-right') {
            animate(el, {
              opacity: [0, 1],
              translateX: [35, 0],
              duration: 850,
              ease: 'outQuad',
            });
          } else if (animType === 'timeline-item') {
            animate(el, {
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 750,
              ease: 'outQuad',
            });
          }
        } catch {
          // Graceful fallback
          el.style.opacity = '1';
        }

        observer.unobserve(el);
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
};
