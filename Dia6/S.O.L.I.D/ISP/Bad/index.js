class Impresora {
    imprimirDocumento() { }
    imprimirFoto() { }
    imprimirContrato() { }
}

class ImpresoraLaser extends Impresora {
    imprimirDocumento() {
        // lógica válida
    }



    imprimirFoto() {
        // lógica innecesaria
    }
    imprimirContrato() {
        // lógica innecesaria
    }
}
/*
En esta implementación, hay una interfaz Impresora con tres métodos: imprimirDocumento(), imprimirFoto() e imprimirContrato().
Las clases ImpresoraLaser e ImpresoraInyeccionTinta implementan esta interfaz, pero la clase ImpresoraLaser se ve obligada a
proporcionar implementaciones vacías para los métodos imprimirFoto() e imprimirContrato(), las cuales no son aplicables a una impresora láser. 
 */