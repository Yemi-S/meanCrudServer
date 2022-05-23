const express = require('express');
const conectarDB = require('./config/db');

// Creamos el servidor
const app = express();

//Conectar a la BD
conectarDB();

//Definimos ruta principal
app.get('/', (req,res) => {
    res.send("Hola mundo");
})
app.listen(4000, ()=>{
    console.log('The server is running')
})