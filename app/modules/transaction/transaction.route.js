angular
    .module('seed').config(['$stateProvider', 'RouteHelpersProvider',
        function($stateProvider, helper) {
            'use strict';

            $stateProvider
                .state('transaction', {
                    url: '/transaction',
                    title: 'Single View',
                    templateUrl: 'modules/transaction/transaction.html',
                    controller: 'TransactionController',
                    controllerAs: 'transaction',
                    resolve: helper.resolveFor('modernizr', 'icons', 'toaster', 'sweetalert', 'ui.select', 'transaction')
                })



        }
    ]);