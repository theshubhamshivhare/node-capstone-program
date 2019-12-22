const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const router = express.Router();
const index = require('./config/index');
const logger = require('./middlewares/logger');
const app = express();
let response = {};

/* DB Connection */
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


/* Swagger */
try {
  if (process.env.NODE_ENV !== 'production') {
    const swaggerUi = require('swagger-ui-express');
    const swaggerDocument = require('./apidoc');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
} catch (err) {
  logger.info("Something went wrong with swagger");
}


/* Routes */
require('./routes/searchRoutes')(app, router);
require('./routes/restaurantRoutes')(app, router);


module.exports = app;
