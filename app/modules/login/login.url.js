angular.module('seed').constant('loginUrl', {
    "development": {
        "login": "api/login"

    },
    "mock": {
        "login": "json/login.json"
    }
});