(function() {
    'use strict';
    angular
        .module('seed')
        .factory('loginFactory', loginFactory);

    loginFactory.$inject = ['Restangular', 'loginUrl', '$enviornment', '$http'];

    /* @ngInject */
    function loginFactory(Restangular, loginUrl, $enviornment, $http) {


        var exports = {
            login: login
        };

        return exports;

        ////////////////

        function login() {
            var url = loginUrl[$enviornment.urlname].login;
            var postType = restangularParams('get', url);
            return Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl($enviornment.backendurl);
            })[postType.value](url)[postType.type]({
                status: status
            });
        }



    }
})();