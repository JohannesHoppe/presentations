define(['angular', 'breeze.angular'], function(angular) {

    return angular.module('listing6', ['breeze.angular'])
        .controller('listing6Controller', [
            '$scope', '$http', function($scope, $http) {

                $scope.purchased = [];

                $scope.callAction = function() {

                    $http.post("/odata/Customers(42)/Purchase", {
                            AmountOfShoes: 2
                        })
                        .success(function(data) {
                            $scope.purchased = data.value;
                        });

                };
            }
        ]);
});