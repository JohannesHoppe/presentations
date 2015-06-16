define([
    'require',
    'angular',
    'angular-route',
    'app/home/homeController',
    'app/listing1/listing1Controller',
    'app/listing2/listing2Controller' ,
    'app/listing3/listing3Controller',
    'app/listing4/listing4Controller',
    'app/listing5/listing5Controller',
    'app/listing6/listing6Controller'
], function(require, angular) {

    angular.module('app', ['ngRoute', 'home', 'listing1', 'listing2', 'listing3', 'listing4', 'listing5', 'listing6'])
        .config([
            '$routeProvider', function($routeProvider) {

                $routeProvider
                    .when('/', {
                        templateUrl: '/Scripts/app/home/home.html',
                        controller: 'homeController'
                    })
                    .when('/listing1', {
                        templateUrl: '/Scripts/app/listing1/listing1.html',
                        controller: 'listing1Controller'
                    })
                    .when('/listing2', {
                        templateUrl: '/Scripts/app/listing2/listing2.html',
                        controller: 'listing2Controller'
                    })
                    .when('/listing3', {
                        templateUrl: '/Scripts/app/listing3/listing3.html',
                        controller: 'listing3Controller'
                    })
                    .when('/listing4', {
                        templateUrl: '/Scripts/app/listing4/listing4.html',
                        controller: 'listing4Controller'
                    })
                    .when('/listing5', {
                        templateUrl: '/Scripts/app/listing5/listing5.html',
                        controller: 'listing5Controller'
                    })
                    .when('/listing6', {
                        templateUrl: '/Scripts/app/listing6/listing6.html',
                        controller: 'listing6Controller'
                    })
                    .otherwise({ redirectTo: '/' });
            }
        ]);


    // bootstrap Angular after require.js and DOM are ready
    require(['domReady!'], function(domReady) {
        angular.bootstrap(domReady, ['app']);
    });
});