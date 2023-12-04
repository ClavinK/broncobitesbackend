const router = require('express').Router();
const restaurants = require('../models/restaurants.js');

router.route('/').get((req, res) => {
    restaurants.find()
        .then(restaurants => res.json(restaurants))
        .catch(err => res.status(400).json('Error ' + err));
});


module.exports = router;
