'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    restaurantName: String,
    userRating: Number,
    budget: Number,
    city: String,
    cuisine: [],
    menu: [
        {
            dishName: String,
            price: String
        }
    ],
    location:
    {
        type: {
            type: String,
            enum: ['Point', 'LineString', 'Polygon'],
            default: 'Point',
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

module.exports = mongoose.model('restaurant', restaurantSchema);