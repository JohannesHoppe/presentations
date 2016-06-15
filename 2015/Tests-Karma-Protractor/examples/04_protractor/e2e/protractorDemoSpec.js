describe('Protractor Demo Spec', function() {

    it('should have a title', function() {
        //browser.get('http://johanneshoppe.github.io/angular_calc/');
        browser.get('http://localhost:3456/');
        
        //browser.pause();
        //browser.debugger();
        
        expect(browser.getTitle()).toEqual('AngularJS Calculator');
    });
});