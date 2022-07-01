const mongoose = require("mongoose");

const MessagesSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
})

const Messages = new mongoose.model("messages", MessagesSchema)

module.exports = Messages;