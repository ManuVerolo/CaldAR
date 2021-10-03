const mongoose = require('mongoose');

const usuariosSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'el Nombre es un campo requerido']
    },
    last_name: {
        type: String,
        require: [true, 'el apellido es un campo requerido']
    },
    email: {
        type: String,
        require: [true, 'el mail es un campo requerido'],
        unique: true
    },
    active: {
        type: Boolean,
        require: true,
        isActive: true
    },

    cargo: {
        type: String,
        require: true,
        unique: true
    },
});

module.exports = mongoose.model('Usuarios', usuariosSchema);