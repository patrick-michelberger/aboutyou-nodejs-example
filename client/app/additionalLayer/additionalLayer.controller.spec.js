'use strict';

describe('Controller: AdditionalLayerCtrl', function () {

  // load the controller's module
  beforeEach(module('aboutYouApp'));

  var AdditionalLayerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdditionalLayerCtrl = $controller('AdditionalLayerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
