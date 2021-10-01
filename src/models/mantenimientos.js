const mongoose = require('mongoose');

const mantenimientosSchema = new mongoose.Schema({


    name:{
        type:String ,
        required: [true, 'Customer name is required']
    } ,
    
    description: String,
    time:Date,
});

module.exports = mongoose.model('Mantenimientos', mantenimientosSchema);