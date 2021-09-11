const mongoose = require('mongoose');

const tecnicosSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    email: String,
    active: Boolean,
});

module.exports = mongoose.model('Tecnicos', tecnicosSchema);