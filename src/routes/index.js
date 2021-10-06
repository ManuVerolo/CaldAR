const express = require('express')

const tecnicos = require('./tecnicos')
const calderas = require('./calderas')
const edificios = require('./edificios')
const usuarios = require('./usuarios')

const router = express.Router();


router.use('/tecnicos', tecnicos);
router.use('/calderas', calderas);
router.use('/edificios', edificios);
router.use('/usuarios', usuarios);

module.exports = router


