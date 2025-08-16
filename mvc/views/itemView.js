const prompt = require('prompt-sync')();

class ItemView {
    // Mostrar menú principal
    showMenu() {
        console.log("\n=== CRUD ===");
        console.log("1. Crear elemento");
        console.log("2. Listar elementos");
        console.log("3. Actualizar elemento");
        console.log("4. Eliminar elemento");
        console.log("5. Salir\n");

        return prompt("Selecciona una opción: ");
    }

    // Solicitar nombre para crear elemento
    getItemName() {
        return prompt("Ingresa un nombre: ");
    }

    // Solicitar ID
    getItemId(message = "Ingresa el ID: ") {
        const input = prompt(message);
        const id = parseInt(input);
        
        if (isNaN(id)) {
            throw new Error("ID inválido. Debe ser un número.");
        }
        
        return id;
    }

    // Solicitar nuevo nombre para actualizar
    getNewItemName() {
        return prompt("Nuevo nombre: ");
    }

    // Mostrar lista de elementos
    showItems(items) {
        if (!items || items.length === 0) {
            console.log("No hay elementos para mostrar.");
            return;
        }

        console.log("\n=== Lista de elementos ===");
        console.log("-".repeat(40));
        items.forEach(item => {
            console.log(`ID: ${item.id} | Nombre: ${item.nombre}`);
        });
        console.log("-".repeat(40));
    }

    // Mostrar elemento individual
    showItem(item) {
        console.log(`ID: ${item.id} | Nombre: ${item.nombre}`);
    }

    // Mostrar mensajes de éxito
    showSuccess(message) {
        console.log(`✅ ${message}`);
    }

    // Mostrar mensajes de error
    showError(message) {
        console.log(`❌ Error: ${message}`);
    }

    // Mostrar mensajes informativos
    showInfo(message) {
        console.log(`ℹ️  ${message}`);
    }

    // Mostrar mensaje de opción inválida
    showInvalidOption() {
        this.showError("Opción inválida. Por favor, selecciona una opción válida.");
    }

    // Mostrar mensaje de despedida
    showGoodbye() {
        console.log("\n👋 ¡Gracias por usar la aplicación! ¡Hasta luego!");
    }

    // Confirmar eliminación
    confirmDelete(item) {
        console.log(`\n¿Estás seguro de que deseas eliminar el elemento:`);
        this.showItem(item);
        const confirmation = prompt("Escribe 'SI' para confirmar: ");
        return confirmation.toUpperCase() === 'SI';
    }

    // Pausar para que el usuario pueda leer
    pause() {
        prompt("\nPresiona Enter para continuar...");
    }

    // Limpiar consola (opcional)
    clear() {
        console.clear();
    }
}

module.exports = ItemView;