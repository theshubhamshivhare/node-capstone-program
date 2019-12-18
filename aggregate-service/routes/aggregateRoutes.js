const getOrderByDateCtrl = require('../controllers/getOrdersByCityAndDate');
const calculateTotalAmoutByCity = require('../controllers/calculateOrdersAmountByCityAndDate')


module.exports = (app, router) => {
    router.get('/fetchordersbycityanddate', getOrderByDateCtrl.validate('getOrderByCityAndDate'),
        getOrderByDateCtrl.getOrdersByCityAndDate
    )

    router.get('/calculatetotalamountbycitydate', calculateTotalAmoutByCity.validate('calculateOrdersAmountByCityAndDate'),
        calculateTotalAmoutByCity.getTotalAmountByCity)

    app.use('/api', router);
}