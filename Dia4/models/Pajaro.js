const Animal = require('./Animal'); 

class Pajaro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
    hablar() {
        console.log(`${this.nombre} es un ${this.raza}!!!!`);
    }
}

module.exports = Pajaro;