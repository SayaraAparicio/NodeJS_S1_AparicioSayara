var prompt = require('prompt-sync')();

let personas = [
    {id:1, nombre: 'Juan', edad: 30},
    {id:2, nombre: 'Ana', edad: 25}
];

let n = prompt('Ingrese el nombre: ');
console.log('Nombre ingresado:', n);
booleanito=true;
function recorrerLista(lista){
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}
while (booleanito==true) {
    console.log("Escoge una opción:");
    console.log("1. Imprimir personas");
}
let prompt = require('prompt-sync')();

//Conexión a MongoDB
const { MongoClient,ObjectId } = require('mongodb');
const uri = 'mongodb+srv://sayaraaparicio07:tKDd6B56ULxRqXY6@cluster0.qs5meyc.mongodb.net/';
const dbName = 'crud_db';
const collectionName = 'personas';

let db, collection;
async function leerPersonas() {
    const client = new MongoClient(uri);


    try {
        await client.connect();
        db = client.db(dbName);
        collection = db.collection(collectionName);
        console.log("Conectado a la base de datos 🎉");
        const personas = await collection.find().toArray();
        for(let i=0;i<personas.length;i++){
            console.log(" ")
            console.log("Persona #",i+1)
            console.log("ID:",personas[i]["_id"]);
            console.log("Nombre:",personas[i]["nombre"]);
            console.log("Edad:",personas[i]["edad"]);
        }
        console.log(" ");
        
    }
    catch (e) {
        console.log("Error:", e);
    }
    finally {
        await client.close();
        console.log("Cerrado la sesión de la base de datos");
    }
};
async function actualizarPersonas() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        db = client.db(dbName);
        collection = db.collection(collectionName);
        const idObjeto = prompt("Ingresar el ObjectID de la persona:");
        if(!ObjectId.isValid(idObjeto)){
            console.log("Este ID no es valido ❌");
            return;
        }else{
            const nuevoNombre = prompt("Ingresa el nuevo nombre:");
            const nuevaEdad = parseInt(prompt("Ingresa la nueva edad:"));
            const result = await collection.updateOne(
                {_id:new ObjectId(idObjeto)},
                {$set:{nombre:nuevoNombre,edad:nuevaEdad}}
            )
            if (result.matchedCount==0){
                console.log("Persona no encontrada");

            }else{
                console.log("Persona Actualizada!");
            }
        }
    }
    catch (e) {
        console.log("Error:", e);
    }
    finally {
        await client.close();
        console.log("Cerrado la sesión de la base de datos");
    }
}

/*
let personas =[
    {nombre:'Juan',edad:30},
    {nombre:'Ana',edad:25}
];
console.log(personas);
console.log(personas[0]["nombre"]);
let n = prompt('Ingresa tu nombre:');
console.log("Tu nombre es:",n);
*/

async function menu() {
    booleanito = true;

    while (booleanito == true) {
        console.log("Escoge una opción:");
        console.log("1. Imprimir Personas");
        console.log("1. Actualizar Personas");
        console.log("5. Salir");
        let opcion = prompt(':');
        switch (opcion.trim()) {
            case '1':
                //recorrerLista(personas);
                await leerPersonas();
                break;
            case '2':
                await actualizarPersonas();
                break;

            case '5':
                booleanito = false;
                break;
        }
    }
};
menu();
