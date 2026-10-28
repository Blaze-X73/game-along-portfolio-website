const navBar = document.querySelector(".nav-bar");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navActions = document.querySelector(".nav-actions");
const header = document.querySelector("header");
const body = document.querySelector("body");
const main = document.querySelector("main");

const mediaQuery = window.matchMedia("(min-width: 760px)");

const squareCard = document.querySelector("#square-card");
const playerSearchSection = document.querySelector(".player-search");
const closeSquare = document.querySelector("#close-square");

const triangleCard = document.querySelector("#triangle-card");
const circleCard = document.querySelector("#circle-card");
const crossCard = document.querySelector("#cross-card");

menuBtn.addEventListener("click", () => {

if (!navBar.classList.contains("expanded")) {
  const navHeight = navBar.getBoundingClientRect().height;

  main.style.marginTop = `${navHeight}px`;
} else {
  main.style.marginTop = '0px';
}

  menuBtn.classList.toggle("active");
  navBar.classList.toggle("expanded");
  navLinks.classList.toggle("expanded");
  navActions.classList.toggle("expanded");
  header.classList.toggle("expanded");
  main.classList.toggle("expanded");
});

mediaQuery.addEventListener("change", function (event) {
  if (event.matches) {
    menuBtn.classList.remove("active");
    navBar.classList.remove("expanded");
    navLinks.classList.remove("expanded");
    navActions.classList.remove("expanded");
    header.classList.remove("expanded");
    main.classList.remove("expanded");
  }
});

squareCard.addEventListener("click", () => {
  playerSearchSection.classList.add("open");
  navBar.classList.add("hidden");
  main.classList.add("hidden");
});

closeSquare.addEventListener("click", () => {
  playerSearchSection.classList.remove("open");
  navBar.classList.remove("hidden");
  main.classList.remove("hidden");
})
