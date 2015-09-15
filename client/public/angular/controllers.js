var app = angular.module('myApp', ['routesModule', 'factories']);

app.controller('myCtrl', ['$scope', 'factory', function($scope, factory){

  console.log("ctrl check");


}]);