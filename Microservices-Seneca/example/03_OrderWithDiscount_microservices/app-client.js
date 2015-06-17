// app-client.js
var seneca = require('seneca')({ log: 'error' });

console.log('*** Acting as a client ***');

var customerId = 121;

seneca
    .client({ host: '127.0.0.1', port: 7777 }) // become a client   
    .act({
        role: 'discount-service',
        cmd: 'calculateDiscount',
        customerId: customerId
    }, function(err, result) {

        console.log('Discount for customer:', result.discount, '%');
    });
