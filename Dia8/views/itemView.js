// La vista busca centralizar toda la interacción
// por consola, lo cual incluye menú, prompts y 
// formatos de salida
const ItemView = {
    mostrarMenu() {
        console.log("\n=== CRUD de Items ===");
        console.log("1) Crear");
        console.log("2) Listar");
        console.log("3) Ver por ID");
        console.log("4) Actualizar");
        console.log("5) Eliminar");
        console.log("0) Salir");

    },
    pedirOpcion(prompt){
        const op= prompt("Elige una opción: ");
        return op.trim();
    },
    pedirDatosCreacion(prompt){
        const nombre = prompt("Nombre: ").trim();
        const descripcion = prompt("Descripción: ").trim();
        return {nombre,descripcion};
    },
    mostrarMensaje(msg){
        console.log(`\n${msg}`);
    },
    idActualizar(prompt) {
        let id = "";
        do {
            id = prompt("Ingrese el ID: ").trim();
        } while (!id);
        return id;
    }
};

module.exports={ItemView}