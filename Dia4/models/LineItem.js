//Un Pedido conoce sus LineItem, pero cada LineItem no conoce el Pedido
class LineItem{
    constructor(producto,cantidad,precioUnitario){
        this.producto= producto;
        this.cantidad=cantidad;
        this.precioUnitario=precioUnitario;
    }
    subtotal(){
        return this.cantidad * this.precioUnitario;
    }
}


module.exports = LineItem;