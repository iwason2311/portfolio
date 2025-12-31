declare const anime: any;

let prefersReducedMotion = false;

if (typeof window !== 'undefined') {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export const initHeroAnimations = () => {
  if (prefersReducedMotion || typeof anime === 'undefined') {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCtas = document.querySelectorAll('.hero-cta');

    if (heroTitle) (heroTitle as HTMLElement).style.opacity = '1';
    if (heroSubtitle) (heroSubtitle as HTMLElement).style.opacity = '1';
    heroCtas.forEach((cta) => ((cta as HTMLElement).style.opacity = '1'));
    return;
  }

  anime({
    targets: '.hero-title',
    opacity: [0, 1],
    translateY: [16, 0],
    duration: 800,
    easing: 'easeOutExpo',
  });

  anime({
    targets: '.hero-subtitle',
    opacity: [0, 1],
    translateX: [18, 0],
    duration: 650,
    delay: 200,
    easing: 'easeOutExpo',
  });

  const heroCtas = document.querySelectorAll('.hero-cta');
  if (heroCtas.length > 0) {
    anime({
      targets: '.hero-cta',
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 600,
      delay: 350,
      easing: 'easeOutCubic',
    });
  }
};

export const initScrollAnimations = () => {
  if (prefersReducedMotion || typeof anime === 'undefined') {
    const revealSections = document.querySelectorAll('.reveal-section');
    const revealItems = document.querySelectorAll('.reveal-item');
    const dividerLines = document.querySelectorAll('.divider-line');

    revealSections.forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'none';
    });
    revealItems.forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'none';
    });
    dividerLines.forEach((el) => {
      (el as HTMLElement).style.transform = 'scaleX(1)';
    });
    return;
  }

  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: '0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;

        anime({
          targets: target,
          opacity: [0, 1],
          translateY: [18, 0],
          duration: 650,
          easing: 'easeOutCubic',
          complete: () => {
            (target as HTMLElement).style.opacity = '1';
            (target as HTMLElement).style.transform = 'translateY(0)';
          },
        });

        const items = target.querySelectorAll('.reveal-item');
        if (items.length > 0) {
          anime({
            targets: items,
            opacity: [0, 1],
            translateY: [14, 0],
            duration: 550,
            easing: 'easeOutQuart',
            complete: () => {
              items.forEach((item) => {
                (item as HTMLElement).style.opacity = '1';
                (item as HTMLElement).style.transform = 'translateY(0)';
              });
            },
          });
        }

        const dividers = target.querySelectorAll('.divider-line');
        if (dividers.length > 0) {
          anime({
            targets: dividers,
            scaleX: [0, 1],
            duration: 700,
            easing: 'easeOutExpo',
            complete: () => {
              dividers.forEach((divider) => {
                (divider as HTMLElement).style.transform = 'scaleX(1)';
              });
            },
          });
        }

        observer.unobserve(target);
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('.reveal-section');
  sections.forEach((section) => observer.observe(section));
};

export const initAnimations = () => {
  if (typeof window === 'undefined') return;

  setTimeout(() => {
    initHeroAnimations();
  }, 100);

  setTimeout(() => {
    initScrollAnimations();
  }, 200);
};
