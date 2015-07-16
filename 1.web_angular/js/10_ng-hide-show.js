angular.module('app', [])
    .controller('ng-hide-showCtrl', function ($scope) {

        // Initial scope
        $scope.isShow = false;

        $scope.hide = function () {
            $scope.isShow = false;
        }

        $scope.show = function () {
            $scope.isShow = true;
        }
            //สลับค่าไปมา
        $scope.toggle = function () {
            $scope.isShow = $scope.isShow ? false : true;
        }
    })

