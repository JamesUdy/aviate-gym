const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    subject: String,
    message: String,
})

module.exports = mongoose.model("form", formSchema)