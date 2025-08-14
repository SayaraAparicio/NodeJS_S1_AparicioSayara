class CanalNotificacion {
    enviar(mensaje) {
        throw new Error("Método abstracto");
    }
}

class Email extends CanalNotificacion {
    enviar(mensaje) {
        console.log(`Enviando email: ${mensaje}`);
    }
}

class SMS extends CanalNotificacion {
    enviar(mensaje) {
        console.log(`Enviando SMS: ${mensaje}`);
    }
}

class Usuario {
    constructor(canal) {
        this.canal = canal;
    }

    enviarNotificacion(mensaje) {
        this.canal.enviar(mensaje);
    }
}