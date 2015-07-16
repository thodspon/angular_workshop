angular.module('app', [])
    .controller('ng-filterCtrl', function ($scope) {
        $scope.people = [
            { name: 'Thodspon', sex: 1},
            { name: 'Mckie', sex: 1},
            { name: 'Yaya', sex: 2},
            { name: 'Coyote', sex: 2}
        ];
    })

    .filter('sexName', function () {
        return function (sex) {
            //short if
            return sex == '1' ? 'ชาย' : 'หญิง';
        }
    });
