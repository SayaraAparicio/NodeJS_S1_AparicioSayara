class Usuario {
    enviarEmail(mensaje) {
        // lógica concreta
    }

    enviarSMS(mensaje) {
        // lógica concreta
    }
}
/*
En esta implementación la clase Usuario  está directamente acoplada a las implementaciones concretas
 de los canales de notificación (correo electrónico y SMS), donde si en el futuro se requiere agregar un nuevo 
 canal de notificación, como notificaciones push, se tendría que modificar la clase Usuario, lo que violaría el principio de Abierto/Cerrado.
 */