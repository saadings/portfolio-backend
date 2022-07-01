var express = require('express');
var router = express.Router();
const Skills = require('../models/Skills');

router.get('/', async (req, res) => {
    try {
        const SkillsElement = await Skills.find({});

        if (!SkillsElement)
            res.status(501).send({message: "Skills not found."})

        res.status(200).send(SkillsElement);

    } catch (e) {
        res.status(500).send({message: "Internal Server Error!"});
    }
});

module.exports = router;