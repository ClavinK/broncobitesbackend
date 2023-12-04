const mongoose = require('mongoose');

const priceChangeRequestSchema = new mongoose.Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Restaurant'
    },
    menuItemId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    suggestedPrice: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const PriceChangeRequest = mongoose.model('PriceChangeRequest', priceChangeRequestSchema);

module.exports = PriceChangeRequest;
