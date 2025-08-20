//Conexión hacia la BBDD
const {MongoClient}=require('mongodb');

const uri = process.env.URI ;  
const dbName= process.env.DB_NAME;

let client;
let db;

async function connect() {
    if(db) return db;
    client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);
    return db;
}

async function disconnect () {
    if(client) await client.close();
    
}

module.exports = {connect, disconnect}