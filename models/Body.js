const mongoose = require("mongoose");

const BodySchema = new mongoose.Schema({
    title: String,
    bodyText: String
})

const Body = new mongoose.model("body", BodySchema)

module.exports = Body;