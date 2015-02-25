'use strict';

describe('Controller: IframeCtrl', function () {

  // load the controller's module
  beforeEach(module('aboutYouApp'));

  var IframeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IframeCtrl = $controller('IframeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
