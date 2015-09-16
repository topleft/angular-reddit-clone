angular.module('directives', []).directive('articleTemplate', function(){
	return {
		restrict: 'A',
		scope: {
			article: '='
		},
		templateUrl: "views/article-template.html",
		controller: function($scope){
			// console.log($scope.article);
		}
	}
});