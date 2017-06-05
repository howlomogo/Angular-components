angular.module('app').controller('homeController', ['$scope', '$rootScope', '$window', '$location', function($scope, $rootScope, $window, $location) {

	$scope.curFilters = $rootScope.curFilters;

	$scope.navigationOpen = false;

	$scope.date = 0;


	$scope.gotoResults = function(view, locationFilter) {

		if(locationFilter) {
			$rootScope.curFilters.location = locationFilter
		}

		$location.path(view);
	}
	
}]);