'use strict';

var q = 'Order-Placed';

const config = require('./config');
const nodemailer = require('nodemailer');


exports.consume = () => {
    // Setup Nodemailer transport
    const transport = nodemailer.createTransport({
        host: config.server.host,
        port: config.server.port
    }, {
            from: 'shubham7047@gmail.com'
        });


    var open = require('amqplib').connect(config.amqp);
    // Subscriber
    open.then(conn => {
        return conn.createChannel();
    }).then(ch => {
        return ch.assertQueue(q).then(ok => {
            return ch.consume(q, msg => {
                if (msg !== null) {
                    console.log(JSON.parse(msg.content.toString()));
                    let message = JSON.parse(msg.content.toString());
                    message.auth = {
                        user: "shubham7047@gmail.com",
                        pass: "mindtreemind123!"
                    };

                    transport.sendMail(message, (err, info) => {
                        if (err) {
                            console.error(err.stack);
                            // put the failed message item back to queue
                            return ch.nack(msg);
                        }
                        console.log('Delivered message ', info.messageId);
                        ch.ack(msg);
                    });
                }
            });
        }).catch(console.warn);
    })
}