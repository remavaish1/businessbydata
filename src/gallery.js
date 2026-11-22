const gallery = document.querySelector('.workshop-gallery');
const slides = [...gallery.querySelectorAll('img')];
const motion = matchMedia('(prefers-reduced-motion: reduce)');
let index = 0;
let inView = false;
let timer;
let playing = !motion.matches;
const controls = gallery.querySelector('.workshop-controls');
const play = controls.querySelector('[data-play]');
const count = controls.querySelector('[data-count]');

function advance(step, manual = false) {
  slides[index].hidden = true;
  index = (index + step + slides.length) % slides.length;
  slides[index].hidden = false;
  count.setAttribute('aria-live', manual ? 'polite' : 'off');
  count.textContent = (index + 1) + ' / ' + slides.length;
}

controls.hidden = false;
play.addEventListener('click', () => {
  playing = !playing;
  updatePlayback();
});
for (const button of controls.querySelectorAll('[data-step]')) {
  button.addEventListener('click', () => {
    playing = false;
    advance(Number(button.dataset.step), true);
    updatePlayback();
  });
}

function updatePlayback() {
  clearInterval(timer);
  play.textContent = playing ? 'Pause' : 'Play';
  if (!playing || !inView || document.hidden) return;
  timer = setInterval(() => advance(1), 6500);
}

document.addEventListener('visibilitychange', updatePlayback);
motion.addEventListener('change', () => { if (motion.matches) playing = false; updatePlayback(); });
new IntersectionObserver(([entry]) => {
  inView = entry.intersectionRatio >= 0.4;
  updatePlayback();
}, { threshold: 0.4 }).observe(gallery);
