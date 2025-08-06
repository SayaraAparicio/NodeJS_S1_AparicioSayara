// ########################################
// P.O.O - Abstracción
// ########################################


class Persona {
    //Atributos en JS se integran en
    //el constructor
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }   

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

module.exports = Persona;