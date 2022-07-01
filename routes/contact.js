var express = require('express');
var router = express.Router();
const Contact = require('../models/Contact');
const Messages = require('../models/Messages');

router.get('/', async (req, res) => {
    try {
        const ContactElement = await Contact.findOne({});

        if (!ContactElement)
            res.status(501).send({message: "Contact not found."})

        res.status(200).send(ContactElement);

    } catch (e) {
        res.status(500).send({message: "Internal Server Error!"});
    }
});

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        await new Messages({
            name: req.body.name, email: req.body.email, message: req.body.message
        }).save();

        res.status(200).send({message: "Message Received."});

    } catch (e) {
        res.status(500).send({message: "Internal Server Error!"});
    }
});

module.exports = router;