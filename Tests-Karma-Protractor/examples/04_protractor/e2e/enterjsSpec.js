describe('Johannes Talk at enterJS', function() {

    beforeEach(function () {
        // no waiting on angular to load and finish its tasks
        browser.ignoreSynchronization = true;
    });

    it('should have the expected title', function() {

        browser.get('http://www.enterjs.de/abstracts');

        var heading = element(by.id('unit-und-oberflaechentests'));
        expect(heading.getText()).toEqual('JavaScript-Unit-Tests und Oberflächentests mit Karma und Protractor');
    });

    afterEach(function() {
        return browser.ignoreSynchronization = false;
    });
});
