const mongoose = require("mongoose");

const constructorasSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },  

    
    description: String,
});

module.exports = mongoose.model("Constructoras",constructorasSchema);