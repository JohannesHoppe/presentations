// discount-service.js
module.exports = {
    
    // returns applicable discount in %
    calculateDiscount: function(customerId) {
        return (customerId < 100) ? 10 : 5;
    }
};

