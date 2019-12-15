let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('/Fetch Restaurant Name', () => {
    it('Check Restaurant Name', (done) => {
        chai.request(server)
            .get('/api/search')
            .query({ restaurantName: 'Hoot' })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    }).timeout(10000);
});