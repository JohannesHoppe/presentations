// app.js
var discountService = require('./discount-service.js');

console.log('Order discount example');

var customerId = 121;

var result = discountService.calculateDiscount(customerId);
console.log('Discount for customer:', result.discount, '%');

require('paktc');