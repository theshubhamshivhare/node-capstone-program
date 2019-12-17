require('dotenv').config();
//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
let mongoose = require("mongoose");
let orderModel = require('../models/orderModel');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('/Create Order', () => {
    it('Missing order parameter', (done) => {
        var data = {
            "restaurantID": "5df3563bc75774dbbf7ad4e1",
            "restautrantName": "Dominoz",
            "city": "Pune",
            "food": {
                "name": "Pizza",
                "quantity": "1",
                "price": "150"
            }
        }
        chai.request(server)
            .post('/api/placeorder')
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.status.should.be.eql('Success');
                res.body.code.should.be.eql('200');
                done();
            });
    }).timeout(10000);
});