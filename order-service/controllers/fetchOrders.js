const Order = require('../models/orderModel');
const responsePayLoadData = require('../middlewares/buildResponseJson.js');
const logger = require('../middlewares/logger.js');
const index = require('../config/index.js');
const mongoose = require('mongoose');


exports.getOrders = async (req, res) => {
    try {
        const AllOrders = await Order.find({})
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