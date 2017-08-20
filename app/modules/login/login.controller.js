(function() {
    'use strict';

    angular
        .module('seed')
        .controller('LoginController', LoginController);


    function LoginController(loginFactory, errorService, loginError, $state, $http, $scope) {
        var login = this;
        // unresolved
        $scope.username;
        $scope.password;

        login.signIn = function() {
            login.loginUser = loginFactory.login().then(function(res) {
                    if ($scope.username === res.userName && $scope.password === res.password) {
                        console.log("login successfull", $scope.loginCredential);
                        errorService.error(loginError.login.success.loginsuccess, "success");
                        $state.go('home');
                    } else {
                        errorService.error(loginError.login.error.loginerror, "error");
                    }
                },
                function() {
                    errorService.error(loginError.login.error.loginerror, "error");
                    // $state.go('home');
                })

        }


    }
})();