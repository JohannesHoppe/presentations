// app.js
var seneca = require('seneca')();
seneca.use('./discount-service.js');

console.log('Order discount example - with action / pattern matching');

var order = {
    customerId: 121,
    orderTotal: 500,
    products: []
};

seneca.act({
    role: 'discount-service',
    cmd: 'calculateDiscount',
    order: order
}, function (e, discount) {
    
    console.log('Discount for customer:', discount, '%');

    require('paktc');
});
