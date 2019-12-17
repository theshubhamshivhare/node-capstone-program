const restaurantCtrl = require('../controllers/createRestaurant');

module.exports = (app, router) => {

    router.post('/add-restaurant', restaurantCtrl.validate('createRestaurant'),
        restaurantCtrl.addRestaurant)

    app.use('/api', router);
}