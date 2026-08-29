// ======================================================
// Luciane Prado — Harmonização Facial
// ======================================================

document.addEventListener('DOMContentLoaded', () => {
  // Ano dinâmico no footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header com sombra ao rolar
  const header = document.getElementById('header');
  const onScroll = () => {
    if (window.scrollY > 12) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll);

  // Menu mobile
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('nav--open'));
  });

  // Marca elementos para animação de entrada
  document.querySelectorAll(
    '.hero__text, .hero__media, .sobre__text, .sobre__media, .card, .testimonial, .galeria__item, .parceria__inner'
  ).forEach(el => el.setAttribute('data-reveal', ''));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
});
