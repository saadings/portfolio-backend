const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: String,
    category: String,
    bodyText: String
})

const Project = new mongoose.model("projects", ProjectSchema)

module.exports = Project;