(function() {
    'use strict';

    angular
        .module('seed')
        .controller('HomeController', HomeController);

    function HomeController(homeFactory, errorService, homeError) {
        var home = this;
        // unresolved
        home.bookList;
        home.book;
        home.userList;
        home.currentDate = new Date();

        home.getBookData = function() {
            console.log("inn")
            homeFactory.getBookData().then(function(res) {
                console.log("res : ", res);
                home.bookList = res;
            }, function(err) {
                console.log(err);
            })
        }

        home.getUserData = function() {
            console.log("inn")
            homeFactory.getUserData().then(function(res) {
                console.log("res : ", res);
                home.userList = res;
                console.log("UserList : ", home.userList);
            }, function(err) {
                console.log(err);
            })
        }

        home.selectBook = function(book) {
            home.book = book;
            home.selectedUserName = null;
        }


        home.getBookData();
        home.getUserData();

    }
})();