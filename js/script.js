const navBar = document.querySelector(".nav-bar");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navActions = document.querySelector(".nav-actions");
const header = document.querySelector("header");
const body = document.querySelector("body");
const mediaQuery = window.matchMedia("(min-width: 760px)");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navBar.classList.toggle("expanded");
  navLinks.classList.toggle("expanded");
  navActions.classList.toggle("expanded");
  header.classList.toggle("expanded");
  body.classList.toggle("expanded");
});

mediaQuery.addEventListener("change", function (event) {
  if (event.matches) {
    menuBtn.classList.remove("active");
    navBar.classList.remove("expanded");
    navLinks.classList.remove("expanded");
    navActions.classList.remove("expanded");
    header.classList.remove("expanded");
    body.classList.remove("expanded");
  }
});
