const express = require('express');
const ctrlConstructoras = require('../../controllers/constructoras');
const router = express.Router();

router.get('/', ctrlConstructoras.getConstructoraById);
router.get('/:id', ctrlConstructoras.getConstructoraById);
router.post('/', ctrlConstructoras.addConstructora);
router.put('/:id', ctrlConstructoras.updateConstructoraById);
router.delete('/:id', ctrlConstructoras.deleteConstructoraById);

module.exports = router