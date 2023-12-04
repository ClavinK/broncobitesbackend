require('dotenv').config();
const mongoose = require('mongoose');
const Restaurant = require('./models/restaurants.js');

const data = [
    {
        id: 15, name: 'Element Coffee & Food', menu: [
            { id: 1537, name: 'Coffee Cold', price: 2.50 },
            { id: 1538, name: 'Coffee Hot', price: 3.50 },
            { id: 1539, name: 'Hot Tea (Cold)', price: 2.50 },
            { id: 1540, name: 'Hot Tea', price: 3.50 },
            { id: 1541, name: 'Bakery', price: 4.00 },
            { id: 1542, name: 'Mango Madness Slushy', price: 8.00 },
            { id: 1543, name: 'Berry Good Slushy', price: 8.00 },
            { id: 1544, name: 'Strawberry Splash Slushy', price: 8.00 },
            { id: 1545, name: 'Acai Bowl', price: 8.00 },
            { id: 1546, name: 'Breakfast Sando', price: 8.00 },
            { id: 1547, name: 'Element Breakfast Bowl', price: 9.00 },

            { id: 1548, name: 'Supreme Spuds', price: 8.00 },
            { id: 1549, name: 'Single Avocado Toast', price: 5.00 },
            { id: 1550, name: 'Classic Sandwiches (Classic Turkey, Hamwich, Veggie-might)', price: 8.00 },
            { id: 1551, name: 'Swipe Menu', price: 10.00 },
            { id: 1552, name: 'Element Specials', price: 10.00 }
        ]
    }

];

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
    console.log("Connected to MongoDB");
    try {
        const result = await Restaurant.create(data);
        console.log("Data inserted: ", result);
    } catch (error) {
        console.error(error);
    } finally {
        db.close();
    }
});