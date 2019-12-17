const OrderModel = require('../models/orderModel');
const responsePayLoadData = require('../middlewares/buildResponseJson.js');
const logger = require('../middlewares/logger.js');
const index = require('../config/index.js');

const placeOrder = async (req, res) => {
    let response = {};
    let loggerResponse = {};
    try {
        let placedData = new OrderModel(req.body);
        let orderPlacedData = await placedData.save();
        response = responsePayLoadData.responseJson(index.globalCode.success.status, index.globalCode.success.code, orderPlacedData);
        loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, "", __filename);
        logger.info(loggerResponse);
        return res.json(response);
    } catch (err) {
        response = responsePayLoadData.responseJson(index.globalCode.error.status, index.globalCode.error.code);
        loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, err.stack, __filename);
        logger.error(loggerResponse);
        return res.json(response);
    }
}

const updateOrder = async (req, res) => {
    try {
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
        response = responsePayLoadData.responseJson(index.globalCode.success.status, index.globalCode.success.code, UpdateFoodData);
        loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, "", __filename);
        logger.info(loggerResponse);
        return res.json(response);
    } catch (err) {
        response = responsePayLoadData.responseJson(index.globalCode.error.status, index.globalCode.error.code);
        loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, err.stack, __filename);
        logger.error(loggerResponse);
        return res.json(response);
    }
}

const cancelOrder = async (req, res) => {
    try {
        const UpdateFoodData = await OrderModel.findByIdAndUpdate({ _id: req.params.orderID },
            {
                $set: {
                    orderStatus: req.body.cancelOrder
                }
            }, {
                new: true
            })
        response = responsePayLoadData.responseJson(index.globalCode.success.status, index.globalCode.success.code, UpdateFoodData);
        loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, "", __filename);
        logger.info(loggerResponse);
        return res.json(response);
    } catch (err) {
        response = responsePayLoadData.responseJson(index.globalCode.error.status, index.globalCode.error.code);
        loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, err.stack, __filename);
        logger.error(loggerResponse);
        return res.json(response);
    }
}


const getOrders = async (req, res) => {
    try {
        const AllOrders = await OrderModel.find({})
        response = responsePayLoadData.responseJson(index.globalCode.success.status, index.globalCode.success.code, AllOrders);
        loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, "", __filename);
        logger.info(loggerResponse);
        return res.json(response);
    } catch (err) {
        response = responsePayLoadData.responseJson(index.globalCode.error.status, index.globalCode.error.code);
        loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, err.stack, __filename);
        logger.error(loggerResponse);
        return res.json(response);
    }
}

const calculateAmount = async (req, res) => {
    try {
        const AllOrders = await OrderModel.find({})
        var data = 0;
        for (var key in AllOrders) {
            var foodData = AllOrders[key].food[key];
            for (var price in foodData) {
                var price = (Number(foodData.price));
                data = data + price;
            }
        }
        response = responsePayLoadData.responseJson(index.globalCode.success.status, index.globalCode.success.code, data);
        loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, "", __filename);
        logger.info(loggerResponse);
        return res.json(response);
    } catch (err) {
        response = responsePayLoadData.responseJson(index.globalCode.error.status, index.globalCode.error.code);
        loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, err.stack, __filename);
        logger.error(loggerResponse);
        return res.json(response);
    }
}

const getOrderByCity = async (req, res) => {
    try {
        const orderData = await OrderModel.find({ city: req.query.city })
        response = responsePayLoadData.responseJson(index.globalCode.success.status, index.globalCode.success.code, orderData);
        loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, "", __filename);
        logger.info(loggerResponse);
        return res.json(response);
    } catch (err) {
        response = responsePayLoadData.responseJson(index.globalCode.error.status, index.globalCode.error.code);
        loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, err.stack, __filename);
        logger.error(loggerResponse);
        return res.json(response);
    }
}

module.exports = {
    placeOrder, updateOrder, cancelOrder, getOrders, calculateAmount, getOrderByCity
}