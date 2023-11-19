const rocket = document.getElementById('rocket');

rocket.addEventListener('click', () => {
  rocket.classList.add('clicked');
  setTimeout(() => {
    rocket.classList.remove('clicked');
  }, 500); // This should match the transition duration in CSS
});
