function throttle(fn, wait) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn.apply(this, args);
    }
  };
}

function debounce(fn, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(function () { fn.apply(this, args); }.bind(this), wait);
  };
}
(function () {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.navbar__toggle');
  const mobileMenu = document.querySelector('.navbar__mobile');
  if (!navbar) return;

  const SCROLL_THRESHOLD = 12;

  function updateScrollState() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }

  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      const isOpen = navbar.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-visible', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navbar.classList.remove('is-open');
        mobileMenu.classList.remove('is-visible');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
})();

// Scroll-spy: highlight the nav link for the section currently in view
(function () {
  const navLinks = document.querySelectorAll('.navbar__link[href^="#"]');
  if (!navLinks.length) return;

  const sections = Array.from(navLinks)
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  if (!sections.length || !('IntersectionObserver' in window)) return;

  function setActive(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
    });
  }

  const spy = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach(function (section) { spy.observe(section); });
})();
(function () {
  const navHeight = getComputedStyle(document.documentElement)
    .getPropertyValue('--nav-height');
  const offset = parseInt(navHeight, 10) || 84;

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - offset + 1;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
})();
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) {
      el.classList.add('is-visible');
      animateCountIfPresent(el, true);
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          animateCountIfPresent(entry.target, prefersReducedMotion);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach(function (el) { observer.observe(el); });

  function animateCountIfPresent(root, skipAnimation) {
    const counter = root.matches('[data-count-to]') ? root : root.querySelector('[data-count-to]');
    if (!counter) return;

    const target = parseFloat(counter.getAttribute('data-count-to'));
    const suffix = counter.getAttribute('data-suffix') || '';
    if (isNaN(target)) return;

    if (skipAnimation) {
      counter.textContent = target + suffix;
      return;
    }

    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = Math.round(target * eased);
      counter.textContent = value + suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }
})();

// Timeline (Prototype-to-Production) and Process Track: trigger the
// self-drawing connector/progress line once each section scrolls into view
(function () {
  const groups = document.querySelectorAll('.timeline-v, .process-track');
  if (!groups.length) return;

  if (!('IntersectionObserver' in window)) {
    groups.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
  );

  groups.forEach(function (el) { observer.observe(el); });
})();

// Hero image: subtle scroll parallax (transform-only, rAF-throttled)
(function () {
  const heroSection = document.querySelector('.hero');
  const heroImg = document.querySelector('.hero__media img');
  if (!heroSection || !heroImg) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const MAX_SHIFT = 22; // px
  let ticking = false;

  function update() {
    const rect = heroSection.getBoundingClientRect();
    const total = rect.height + window.innerHeight;
    const progressed = Math.min(Math.max((window.innerHeight - rect.top) / total, 0), 1);
    const shift = (progressed - 0.5) * MAX_SHIFT * 2;
    heroImg.style.transform = 'translateY(' + shift.toFixed(1) + 'px) scale(1.5)';
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
})();

// Calendly: defer loading the third-party widget script until the
// contact section is near the viewport, instead of on initial page load
(function () {
  const contactSection = document.getElementById('contact');
  if (!contactSection) return;

  let loaded = false;
  function loadCalendly() {
    if (loaded) return;
    loaded = true;
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }

  if (!('IntersectionObserver' in window)) {
    loadCalendly();
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          loadCalendly();
          observer.disconnect();
        }
      });
    },
    { rootMargin: '600px 0px' }
  );

  observer.observe(contactSection);
})();
(function () {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
