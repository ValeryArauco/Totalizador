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

  obtenerPorcentajeDeDescuento(){
    switch (true) {
      case this.obtenerPrecioNeto() < 1000:
        return 0;
      case this.obtenerPrecioNeto() < 3000:
        return 3;
      case this.obtenerPrecioNeto() < 7000:
        return 5;
      case this.obtenerPrecioNeto() < 10000:
        return 7;
      case this.obtenerPrecioNeto() < 30000:
        return 10;
      default:
        return 15;
    }
  }

  obtenerPorcentaje(valor){
    return  "%" + valor;
  }

  obtenerPrecio(valor){
    return  "$" + valor;
  }

  obtenerDescuento(){
    return this.obtenerPorcentajeDeDescuento()/100 * this.obtenerPrecioNeto();
  }



  obtenerImpuesto(){
    return this.obtenerPorcentajeDeImpuesto()/100 * this.obtenerPrecioNeto();
  }
  
  obtenerPrecioTotal(){
    return this.obtenerPrecioNeto() + this.obtenerImpuesto() - this.obtenerDescuento();
  }

}

export default Totalizador;
