const orderCtrl = require('../controllers/order')

module.exports = (app, router) => {
    router.post('/placeorder', orderCtrl.placeOrder);

    router.put('/order/:orderID', orderCtrl.updateOrder);

    router.put('/cancelorder/:orderID', orderCtrl.cancelOrder);
    router.get('/orders', orderCtrl.getOrders);

    router.get('/getorderbycity', orderCtrl.getOrderByCity);

    router.get('/calculateamount', orderCtrl.calculateAmount)
    app.use('/api', router);
}