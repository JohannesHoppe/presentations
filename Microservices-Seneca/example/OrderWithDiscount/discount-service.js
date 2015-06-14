// discount-service.js
module.exports = {
    
    // returns applicable discount in %
    calculateDiscount: function(order) {
        return (order.customerId < 100) ? 10 : 5;
    }
};

