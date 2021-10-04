const mongoose = require("mongoose");

const calderasSchema = new mongoose.Schema({
    name: String,
    description: String,
});

module.exports = mongoose.model("Calderas", calderasSchema);