(function() {
    'use strict';
    angular
        .module('seed')
        .factory('transactionFactory', transactionFactory);

    transactionFactory.$inject = ['Restangular', 'transactionUrl', '$enviornment'];

    /* @ngInject */
    function transactionFactory(Restangular, transactionUrl, $enviornment) {
        var exports = {
            getLoginUserDate: getLoginUserDate
        };


        return exports;

        ////////////////

        function getLoginUserDate() {
            var url = transactionUrl[$enviornment.urlname].login;
            var postType = restangularParams('get', url);
            return Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl($enviornment.backendurl);
            })[postType.value](url)[postType.type]({
                status: status
            });
        }

    }
})();