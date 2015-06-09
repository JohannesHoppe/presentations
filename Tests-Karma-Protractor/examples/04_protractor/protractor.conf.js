exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/*Spec.js'],

    // see: http://ng-learn.org/2014/02/Protractor_Testing_With_Angular_And_Non_Angular_Sites/
    onPrepare: function() {
        global.isAngularSite = function(flag) {
            browser.ignoreSynchronization = !flag;
        };
    }
};