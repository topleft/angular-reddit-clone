var app = angular.module('myApp', ['routesModule', 'factories', 'directives']);

app.controller('myCtrl', ['$scope', 'factory', function($scope, factory){


  $scope.news = {};
  $scope.sort = "title";

  // init on load
  loadArticles();

  function loadArticles () {
      factory.getArticles()
        .success(function(data){
        /* METHOD 1 */
        // $scope.articles = data;

        /* METHOD 2 */
          $scope.news.articles = data;
        });
  }
}]);

app.controller('myFormCtrl', ['$scope', '$location', 'factory', function($scope, $location, factory){

  $scope.title = "";
  $scope.author = "";
  $scope.category = "";
  $scope.img = "";
  $scope.text = "";

  $scope.postArticle = function() {
    factory.postArticle(
        $scope.title,
        $scope.author,
        $scope.category,
        $scope.img,
        $scope.test)
            .success(function(response){
                /* METHOD 1 */
                // $scope.$parent.articles.push(response[0]);

                /* METHOD 2 */
                $scope.news.articles.push(response[0]);
            $location.url('/');
        });
    };
}]);


// METHOD 1:
// It finally struck me what was going on and this was a quick and dirty way to test it out.
// If you put a breakpoint on factory.getArticles() and refresh the page on the Form page
// you'll see that the data is sent down for $scope.articles while not at the "/" route. Looking at the html we
// can then confirm that the controllers are nested, making the scope in your myFormCtrl a
// child scope of myCtrl. So by puhing data to $scope.articles in myFormCtrl we are not accessing
// the same scope that the ng-repeat is using in myCtrl so we get no updates.

// The $location.url('/') is only refreshing the view, it's not calling for the controller
// to be reinitialized so our factory.getArticles() is never called. With the new methods that's
// ok becasue we are now pushing our array into the parent scope where the articles live.


// METHOD 2:
// This is more desireable because it's easier to keep track of what scope you are accessing
// in parent/child scopes and contorllers and more importantly your getting prototypal inheritance.
// This becomes helpfully when you have multilpe nested scopes. However hopefully you will see that
// nesting controllers and scopes can turn a simple problem into a mess quickly.
//
// Also note that we had to update the model on the index.html to refelect the new $scope.news.articles
//
// Take a look at about 2-3 min of this:
//  https://www.youtube.com/watch?v=ZhfUv0spHCY&feature=youtu.be&t=30m
//
//  Also the first block covers this as well:
//  https://github.com/angular/angular.js/wiki/Understanding-Scopes#ng-repeat