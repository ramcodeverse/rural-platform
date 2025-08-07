const mongoose = require('mongoose');
const ServiceSchema = new mongoose.Schema({
    name: String,
    image: String,
});
module.exports = mongoose.model('Service', ServiceSchema);