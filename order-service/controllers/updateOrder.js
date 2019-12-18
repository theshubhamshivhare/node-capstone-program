const Order = require('../models/orderModel');
const { check, validationResult } = require('express-validator/check');
const responsePayLoadData = require('../middlewares/buildResponseJson.js');
const logger = require('../middlewares/logger.js');
const index = require('../config/index.js');
const mongoose = require('mongoose');

exports.validate = (method) => {
    switch (method) {
        case 'updateOrder': {
            return [
                check('orderTotalAmount').exists().isNumeric(),
                check('foodID').exists().isMongoId(),
                check('dishName').exists().isString(),
                check('quantity').exists().isNumeric()
            ]
        }
    }
}

exports.updateOrder = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            response = responsePayLoadData.responseJson(index.globalCode.manadoryParam.status, index.globalCode.manadoryParam.code);
            loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, "", __filename);
            logger.error(loggerResponse);
            return res.json(response);
        }
        if (mongoose.Types.ObjectId.isValid(req.params.orderID)) {
            const UpdateFoodData = await Order.findByIdAndUpdate({ _id: req.params.orderID, 'food._id': req.body.foodID },
                {
                    $set: {
                        orderTotalAmount: req.body.orderTotalAmount,
                        food: {
                            dishName: req.body.dishName,
                            quantity: req.body.quantity
                        }
                    },
                }, {
                    new: true
                })
            response = responsePayLoadData.responseJson(index.globalCode.notFound.status, index.globalCode.notFound.code, UpdateFoodData);
            loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, "", __filename);
            logger.info(loggerResponse);
            return res.json(response);
        }
        response = responsePayLoadData.responseJson(index.globalCode.success.status, index.globalCode.success.code);
        loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, err.stack, __filename);
        logger.error(loggerResponse);
        return res.json(response);
    } catch (err) {
        response = responsePayLoadData.responseJson(index.globalCode.error.status, index.globalCode.error.code);
        loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, err.stack, __filename);
        logger.error(loggerResponse);
        return res.json(response);
    }
}