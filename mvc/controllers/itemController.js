const Item = require('../models/items');
const ItemView = require('../views/itemView');

class ItemController {
    constructor() {
        this.model = new Item();
        this.view = new ItemView();
        this.isRunning = true;
    }

    // Método principal que ejecuta la aplicación
    run() {
        console.log("Iniciando aplicación CRUD con patrón MVC\n");
        
        while (this.isRunning) {
            try {
                const option = this.view.showMenu();
                this.handleMenuOption(option);
            } catch (error) {
                this.view.showError(`Error: ${error.message}`);
            }
        }
    }

    // Manejar las opciones del menú
    handleMenuOption(option) {
        switch (option) {
            case "1":
                this.createItem();
                break;
            case "2":
                this.listItems();
                break;
            case "3":
                this.updateItem();
                break;
            case "4":
                this.deleteItem();
                break;
            case "5":
                this.exitApplication();
                break;
            default:
                this.view.showInvalidOption();
        }
    }

    // Crear nuevo elemento
    createItem() {
        try {
            const nombre = this.view.getItemName();
            
            if (!nombre || nombre.trim() === '') {
                this.view.showError("El nombre no puede estar vacío.");
                return;
            }

            const newItem = this.model.create(nombre);
            this.view.showSuccess(`Elemento creado correctamente: ${newItem.nombre} (ID: ${newItem.id})`);
            
        } catch (error) {
            this.view.showError(error.message);
        }
    }

    // Listar todos los elementos
    listItems() {
        try {
            const items = this.model.getAll();
            
            if (items.length === 0) {
                this.view.showInfo("No hay elementos para mostrar.");
                return;
            }

            this.view.showItems(items);
            
        } catch (error) {
            this.view.showError(`Error al cargar elementos: ${error.message}`);
        }
    }

    // Actualizar elemento existente
    updateItem() {
        try {
            // Verificar si hay elementos
            if (!this.model.hasData()) {
                this.view.showInfo("No hay elementos para actualizar.");
                return;
            }

            // Mostrar elementos disponibles
            this.listItems();

            // Solicitar ID del elemento a actualizar
            const id = this.view.getItemId("Ingresa el ID del elemento a actualizar: ");

            // Verificar que el elemento existe
            const existingItem = this.model.getById(id);
            if (!existingItem) {
                this.view.showError("Elemento no encontrado.");
                return;
            }

            // Mostrar elemento actual
            console.log("\nElemento actual:");
            this.view.showItem(existingItem);

            // Solicitar nuevo nombre
            const nuevoNombre = this.view.getNewItemName();

            // Actualizar elemento
            const updatedItem = this.model.update(id, nuevoNombre);
            this.view.showSuccess(`Elemento actualizado correctamente: ${updatedItem.nombre}`);

        } catch (error) {
            this.view.showError(error.message);
        }
    }

    // Eliminar elemento
    deleteItem() {
        try {
            // Verificar si hay elementos
            if (!this.model.hasData()) {
                this.view.showInfo("No hay elementos para eliminar.");
                return;
            }

            // Mostrar elementos disponibles
            this.listItems();

            // Solicitar ID del elemento a eliminar
            const id = this.view.getItemId("Ingresa el ID del elemento a eliminar: ");

            // Verificar que el elemento existe
            const existingItem = this.model.getById(id);
            if (!existingItem) {
                this.view.showError("Elemento no encontrado.");
                return;
            }

            // Confirmar eliminación
            if (!this.view.confirmDelete(existingItem)) {
                this.view.showInfo("Eliminación cancelada.");
                return;
            }

            // Eliminar elemento
            const deletedItem = this.model.delete(id);
            this.view.showSuccess(`Elemento eliminado correctamente: ${deletedItem.nombre}`);

        } catch (error) {
            this.view.showError(error.message);
        }
    }

    // Salir de la aplicación
    exitApplication() {
        this.view.showGoodbye();
        this.isRunning = false;
    }
}

module.exports = ItemController;