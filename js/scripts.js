const toTopBtn = document.querySelector("#to-top-btn");

const menu = document.querySelector("#hamburguer");
const navBar = document.querySelector("#nav-bar");

const btnDarkMode = document.querySelector("#mode-btn");
const sunElement = document.querySelector("#sun");
const moonElement = document.querySelector("#moon");

const icons = Array.from(document.querySelectorAll(".queries-description"));

const htmlElement = document.querySelector("html");


window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
});

menu.addEventListener("click", () => {
  navBar.classList.toggle("mostrar");
  navBar.classList.toggle("hide-navbar");

  if (navBar.classList.contains("mostrar")) {
    menu.classList.add("menu-cinza");
    menu.classList.remove("menu-azul");
  } else {
    menu.classList.remove("menu-cinza");
    menu.classList.add("menu-azul");
  }
});

icons.map((icon) => {
  icon.addEventListener("click", () => {
    console.log(icon);
    icon.classList.toggle("hide");
  });
});

new kursor({
  type: 1,
  removeDefaultCursor: true,
});

btnDarkMode.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");

  sunElement.classList.toggle("none");
  moonElement.classList.toggle("none");
});


