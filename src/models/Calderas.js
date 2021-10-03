const mongoose = require('mongoose');

const calderasSchema = new mongoose.Schema({
    name: {
        type:String,
        require: [true, 'el Nombre es un campo requerido']
    },
    description: {
        type: String,
        require: [true, 'La Descripcion es un campo requerido']
    },
});

module.exports = mongoose.model('Calderas', calderasSchema);