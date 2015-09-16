angular.module('factories', []);

angular.module('factories').factory('factory', ['$http', function($http){
		return {
			getArticles: function(){
				return $http.get('/articles');
			},
			updateLikes: function(id, likes){
				likes++
				return $http.put('articles/likes', {id: id, likes: likes})}
		};

}]);


// need to use this factory in controller to update likes via like button click