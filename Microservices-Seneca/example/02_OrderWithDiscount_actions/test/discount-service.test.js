var assert = require('should'),
    seneca = require('seneca');

describe('discount-service', function () {

    it('should give older customers a 10% discount', function (done) {

        seneca({ log: 'silent', errhandler: done })
            .use('../discount-service.js')
            .act('role:discount-service, cmd:calculateDiscount, order: { customerId: 5 }', function (err, discount) {

            discount.should.equal(10);
            done();
        });
    });

    it('should give newer customers a 5% discount', function (done) {
        
        seneca({ log: 'silent', errhandler: done })
            .use('../discount-service.js')
            .act('role:discount-service, cmd:calculateDiscount, order: { customerId: 200 }', function (err, discount) {
            
            discount.should.equal(5);
            done();
        });
    });
});
