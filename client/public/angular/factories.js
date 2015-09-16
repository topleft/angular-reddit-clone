angular.module('factories', []);

angular.module('factories').factory('factory', ['$http', function($http){
		return {
			getArticles: function(){
				return $http.get('/');
			},
			updateLikes: function(id, likes){
				$http.put('/likes', {id: id, likes: likes})}
		};

}]);


// need to use this factory in controller to update likes via like button click