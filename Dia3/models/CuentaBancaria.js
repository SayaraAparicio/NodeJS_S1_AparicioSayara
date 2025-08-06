class CuentaBancaria {
    #saldo //Atributo privado

    constructor(titular, saldoInicial) {
        this.titular = titular; //Atributo público
        this.#saldo = saldoInicial; //Atributo privado
    }

    depositar(monto){
        if(monto> 0)
        this.#saldo += monto; 
    }
    verSaldo() {
        return this.#saldo; 
    }
}

module.exports = CuentaBancaria;