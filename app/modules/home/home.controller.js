/*I am using mock json and we can't write mock json that's why i am using local storage for write data */

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
        home.loginUserDate;

        home.getLoginUserDate = function() {
            homeFactory.getLoginUserDate().then(function(res) {
                    home.loginUserDate = res;
                },
                function() {
                    errorService.error(loginError.login.error.loginerror, "error");
                    // $state.go('home');
                })

        }

        home.getBookData = function() {
            if (localStorage.getItem("BookJson")) {
                home.bookList = JSON.parse(localStorage.getItem("BookJson"));
            } else {
                homeFactory.getBookData().then(function(res) {
                    home.bookList = res;
                }, function(err) {})
            }
        }

        home.getUserData = function() {
            homeFactory.getUserData().then(function(res) {
                home.userList = res;
            }, function(err) {
                console.log(err);
            })
        }

        home.selectBook = function(book) {
            home.book = book;
            home.selectedUserName = null;
            home.returnDate = null;
        }

        home.issueBook = function() {
            home.book.user = home.selectedUserName;
            home.book.status = "Unavailable";
            home.book.issueDate = home.currentDate;
            home.book.returnDate = home.returnDate;
            home.book.type = "Issue";

            home.bookList[home.book.bookId - 1] = home.book
            localStorage.setItem("BookJson", JSON.stringify(home.bookList));
            home.SaveTransction(home.book);
        }

        home.returneBook = function() {
            home.book.user = {};
            home.book.status = "Available";
            home.book.issueDate = "";
            home.book.returnDate = "";
            home.book.type = "Return";

            home.bookList[home.book.bookId - 1] = home.book
            localStorage.setItem("BookJson", JSON.stringify(home.bookList));
            home.SaveTransction(home.book);
        }

        home.SaveTransction = function(transaction) {
            var list = []
            if (localStorage.getItem("transaction")) {
                list = JSON.parse(localStorage.getItem("transaction"));
                list.push(transaction);
                localStorage.setItem("transaction", JSON.stringify(list));
            } else {
                list.push(transaction);
                localStorage.setItem("transaction", JSON.stringify(list));
            }
        }


        home.getLoginUserDate();
        home.getBookData();
        home.getUserData();

    }
})();