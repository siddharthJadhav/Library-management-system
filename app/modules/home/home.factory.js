(function() {
    'use strict';
    angular
        .module('seed')
        .factory('homeFactory', homeFactory);

    homeFactory.$inject = ['Restangular', 'homeUrl', '$enviornment'];

    /* @ngInject */
    function homeFactory(Restangular, homeUrl, $enviornment) {
        var exports = {
            getBookData: getBookData
        };


        return exports;

        ////////////////

        function getBookData() {
            var url = homeUrl[$enviornment.urlname].home;
            var postType = restangularParams('post', $enviornment.urlname);
            return Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl($enviornment.backendurl);
            })[postType.value](url)[postType.type]({
                status: status
            });
        }
    }
})();