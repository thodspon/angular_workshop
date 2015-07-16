angular.module('app', [])
    .controller('fatoryCtrl', function ($scope, fatoryServ) {
        $scope.showName = function () {
            // Show name
            var fullname = fatoryServ.getFullname($scope.firstName, $scope.lastName);

            alert('แสดงชื่อ'+' '+fullname);
        }
    })

    // factory(factoryName, function () { ... })

    .factory('fatoryServ', function () {
        return {
            getFullname: function (firstName, lastName) {
                return firstName + ' ' + lastName;
            }
        }
    })
