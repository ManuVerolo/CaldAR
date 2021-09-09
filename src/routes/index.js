const { Router } = require('express');

const router = Router();
const calderas = require('../controllers/calderas');
const tecnicos = require('../controllers/tecnicos.js');
module.exports = router;

router.get('/', (req, res) => {
    console.log('Pagina de inicio');
}); 

//Rutas calderas
router.get('/calderas', calderas.findAllCalderas);
router.get("/calderas/:id", calderas.findOneCaldera);
router.post('/new-caldera', calderas.createCaldera);
router.put("/:id", calderas.updateCaldera);
router.delete("/:id", calderas.deleteCaldera);

//Rutas 
router.get('/tecnicos', tecnicos.findAllTecnicos);
router.get("/:id", tecnicos.findOneTecnico);
router.post('/new-tecnico', tecnicos.createTecnico);
router.put("/:id", tecnicos.updateTecnico);
router.delete("/:id", tecnicos.deleteTecnico);

