const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
  header.classList.toggle ("sticky", window.scrollY > 0);
})
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('open');
};

// Toggle menu when clicking the menu icon
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};