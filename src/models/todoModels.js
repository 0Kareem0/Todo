const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    text: { type: String, required: true },
    priority:    { type: String, required: true,},
    deadline: { type: String, required: true },
})

 module.exports = mongoose.model("Todo", todoSchema)