
var app = angular.module('starter', ['ionic', 'starter.controllers'])
    .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
        }
        });
    })
    .config(function($stateProvider, $urlRouterProvider,$httpProvider) {
        
        // Enable cross domain calls
        $httpProvider.defaults.useXDomain = true;

        // Remove the header used to identify ajax call  that would prevent CORS from working
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        
        $httpProvider.defaults.headers.common = 'Content-Type: application/json; charset=utf-8';
        
        $stateProvider
            .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
        })
        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
                }
            }
        })
        .state('app.nuevo', {
            url: '/nuevo',
            views: {
                'menuContent': {
                templateUrl: 'templates/nuevo.html'
                }
            }
        })
        .state('app.detalles', {
            url: '/detalles',
            views: {
                'menuContent': {
                templateUrl: 'templates/detalles.html'
                }
            }
        })
        .state('app.clientes', {
            url: '/clientes',
            views: {
                'menuContent': {
                templateUrl: 'templates/cliente.html',
                controller: 'ClienteController'
                }
            }
        })
        ;
        // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
