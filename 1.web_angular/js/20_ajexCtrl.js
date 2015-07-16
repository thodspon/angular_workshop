angular.module('app', [])
    .controller('WelcomeCtrl', function ($scope, WelcomeServ) {

        $scope.isLoading = false;
        $scope.name= false;


        $scope.getUser = function () {
            $scope.isLoading = true;

            $scope.name='แสดงรายชื่อ';
            WelcomeServ.getUser()
                .then(function (data) {
                    $scope.users = data;
                    $scope.isLoading = false;
                }, function (err) {
                    console.log(err);
                    $scope.isLoading = false;
                });
        }
    })
    .factory('WelcomeServ', function ($http, $q) {
        // api: http://jsonplaceholder.typicode.com
        return {
            getUser: function () {
                var url = 'http://jsonplaceholder.typicode.com/comments';
                var q = $q.defer();
                /*
                 $http.post(url, {id: xx, name: yyyy}).success().error();

                 var options = {
                 url: 'http://...',
                 method: 'POST',
                 data: {
                 id: xx,
                 name: 'yyyy'
                 }
                 };

                 $http(options)
                 .success()
                 .error()
                 */

                $http.get(url)
                    .success(function (data) {
                        q.resolve(data);
                    })
                    .error(function (data, status) {
                        q.reject(status);
                    });

                return q.promise;
            }
        }
    });

