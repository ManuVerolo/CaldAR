const mongoose = require('mongoose');

const constructorasSchema = new mongoose.Schema({
    name: String,
    description: String,
});

module.exports = mongoose.model('Constructoras',constructorasSchema);