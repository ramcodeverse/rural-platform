const router = require('express').Router();
const Service = require('../models/Service');

router.get('/', async (req, res) => {
    const services = await Service.find();
    res.json(services);
});

module.exports = router;