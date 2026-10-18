// Keep content readable without JavaScript; enhance the project showcase when available.
for (const button of document.querySelectorAll('.abstract-toggle')) {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    button.setAttribute('aria-expanded', String(!expanded));
    panel.hidden = expanded;
    button.textContent = expanded ? 'My contribution +' : 'My contribution −';
  });
}
const selectors = [...document.querySelectorAll('.project-selector')];
const panels = [...document.querySelectorAll('[data-panel]')];
if (selectors.length && panels.length) {
  document.documentElement.classList.add('enhanced');
  function selectProject(index, focus = false) {
    selectors.forEach((button, i) => {
      const selected = i === index;
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    panels.forEach((panel, i) => { panel.hidden = i !== index; });
    if (focus) selectors[index].focus();
  }
  selectors.forEach((button, i) => {
    button.addEventListener('click', () => selectProject(i));
    button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (i + 1) % selectors.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (i + selectors.length - 1) % selectors.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = selectors.length - 1;
      if (next !== undefined) { event.preventDefault(); selectProject(next, true); }
    });
  });
  selectProject(0);
}
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu() {
  navigation?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
}
menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navigation?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation?.classList.contains('open')) { closeMenu(); menuButton.focus(); }
});
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach(a => {
        const active = a.getAttribute('href') === '#' + entry.target.id;
        a.classList.toggle('active', active);
        if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  links.forEach(a => { const target = document.querySelector(a.getAttribute('href')); if (target) observer.observe(target); });
}
