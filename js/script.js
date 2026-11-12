const navBar = document.querySelector(".nav-bar");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navActions = document.querySelector(".nav-actions");
const header = document.querySelector("header");
const body = document.querySelector("body");
const main = document.querySelector("main");
const welcome = document.querySelector("#main-section");

const mediaQuery = window.matchMedia("(min-width: 760px)");

const squareCard = document.querySelector("#square-card");
const playerSearchSection = document.querySelector(".player-search");
const closeSquare = document.querySelector("#close-square");

const triangleCard = document.querySelector("#triangle-card");
const circleCard = document.querySelector("#circle-card");
const crossCard = document.querySelector("#cross-card");

function collapseSideBar() {
  menuBtn.classList.remove("active");
    navBar.classList.remove("expanded");
    navLinks.classList.remove("expanded");
    navActions.classList.remove("expanded");
    header.classList.remove("expanded");
    main.classList.remove("expanded");
    body.classList.remove("expanded");
}

menuBtn.addEventListener("click", () => {
  if (!navBar.classList.contains("expanded")) {
    const navHeight = navBar.getBoundingClientRect().height;

    main.style.marginTop = `${navHeight}px`;
  } else {
    main.style.marginTop = "0px";
  }

  menuBtn.classList.toggle("active");
  navBar.classList.toggle("expanded");
  navLinks.classList.toggle("expanded");
  navActions.classList.toggle("expanded");
  header.classList.toggle("expanded");
  main.classList.toggle("expanded");
  body.classList.toggle("expanded");
});

mediaQuery.addEventListener("change", function (event) {
  if (event.matches) {
    menuBtn.classList.remove("active");
    navBar.classList.remove("expanded");
    navLinks.classList.remove("expanded");
    navActions.classList.remove("expanded");
    header.classList.remove("expanded");
    main.classList.remove("expanded");
    body.classList.remove("expanded");
  }
});

const home = document.querySelector("#home");
const findPlayers = document.querySelector("#find-players");
const about = document.querySelector("#about-link");
const contact = document.querySelector("#contact-link");

home.addEventListener("click", () => {
  collapseSideBar();
});
findPlayers.addEventListener("click", () => {
  collapseSideBar();
});
about.addEventListener("click", () => {
  collapseSideBar();
});
contact.addEventListener("click", () => {
  collapseSideBar();
  contactWrapper.classList.add("open");
});

//Enable hidden nav bar
{
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      header.classList.add("nav-hidden");
    } else {
      header.classList.remove("nav-hidden");
    }
    lastScrollY = window.scrollY;
  });
}

const contactBtn = document.querySelector(".contact-btn");
const contactWrapper = document.querySelector(".contact-wrapper");
const closeContactButton = document.querySelector("#close-contact");

contactBtn.addEventListener("click", () => {
  contactWrapper.classList.add("open");
});

closeContactButton.addEventListener("click", () => {
  contactWrapper.classList.remove("open");
});
