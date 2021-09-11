const express = require('express')

const tecnicos = require('./tecnicos')

const router = express.Router();


router.use('/tecnicos', tecnicos);

module.exports = router




