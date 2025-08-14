/*
El Liskov Substitution Principle (LSP) establece que los objetos de una subclase deben poder reemplazar a los de su clase
base sin afectar el comportamiento del sistema. En otras palabras, las subclases deben ser capaces de mantener las propiedades
y comportamientos de la clase padre.
*/
class Figura {
    calcularArea() {
        throw new Error("Método abstracto");
    }
}




class Rectangulo extends Figura {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }
}

class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado * this.lado;
    }
}

/*
El principio de sustitución de Liskov dice que se debería poder utilizar objetos de las subclases
en lugar de objetos de la clase base sin alterar el correcto funcionamiento del programa. Es decir,
si existe una lista de figuras y se agregan objetos de las subclases Rectangulo y Cuadrado, el cálculo
del área debe seguir siendo coherente y correcto.
*/