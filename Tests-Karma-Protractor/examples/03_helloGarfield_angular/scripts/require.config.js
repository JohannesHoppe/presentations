requirejs.config({
    baseUrl: 'scripts',
    paths: { },
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-route': {
            exports: 'angular',
            deps: ['angular']
        },
        'angular-mocks': {
            exports: 'angular',
            deps: ['angular']
        }
    }
});