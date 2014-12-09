'use strict';

describe('Controller: ProductSetCtrl', function () {

    // load the controller's module
    beforeEach(module('aboutYouApp'));

    var ProductSetCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ProductSetCtrl = $controller('ProductSetCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function () {
        expect(1).toEqual(1);
    });
});
