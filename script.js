// UI interactions – header scroll effect, mobile menu, parallax, reveal animations, accordion
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  // Header shadow on scroll
  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-lg', 'bg-white/80', 'border-b', 'border-zinc-200', 'dark:border-zinc-800', 'backdrop-blur-md');
    } else {
      header.classList.remove('shadow-lg', 'bg-white/80', 'border-b', 'border-zinc-200', 'dark:border-zinc-800', 'backdrop-blur-md');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu toggle
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden');
    // Change icon
    menuToggle.innerHTML = isOpen ? '<i class="fa-solid fa-bars"></i>' : '<i class="fa-solid fa-xmark"></i>';
  });

  // Parallax background for hero
  const heroSection = document.getElementById('home');
  const heroBg = heroSection.querySelector('.hero-bg');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (heroBg) heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
  });

  // Reveal on intersection
  const revealEls = document.querySelectorAll('.reveal, .reveal-left');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => observer.observe(el));

  // Accordion for price policy
  const priceToggle = document.getElementById('price-toggle');
  const priceContent = document.getElementById('price-content');
  const priceIcon = document.getElementById('price-icon');
  priceToggle.addEventListener('click', () => {
    const open = priceContent.classList.toggle('max-h-0'); // toggle visibility via max-height
    if (open) {
      priceContent.style.maxHeight = priceContent.scrollHeight + 'px';
      priceContent.style.opacity = '1';
      priceIcon.classList.add('rotate-180');
    } else {
      priceContent.style.maxHeight = '0px';
      priceContent.style.opacity = '0';
      priceIcon.classList.remove('rotate-180');
    }
  });
});
