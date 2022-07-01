const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
    name: String,
    body: String
})

const About = new mongoose.model("about", AboutSchema)

module.exports = About;