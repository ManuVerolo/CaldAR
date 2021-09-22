const express = require('express');
const ctrlMantenimientos = require('../../controllers/mantenimientos');
const router = express.Router();

router.get('/', ctrlMantenimientos.getMantenimientos);
router.get('/:id', ctrlMantenimientos.getMantenimientoById);
router.post('/', ctrlMantenimientos.addMantenimientos);
router.put('/:id', ctrlMantenimientos.updateMantenimientoById);
router.delete('/:id', ctrlMantenimientos.deleteMantenimientoById);

module.exports = router



