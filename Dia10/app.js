const prompt= require("prompt-sync")();

const {UsuarioModel} = require('./models/userModel');
const {UsuarioView} = require('./views/userView');
const {UsuarioController} = require('./controllers/userController');

const model = new UsuarioModel();
const view = new UsuarioView();
const controller = new UsuarioController(modelo, vista);

async function main() {
    let booleanito = false;
    while (!booleanito) {
        view.mostrarMenu();
        const op = view.pedirOpcion(prompt);
        switch (op) {
            case "1":
                await controller.registrarUsuario(prompt);
                break;
            case "2":
                await controller.mostrarUsuarios();
                break;
            case "3":
                booleanito = true;
                break;
            default:
                console.log("Opción no válida");
                break;
        }
    }
}