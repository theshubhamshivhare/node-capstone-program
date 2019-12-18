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

describe('/Calculate Orders Amount', () => {
    it('Missing Calculate order parameter', (done) => {

        chai.request(server)
            .get('/api/calculatetotalamountbycitydate')
            .query({ city: 'Bangalore' })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.status.should.be.eql('Success');
                res.body.code.should.be.eql('200');
                done();
            });
    }).timeout(10000);
});