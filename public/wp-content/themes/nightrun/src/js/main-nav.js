const mainNav = document.getElementById('site-navigation');
const menuButton = document.getElementById('menu-toggle');
const menuStyle = window.getComputedStyle(mainNav);

menuButton.addEventListener('click', () => {
  if(mainNav.classList.contains('menu-closed')) {
    mainNav.classList.remove('menu-closed');
    menuButton.classList.remove('closed');
    mainNav.style.setProperty('--nav-width', '150px');
  } else {
    mainNav.classList.add('menu-closed');
    menuButton.classList.add('closed');
    mainNav.style.setProperty('--nav-width', '75px');
  }
});
