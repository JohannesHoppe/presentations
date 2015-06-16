define(['angular', 'app/entityMetadata', 'breeze.angular'], function (angular, entityMetdata) {

    return angular.module('listing5', ['breeze.angular'])
        .controller('listing5Controller', [
            '$scope', 'breeze', function($scope, breeze) {

                breeze.config.initializeAdapterInstance('dataService', 'webApiOData', true);

                // Option A - vorab generierte Metadaten per breeze.js "EFContextProvider"
                /*
                var dataService = new breeze.DataService({
                    serviceName: '/odata',
                    hasServerMetadata: false
                });

                var metadataStore = new breeze.MetadataStore();
                metadataStore.importMetadata(JSON.stringify(entityMetdata));

                var manager = new breeze.EntityManager({
                    dataService: dataService,
                    metadataStore: metadataStore
                });
                */

                // Option B - Metadaten per breeze.js "EdmBuilder"
                var manager = new breeze.EntityManager('/odataFixed');

                new breeze.EntityQuery()
                    .using(manager)
                    .from("Customers")
                    .where("Id", "eq", 42)
                    .expand("Invoices")
                    .execute()
                    .then(function(data) {
                        $scope.customer = data.results.length ? data.results[0] : null;
                    });
            }
        ]);
});