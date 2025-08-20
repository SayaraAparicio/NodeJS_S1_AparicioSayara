const {ObjectId}= require('mongodb');
const connectDB = require('../db');

class UserModel{
    constructor(){
        this.schema={
            nombre:'string',
            correo:'string',
            edad:'number'
        };
    }
    validar(usuario){
        for(let campo in this.schema){
            if (typeof usuario[campo] !== this.schema[campo]){
                return false;
            }
        }
        return true;
    }
    async crear(usuario){
        if(!this.validar(usuario)){
            throw new Error('Error en el tipo de datos ingresados.');
        }
        const db = await connectDB.connect();
        const result = await db.collection('usuarios').insertOne(usuario);
        let idObjeto = result.insertedId;
        await connectDB.disconnect();
        return idObjeto;
    }
    async listar(){
        const db = await connectDB.connect();
        let arreglo = await db.collection('usuarios').find().toArray();
        await connectDB.disconnect();
        return arreglo;
    }
    
}
module.exports= UserModel;