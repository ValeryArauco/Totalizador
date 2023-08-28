import Totalizador from "./totalizador";


const amount = document.querySelector("#cantidad");
const price = document.querySelector("#precio");
const state = document.querySelector("#estado");

const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(amount.value);
  const precio = Number.parseInt(price.value);
  const estado = state.value;

  const totalizador = new Totalizador();
  totalizador.cantidad = cantidad;
  totalizador.precio = precio;
  totalizador.estado = estado;

  div.innerHTML = "<p>" + "Cantidad de items: "+ totalizador.cantidad + "</p>"
 + "<p>" + "Precio por item: "+ totalizador.precio + "</p>"
 + "<p>" + "Codigo de estado: "+ totalizador.estado + "</p>"
 + "<p>" + "Impuesto de estado: "+ totalizador.obtenerPorcentaje(totalizador.obtenerPorcentajeDeImpuesto()) + "</p>"
 + "<p>" + "Precio neto: "+ totalizador.obtenerPrecioNeto() + "</p>"
 + "<p>" + "Impuesto total: "+ totalizador.obtenerImpuesto() + "</p>"
 + "<p>" + "Porcentaje de descuento: "+ totalizador.obtenerPorcentaje(totalizador.obtenerPorcentajeDeDescuento()) + "</p>"
 + "<p>" + "Precio total: "+ totalizador.obtenerPrecioTotal() + "</p>";

});

