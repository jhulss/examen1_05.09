import contadorOcurrencias from "./contador";


const first = document.querySelector("#palabra");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const contador = new contadorOcurrencias();

  div.innerHTML = "<p>" + contador.verificarOcurrencias(first.value) + "</p>";
});
