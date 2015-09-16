angular.module('routesModule', ['ngRoute']);

angular.module('routesModule').config([ '$routeProvider', function($routeProvider){
  console.log("routes")
  $routeProvider
  	.when('/', {
    	templateUrl: '../views/index.html'
  	})
  	.when('/form', {
    	controller: "myFormCtrl",
    	templateUrl: '../views/form.html'
  	})

}]);