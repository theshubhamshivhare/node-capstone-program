const fetch = require('node-fetch');
fetch.Promise = global.Promise;
const getOrdersByCityAndDate = async (req, res) => {
    try {
        const city = req.query.city;

        const orders = await fetch(`http://localhost:3000/api/getorderbycity?city=${city}`);
        const OrderData = await orders.json();

        var data;
        var dateWiseOrders = [];
        var orderdate;

        for (var key in OrderData) {
            data = OrderData[key];
            data.forEach(element => {
                orderdate = element.createdOn;
                neworderdate = new Date(orderdate);
                var today = new Date();
                if (neworderdate.getDate() === today.getDate() && neworderdate.getYear() === today.getYear()) {
                    console.log(orderdate);
                    dateWiseOrders.push(data)
                }
            });
            console.log(dateWiseOrders);
            res.send(dateWiseOrders)
        }
    } catch (err) {

    }
}

const getTotalAmountByCity = async (req, res) => {
    try {
        const city = req.query.city;
        let totalAmount = 0;
        let foodData;
        const orders = await fetch(`http://localhost:4000/api/orderbydate?city=${city}`);
        const OrderData = await orders.json();
        OrderData.forEach((item, index) => {
            foodData = item[index].food;

        });

        foodData.forEach((item, index) => {
            console.log('price ', item.price);
            totalAmount = totalAmount + Number(item.price);
            console.log(totalAmount);
        })
        res.status(200).json({ 'totalAmount': totalAmount })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getOrdersByCityAndDate, getTotalAmountByCity
}