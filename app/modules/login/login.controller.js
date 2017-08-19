(function() {
    'use strict';

    angular
        .module('seed')
        .controller('LoginController', LoginController);


    function LoginController(loginFactory, errorService, loginError, $state, $http) {
        var login = this;
        // unresolved



        login.signIn = function() {
                console.log("inn")
                login.loginUser = loginFactory.login().then(function(res) {
                    console.log("login successfull", res);
                    $state.go('home');
                }, function() { errorService.error(loginError.login.error.loginerror, "error") })

                // loginFactory.login();

            }
            // errorService.error(loginError.login.error.loginerror, "success")

        // login.randomData = [];
        // for (var i = 0; i < 500; i++) {
        //     login.randomData.push({
        //         'name': 'check' + i
        //     })
        // }

        // var ctrl = this;

        // ctrl.phones = [];
        // ctrl.newPhone = {
        //     name: ''
        // };

        // ctrl.getPhones = function() {
        //     $http.get('/phones').then(function(response) {
        //         ctrl.phones = response.data;
        //     });
        // };

        // ctrl.addPhone = function(phone) {
        //     $http.post('/phones', phone).then(function() {
        //         ctrl.newPhone = { name: '' };
        //         return ctrl.getPhones();
        //     });
        // };

        // ctrl.getPhones();


    }
})();