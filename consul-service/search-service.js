// var consul = require('consul')();
var Bluebird = require('bluebird');

function fromCallback(fn) {
    return new Bluebird(function (resolve, reject) {
        try {
            return fn(function (err, data, res) {
                if (err) {
                    err.res = res;
                    return reject(err);
                }
                return resolve([data, res]);
            });
        } catch (err) {
            return reject(err);
        }
    });
}
var consul = require('consul')({ promisify: fromCallback });


consul.acl.bootstrap(function (err, result) {
    console.log(err, result)
    // if (err) throw err;
});


consul.agent.members(function (err, result) {
    console.log('memebrs', err, result)
    if (err) throw err;
});


const express = require('express');

const app = express();

const PORT = process.env.PORT || 8890;
const IP_ADDRESS = process.env.IP_ADDRESS || 'localhost';

app.get('/', function (req, res) {
    return res.send(` process id ${process.pid} - PORT ${PORT} `)
})

app.listen(PORT)

console.log('ON PORT ' + PORT);


// ----- should be part of search/order services

const CONSUL_ID = require('uuid').v4();
let details = {
    name: 'search', // service group name search or order
    address: IP_ADDRESS,
    port: PORT,
    id: CONSUL_ID,
    check: {
        ttl: '10s',
        deregister_critical_service_after: '1m'
    }
};
consul.agent.service.register(details, err => {
    // schedule heartbeat
    console.log("register ", err)
});

setInterval(() => {
    consul.agent.check.pass({ id: `service:${CONSUL_ID}` }, err => {
        if (err) throw new Error(err);
        console.log('told Consul that we are healthy');
    });
}, 5 * 1000);

process.on('SIGINT', () => {
    console.log('SIGINT. De-Registering...');
    let details = { id: CONSUL_ID };

    consul.agent.service.deregister(details, (err) => {
        console.log('de-registered.', err);
        process.exit();
    });
});

  // -----------------