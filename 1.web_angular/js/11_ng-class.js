/**
 * Created by DangerouS on 16/7/2558.
 */

angular.module('app', [])
    .controller('ng-classCtrl', function ($scope) {

        $scope.danger = true;
        $scope.className = ['red','blue','green','black'];

        $scope.clearClass = function () {
            $scope.danger = false;
        }
    });

