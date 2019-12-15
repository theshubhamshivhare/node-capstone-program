const RestCtrl = require('../controllers/orders');

module.exports = (app, router) => {
    router.get('/orderbydate', RestCtrl.getOrdersByCityAndDate);

    router.get('/calculatetotalamount', RestCtrl.getTotalAmountByCity);

    app.use('/api', router);
}