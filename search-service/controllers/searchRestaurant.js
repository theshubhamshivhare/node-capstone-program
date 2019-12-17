const Restaurant = require('../models/restaurantModel')
const responsePayLoadData = require('../middlewares/buildResponseJson.js');
const logger = require('../middlewares/logger.js');
const index = require('../config/index.js');
const { check, validationResult } = require('express-validator/check');
const querystring = require('querystring');

exports.validate = (method) => {
    switch (method) {
        case 'searchRestaurant': {
            return [
                check('restaurantName').optional().isString(),
                check('userRating').optional().isNumeric(),
                check('budget').optional().isNumeric(),
                check('city').optional().isString(),
                check('cuisine').optional(),
                check('menu').optional(),
                check('location').optional()
            ]
        }
    }
}

exports.search = async (req, res) => {
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
        if (req.query.cuisine) {
            var cuisineData = req.query.cuisine.split(',')
        }
        if (req.query.menu) {
            var menuData = req.query.menu.split(',')
        }

        if (req.query.location) {
            var latlong = req.query.location.split(',');

            for (var i = 0; i < latlong.length; i++) {
                var lat = latlong[0];
                var long = latlong[1];
                console.log(latlong[i]);
                const restaurantLocation = await Restaurant.aggregate([{
                    $geoNear: {
                        near: {
                            type: 'Point',
                            coordinates: [parseFloat(long), parseFloat(lat)]
                        },
                        spherical: true,
                        /* 1000m = 1km  so this is 200km*/
                        maxDistance: 1000 * 400000,
                        distanceField: 'restaurantDistance',
                        "distanceMultiplier": 0.001
                    }
                }])
                response = responsePayLoadData.responseJson(index.globalCode.success.status, index.globalCode.success.code, restaurantLocation);
                loggerResponse = responsePayLoadData.loggerJson(req.originalUrl, req.body, response, "", __filename);
                logger.info(loggerResponse);
                return res.json(response);
            }
        }
        const searchedData = await Restaurant.find({
            $or: [
                { restaurantName: req.query.restaurantName },
                { userRating: req.query.userRating },
                { budget: req.query.budget },
                { city: req.query.city },
                { cuisine: { $in: cuisineData } },
                { 'menu.dishName': { $in: menuData } }
                /*   { location: req.query.location } */
            ]
        })
        response = responsePayLoadData.responseJson(index.globalCode.success.status, index.globalCode.success.code, searchedData);
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
