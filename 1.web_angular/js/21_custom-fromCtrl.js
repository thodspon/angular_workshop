angular.module('app', [])
    .controller('WelcomeCtrl', function ($scope) {
        $scope.fruits = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Banana'},
            {id: 3, name: 'Orange'}
        ];

        $scope.setData = function () {
            $scope.scale = 50;
            $scope.rd = 1;
            $scope.chkMe = true;
            $scope.selectedItem = {id: 2, name: 'Banana'};
        }
    })
