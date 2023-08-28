import totalizador from "./totalizador.js";

//let totalizador = new totalizador();

describe("Totalizador", () => {
  it("Deberia mostrar en pantalla la cantidad de items ingresados", () => {
    totalizador.cantidad = 5;
    expect(totalizador.cantidad).toEqual(5);

  });
});
