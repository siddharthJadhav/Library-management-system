(function() {
    'use strict';

    angular
        .module('seed')
        .controller('home', home);

    home.$inject = ['$rootScope'];

    /* @ngInject */
    function home($rootScope){
        var vm = this;
        vm.name = 'login';
            

        activate();

        ////////////////

        function activate() {
        }
    }
})();