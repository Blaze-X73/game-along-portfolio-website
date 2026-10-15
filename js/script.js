const navBar = document.querySelector('.nav-bar');
const logoAndMenu = document.querySelector('.logo-and-menu');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navBar.classList.toggle('expanded');
    navLinks.classList.toggle('expanded');
    navActions.classList.toggle('expanded');
} )

