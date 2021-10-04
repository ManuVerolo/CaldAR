const mongoose = require("mongoose");

const clientesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Customer first name is required"]
      },
    city: {
        type:String,
        required:[true,"Customer city is required"]
    },
    street: {
        type: String,
        required: [true, "Customer street is required"]
    },
    email: {
        type: String,
        validate: {
          validator: (v) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
          message: props => `${props.value} is not a valid email!`
        },
        required: [true, "Customeer email is required"],
        unique: true
      },

      phone: {
        type: String,
        validate: {
          validator: (v) => /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(v),
          message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, "Customer phone number is required"],
        unique: true
      },
    
    type:Boolean,
    isActive:Boolean,
    
});

module.exports = mongoose.model("Clientes",clientesSchema);