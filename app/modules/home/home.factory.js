(function() {
    'use strict';
    angular
        .module('seed')
        .factory('homeFactory', homeFactory);

    homeFactory.$inject = ['Restangular', 'homeUrl', '$enviornment'];

    /* @ngInject */
    function homeFactory(Restangular, homeUrl, $enviornment) {
        var exports = {
            getBookData: getBookData,
            getUserData: getUserData,
            getLoginUserDate: getLoginUserDate
        };


        return exports;

        ////////////////

        function getBookData() {
            var url = homeUrl[$enviornment.urlname].book;
            var postType = restangularParams('post', $enviornment.urlname);
            return Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl($enviornment.backendurl);
            })[postType.value](url)[postType.type]({
                status: status
            });
        }

        function getUserData() {
            var url = homeUrl[$enviornment.urlname].user;
            var postType = restangularParams('post', $enviornment.urlname);
            return Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl($enviornment.backendurl);
            })[postType.value](url)[postType.type]({
                status: status
            });
        }

        function getLoginUserDate() {
            var url = homeUrl[$enviornment.urlname].login;
            var postType = restangularParams('get', url);
            return Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl($enviornment.backendurl);
            })[postType.value](url)[postType.type]({
                status: status
            });
        }
    }
})();