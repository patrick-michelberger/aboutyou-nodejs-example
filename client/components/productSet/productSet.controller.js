'use strict';

angular.module('aboutYouApp')
    .controller('ProductSetCtrl', function ($scope, $window, productSet, $modal, $log, appService) {

        $scope.items = productSet.items;

        $scope.openAdditionalDataLayer = function (item, size) {

            var modalInstance = $modal.open({
                templateUrl: 'additionalLayer.html',
                controller: 'AdditionalLayerCtrl',
                size: size,
                resolve: {
                    product: function () {
                        return item;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });

        };

        $scope.removeItemFromSet = function (item, index) {
            $scope.items.splice(index, 1);
        };

        $scope.addItemsToBasket = function (items) {
            var currentApp = appService.getCurrentApp();
            console.log("items: ", items);
            //items, userId, appId, quantity, additionalData, callback


            $window.AY.addSetToBasket(items, currentApp.selected.id, currentApp.selected.id, 1, {"image_url" : "http://awesomeshit.ninja/wp-content/uploads/2014/11/grumpy-cat-no.jpg"}, function(error) {
                console.log("set added to basket.");
            });

        };

    });
