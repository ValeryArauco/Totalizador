import totalizador from "./totalizador.js";

//let totalizador = new totalizador();

describe("Totalizador", () => {
  it("Deberia mostrar en pantalla la cantidad de items ingresados", () => {
    totalizador.cantidad = 5;
    expect(totalizador.obtenerCantidad).toEqual(5);

  });

  it("Deberia mostrar en pantalla el precio por item ingresado", () => {
    totalizador.precio = 5;
    expect(totalizador.precio).toEqual(5);

  });
});
