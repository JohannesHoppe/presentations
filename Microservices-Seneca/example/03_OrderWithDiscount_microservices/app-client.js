// app.js
var seneca = require('seneca')();

console.log('*** Acting as a client ***');

var customerId = 121;

seneca
    .client({ host: '127.0.0.1', port: 7777 }) // become a client   
    .act({
        role: 'discount-service',
        cmd: 'calculateDiscount',
        customerId: customerId
    }, function(e, discount) {

        console.log('Discount for customer:', discount, '%');

    });
