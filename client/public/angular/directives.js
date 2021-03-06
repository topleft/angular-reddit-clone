angular.module('directives', []).directive('articleTemplate', function(){
	return {
		restrict: 'A',
		scope: {
			article: '='
		},
		templateUrl: "views/article-template.html",
		controller: function($scope, factory){
			$scope.updateLikes = function (){
				factory.updateLikes($scope.article._id, $scope.article.likes).success(function(data){
						console.log(data.dateCreated)
						$scope.article = data;

				});
			};
		}
	};
});

angular.module('directives').directive('commentTemplate', function(){
	return {
		restrict: 'A',
		scope: {
			comment: '='
		},
		templateUrl: 'views/comment-template.html',
		controller: function($scope, factory){
			$scope.show = false;
			$scope.getComments = function(){
				if ($scope.show === true)
					$scope.show = false;
				else $scope.show = true;
			}
		}
	};
});