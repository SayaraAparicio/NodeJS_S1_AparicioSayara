class UsuarioController {
    constructor(modelo,vista) {
        this.modelo=this.modelo;
        this.vista=vista;
    }
    async registrarUsuario(prompt) {
        const datos = this.vista.pedirDatosUsuario();
        try {
            const id = await this.modelo.crear(datos);
            this.vista.mostrarMensaje(`Usuario creado con ID: ${id}`);
        } catch (error) {
            this.vista.mostrarMensaje(`Error al crear usuario: ${error.message}`);
        }
    }
    async mostrarUsuarios() {
        const usuarios = await this.modelo.listar();
        this.vista.mostrarUsuarios(usuarios);
    } 
}

module.exports = UsuarioController;