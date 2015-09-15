angular.module('routesModule', ['ngRoute']);

angular.module('routesModule').config([ '$routeProvider', function($routeProvider){
  console.log("routes")
  $routeProvider.when('/', {
    controller: "myCtrl",
    templateUrl: '../views/index.html'
  })

}]);