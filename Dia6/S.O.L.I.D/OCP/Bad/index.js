/*
Existe una clase Forma que representa diferentes formas geométricas,
como círculos y cuadrados. Dicha clase tiene un método para calcular
el área de cada forma específica de la siguiente manera:
*/
class Forma {
    constructor(tipo) {
        this.tipo = tipo;
    }
    /* 
    ##############
    DANGER ZONE

    ##############
    */
    calcularArea() {
        let area = 0;
        if (this.tipo === "circulo") {
            // lógica para círculo
        } else if (this.tipo === "cuadrado") {
            // lógica para cuadrado
        }
        return area;
    }
}

/*
El problema con esta implementación es que cada vez que se necesite agregar una nueva forma geométrica,
se debe modificar la clase Forma y agregar un nuevo condicional en el método calcularArea().
Esto viola el principio Open/Closed, ya que la clase Forma está abierta para su modificación cada vez que se agrega una nueva forma.
*/