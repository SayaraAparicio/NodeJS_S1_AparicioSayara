const prompt = require("prompt-sync")();

const {ItemModel}= require('./models/itemModel');
const {ItemView} = require('./views/itemView');
const {ItemController}= require('./controllers/itemController');

const model = new ItemModel();
const view = ItemView;
const controller = new ItemController({ model, view, prompt: prompt });

function main(){
    let booleanito=false;
    while (!booleanito){
        view.mostrarMenu();
        const op = view.pedirOpcion(prompt);
        switch (op) {
            case "1":
                controller.crear();
                break;
            case "2":
                controller.listar();
                break;
            case "3":
                controller.actualizar();
                break;
            case "4":
                controller.eliminar();
                break;
            case "5":
                booleanito=true;
                break;
            default:
                console.log("Opcion no valida")
                break;
        }
    };
}
main();