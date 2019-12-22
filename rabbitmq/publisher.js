'use strict';

var q = 'Order-Placed';

const config = require('./config');


exports.publish = (restaurantId, orderId, city, amount) => {
    var open = require('amqplib').connect(config.amqp);
    // Publisher
    open.then(function (conn) {
        return conn.createChannel();
    }).then(function (ch) {
        return ch.assertQueue(q).then(function (ok) {

            /*    setInterval(() => { */
            const payload = {
                orderId: orderId,
                restaurantId: restaurantId,
                city: city,
                orderTime: Date.now,
                amount: amount,
                to: 'shubham7047@gmail.com',
                subject: 'Order Placed',
                text: `Your order with order Id ${orderId} has been placed...`
            }
            console.log('order is ', payload)
            ch.sendToQueue(q, Buffer.from(JSON.stringify(payload)));
            /*    }, 5000) */

        });
    }).catch(console.warn);
}
