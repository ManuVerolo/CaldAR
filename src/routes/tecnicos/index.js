const express = require('express');
const ctrlTecnicos = require('../../controllers/tecnicos');
const router = express.Router();

router.get('/', ctrlTecnicos.getTecnicos);

module.exports = router