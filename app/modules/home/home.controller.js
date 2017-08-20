(function() {
    'use strict';

    angular
        .module('seed')
        .controller('HomeController', HomeController);

    function HomeController(homeFactory, errorService, homeError) {
        var home = this;
        // unresolved
        home.bookList;

        console.log("home");
        active();

        function active() {

            getBookData();


            function getBookData() {
                console.log("inn")
                homeFactory.getBookData().then(function(res) {
                    console.log("res : ", res);
                    home.bookList = res;
                }, function(err) {
                    console.log(err);
                })
            }

        }

    }
})();