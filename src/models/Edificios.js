const mongoose = require('mongoose');

const edificiosSchema = new mongoose.Schema({
    nombre: String,
    calle: String,
    altura: Integer,
    localidad: String,
    provincia: String,
    telefono: Integer,
    caldera :[{
        name: String,
        description: String,
    }]
});

module.exports = mongoose.model('Edificios', calderasSchema);
