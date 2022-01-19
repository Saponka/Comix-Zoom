 //--------------conexion a base de datos----- MYSQL2------------
 
/*  const mysql = require ('mysql2');

//1- crear coneccion
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
port:3306,
password: '',
database: '',

}); 

connection.connect(function (err) {
    if (err) {
        console.log("Error en intento de la conexion a la Data Base");
        console.log("El error esta en;"+ err.stack);
        return;
    }
    console.log("La conexion fue exitosa!!");
});

//--corta la conexion
connection.end();

module.exports = connection; // exportamos la coneccion para usar en el index.js 

  */

//--------------conexion con knex----------------------

const knex = require('knex') ({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      port : '3306',
      password : 'Heimerdingerchewbacca@501',
      database : 'comics'
    },

   
  });  
 
  knex.schema.hasTable('comicForm').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('comicForm', function(t) {
        t.increments('id').primary();
        t.string('nombre', 100);
        t.string('apellido', 100);
        t.string ('edad',100);
        t.string ('email',100);
        t.string ('telefono',50);
        t.string ('mensaje',200);
        
      })
      .then(()=> console.log('Tabla creada'))
      .catch(error => console.log(error));
    }
  });


   // ----Modulos------------------------
   module.exports = knex; 