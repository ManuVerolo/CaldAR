const express = require('express');
const ctrlEdificios = require('../../controllers/edificios');
const router = express.Router();

router.get('/', ctrlEdificios.getEdificios);
router.get('/:id', ctrlEdificios.getEdificioById);
router.post('/', ctrlEdificios.addEdificio);
router.put('/:id', ctrlEdificios.updateEdificioById);
router.delete('/:id', ctrlEdificios.deleteEdificioById);

module.exports = router