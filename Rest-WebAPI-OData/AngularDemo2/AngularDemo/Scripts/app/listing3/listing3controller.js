define(['angular'], function(angular) {

    return angular.module('listing3', [])
        .controller('listing3Controller', [
            '$scope', '$http', function($scope, $http) {

                $scope.customers = [];
                $scope.webapi_query = '/api/CustomersApi';
                $scope.odata_query = '/odata/Customers';

                $scope.do_webapi_query = function() {
                    $http.get($scope.webapi_query, { transformResponse: function(d) { return d; } })
                        .success(function(result) {
                            $scope.webapi_query_result = result;
                        })
                        .error(function(result) {
                            $scope.webapi_query_result = result;
                        });
                };

                $http.get('/odata/$metadata', { transformResponse: function(d) { return d; } })
                    .success(function(data) {
                        $scope.oDataMetadataRaw = data;
                    });

                $http.get('/odataFixed/$metadata', { transformResponse: function (d) { return d; } })
                    .success(function (data) {
                        $scope.oDataFixedMetadataRaw = data;
                    });

                $scope.do_odata_query = function() {
                    $http.get($scope.odata_query, { transformResponse: function(d) { return d; } })
                        .success(function(data) {
                            $scope.odata_query_result = data;
                        })
                        .error(function (result) {
                            $scope.odata_query_result = result;
                        });
                };

                $scope.do_webapi_query();
                $scope.do_odata_query();
            }
        ]);
});