const express = require('express');
const ctrlCalderas = require('../../controllers/calderas');
const router = express.Router();

router.get('/', ctrlCalderas.getCalderas);
router.get('/:id', ctrlCalderas.getCalderaById);
router.post('/', ctrlCalderas.addCaldera);
router.put('/:id', ctrlCalderas.updateCalderaById);
router.delete('/:id', ctrlCalderas.deleteCalderaById);

module.exports = router