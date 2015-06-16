define(['angular'], function(angular) {

    return angular.module('listing1', [])
        .controller('listing1Controller', [
            '$scope', '$http', function($scope, $http) {

                $scope.customers = [];

                $http.get('/api/CustomersApi').success(function(data) {
                    $scope.customers = data;
                });
            }
        ]);
});