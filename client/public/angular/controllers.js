var app = angular.module('myApp', ['routesModule', 'factories', 'directives']);

app.controller('myCtrl', ['$scope', 'factory', function($scope, factory){

	// $scope.articles;

  factory.getArticles()
    .success(function(data){
      console.log(data);
      $scope.articles = data;
    })




  // [{
  //   title : 'More Than Enough',
  //   author: 'Bo Jackson',
  //   category: 'Sports',
  //   img: 'path/to/img/pic.img',
  //   text: "Fashion axe before they sold out sartorial occupy, gastropub Blue Bottle photo booth hoodie 90's fap. Before they sold out slow-carb keffiyeh Intelligentsia letterpress, seitan cronut put a bird on it swag. Bitters narwhal single-origin coffee iPhone. Irony migas flannel gastropub pour-over. Lomo Portland four loko, sartorial Pinterest McSweeney's freegan. Master cleanse Austin street art hella cardigan, yr meggings umami lumbersexual ugh Intelligentsia readymade Helvetica normcore wayfarers. Tumblr plaid kale chips quinoa polaroid.",
  //   likes: 10,
  //   comments: "Comment Comment Comment, Comment Comment Comment. Comment Comment Comment, Comment Comment Comment, Comment Comment Comment."
  // }];


 

  console.log("ctrl check");


}]);