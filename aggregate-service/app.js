var express = require('express');
const router = express.Router()
var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./routes/aggregateRoutes')(app, router)
module.exports = app;