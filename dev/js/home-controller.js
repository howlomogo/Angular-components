angular.module('app').controller('homeController', ['$scope', '$rootScope', '$window', '$location', function($scope, $rootScope, $window, $location) {

	$scope.curFilters = $rootScope.curFilters;

	$scope.navigationOpen = false;

	$scope.date = 0;


	$scope.gotoResults = function(view) {
		$location.path(view);
	}
	
}]);