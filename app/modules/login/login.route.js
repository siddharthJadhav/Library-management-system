angular
    .module('seed').config(['$stateProvider', 'RouteHelpersProvider',
        function($stateProvider, helper) {
            'use strict';

            $stateProvider
                .state('app.login', {
                    url: '/login',
                    title: 'Single View',
                    templateUrl: 'modules/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'login',
                    resolve: helper.resolveFor('modernizr', 'icons', 'toaster', 'sweetalert', 'ui.select', 'login')
                })



        }
    ]);