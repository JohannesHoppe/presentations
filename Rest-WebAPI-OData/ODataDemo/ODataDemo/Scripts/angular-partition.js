// Extracted from Angular Components
// https://github.com/m59peacemaker/angular-pmkr-components
define(['angular'], function (angular) {

    // Readme:
    // https://github.com/m59peacemaker/angular-pmkr-components/tree/master/src/services/memoize
    angular.module('memoize', [])
        .factory('memoize', [
            function() {

                function service() {
                    return memoizeFactory.apply(this, arguments);
                }

                function memoizeFactory(fn) {

                    var cache = {};

                    function memoized() {

                        var args = [].slice.call(arguments);

                        var key = JSON.stringify(args);

                        if (cache.hasOwnProperty(key)) {
                            return cache[key];
                        }

                        cache[key] = fn.apply(this, arguments);

                        return cache[key];

                    }

                    return memoized;

                }

                return service;

            }
        ]);

    // Readme:
    // https://github.com/m59peacemaker/angular-pmkr-components/tree/master/src/services/filterStabilize
    angular.module('filterStabilize', [
            'memoize'
        ])
        .factory('filterStabilize', [
            'memoize',
            function(memoize) {

                function service(fn) {

                    function filter() {
                        var args = [].slice.call(arguments);
                        // always pass a copy of the args so that the original input can't be modified
                        args = angular.copy(args);
                        // return the `fn` return value or input reference (makes `fn` return optional)
                        var filtered = fn.apply(this, args) || args[0];
                        return filtered;
                    }

                    var memoized = memoize(filter);

                    return memoized;

                }

                return service;

            }
        ]);


    // Readme:
    // https://github.com/m59peacemaker/angular-pmkr-components/tree/master/src/filters/partition
    angular.module('partition', [
            'filterStabilize'
        ])
        .filter('partition', [
            'filterStabilize',
            function(stabilize) {

                var filter = stabilize(function(input, size) {

                    if (!input || !size) {
                        return input;
                    }

                    var newArr = [];

                    for (var i = 0; i < input.length; i += size) {
                        newArr.push(input.slice(i, i + size));
                    }

                    return newArr;

                });

                return filter;

            }
        ]);

});