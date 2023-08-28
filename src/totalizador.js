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

  obtenerPrecioNeto(){
    return this.cantidad * this.precio;
  }

  obtenerImpuesto(){
    return this.obtenerPorcentajeDeImpuesto()/100 * this.obtenerPrecioNeto();
  }
  
  obtenerPrecioTotal(){
    return this.obtenerPrecioNeto() + this.obtenerImpuesto();
  }

}

export default Totalizador;
