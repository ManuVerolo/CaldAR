const mongoose = require('mongoose');

const usuariosSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    email: String,
    active: Boolean,
    cargo: String,
});

module.exports = mongoose.model('Usuarios', tecnicosSchema);