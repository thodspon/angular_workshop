angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'templates/main.html'
            })
            .state('about-info', {
                url: '/about',
                templateUrl: 'templates/info.html'
            })
            .state('body', {
                url: '/body',
                templateUrl: 'templates/body.html'
            })
            .state('about-contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html'
        });

    });
