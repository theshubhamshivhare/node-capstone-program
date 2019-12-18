const fetch = require('node-fetch');
const { check, validationResult } = require('express-validator/check');
const responsePayLoadData = require('../middlewares/buildResponseJson');
const logger = require('../middlewares/logger');
const index = require('../config/index');
fetch.Promise = global.Promise;

exports.validate = (method) => {
    switch (method) {
        case 'calculateOrdersAmountByCityAndDate': {
            return [
                check('city').exists()
            ]
        }
    }
}

exports.getTotalAmountByCity = async (req, res) => {
    let response = {};
    let loggerResponse = {};
    let totalAmount = 0;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            response = responsePayLoadData.responseJson(index.globalCode.manadoryParam.status, index.globalCode.manadoryParam.code);
            loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, "", __filename);
            logger.error(loggerResponse);
            return res.json(response);
        }
        const city = req.query.city;
        const orders = await fetch(`${index.config.dev.calculateOrdersAmountByCityAndDate}?city=${city}`);
        const OrderData = await orders.json();

        for (const key in OrderData.data) {
            totalAmount = totalAmount + Number(OrderData.data[key].orderTotalAmount);
        }

        response = responsePayLoadData.responseJson(index.globalCode.success.status, index.globalCode.success.code, totalAmount);
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