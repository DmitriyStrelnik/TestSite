document.addEventListener("DOMContentLoaded", function() {
  const burgerIcon = document.getElementById('burgerIcon');
  const burgerNav = document.getElementById('burgerNav');
  const burgerClose = document.getElementById('burgerClose');
  const overlay = document.getElementById('overlay');
  const menuItems = document.querySelectorAll('.burger-menu__nav a');

  function openMenu() {
    burgerIcon.classList.add('open');
    burgerNav.classList.add('active');
    overlay.classList.add('active');
  }

  function closeMenu() {
    burgerIcon.classList.remove('open');
    burgerNav.classList.remove('active');
    overlay.classList.remove('active');
  }

  burgerIcon.addEventListener('click', openMenu);
  burgerClose.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
  });
});
