var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const router = express.Router();
const mongoose = require('mongoose')
/* mongoose.Promise = global.Promise; */

let response = {};
mongoose.connect('mongodb://localhost:27017/capston', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    response.msg = 'Successfully Connected to the Database...';
    console.log(response);
  }).catch(err => {
    response.msg = 'Error:' + err;
    logger.log(response);
    process.exit();
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

require('./routes/orderRoutes')(app, router);


module.exports = app;
