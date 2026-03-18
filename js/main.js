// ============================================
// Emberline Studio — Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Nav ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // --- Navbar scroll ---
  const navbar = document.getElementById('navbar');

  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Scroll reveal ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up, .capability, .work-card, .team-member, .work-detail').forEach(el => {
    if (!el.classList.contains('fade-up')) {
      el.classList.add('fade-up');
    }
    observer.observe(el);
  });

  // --- Contact form (demo) ---
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.innerHTML = 'Thank you &mdash; we\'ll be in touch';
      btn.style.background = 'var(--accent)';
      btn.style.borderColor = 'var(--accent)';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.disabled = false;
        form.reset();
      }, 4000);
    });
  }

  // --- Smooth staggered reveal for capabilities ---
  const capabilities = document.querySelectorAll('.capability');
  capabilities.forEach((cap, i) => {
    cap.style.transitionDelay = `${i * 0.1}s`;
  });

});
