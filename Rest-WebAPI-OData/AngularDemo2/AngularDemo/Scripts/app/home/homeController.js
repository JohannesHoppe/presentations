define(['angular', 'angular-partition'], function(angular) {

    return angular.module('home', ['partition'])
        .controller('homeController', [
            '$scope', '$http', function($scope, $http) {

                $scope.model = {
                    listings: [
                        {
                            title: 'Listing 1',
                            description: 'Daten laden per Web API',
                            url: '#/listing1'
                        },
                        {
                            title: 'Listing 2',
                            description: 'Daten laden per Web API / OData mit dem Kendo UI Grid',
                            url: '#/listing2'
                        },
                        {
                            title: 'Listing 3',
                            description: 'Die Antwort der normalen Web API und OData im Vergleich',
                            url: '#/listing3'
                        },
                        {
                            title: 'Listing 4',
                            description: 'Daten laden per breeze.js',
                            url: '#/listing4'
                        },
                        {
                            title: 'Listing 5',
                            description: 'Daten laden per breeze.js',
                            url: '#/listing5'
                        },
                        {
                            title: 'Listing 6',
                            description: 'Verwendung von OData Actions',
                            url: '#/listing6'
                        }
                    ]
                }
        }
        ]);
});