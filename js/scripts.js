const toTopBtn = document.querySelector("#to-top-btn");

const navBar = document.querySelector("#nav-bar")

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
});

navBar.addEventListener("click", () => {
  navBar.classList.toggle("mostrar")
})
