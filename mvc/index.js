// index.js - Punto de entrada de la aplicación
const ItemController = require('./controllers/itemController');

// Crear una instancia del controlador y ejecutar la aplicación
const app = new ItemController();
app.run();