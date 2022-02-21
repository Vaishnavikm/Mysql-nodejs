

var myApp = angular.module('myApp', [])
myApp.controller("myCtrl", ($scope, $http) => {
    $http.get('http://127.0.0.1:9000/customer')
        .success(function(response) {
            $scope.sqlData = response
        })
    console.log("Data retrieved");
})