'use strict';

describe('Service: appIdInterceptor', function () {

  // load the service's module
  beforeEach(module('aboutYouApp'));

  // instantiate service
  var appIdInterceptor;
  beforeEach(inject(function (_appIdInterceptor_) {
    appIdInterceptor = _appIdInterceptor_;
  }));

  it('should do something', function () {
    expect(!!appIdInterceptor).toBe(true);
  });

});
