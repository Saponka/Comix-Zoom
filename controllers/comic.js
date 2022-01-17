
//const knex = require('../DB/config'); 


const nomina = ( (req,res)=>{          
      /*  knex
       .from('comicForm')
       .then((json)=>{
           res.send({data:json})     
       })  */     
   });
// --------buscar-adonde----select-where---------------------------------
const buscar = ( (req,res)=>{     
     /*  knex
      .from('comicForm')
      .where('id',req.params.id) 
      .then((json)=>{
          res.send({data:json})   
      })
      .catch(error => console.log(error)); */  
  });    
//------------------------------POST--------------------------------------------
/*  const insertar = ( (req,res)=>{
    let data = {
         nombre : req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        email: req.body.email,
        telefono:req.body.telefono,
        mensaje: req.body.mensaje, 
       
    }
    knex('comicForm')   
    .insert(data)     
    .then(()=>{      
       res.send('Dato Insertado')
    })
    .catch(error => console.log(error)); 
   }) */; 
 
   const insertar = (req,res) =>{
     
   
     let nombre,apellido,edad,email,telefono,mensaje

    nombre = req.body.nombre;
    apellido = req.body.apellido;
    edad = req.body.edad;
    email = req.body.email;
    telefono = req.body.telefono;
    mensaje = req.body.mensaje;  
     
    function validacion (){
                 
        if(nombre == "" || apellido == "" || email == ""){
            let validacion = 'Por Favor completar los datos necesarios, Nombre, Apellido y Email'
              res.send(validacion)
              
        } else{
        
          /*   let data = { 

                 nombre : req.body.nombre,
                apellido : req.body.apellido,
                edad : req.body.edad,
                email : req.body.email,
                telefono : req.body.telefono,
                mensaje : req.body.mensaje 

            }; 
                 knex('comicForm')
                .insert(data)
                .then(()=>{ res.send('formulario Enviado') })
                .catch(error => console.log(error)); */

            // Envio de mensajes para el usuario // crear una funcyion asyncroma
            /* async function main(){
                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port:465,
                    secure:true,
                    auth:{
                        user:"chubaka501@gmail.com",
                        pass:"",// usar el pass que genera en la autenticacon 2 pasos
                    }
                });
                let info = await transporter.sendMail({
                    from:`${nombreForm}<${emailForm}>`,
                    to:"email@hotmail.com",
                    subjet:"Nuevo mensaje de contacto",
                    html:`El nuevo contacto es: <br>
                    Nombre:${nombreForm} <br>
                    Apelido:${apellidoForm}<br>
                    Edad:${edadForm} <br>
                    Email:${emailForm}<br>
                    Telefono:${telefonoForm}<br>
                    Mensaje:${mensajeForm}<br>`
                });
                res.render('formEnviado',{
                    nombreForm,
                    apellidoForm,
                    edadForm,
                    emailForm,
                    telefonoForm,
                    mensajeForm,
                    envio:true
                });
            } */
           // main().catch(console.error);
        }
        
    };
    validacion();
};
//----------------------put--------------UPDATE------------------------------------------------------
const actualizar = ( (req,res)=>{
        /* knex('comicForm')
        .where({id: req.params.id}) 
        .update({

            nombre : req.body.nombre,
            apellido : req.body.apellido,
            edad : req.body.edad,
            email : req.body.email,
            telefono : req.body.telefono,
            mensaje : req.body.mensaje
        })
        .then(()=>{ res.send( 'Dato Actualizado')})
        .catch(error => console.log(error)); */
    });  
//---------------------------------delete----------------------------------------------
const borrar = ( (req,res)=>{
   /* knex('comicForm')
   .where({id: req.params.id}) 
   .delete()
    .then(()=>{ res.send( 'Dato borrado')})
    .catch(error => console.log(error));  */  
 });
//----exportar--modulos-----------------------
 module.exports = {
     nomina,
     insertar,
     buscar,
     actualizar,   
     borrar,
 };
 