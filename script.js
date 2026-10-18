// Expand contribution details without requiring a framework.
for (const button of document.querySelectorAll('.abstract-toggle')) {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    button.setAttribute('aria-expanded', String(!expanded));
    panel.hidden = expanded;
    button.textContent = expanded ? 'My contribution +' : 'My contribution −';
  });
}
