const express = require('express');
const cookieParser = require('cookie-parser');
const index = require('./config/index');
const logger = require('./middlewares/logger');
const router = express.Router();
const mongoose = require('mongoose')
const app = express();
let response = {};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


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


require('./routes/orderRoutes')(app, router);


module.exports = app;
