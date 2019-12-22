const createOrderSpec = require('./createOrder.spec');
const updateOrderSpec = require('./updateOrder.spec');
const cancelOrderSpec = require('./cancelOrder.spec');
const fetchOrderSpec = require('./fetchOrder.spec');
const fetchOrdersByCitySpec = require('./fetchOrdersByCity.spec');
const calculateOrdersSpec = require('./calculateOrders.spec');
let paths = {};
Object.assign(paths, createOrderSpec, updateOrderSpec, cancelOrderSpec,
	fetchOrderSpec, fetchOrdersByCitySpec, calculateOrdersSpec);
const swagger = {
	'swagger': '2.0',
	'info': {
		'version': '1.0',
		'title': 'NODEJS Capstone Program'
	},
	'basePath': '/',
	'schemes': [
		'http'
	],
	'produces': [
		'application/json'
	],
	'paths': paths
};
module.exports = swagger;
