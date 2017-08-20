(function() {
    'use strict';

    angular
        .module('seed')
        .controller('transaction', transaction);

    transaction.$inject = ['$rootScope'];

    /* @ngInject */
    function transaction($rootScope) {
        var vm = this;
        vm.name = 'login';


        activate();

        ////////////////

        function activate() {}
    }
})();