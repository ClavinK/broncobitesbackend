const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const restaurantRouter = require('./routes/Restaurants');
const priceChangeRouter = require('./routes/priceChange.js');
const account = require('./routes/accountRoute.js');

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connection established.'))
  .catch(err => console.error('MongoDB connection error:', err));

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established.')
});

app.use('/', restaurantRouter);
app.use('/pricechange', priceChangeRouter);
app.use('/account', account);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../bronco-bites/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../bronco-bites/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});



