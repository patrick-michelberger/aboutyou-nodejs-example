'use strict';

describe('Service: productSet', function () {

    // load the service's module
    beforeEach(module('aboutYouApp'));

    // instantiate service
    var productSet;
    beforeEach(inject(function (_productSet_) {
        productSet = _productSet_;
    }));

    it('should do something', function () {
        expect(!!productSet).toBe(true);
    });

});
