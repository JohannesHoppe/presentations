// app.js
var discountService = require('./discount-service.js');

console.log('Order discount example');

var customerId = 121;

var discount = discountService.calculateDiscount(customerId);
console.log('Discount for customer:', discount, '%');

require('paktc');