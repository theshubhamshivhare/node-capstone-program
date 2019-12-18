const createOrderCtrl = require('../controllers/createOrder')
const updateOrderCtrl = require('../controllers/updateOrder')
const cancelOrderCtrl = require('../controllers/cancelOrder')
const fetchOrdersCtrl = require('../controllers/fetchOrders')
const getOrdersByCityCtrl = require('../controllers/getOrdersByCity')
const calculateOrdersAmountCtrl = require('../controllers/calculateOrdersAmount')

module.exports = (app, router) => {
    router.post('/placeorder', createOrderCtrl.validate('createOrder'), createOrderCtrl.placeOrder);

    router.put('/order/:orderID', updateOrderCtrl.validate('updateOrder'), updateOrderCtrl.updateOrder);

    router.put('/cancelorder/:orderID', cancelOrderCtrl.validate('cancelOrder'), cancelOrderCtrl.cancelOrder);

    router.get('/fetchorders', fetchOrdersCtrl.getOrders);

    router.get('/getordersbycity', getOrdersByCityCtrl.validate('getOrdersByCity'), getOrdersByCityCtrl.getOrderByCity);

    router.get('/calculateamount', calculateOrdersAmountCtrl.calculateAmount)
    app.use('/api', router);
}