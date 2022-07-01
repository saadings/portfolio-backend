var express = require('express');
var router = express.Router();
const About = require('../models/About');

router.get('/', async (req, res) => {
    try {
        const AboutElement = await About.findOne({});

        if (!AboutElement)
            res.status(501).send({message: "Skills not found."})

        res.status(200).send(AboutElement);

    } catch (e) {
        res.status(500).send({message: "Internal Server Error!"});
    }
});

module.exports = router;