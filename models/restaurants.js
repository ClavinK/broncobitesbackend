const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
});

const restaurantSchema = new mongoose.Schema({
    id: Number,
    name: String,
    menu: [menuSchema],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;