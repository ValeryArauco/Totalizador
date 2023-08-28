import Totalizador from "./totalizador.js";

const totalizador = new Totalizador();

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

  it("Deberia mostrar el porcentaje de impuesto del estado seleccionado", () => {
    totalizador.estado = "CA";
    expect(totalizador.obtenerPorcentajeDeImpuesto()).toEqual(8.25);

  });

  it("Deberia mostrar el precio neto", () => {
    totalizador.precio = 45;
    totalizador.cantidad = 2;
    expect(totalizador.obtenerPrecioNeto()).toEqual(90);

  });

  it("Deberia mostrar el precio total aplicado el impuesto para CA", () => {
    totalizador.precio = 45;
    totalizador.cantidad = 2;
    totalizador.estado = "CA";
    expect(totalizador.obtenerPrecioTotal()).toEqual(97.425);

  });

  it("Deberia mostrar el precio total aplicado el impuesto para TX", () => {
    totalizador.precio = 45;
    totalizador.cantidad = 2;
    totalizador.estado = "TX";
    expect(totalizador.obtenerPrecioTotal()).toEqual(95.625);

  });

  it("Deberia mostrar el precio total aplicado el impuesto para AL", () => {
    totalizador.precio = 45;
    totalizador.cantidad = 2;
    totalizador.estado = "AL";
    expect(totalizador.obtenerPrecioTotal()).toEqual(93.6);

  });

  it("Deberia mostrar el precio total aplicado el impuesto para NV", () => {
    totalizador.precio = 45;
    totalizador.cantidad = 2;
    totalizador.estado = "NV";
    expect(totalizador.obtenerPrecioTotal()).toEqual(97.2);

  });

  it("Deberia mostrar el precio total aplicado el impuesto para UT", () => {
    totalizador.precio = 45;
    totalizador.cantidad = 2;
    totalizador.estado = "UT";
    expect(totalizador.obtenerPrecioTotal()).toEqual(95.985);

  });

  it("Deberia mostrar el precio total aplicado el descuento para 1000", () => {
    totalizador.precio = 500;
    totalizador.cantidad = 2;
    totalizador.estado = "";
    expect(totalizador.obtenerPrecioTotal()).toEqual(970);

  });

  it("Deberia mostrar el precio total aplicado el descuento para 3000", () => {
    totalizador.precio = 1500;
    totalizador.cantidad = 2;
    totalizador.estado = "";
    expect(totalizador.obtenerPrecioTotal()).toEqual(2850);

  });
  
});
