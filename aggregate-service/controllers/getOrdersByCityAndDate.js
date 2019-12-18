const fetch = require('node-fetch');
const { check, validationResult } = require('express-validator/check');
const responsePayLoadData = require('../middlewares/buildResponseJson');
const logger = require('../middlewares/logger');
const index = require('../config/index');
fetch.Promise = global.Promise;

exports.validate = (method) => {
    switch (method) {
        case 'getOrderByCityAndDate': {
            return [
                check('city').exists()
            ]
        }
    }
}

exports.getOrdersByCityAndDate = async (req, res) => {
    let response = {};
    let loggerResponse = {};
    var dateWiseOrders = [];
    let city;
    var orderdate;

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            response = responsePayLoadData.responseJson(index.globalCode.manadoryParam.status, index.globalCode.manadoryParam.code);
            loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, "", __filename);
            logger.error(loggerResponse);
            return res.json(response);
        }
        city = req.query.city;
        const orders = await fetch(`${index.config.dev.getAllOrdersByCityAndDate}?city=${city}`);
        const OrderData = await orders.json();

        for (const key in OrderData.data) {
            orderdate = OrderData.data[key].createdOn;
            var orderdateData = new Date(orderdate);
            var today = new Date();
            if (orderdateData.getDate() === today.getDate() && orderdateData.getYear() === today.getYear()) {
                dateWiseOrders.push(OrderData.data[key])
            }
        }
        response = responsePayLoadData.responseJson(index.globalCode.success.status, index.globalCode.success.code, dateWiseOrders);
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

