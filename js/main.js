// import { products } from "./data.js";
// import { initSwiperSlider } from "./slider.js";
// import {
//   getNubmerFromPrice,
//   declOfNum,
//   arraysContainSame,
//   sortByAscendingAmount,
//   sortByDescendingPrice,
// } from "./utils.js";
const headerMenu = document.querySelector(".header");
const menuButton = document.querySelector(".menu-button");

const showMenu = () => {
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "close menu");
  headerMenu.classList.remove("header-menu--closed");
  headerMenu.classList.add("header-menu--opened");
};

const closeMenu = () => {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "open menu");
  headerMenu.classList.add("header-menu--closed");
  headerMenu.classList.remove("header-menu--opened");
};
//  MAIN
document.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  // initSwiperSlider();
  headerMenu.classList.add("header-menu--closed");

  menuButton.addEventListener("click", () => {
    if (headerMenu.classList.contains("header-menu--closed")) {
      showMenu();
    } else {
      closeMenu();
    }
  });
});
