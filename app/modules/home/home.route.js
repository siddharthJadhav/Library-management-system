angular
    .module('seed').config(['$stateProvider', 'RouteHelpersProvider',
        function($stateProvider, helper) {
            'use strict';

            $stateProvider
                .state('home', {
                    url: '/home',
                    title: 'Single View',
                    templateUrl: 'modules/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'home',
                    resolve: helper.resolveFor('modernizr', 'icons', 'toaster', 'sweetalert', 'ui.select', 'home')
                })



        }
    ]);