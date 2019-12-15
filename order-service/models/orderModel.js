'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    restaurantID: String,
    restautrantName: String,
    orderAmount: String,
    city: String,
    food: { type: [Schema.Types.Mixed] },
    orderStatus: { type: String, default: 'Ordered' },
    createdOn: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('order', orderSchema);