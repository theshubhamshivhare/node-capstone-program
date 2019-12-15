'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    location: String,
    distance: Number,
    cuisine: String,
    ratings: String,
    restaurantName: String,
    menu: String,
    budget: Number,
    geometry: {
        type: {
            type: "String",
            required: true,
            enum: ['Point', 'LineString', 'Polygon'],
            default: 'Point'
        },
        coordinates: [Number]

    }
});

module.exports = mongoose.model('restaurant', restaurantSchema);