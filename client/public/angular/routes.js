angular.module('routesModule', ['ngRoute']);

angular.module('routesModule').config([ '$routeProvider', function($routeProvider){
  $routeProvider
  	.when('/', {
    	templateUrl: '../views/index.html'
  	})
  	.when('/form', {
    	controller: "myFormCtrl",
    	templateUrl: '../views/form.html'
  	});
}]);