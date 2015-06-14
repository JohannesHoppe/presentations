// app.js
var discountService = require('./discount-service.js');

console.log('Order discount example');

var order = {
    customerId: 121,
    orderTotal: 500,
    products: []
};

var discount = discountService.calculateDiscount(order);
console.log('Discount for customer:', discount, '%');

require('paktc');