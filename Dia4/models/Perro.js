const Animal = require('./Animal'); 

class Perro extends Animal {
    //Sobreescritura
    hablar() {
        console.log(`${this.nombre} esta ladrando.`);
    }

}

module.exports = Perro;


/* Aquí Perro hereda de Animal, lo cual evita la duplicación de código facilitando el mantenimiento del mismo
y la extensión de comportamientos con facilidad
*/