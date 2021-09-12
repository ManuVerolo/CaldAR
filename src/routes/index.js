const express = require('express')

const tecnicos = require('./tecnicos')
const calderas = require('./calderas')

const router = express.Router();


router.use('/tecnicos', tecnicos);
router.use('/calderas', calderas);

module.exports = router




