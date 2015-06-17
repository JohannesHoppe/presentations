// app.js
var seneca = require('seneca')();
seneca.use('./discount-service.js');

console.log('Order discount example - with action / pattern matching');

var customerId = 121;

seneca.act({
    role: 'discount-service',
    cmd: 'calculateDiscount',
    customerId: customerId
}, function (e, result) {
    
    console.log('Discount for customer:', result.discount, '%');
    //require('paktc');
});
