const Restaurant = require('../models/restaurantModel')
const responsePayLoadData = require('../middlewares/buildResponseJson.js');
const logger = require('../middlewares/logger.js');
const index = require('../config/index.js');
const { check, validationResult } = require('express-validator/check');


exports.validate = (method) => {
    switch (method) {
        case 'createRestaurant': {
            return [
                check('restaurantName').exists(),
                check('userRating').exists(),
                check('budget').exists(),
                check('city').exists(),
                check('cuisine').exists(),
                check('menu').exists(),
                check('location').exists()
            ]
        }
    }
}

exports.addRestaurant = async (req, res) => {
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
        let restaurantData = req.body;
        let restaurant = new Restaurant(restaurantData);
        let restData = await restaurant.save();
        response = responsePayLoadData.responseJson(index.globalCode.success.status, index.globalCode.success.code, restData);
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