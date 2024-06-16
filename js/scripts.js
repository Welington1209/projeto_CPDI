const toTopBtn = document.querySelector("#to-top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
});
