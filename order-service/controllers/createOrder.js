const Order = require('../models/orderModel');
const { check, validationResult } = require('express-validator/check');
const responsePayLoadData = require('../middlewares/buildResponseJson.js');
const logger = require('../middlewares/logger.js');
const index = require('../config/index.js');
const fetch = require('node-fetch');
fetch.Promise = global.Promise;


exports.validate = (method) => {
    switch (method) {
        case 'createOrder': {
            return [
                check('restaurantID').isMongoId().exists(),
                check('restautrantName').exists().isString(),
                check('orderTotalAmount').exists().isNumeric(),
                check('city').exists().isString(),
                check('food').exists()
            ]
        }
    }
}


exports.placeOrder = async (req, res) => {
    let response = {};
    let loggerResponse = {};
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            response = responsePayLoadData.responseJson(index.globalCode.manadoryParam.status, index.globalCode.manadoryParam.code);
            loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, "", __filename);
            logger.error(loggerResponse);
            return res.json(response);
        }
        let placedData = new Order(req.body);
        let orderPlacedData = await placedData.save();
        /* RabbitMQ */
        fetch('http://localhost:6000/publish', {
            method: 'POST', body: JSON.stringify(orderPlacedData),
            headers: { 'Content-Type': 'application/json' }
        });

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