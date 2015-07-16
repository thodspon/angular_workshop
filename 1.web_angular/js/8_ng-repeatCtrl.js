angular.module('app', [])
    .controller('Ng-repeatCtrl', function ($scope) {
        // Array
        $scope.nodejs = ['NodeJS', 'Angular', 'HTML5'];

        // Array with ojbect
        $scope.Nodejsroiet = [
            { id: 1, name: 'Nut' },
            { id: 2, name: 'Mckie' },
            { id: 3, name: 'Angular' },
            { id: 4, name: 'HTML5' },
            { id: 5, name: 'Yii2' }
        ];
    });

