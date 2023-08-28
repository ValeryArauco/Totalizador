import Totalizador from "./totalizador";


const amount = document.querySelector("#cantidad");
//const second = document.querySelector("#segundo-numero");

const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  
  const cantidad = Number.parseInt(amount.value);
  //const secondNumber = Number.parseInt(second.value);

  const totalizador = new Totalizador();
  totalizador.cantidad = cantidad;

  div.innerHTML = "<p>" + "Cantidad de items: "+ totalizador.cantidad + "</p>";
});

