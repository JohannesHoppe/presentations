requirejs.config({
    baseUrl: '/base', // !!!
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
    },
    deps: (function() {

        var allTestFiles = [];

        Object.keys(window.__karma__.files).forEach(function(file) {
          if (/Spec\.js$/i.test(file)) {
            allTestFiles.push(file.replace(/^\/base\//, '').replace(/\.js$/, ''));
          }
        });
            
        return allTestFiles;
    })(),
    callback: window.__karma__.start
});

