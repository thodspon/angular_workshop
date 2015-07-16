angular.module('app', ['ui.router',
    /*เพิ่ม controller*/
    'app.controller.InfoCtrl'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'templates/main2.html',
                controller: function ($scope) {
                    $scope.Nodejsroiet = ['Thodspon', 'Utok', 'Thailand'];
                }
            })
            .state('about-info', {
                url: '/about',
                templateUrl: 'templates/info2.html',
                controller: 'InfoCtrl'
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

angular.module('app.controller.InfoCtrl', [])
    .controller('InfoCtrl', function ($scope) {
        $scope.yourname = 'Thodspon';
        $scope.showName = function () {
            alert($scope.yourname);
        }
    });

