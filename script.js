// Nav sticky — fond au scroll
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => {
    if (nav.classList.contains('nav--static')) return;
    nav.classList.toggle('nav--scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Flip cards produit
document.querySelectorAll('.card').forEach(card => {
  const flip = () => {
    const flipped = card.classList.toggle('is-flipped');
    card.setAttribute('aria-pressed', flipped);
    card.querySelector('.card__back').setAttribute('aria-hidden', !flipped);
  };
  card.addEventListener('click', flip);
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });
});

// Menu burger mobile
const burger = document.querySelector('.nav__burger');
const navLinks = document.querySelector('.nav__links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', isOpen);
  });

  // Fermer le menu en cliquant sur un lien
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}
