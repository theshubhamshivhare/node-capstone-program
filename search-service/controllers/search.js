const SearchModel = require('../models/searchModel')
const responsePayLoadData = require('../middlewares/buildResponseJson.js');
const logger = require('../middlewares/logger.js');
const index = require('../config/index.js');

exports.search = async (req, res) => {
    let response = {};
    let loggerResponse = {};
    try {
        const searchedData = await SearchModel.find({
            $or: [
                { 'restaurant.name': req.query.restaurantName },
                { 'restaurant.location.city': req.query.city },
                { 'restaurant.user_rating.aggregate_rating': req.query.ratings },
                { 'restaurant.menu': req.query.menu },
                { 'restaurant.budget': req.query.budget },
                { 'restaurant.cuisines': req.query.cuisines }
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

/*   const distance = await SearchModel.aggregate[{
      $geoNear: {
          near: {
              type: 'Point',
              coordinates: [parseFloat(req.query.long), parseFloat(req.query.lat)]
          },
          spherical: true,
           // 1000m = 1km  so this is 200km
maxDistance: 1000 * 400000,
    distanceField: 'distance.calculated',
        "distanceMultiplier": 0.001
}
}]

console.log(distance); */
