'use strict';

describe('Controller: ProductCanvasCtrl', function () {

  // load the controller's module
  beforeEach(module('aboutYouApp'));

  var ProductCanvasCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductCanvasCtrl = $controller('ProductCanvasCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
