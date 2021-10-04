const mongoose = require("mongoose");

const mantenimientosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    description: String,
    time:Date,
});

module.exports = mongoose.model("Mantenimientos", mantenimientosSchema);