const Order = require('../models/orderModel');
const { check, validationResult } = require('express-validator/check');
const responsePayLoadData = require('../middlewares/buildResponseJson.js');
const logger = require('../middlewares/logger.js');
const index = require('../config/index.js');
const mongoose = require('mongoose');


exports.validate = (method) => {
    switch (method) {
        case 'getOrdersByCity': {
            return [
                check('city').exists().isString(),
            ]
        }
    }
}

exports.getOrderByCity = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            response = responsePayLoadData.responseJson(index.globalCode.manadoryParam.status, index.globalCode.manadoryParam.code);
            loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, "", __filename);
            logger.error(loggerResponse);
            return res.json(response);
        }
        const orderData = await Order.find({ city: req.query.city })
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