// discount-service.js
module.exports = function(options) {

    var seneca = this;

    // returns applicable discount in %
    var calculateDiscount = function(args, done) {
        done(null, { discount: (args.customerId < 100) ? 10 : 5 });
    };

    seneca.add({ role: 'discount-service', cmd: 'calculateDiscount' }, calculateDiscount);
};
