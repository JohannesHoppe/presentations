describe('Johannes Talk at DWX', function() {

    beforeEach(function () {
        // no waiting on angular to load and finish its tasks 
        browser.ignoreSynchronization = true;
    });

    it('should have the expected title', function() {

        browser.get('http://www.developer-week.de/Programm/Veranstaltung/(event)/18498');
        var heading = element(by.tagName('h2'));
        expect(heading.getText()).toEqual('JS Unit- und Oberflächentests mit Karma & Protractor');
    });

    afterEach(function() {
        return browser.ignoreSynchronization = false;
    });
});
