'use strict';

var apps = [
    {
        "id" : "100",
        "token" : "3ed93394c2b5ebd12c104b177b928ad0",
        "name" : "Sample App"
    },
    {
        "id" : "98",
        "token" : "aef0a8e7cc69f30d08cc390c6d349b34",
        "name" : "Testapp - 98"
    },
    {
        "id" : "139",
        "token" : "7c6536464c3c13da499adb6b69afe2b6",
        "name" : "ABOUT YOU [DE]"
    },
    {
        "id" : "200",
        "token" : "2b27003f2930970a896b02447ae620f2",
        "name" : "ABOUT YOU [AT]"
    },
    {
        "id" : "53",
        "token" : 'h]vWu6PAuz7sfdYNZ5VqkfM^93W0k{3m',
        "name" : "EDITED"
    },
    {
        "id" : "318",
        "token" : "f6bc936d12f08e090ed909ffa4e577e4",
        "name" : "Testapp-NeuerKategoriebaum"
    }
];

var getTokenById = function(id) {
    for(var i = 0; i < apps.length; i++) {
        if(id === apps[i].id) {
            return apps[i].token;
        }
    }
    // default app
    return apps[0].token;
};

var checkValidId = function(id) {
    for (var i = 0; i < apps.length; i++) {
        if (id === apps[i].id) {
            return true;
        }
    }
    // default app
    return false;
};

module.exports = {
    data : apps,
    getTokenById : getTokenById,
    checkValidId : checkValidId
};
