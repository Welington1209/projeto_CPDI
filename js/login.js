const inputName = document.querySelector("#name-input");
const btnLogin = document.querySelector("#btn-login");
const div = document.querySelector(".home-page");

const h2Name = document.querySelector(".name-h2");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  div.style.display = "flex";

  const userName = inputName.value;

  const text = `Olá ${userName}!`;

  h2Name.innerHTML = text;
});

new kursor({
    type: 1,
    removeDefaultCursor: true,
  });

