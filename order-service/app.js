var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
const index = require('./config/index');
const logger = require('./middlewares/logger');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const router = express.Router();
const mongoose = require('mongoose')

let response = {};
mongoose.connect(index.config.dev.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    response = index.globalCode.success;
    response.msg = "Successfully connected to the database";
    logger.info(response);
  }).catch(err => {
    response = index.globalCode.error;
    response.msg = "Error:" + err;
    logger.error(response);
    process.exit();
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

require('./routes/orderRoutes')(app, router);


module.exports = app;
