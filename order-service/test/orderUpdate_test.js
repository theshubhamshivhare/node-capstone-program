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

describe('/Update Order', () => {
    it('Missing Update order parameter', (done) => {
        var data = {
            "orderTotalAmount": 450,
            "foodID": "5dfa04246254376880c565be",
            "dishName": "Paneer Tikka",
            "quantity": 3
        }
        chai.request(server)
            .put('/api/order/5dfa04246254376880c565bd')
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.status.should.be.eql('Success');
                res.body.code.should.be.eql('200');
                done();
            });
    }).timeout(10000);
});