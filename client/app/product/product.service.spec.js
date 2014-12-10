'use strict';

describe('Service: product', function () {

  // load the service's module
  beforeEach(module('aboutYouApp'));

  // instantiate service
  var product;
  beforeEach(inject(function (_productService_) {
    product = _productService_;
  }));

  it('should do something', function () {
    expect(!!product).toBe(true);
  });

});
