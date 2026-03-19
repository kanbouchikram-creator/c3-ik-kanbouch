/* ═══════════════════════════════════════════════
   FORMA STUDIO — Main JavaScript
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── Navbar scroll effect ─── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─── Active nav link ─── */
  const navLinks = document.querySelectorAll('.nav-link');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === current) link.classList.add('active');
  });

  /* ─── Mobile nav ─── */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ─── Scroll reveal ─── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(el => observer.observe(el));
  }

  /* ─── Testimonials slider ─── */
  const track = document.querySelector('.testi-track');
  const dots = document.querySelectorAll('.testi-dot');
  if (track && dots.length) {
    let current = 0;
    const total = dots.length;
    const goTo = (i) => {
      current = (i + total) % total;
      track.style.transform = `translateX(calc(-${current * 100}% - ${current * 2}rem))`;
      dots.forEach((d, idx) => d.classList.toggle('active', idx === current));
    };
    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
    let auto = setInterval(() => goTo(current + 1), 5000);
    track.parentElement.addEventListener('mouseenter', () => clearInterval(auto));
    track.parentElement.addEventListener('mouseleave', () => {
      auto = setInterval(() => goTo(current + 1), 5000);
    });
  }

  /* ─── Gallery lightbox ─── */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox img');
  const lightboxClose = document.querySelector('.lightbox-close');
  if (galleryItems.length && lightbox) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
          lightboxImg.src = img.currentSrc || img.src;
          lightboxImg.alt = img.alt;
          lightbox.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });
    const closeLightbox = () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    };
    lightboxClose?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
  }

  /* ─── Contact form ─── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const budgetRange = document.getElementById('budget');
    const budgetDisplay = document.getElementById('budgetDisplay');
    if (budgetRange && budgetDisplay) {
      const fmt = (v) => parseInt(v).toLocaleString('fr-FR') + ' €';
      budgetDisplay.textContent = fmt(budgetRange.value);
      budgetRange.addEventListener('input', () => {
        budgetDisplay.textContent = fmt(budgetRange.value);
      });
    }

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const original = btn.innerHTML;
      btn.innerHTML = '<span>Message envoyé ✓</span>';
      btn.style.background = '#2a7d4f';
      btn.style.borderColor = '#2a7d4f';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.disabled = false;
        contactForm.reset();
        if (budgetDisplay) budgetDisplay.textContent = '5 000 €';
      }, 3500);
    });
  }

  /* ─── Pricing highlight ─── */
  const featuredCells = document.querySelectorAll('.pricing-table .featured-col');
  // already handled via CSS

  /* ─── Cursor effect (desktop only) ─── */
  if (window.matchMedia('(pointer: fine)').matches) {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
      position:fixed; width:8px; height:8px; border-radius:50%;
      background:var(--accent); pointer-events:none; z-index:9999;
      transform:translate(-50%,-50%); transition:transform 0.1s;
      mix-blend-mode:multiply;
    `;
    const cursorRing = document.createElement('div');
    cursorRing.style.cssText = `
      position:fixed; width:32px; height:32px; border-radius:50%;
      border:1px solid var(--accent); pointer-events:none; z-index:9998;
      transform:translate(-50%,-50%); transition:all 0.15s ease-out;
      opacity:0.5; mix-blend-mode:multiply;
    `;
    document.body.appendChild(cursor);
    document.body.appendChild(cursorRing);
    let mx = 0, my = 0;
    document.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
      cursorRing.style.left = mx + 'px';
      cursorRing.style.top = my + 'px';
    });
    document.querySelectorAll('a, button, .gallery-item, .service-card, summary').forEach(el => {
      el.addEventListener('mouseenter', () => { cursorRing.style.transform = 'translate(-50%,-50%) scale(2)'; });
      el.addEventListener('mouseleave', () => { cursorRing.style.transform = 'translate(-50%,-50%) scale(1)'; });
    });
  }

});
