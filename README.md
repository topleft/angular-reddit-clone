### Angular App Conversion

#### Create Folders and Files

Inside ./Client/Public create these directories/files:
* angular
  * controllers.js
  * routes.js
  * factories.js
  * directives.js
  * filters.js
* views
 * layout.html
 * index.html
 * error.html

Inside layout.html add:

```html

<!DOCTYPE html>
<html ng-app='myApp'>
  <head>
    <meta charset="utf-8">
    <title>{{ title }}</title>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css">
  </head>
  <body>

    <div class="container">
      <div ng-view></div>
    </div>

    <script type="text/javascript" src="//code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular-route.min.js"></script>

  <script type="text/javascript" src="../angular/routes.js"></script>
  <script type="text/javascript" src="../angular/factories.js"></script>
  <script type="text/javascript" src="../angular/controllers.js"></script>
  <script type="text/javascript" src="../angular/directives.js"></script>
  </body>
</html>

```

#### Changes to app.js

Open app.js.

##### Essestials
* Find where **main routes** are set with the keyword `use`. Add this:

```js
app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../client/public/views/', 'layout.html'));
});
```
This code is a route handler. It serves up the specified html file when the page is loaded. From here the anguler routes will take over. We no longer have any need for res.renders or res.sends from the back end. Anything we do from the back end will be API routes serving up json to API calls from our angular factory.

##### Optional
You can also get rid of swig, we won't be needing it.


#### Setting Up Angular Files

Open up **controller.js**. Add:

```js
var app = angular.module('myApp', ['routesModule', 'factories', 'directives']);

app.controller('myCtrl', ['$scope', 'factory', function($scope, factory){

  console.log("ctrl check");


}]);
```

Open up **routes.js**. Add:

```js
angular.module('routesModule', ['ngRoute']);

angular.module('routesModule').config([ '$routeProvider', function($routeProvider){
  console.log("routes")
  $routeProvider.when('/', {
    controller: "myCtrl",
    templateUrl: '../views/index.html'
  })

}]);
```

Open up **factories.js**

```js
angular.module('factories', []);

angular.module('factories').factory('factory', ['$http', function($http){


}]);
```

Open up **directives.js**

```js
```





