angular.module('seed').constant('homeUrl', {
    "development": {
        "book": "api/book"

    },
    "mock": {
        "book": "assets/json/book.json",
        "user": "assets/json/user.json"
    }
});