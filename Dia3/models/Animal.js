/* 
La herencia permite crear nuevas clases aparitr de otras, mediante reutilización de atributos y metodos.
*/

class Animal {
    constructor(nombre){
        this.nombre = nombre; 
    }
    hablar() {
        console.log(`${this.nombre} esta haciendo un ruido.`);
    }
}

module.exports = Animal;