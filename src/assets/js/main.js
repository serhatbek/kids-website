document.querySelectorAll('.card-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('change');
  });
});
