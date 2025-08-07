const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
    userId: String,
    items: [{ name: String, quantity: Number }],
    date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Booking', BookingSchema);