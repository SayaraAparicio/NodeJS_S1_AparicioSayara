class Pedido{
    constructor(id){
        this.id=id;
        this.items = [];
    }
    addItem(item){
        this.items.push(item);
    }
    total(){
        return this.items.reduce((acumulador,iterador) => acumulador+iterador.subtotal(),0);
    }
}

module.exports = Pedido;