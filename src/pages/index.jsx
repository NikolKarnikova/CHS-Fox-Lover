import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation-menu");
const navLink = document.querySelectorAll("navigation-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLink.forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
