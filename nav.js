document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');

  const toggleMenu = () => {
    if (!navbar) return;
    navbar.classList.toggle('menu-open');
    // Update aria-expanded for accessibility
    if (hamburger) {
      const isOpen = navbar.classList.contains('menu-open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
  };

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });
  }

  // Close menu when a link is clicked (useful on mobile)
  if (navLinks) {
    navLinks.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.tagName === 'A' && navbar.classList.contains('menu-open')) {
        navbar.classList.remove('menu-open');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
