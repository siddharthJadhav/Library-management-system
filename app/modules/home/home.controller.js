(function() {
    'use strict';

    angular
        .module('seed')
        .controller('HomeController', HomeController);

    function HomeController(homeFactory, errorService, homeError) {
        var home = this;
        // unresolved

        home.signIn = function() {
            console.log("inn")
            home.homeUser = homeFactory.home().then(function() {}, function() {})


        }
        errorService.error(homeError.home.error.homeerror, "success")

        home.randomData = [];
        for (var i = 0; i < 500; i++) {
            home.randomData.push({
                'name': 'check' + i
            })
        }


    }
})();