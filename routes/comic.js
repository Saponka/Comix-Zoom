
//------------------------routes-----------------------------------
const {Router} = require('express');
const router = Router ();

 const {
     nomina,
     buscar,
     insertar,
     borrar,
     actualizar,
 } = require ('../controllers/comic'); 
//-----------------------------------
router.get ('/nomina', nomina );
router.get ('/buscar/:id', buscar);
router.post ('/insertar', insertar);
router.put ('/actualizar/:id',actualizar);
router.delete ('/borrar/:id', borrar);
//----exportar---modulos--------
module.exports =  router;