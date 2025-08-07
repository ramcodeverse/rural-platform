const router = require('express').Router();
const Booking = require('../models/Booking');

router.post('/', async (req, res) => {
    const { userId, items } = req.body;
    const booking = await Booking.create({ userId, items });
    res.json(booking);
});

router.get('/:userId', async (req, res) => {
    const bookings = await Booking.find({ userId: req.params.userId });
    res.json(bookings);
});

module.exports = router;