requirejs.config({
    baseUrl: '/Scripts',
    paths: {
        'jquery': 'jquery-2.1.1',
        'kendo': 'kendo/kendo.all.min',
        'kendo.culture.de-DE': 'kendo/cultures/kendo.culture.de-DE.min',
        'breeze': 'breeze.debug',
        'OData': 'datajs-1.1.3'
    },
    shim: {
        angular: {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-route': {
            exports: 'angular',
            deps: ['angular']
        },
        'angular-mocks': {
            exports: 'angular',
            deps: ['angular']
        },
        kendo: {
            deps: ['jquery', 'angular', 'kendo.culture.de-DE']
        },
        'breeze.angular': {
            deps: ['breeze']
        },
        breeze: {
            deps: ['angular', 'OData']
        }
    }
});