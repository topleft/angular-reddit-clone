var app = angular.module('myApp', ['routesModule', 'factories', 'directives']);

app.controller('myCtrl', ['$scope', 'factory', function($scope, factory){

  $scope.articles;

  factory.getArticles()
    .success(function(data){
      $scope.articles = data;
    })
    
  $scope.sort = "title";

}]);

app.controller('myFormCtrl', ['$scope', 'factory', function($scope, factory){

  $scope.title = "";
  $scope.author = "";
  $scope.category = "";
  $scope.img = "";
  $scope.text = "";

  $scope.postArticle = function(){
    factory.postArticle( $scope.title,
                         $scope.author,
                         $scope.category,
                         $scope.img,
                         $scope.test )
    .success(function(){
      alert("Article Posted!");
    });
  };
}]);