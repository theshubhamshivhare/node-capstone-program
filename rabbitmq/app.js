const express = require('express');
const app = express();
const publisher = require('./publisher');
const subscriber = require('./consumer');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/publish', (req, res) => {
    console.log('Order Data', req.body);
    restaurantID = req.body.restaurantID;
    orderId = req.body._id;
    city = req.body.city;
    amount = req.body.orderTotalAmount;
    publisher.publish(restaurantID, orderId, city, amount);
})

app.get('/consume', (req, res) => {
    subscriber.consume();
})



const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Connected to PORT ${PORT}`);
})