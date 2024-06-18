const toTopBtn = document.querySelector("#to-top-btn");

const menu = document.querySelector("#hamburguer");
const navBar = document.querySelector("#nav-bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
});

menu.addEventListener("click", () => {
  navBar.classList.toggle("mostrar");
  navBar.classList.toggle("esconder");

  if (navBar.classList.contains("mostrar")) {
    menu.classList.add("menu-cinza");
    menu.classList.remove("menu-azul");
  } else {
    menu.classList.remove("menu-cinza");
    menu.classList.add("menu-azul");
  }
});

