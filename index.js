
const express = require('express');
 const app = express();                    
 const port = process.env.port || 3000;
 //const hbs = require('hbs');// hbs opcional
 //const path = require('path');//-- opcional --

 //------------------------------ coneccion a la base de datos-------------------------------------------

 //const { connection } = require('./DB/config'); // conection traer config.js

//---------------------------MIDDLEWARE----------------------------------------------------------------
app.use(express.json());
app.use(express.static('public'));    
app.use(express.urlencoded({extended: false})); //lee formularios
//-------------ruta----------------------------------------

app.use('/comic',require('./routes/comic'));

//--------port listen ---------------------------------------------------
app.listen(port,() =>{
    console.log(`Servidor corriendo en el puerto:${port}`);
});
 app.on('error',(err)=>{
    console.log(`Error en la ejecuccion del servidor ${err}`);
});  

module.exports = connection;



