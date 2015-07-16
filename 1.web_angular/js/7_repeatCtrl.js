angular.module('App',[])
    .controller('MainCtrl',function($scope){
        /* var obj = {id:1 ,name:'NodeJS 2'};*/
        $scope.name  =['NodeJS','Anguler','Yii2','PHP'];
        $scope.name1 =[
            {id:1 ,name:'Angular 1'},
            {id:2 ,name:'Angular 2'},
            {id:3 ,name:'Angular 3'}
        ];
    })
