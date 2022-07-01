var express = require('express');
var router = express.Router();
const Body = require('../models/Body')

/* GET home page. */
router.get('/', async (req, res) => {
    try {
        const BodyElement = await Body.findOne({});

        if (!BodyElement)
            res.status(501).send({message: "Body Element not Found."})

        res.status(200).send({title: BodyElement.title, bodyText: BodyElement.bodyText})

    } catch (e) {
        res.status(500).send({message: "Internal Server Error"});
    }

});

module.exports = router;