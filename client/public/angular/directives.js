angular.module('directives', ['factories']).directive('articleTemplate', function(){
	return {
		restrict: 'A',
		scope: {
			article: '='
		},
		templateUrl: "views/article-template.html",
		controller: function($scope, factory){
			$scope.updateLikes = function (){
				factory.updateLikes($scope.article._id, $scope.article.likes).success(function(data){
						$scope.article = data;
				});
			};
			// console.log($scope.article);
		}
	};
});