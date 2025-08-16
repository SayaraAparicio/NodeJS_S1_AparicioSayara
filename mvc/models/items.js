const fs = require('fs');
const path = require('path'); 

class Item {
    constructor() {
        this.dbPath = path.join(__dirname, '../db.json'); 
        this.initializeDB();
    }

    // Inicializar la base de datos si no existe
    initializeDB() {
        if (!fs.existsSync(this.dbPath)) {
            fs.writeFileSync(this.dbPath, JSON.stringify([]));
        }
    }

    // Cargar todos los datos
    loadData() {
        try {
            const data = fs.readFileSync(this.dbPath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error al cargar datos:', error);
            return [];
        }
    }

    // Guardar datos
    saveData(data) {
        try {
            fs.writeFileSync(this.dbPath, JSON.stringify(data, null, 2));
            return true;
        } catch (error) {
            console.error('Error al guardar datos:', error);
            return false;
        }
    }

    // Crear un nuevo elemento
    create(nombre) {
        if (!nombre || nombre.trim() === '') {
            throw new Error('El nombre no puede estar vacío');
        }

        const data = this.loadData();
        const newItem = {
            id: Date.now(),
            nombre: nombre.trim()
        };

        data.push(newItem);
        
        if (this.saveData(data)) {
            return newItem;
        }
        throw new Error('Error al crear el elemento');
    }

    // Obtener todos los elementos
    getAll() {
        return this.loadData();
    }

    // Obtener elemento por ID
    getById(id) {
        const data = this.loadData();
        return data.find(item => item.id === parseInt(id));
    }

    // Actualizar elemento
    update(id, nuevoNombre) {
        if (!nuevoNombre || nuevoNombre.trim() === '') {
            throw new Error('El nombre no puede estar vacío');
        }

        const data = this.loadData();
        const index = data.findIndex(item => item.id === parseInt(id));

        if (index === -1) {
            throw new Error('Elemento no encontrado');
        }

        data[index].nombre = nuevoNombre.trim();
        
        if (this.saveData(data)) {
            return data[index];
        }
        throw new Error('Error al actualizar el elemento');
    }

    // Eliminar elemento
    delete(id) {
        const data = this.loadData();
        const index = data.findIndex(item => item.id === parseInt(id));

        if (index === -1) {
            throw new Error('Elemento no encontrado');
        }

        const deletedItem = data[index];
        data.splice(index, 1);
        
        if (this.saveData(data)) {
            return deletedItem;
        }
        throw new Error('Error al eliminar el elemento');
    }

    // Verificar si existen elementos
    hasData() {
        return this.loadData().length > 0;
    }
}

module.exports = Item;