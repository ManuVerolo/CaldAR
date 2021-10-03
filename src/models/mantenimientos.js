const mongoose = require("mongoose");

const mantenimientosSchema = new mongoose.Schema({
    name: String,
    description: String,
    time:Date,
});

module.exports = mongoose.model("Mantenimientos", mantenimientosSchema);