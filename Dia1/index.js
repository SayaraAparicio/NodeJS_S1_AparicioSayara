// CRUD de campers - Versión minimalista y profesional
const { MongoClient, ObjectId } = require('mongodb');
const readline = require('readline');

// Configuración de la base de datos
const uri = 'mongodb+srv://sayaraaparicio07:tKDd6B56ULxRqXY6@cluster0.qs5meyc.mongodb.net/';
const dbName = 'escuela';
const collectionName = 'campers';

// Variables globales
let db, collection;

// Configurar readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ===== FUNCIÓN AUXILIAR PARA HACER PREGUNTAS =====
function pregunta(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta) => {
            resolve(respuesta);
        });
    });
}

// ===== FUNCIÓN PARA CONECTAR A MONGODB =====
async function conectarDB() {
    try {
        console.log('Conectando a MongoDB...');
        const client = new MongoClient(uri);
        await client.connect();

        db = client.db(dbName);
        collection = db.collection(collectionName);

        console.log('Conexión exitosa.');
        console.log(`Base de datos: ${dbName}`);
        console.log(`Colección: ${collectionName}`);
        return true;
    } catch (error) {
        console.log('Error conectando a MongoDB:', error.message);
        console.log('Asegúrate de que MongoDB esté corriendo o usa MongoDB Atlas.');
        return false;
    }
}

// ===== FUNCIÓN PARA MOSTRAR EL MENÚ (DISEÑO NUEVO) =====
function mostrarMenu() {
    console.log('\n------------------------------');
    console.log('        CRUD DE CAMPERS        ');
    console.log('------------------------------');
    console.log('1. Crear camper');
    console.log('2. Ver todos los campers');
    console.log('3. Buscar camper por ID');
    console.log('4. Actualizar camper');
    console.log('5. Eliminar camper');
    console.log('6. Salir');
    console.log('------------------------------');
}

// ===== FUNCIÓN PARA CREAR CAMPER (DISEÑO NUEVO) =====
async function crearcamper() {
    try {
        console.log('\nCREAR NUEVO CAMPER');
        console.log('------------------');

        const nombre = await pregunta('Nombre: ');
        const apellido = await pregunta('Apellido: ');
        const edad = await pregunta('Edad: ');
        const email = await pregunta('Email: ');
        const carrera = await pregunta('Carrera: ');

        const nuevocamper = {
            nombre: nombre.trim(),
            apellido: apellido.trim(),
            edad: parseInt(edad) || 0,
            email: email.trim(),
            carrera: carrera.trim(),
            fechaCreacion: new Date()
        };

        const resultado = await collection.insertOne(nuevocamper);
        console.log(`Camper creado. ID: ${resultado.insertedId}`);

    } catch (error) {
        console.log('Error creando camper:', error.message);
    }
}

// ===== FUNCIÓN PARA VER TODOS LOS CAMPERS (DISEÑO NUEVO) =====
async function verTodoscampers() {
    try {
        console.log('\nLISTA DE CAMPERS');
        console.log('----------------');

        const campers = await collection.find({}).toArray();

        if (campers.length === 0) {
            console.log('No hay campers registrados.');
            return;
        }

        campers.forEach((camper, index) => {
            console.log(`\n${index + 1}. ID: ${camper._id}`);
            console.log(`   Nombre: ${camper.nombre} ${camper.apellido}`);
            console.log(`   Edad: ${camper.edad}`);
            console.log(`   Email: ${camper.email}`);
            console.log(`   Carrera: ${camper.carrera}`);
            if (camper.fechaCreacion) {
                console.log(`   Registrado: ${camper.fechaCreacion.toLocaleDateString()}`);
            }
        });

        console.log(`\nTotal de campers: ${campers.length}`);

    } catch (error) {
        console.log('Error obteniendo campers:', error.message);
    }
}

// ===== FUNCIÓN PARA BUSCAR POR ID (DISEÑO NUEVO) =====
async function buscarcamperPorId() {
    try {
        const id = await pregunta('\nID del camper: ');

        if (!ObjectId.isValid(id)) {
            console.log('El ID no es válido.');
            return;
        }

        const camper = await collection.findOne({ _id: new ObjectId(id) });

        if (!camper) {
            console.log('No se encontró ningún camper con ese ID.');
            return;
        }

        console.log('\nCAMPER ENCONTRADO');
        console.log('-----------------');
        console.log(`ID: ${camper._id}`);
        console.log(`Nombre: ${camper.nombre} ${camper.apellido}`);
        console.log(`Edad: ${camper.edad}`);
        console.log(`Email: ${camper.email}`);
        console.log(`Carrera: ${camper.carrera}`);
        if (camper.fechaCreacion) {
            console.log(`Registrado: ${camper.fechaCreacion.toLocaleDateString()}`);
        }

    } catch (error) {
        console.log('Error buscando camper:', error.message);
    }
}

// ===== FUNCIÓN PARA ACTUALIZAR CAMPER (DISEÑO NUEVO) =====
async function actualizarcamper() {
    try {
        const id = await pregunta('\nID del camper a actualizar: ');

        if (!ObjectId.isValid(id)) {
            console.log('El ID no es válido.');
            return;
        }

        const camperActual = await collection.findOne({ _id: new ObjectId(id) });

        if (!camperActual) {
            console.log('No se encontró ningún camper con ese ID.');
            return;
        }

        console.log('\nDATOS ACTUALES:');
        console.log(`Nombre: ${camperActual.nombre}`);
        console.log(`Apellido: ${camperActual.apellido}`);
        console.log(`Edad: ${camperActual.edad}`);
        console.log(`Email: ${camperActual.email}`);
        console.log(`Carrera: ${camperActual.carrera}`);

        console.log('\nNUEVOS DATOS (Enter para mantener el valor actual):');

        const nuevoNombre = await pregunta(`Nuevo nombre [${camperActual.nombre}]: `);
        const nuevoApellido = await pregunta(`Nuevo apellido [${camperActual.apellido}]: `);
        const nuevaEdad = await pregunta(`Nueva edad [${camperActual.edad}]: `);
        const nuevoEmail = await pregunta(`Nuevo email [${camperActual.email}]: `);
        const nuevaCarrera = await pregunta(`Nueva carrera [${camperActual.carrera}]: `);

        const datosActualizados = {
            nombre: nuevoNombre.trim() || camperActual.nombre,
            apellido: nuevoApellido.trim() || camperActual.apellido,
            edad: nuevaEdad.trim() ? parseInt(nuevaEdad) : camperActual.edad,
            email: nuevoEmail.trim() || camperActual.email,
            carrera: nuevaCarrera.trim() || camperActual.carrera,
            fechaActualizacion: new Date()
        };

        const resultado = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: datosActualizados }
        );

        if (resultado.modifiedCount > 0) {
            console.log('Camper actualizado exitosamente.');
        } else {
            console.log('No se realizaron cambios.');
        }

    } catch (error) {
        console.log('Error actualizando camper:', error.message);
    }
}

// ===== FUNCIÓN PARA ELIMINAR CAMPER (DISEÑO NUEVO) =====
async function eliminarcamper() {
    try {
        const id = await pregunta('\nID del camper a eliminar: ');

        if (!ObjectId.isValid(id)) {
            console.log('El ID no es válido.');
            return;
        }

        const camper = await collection.findOne({ _id: new ObjectId(id) });

        if (!camper) {
            console.log('No se encontró ningún camper con ese ID.');
            return;
        }

        console.log('\nCAMPER A ELIMINAR:');
        console.log(`Nombre: ${camper.nombre} ${camper.apellido}`);
        console.log(`Email: ${camper.email}`);
        console.log(`Carrera: ${camper.carrera}`);

        const confirmacion = await pregunta('\n¿Estás seguro? Escribe "SI" para confirmar: ');

        if (confirmacion.toUpperCase() === 'SI') {
            const resultado = await collection.deleteOne({ _id: new ObjectId(id) });

            if (resultado.deletedCount > 0) {
                console.log('Camper eliminado exitosamente.');
            } else {
                console.log('No se pudo eliminar el camper.');
            }
        } else {
            console.log('Eliminación cancelada.');
        }

    } catch (error) {
        console.log('Error eliminando camper:', error.message);
    }
}

// ===== USUARIOS Y ROLES =====
const usuarios = [
    { usuario: 'admin', password: 'admin123', rol: 'Administrador' },
    { usuario: 'trainer', password: 'trainer123', rol: 'Trainer' },
    { usuario: 'estudiante', password: 'estudiante123', rol: 'Estudiante' }
];

let usuarioActual = null;

// ===== FUNCIÓN DE LOGIN (DISEÑO NUEVO) =====
async function login() {
    console.log('\n=== INICIO DE SESIÓN ===');
    const usuario = await pregunta('Usuario: ');
    const password = await pregunta('Contraseña: ');

    const encontrado = usuarios.find(u => u.usuario === usuario && u.password === password);

    if (encontrado) {
        usuarioActual = encontrado;
        console.log(`\nBienvenido, ${usuarioActual.usuario}. Rol: ${usuarioActual.rol}`);
        return true;
    } else {
        console.log('Usuario o contraseña incorrectos.');
        return false;
    }
}

// ===== FUNCIÓN PRINCIPAL DEL MENÚ (DISEÑO NUEVO) =====
async function iniciarPrograma() {
    console.log('Iniciando CRUD de campers...');

    // LOGIN DE USUARIO
    let logueado = false;
    while (!logueado) {
        logueado = await login();
        if (!logueado) {
            const intentar = await pregunta('¿Intentar de nuevo? (S/N): ');
            if (intentar.trim().toUpperCase() !== 'S') {
                rl.close();
                process.exit(0);
            }
        }
    }

    // Intentar conectar a MongoDB
    const conectado = await conectarDB();

    if (!conectado) {
        console.log('\n¿Qué quieres hacer?');
        console.log('1. Instalar MongoDB localmente');
        console.log('2. Usar MongoDB Atlas');
        console.log('3. Intentar conectar otra vez');
        console.log('4. Salir');

        const opcion = await pregunta('\nElige una opción (1-4): ');

        if (opcion === '2') {
            console.log('\nPara usar MongoDB Atlas:');
            console.log('1. Ve a https://mongodb.com/atlas');
            console.log('2. Crea una cuenta gratuita');
            console.log('3. Crea un cluster gratuito');
            console.log('4. Obtén tu string de conexión');
            console.log('5. Reemplaza la línea 7 del código con tu URL');
        }

        console.log('\nCerrando programa...');
        rl.close();
        process.exit(0);
        return;
    }

    console.log('\nBienvenido al CRUD de campers.');

    // Bucle principal del menú
    while (true) {
        mostrarMenu();
        const opcion = await pregunta('Selecciona una opción (1-6): ');

        // Restricción de opciones según rol
        if (usuarioActual.rol === 'Estudiante' && opcion.trim() !== '2' && opcion.trim() !== '3' && opcion.trim() !== '6') {
            console.log('No tienes permisos para esa opción.');
        } else if (usuarioActual.rol === 'Trainer' && opcion.trim() === '5') {
            console.log('No tienes permisos para eliminar campers.');
        } else {
            switch (opcion.trim()) {
                case '1':
                    await crearcamper();
                    break;
                case '2':
                    await verTodoscampers();
                    break;
                case '3':
                    await buscarcamperPorId();
                    break;
                case '4':
                    await actualizarcamper();
                    break;
                case '5':
                    await eliminarcamper();
                    break;
                case '6':
                    console.log('\nGracias por usar el CRUD de campers.');
                    console.log('Cerrando programa...');
                    rl.close();
                    process.exit(0);
                    break;
                default:
                    console.log('Opción no válida. Por favor elige un número del 1 al 6.');
            }
        }

        await pregunta('\nPresiona Enter para continuar...');
    }
}

// ===== MANEJO DE ERRORES =====
process.on('uncaughtException', (error) => {
    console.log('Error inesperado:', error.message);
    rl.close();
    process.exit(1);
});

process.on('unhandledRejection', (error) => {
    console.log('Error de promesa:', error.message);
    rl.close();
    process.exit(1);
});

// ===== INICIAR EL PROGRAMA =====
iniciarPrograma().catch((error) => {
    console.log('Error iniciando el programa:', error.message);
    rl.close();
    process.exit(1);
});