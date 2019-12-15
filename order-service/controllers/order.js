const OrderModel = require('../models/orderModel');

const placeOrder = async (req, res) => {
    let placedData = new OrderModel(req.body);
    let orderPlacedData = await placedData.save();
    res.send(orderPlacedData)
}

const updateOrder = async (req, res) => {
    const UpdateFoodData = await OrderModel.findByIdAndUpdate({ _id: req.params.orderID },
        {
            $set: {
                food: {
                    name: req.body.foodName,
                    quantity: req.body.foodQuantity,
                    price: req.body.foodPrice,
                }
            },
        }, {
            new: true
        })
    res.send(UpdateFoodData)
}

const cancelOrder = async (req, res) => {
    const UpdateFoodData = await OrderModel.findByIdAndUpdate({ _id: req.params.orderID },
        {
            $set: {
                orderStatus: req.body.cancelOrder
            }
        }, {
            new: true
        })
    res.send(UpdateFoodData)
}


const getOrders = async (req, res) => {
    const AllOrders = await OrderModel.find({})
    res.send(AllOrders)
}

const calculateAmount = async (req, res) => {
    const AllOrders = await OrderModel.find({})
    var data = 0;
    for (var key in AllOrders) {
        var foodData = AllOrders[key].food[key];
        for (var price in foodData) {
            var price = (Number(foodData.price));
            data = data + price;
        }
    }
    res.json({ "TotalOrdersAmount": data })
}

const getOrderByCity = async (req, res) => {
    try {
        const orderData = await OrderModel.find({ city: req.query.city })
        res.status(201).json({ "orderData": orderData })
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    placeOrder, updateOrder, cancelOrder, getOrders, calculateAmount, getOrderByCity
}