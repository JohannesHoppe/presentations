// discount-service.js
module.exports = function(options) {

    var seneca = this;

    // returns applicable discount in %
    var calculateDiscount = function(args, done) {
        var discount = (args.customerId < 100) ? 10 : 5;
        done(null, {discount: discount});
    }

    seneca.add({ role: 'discount-service', cmd: 'calculateDiscount' }, calculateDiscount);
};