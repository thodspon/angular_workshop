angular.module('app', [])
    .directive('user', function () {
        return {
            restrict: 'AECM', //E = element, A = attribute, C = class
            replace: 'true',
            template: '<h3>Hello, {{ firstName }} {{ lastName }}</h3>',
            scope: {
                firstName: '@',
                lastName: '@'
            }
        };
    })

