class GestorArchivos {
    leerArchivo(ruta) {
        let contenido = "Contenido por defecto";
        // Lógica para leer archivo (simulada)
        return contenido;
    }

    escribirArchivo(ruta, contenido) {
        // Lógica para escribir archivo (simulada)
    }
}

/*
Aqui existe una clase llamada GestorArchivos que se encarga de leer y escribir archivos en el sistema de archivos.
Sin embargo, esta clase tiene dos responsabilidades: leer archivos y escribir archivos.
Esto viola el principio de responsabilidad única (SRP), ya que la clase debería tener una sola razón para cambiar.
*/