// Main angular module
angular.module('app', ['lumx', 'ui.map'])
    .controller('WelcomeCtrl', function ($scope) {

        $scope.mapOptions = {
            center: new google.maps.LatLng(16.047586912269598, 103.65264773368835),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };

        $scope.markers = [];

        $scope.addMarker = function (event, params) {
            //console.log(params[0].latLng);
            $scope.lat = params[0].latLng.A;
            $scope.lng = params[0].latLng.F;

            // clear map
            $scope.clearMarker();
            // set marker
            $scope.markers.push(new google.maps.Marker({
                map: $scope.myMap,
                position: params[0].latLng,
                animation: google.maps.Animation.DROP
            }));
        };

        $scope.doClearMarker = function (map) {
            for (var i = 0; i < $scope.markers.length; i++) {
                $scope.markers[i].setMap(map);
            }
        };

        $scope.clearMarker = function () {
            $scope.doClearMarker(null);
        };
    });

