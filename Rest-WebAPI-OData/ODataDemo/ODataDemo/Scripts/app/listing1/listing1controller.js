define(['angular'], function(angular) {

    return angular.module('listing1', [])
        .controller('listing1Controller', [
            '$scope', '$http', function($scope, $http) {

                $scope.customers = [
                {
                    Id: 1,
                    FirstName: "No Data",
                    LastName: "loaded...",
                    Mail: "test@test.de"
                }];
            }
        ]);
});