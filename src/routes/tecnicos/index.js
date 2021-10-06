const express = require('express');
const ctrlTecnicos = require('../../controllers/tecnicos');
const router = express.Router();

router.get('/', ctrlTecnicos.getTecnicos);
router.get('/:id', ctrlTecnicos.getTecnicoById);
router.post('/', ctrlTecnicos.addTecnico);
router.put('/:id', ctrlTecnicos.updateTecnicoById);
router.delete('/:id', ctrlTecnicos.deleteTecnicoById);

module.exports = router