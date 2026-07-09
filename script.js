const backTop = document.querySelector('.backtop');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 500);
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelectorAll('.checklist input').forEach((box, index) => {
  const key = `kyushu-check-${index}`;
  box.checked = localStorage.getItem(key) === 'true';
  box.addEventListener('change', () => localStorage.setItem(key, box.checked));
});
