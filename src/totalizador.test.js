import totalizador from "./totalizador.js";

//let totalizador = new totalizador();

describe("Totalizador", () => {
  it("Deberia mostrar en pantalla la cantidad de items ingresados", () => {
    totalizador.cantidad = 5;
    expect(totalizador.cantidad).toEqual(5);

  });

  it("Deberia mostrar en pantalla el precio por item ingresado", () => {
    totalizador.precio = 6;
    expect(totalizador.precio).toEqual(6);

  });

  it("Deberia mostrar el estado seleccionado", () => {
    totalizador.estado = "CA";
    expect(totalizador.estado).toEqual("CA");

  });
});
