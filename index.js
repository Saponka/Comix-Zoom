
const express = require('express');
 const app = express(); 
 const dotenv = require('dotenv');                   
 const PORT = process.env.PORT || 3000;
 
 //------------------------------ coneccion a la base de datos-------------------------------------------

//const { connection } = require('./DB/config'); // conection traer config.js

//---------------------------MIDDLEWARE----------------------------------------------------------------
app.use(express.json());
app.use(express.static('public'));    
app.use(express.urlencoded({extended: false})); //lee formularios
//-------------ruta----------------------------------------
const controllers = require('./routes/comic');

app.use('/comic',require('./routes/comic'));

 /* app.post('/comic/insertar', async(req, res) => {
    let data = await controllers.insertar(req.body);
    res.json(data);
});  */
//--------port listen ---------------------------------------------------
app.listen(PORT,() =>{
    console.log(`Servidor corriendo en el puerto:${PORT}`);
});
 app.on('error',(err)=>{
    console.log(`Error en la ejecuccion del servidor ${err}`);
});  

//module.exports = connection;



