import Totalizador from "./totalizador";


const amount = document.querySelector("#cantidad");
//const second = document.querySelector("#segundo-numero");

const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const totalizador = new Totalizador();
  const cantidad = Number.parseInt(amount.value);
  //const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + totalizador.totalizar(cantidad) + "</p>";
});

