angular.module('app').controller('detailsController', ['$scope', '$rootScope', '$window', '$location', '$routeParams', '$anchorScroll', function($scope, $rootScope, $window, $location, $routeParams, $anchorScroll) {

	$scope.cottage = {};

	$scope.getRating = function(num) {
	    return new Array(num);   
	}

	function init() {
		var propertyId = $routeParams.id;
		//- Could have passed object in directly but wanted to use routeParams
		for (var i = 0; i < $rootScope.properties.length; i++){
			if ($rootScope.properties[i].id == propertyId){
				$scope.cottage = $rootScope.properties[i];
			}
		}
	}

	$scope.formatDate = function(date) {
		var formattedDate = moment(date).format("Do MMM YYYY");
		return formattedDate;
	}

	$scope.scrollTo = function(id) {
		$location.hash(id);
		$anchorScroll();
	}

	init();
}]);