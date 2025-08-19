// El objetivo del controlador es de de recibir
// los inputs de la vista, realizar validaciones básicas y 
// coordinar el modelo
class ItemController{
    constructor({model,view,prompt}){
        this.model = model;
        this.view = view;
        this.prompt = prompt;
    }
    crear(){
        const datos = this.view.pedirDatosCreacion(this.prompt);
        if(!datos.nombre){
            this.view.mostrarMensaje("El nombre es requerido")
            return
        }
        const creado = this.model.crear(datos);
        this.view.mostrarMensaje(`Elemento creado con exito`)
        this.view.mostrarMensaje(creado)
    }
    listar(){
        const lista = this.model.listar(); 
        this.view.mostrarMensaje(lista)
        this.view.mostrarMensaje(`Elementos listados con exito`)
    }
    actualizar(){
        const id = this.view.idActualizar(this.prompt)
        const item = this.model.buscarPorId(id);
        if(!item){
            this.view.mostrarMensaje(`No se encontro el elemento con id ${id}`)
            return
        }
        const datos = this.view.pedirDatosCreacion(this.prompt)
        const actualizado = this.model.actualizar(id,datos);
        this.view.mostrarMensaje(`Elemento actualizado con exito`)
        this.view.mostrarMensaje(actualizado)
    }
    eliminar(){
        const id = this.view.idActualizar(this.prompt)
        const item = this.model.buscarPorId(id);
        if(!item){
            this.view.mostrarMensaje(`No se encontro el elemento con id ${id}`)
            return
        }
        const eliminado = this.model.eliminar(id);
        this.view.mostrarMensaje(`Elemento eliminado con exito`)
        this.view.mostrarMensaje(eliminado)
    }
}

module.exports={ItemController};