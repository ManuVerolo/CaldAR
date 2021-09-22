const mongoose = require('mongoose');

const clientesSchema = new mongoose.Schema({
    name: String,
    city: String,
    street:String,
    type:Boolean,
    isActive:Boolean,
    
});

module.exports = mongoose.model('Clientes',clientesSchema);