const form = document.getElementById('newsletter-form');
const status = document.querySelector('[role="status"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Inscrição confirmada!';
});
