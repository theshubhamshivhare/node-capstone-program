const searchSpec = require('./search.spec');
let paths = {};
Object.assign(paths, searchSpec);
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
