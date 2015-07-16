angular.module('App',[])
    .controller('MainCtrl',function($scope){
        $scope.name ='NodeJS';
        $scope.showName = function(){
            alert('NodeJS');
        }
    })
    .controller('SecondCtrl',function($scope){
        $scope.name ='Anguler';
        $scope.showName = function(){
            alert($scope.name);
        }

    })
    .controller('ThreeCtrl',function($scope){
        $scope.name ="HTML5";
        $scope.showName = function (){
            alert($scope.name+' '+'Thodspon')
        }

    })