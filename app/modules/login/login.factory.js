(function() {
    'use strict';
    angular
        .module('seed')
        .factory('loginFactory', loginFactory);

    loginFactory.$inject = ['Restangular', 'loginUrl', '$enviornment', '$http'];

    /* @ngInject */
    function loginFactory(Restangular, loginUrl, $enviornment, $http) {
        var ctrl = this;

        ctrl.phones = [];
        ctrl.newPhone = {
            name: ''
        };
        var exports = {
            login: login

        };


        return exports;

        ////////////////

        function login() {
            var url = loginUrl[$enviornment.urlname].login;
            // var url = loginUrl["mock"].login;
            var postType = restangularParams('get', url);
            return Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl($enviornment.backendurl);
                // RestangularConfigurer.setBaseUrl("");
            })[postType.value](url)[postType.type]({
                status: status
            });
        }

        // function login() {
        //     // this.addLogin();
        //     $http.get('/phones').then(function(response) {
        //         ctrl.phones = response.data;
        //     });
        // };

        // function addLogin(phone) {
        //     $http.post('/phones', { name: 'phone1' }).then(function() {
        //         ctrl.newPhone = { name: '' };
        //         return ctrl.getPhones();
        //     });
        // };

        // ctrl.getPhones();

    }
})();