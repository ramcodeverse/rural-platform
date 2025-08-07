const router = require('express').Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
    const { name, message } = req.body;
    await Contact.create({ name, message });
    res.json({ message: "Thanks for contacting us!" });
});

module.exports = router;