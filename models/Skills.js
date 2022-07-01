const mongoose = require("mongoose");

const SkillsSchema = new mongoose.Schema({
    title: String,
    icon: String,
    body: String
})

const Skills = new mongoose.model("skills", SkillsSchema)

module.exports = Skills;