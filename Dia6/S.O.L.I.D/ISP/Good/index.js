class ImpresoraDocumento {
    imprimirDocumento() { }
}

class ImpresoraFoto {
    imprimirFoto() { }
}

class ImpresoraLaser extends ImpresoraDocumento {
    imprimirDocumento() {
        console.log("Imprimiendo documento en láser");
    }
}

class ImpresoraTinta extends ImpresoraDocumento {
    imprimirDocumento() {
        console.log("Documento impreso a tinta");
    }
}

class ImpresoraMultifuncional extends ImpresoraFoto {
    imprimirFoto() {
        console.log("Foto impresa");
    }
}
/*
En esta nueva implementación se ha segregado la "interfaz" Impresora en dos
interfaces más específicas: ImpresoraDocumento e ImpresoraFoto. Ahora cada
clase implementa solo las interfaces que necesitan, evitando así la implementación
innecesaria de métodos. La clase ImpresoraLaser solo implementa ImpresoraDocumento,
mientras que ImpresoraInyeccionTinta implementa ambas interfaces ImpresoraDocumento
e ImpresoraFoto, cumpliendo con el principio de segregación de interfaz.
 */