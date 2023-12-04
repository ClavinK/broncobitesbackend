const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurants.js');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', async (req, res) => {
    const { restaurantId, itemId, newPrice } = req.body;

    try {
        // Find the restaurant by ID
        const restaurant = await Restaurant.findOne({ id: restaurantId });
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        // Find the menu item using custom 'id' and update its price
        const menuItem = restaurant.menu.find(item => item.id === itemId);
        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        menuItem.price = newPrice;

        // Save the updated restaurant
        await restaurant.save();

        res.status(200).json({ message: 'Price updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating price' });
    }
});

module.exports = router;
