'use strict';

describe('Controller: NavbarCtrl', function () {

    // load the controller's module
    beforeEach(module('aboutYouApp'));

    var NavbarCtrl,
        scope,
        $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/api/categories')
            .respond(categoryData);

        scope = $rootScope.$new();
        NavbarCtrl = $controller('NavbarCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of categories to the scope', function () {
        $httpBackend.flush();
        expect(scope.categories.length).toBe(2);
    });

});

// TEST DATA
var categoryData = [
    {
        "productCount": 0,
        "parentId": 0,
        "id": 74415,
        "name": "Frauen",
        "active": true,
        "position": 1,
        "subCats": [
            {
                "productCount": 0,
                "parentId": 74415,
                "id": 74417,
                "name": "Shirts",
                "active": true,
                "position": 3,
                "subCats": []
            },
            {
                "productCount": 0,
                "parentId": 74415,
                "id": 74419,
                "name": "Jeans",
                "active": true,
                "position": 1,
                "subCats": []
            },
            {
                "productCount": 0,
                "parentId": 74415,
                "id": 74421,
                "name": "Schuhe",
                "active": true,
                "position": 2,
                "subCats": []
            }
        ]
    },
    {
        "productCount": 0,
        "parentId": 0,
        "id": 74416,
        "name": "Männer",
        "active": true,
        "position": 2,
        "subCats": [
            {
                "productCount": 0,
                "parentId": 74416,
                "id": 74418,
                "name": "Shirts",
                "active": true,
                "position": 1,
                "subCats": []
            },
            {
                "productCount": 0,
                "parentId": 74416,
                "id": 74420,
                "name": "Jeans",
                "active": true,
                "position": 2,
                "subCats": []
            },
            {
                "productCount": 0,
                "parentId": 74416,
                "id": 74422,
                "name": "Schuhe",
                "active": true,
                "position": 3,
                "subCats": []
            }
        ]
    }
];