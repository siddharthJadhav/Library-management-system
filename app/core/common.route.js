angular
        .module('seed').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider',
function ($stateProvider, $locationProvider, $urlRouterProvider, helper) {
        'use strict';

        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // default route
        $urlRouterProvider.otherwise('/app/login');

        // 
        // Application Routes
        // -----------------------------------   
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'common/views/app.html'
            })
            .state('app.submenu', {
                url: '/submenu',
                title: 'Submenu',
                templateUrl: 'common/views/submenu.html'
            })
            // 
            // CUSTOM RESOLVES
            //   Add your own resolves properties
            //   following this object extend
            //   method
            // ----------------------------------- 
            // .state('app.someroute', {
            //   url: '/some_url',
            //   templateUrl: 'path_to_template.html',
            //   controller: 'someController',
            //   resolve: angular.extend(
            //     helper.resolveFor(), {
            //     // YOUR RESOLVES GO HERE
            //     }
            //   )
            // })
        ;


}]);
 
 
 
 
