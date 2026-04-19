const nav = document.getElementById('siteNav');
if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));
const t = document.getElementById('navToggle'), l = document.getElementById('navLinks');
if (t && l) t.addEventListener('click', () => l.classList.toggle('open'));

// Animate stat counters
function animateCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 20));
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 60);
  });
}
const hero = document.querySelector('.hero');
if (hero) {
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animateCounters(); obs.disconnect(); }
  }, { threshold: 0.3 });
  obs.observe(hero);
}
