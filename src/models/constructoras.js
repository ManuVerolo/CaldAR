const mongoose = require('mongoose');

const constructorasSchema = new mongoose.Schema({
    
    name:{
        type:String ,
        required: [true, 'Customer name is required']
    } ,
    city:{
        type:String ,
        required: [true, 'Customer city name is required']
    } ,

    street:{
        type:String ,
        required: [true, 'Customer street name is required']
    } ,

    phone: {
        type: String,
        validate: {
          validator: (v) => /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(v),
          message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'Customer phone number is required'],
        unique: true
      },
    
    
    description: String,
});

module.exports = mongoose.model('Constructoras',constructorasSchema);