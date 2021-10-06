const mongoose = require('mongoose');

const edificiosSchema = new mongoose.Schema({
    nombre: {
        type:String,
        require: [true, 'el Nombre es un campo requerido']
    },
    calle: {
        type: String,
        require: [true, 'La Calle es un campo requerido']
    },
    altura: {
        type: Number,
        require: [true, 'La altura es un campo requerido']
    },
    localidad: {
        type: String,
        require: [true, 'La localidad es un campo requerido']
    },
    provincia: {
        type: String,
        require: [true, 'La provincia es un campo requerido']
    },
    telefono: {
        type: Number,
        require: [true, 'el telefono es un campo requerido'],
        validate: {
            validator: (v) => /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(v),
            message: props => `${props.value} no es un numero valido`
        },
    },

    caldera :[{
        name: String,
        description: String,
    }]
});

module.exports = mongoose.model('Edificios', edificiosSchema);
