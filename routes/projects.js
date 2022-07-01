var express = require('express');
var router = express.Router();
const Projects = require('../models/Projects')

/* GET users listing. */
router.get('/', async (req, res) => {
    try {
        const ProjectElements = await Projects.find({});

        if (!ProjectElements)
            res.status(501).send({message: "Body Element not Found."})

        res.status(200).send(ProjectElements)

    } catch (e) {
        res.status(500).send({message: "Internal Server Error"});
    }
});

module.exports = router;