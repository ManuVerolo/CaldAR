const { Router } = require('express');

const router = Router();
const edificios = require('../controllers/edificios.js');
const usuarios = require('../controllers/usuarios.js');
module.exports = router;

router.get('/', (req, res) => {
    console.log('Pagina de inicio');
}); 

//Rutas edificios
router.get('/edificios', edificios.findAllEdificio);
router.get("/edificios/:id", edificios.findOneEdificio);
router.post('/nuevo-edificio', edificios.createEdificio);
router.put("/:id", edificios.updateEdificio);
router.delete("/:id", edificios.deleteEdificio);

//Rutas usuarios
router.get('/usuarios', usuarios.findAllUsuarios);
router.get("/:id", usuarios.findOneUsuario);
router.post('/nuevo-usuario', usuarios.createUsuario);
router.put("/:id", usuarios.updateUsuario);
router.delete("/:id", usuarios.deleteUsuario);