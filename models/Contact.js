const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    body: String
})

const Contact = new mongoose.model("contact", ContactSchema)

module.exports = Contact;