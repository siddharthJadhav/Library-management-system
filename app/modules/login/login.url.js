angular.module('seed').constant('loginUrl', {
    "development": {
        "login": "api/login"

    },
    "mock": {
        "login": "login/json/login.json"
    }
});