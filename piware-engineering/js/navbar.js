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
