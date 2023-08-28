class Totalizador{
  constructor() {
    this.cantidad = 0;
    this.precio = 0;
    this.estado = "";
  }

  obtenerPorcentajeDeImpuesto(){
    switch (this.estado) {
      case "UT":
        return 6.65;
      case "NV":
        return 8.00;
      case "TX":
        return 6.25;
      case "AL":
        return 4.00;
      case "CA":
        return 8.25;
      default:
        return 0;
    }
  }

  obtenerDescuento(){
    switch (true) {
      case this.obtenerPrecioNeto() < 1000:
        return 0;
      case this.obtenerPrecioNeto() < 3000:
        return 3/100 * this.obtenerPrecioNeto();
      case this.obtenerPrecioNeto() < 7000:
        return 5/100 * this.obtenerPrecioNeto();
      case this.obtenerPrecioNeto() < 10000:
        return 7/100 * this.obtenerPrecioNeto();
      case this.obtenerPrecioNeto() < 30000:
        return 10/100 * this.obtenerPrecioNeto();
      default:
        return 15/100 * this.obtenerPrecioNeto();
    }
  }

  obtenerPrecioNeto(){
    return this.cantidad * this.precio;
  }

  obtenerImpuesto(){
    return this.obtenerPorcentajeDeImpuesto()/100 * this.obtenerPrecioNeto();
  }
  
  obtenerPrecioTotal(){
    return this.obtenerPrecioNeto() + this.obtenerImpuesto() - this.obtenerDescuento();
  }

}

export default Totalizador;
