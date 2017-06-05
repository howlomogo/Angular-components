angular.module('app').controller('resultsController', ['$scope', '$rootScope', '$location', '$window', function($scope, $rootScope, $location, $window) {

	$scope.rootscopecopy = $rootScope.test;

	$scope.curFilters = $rootScope.curFilters;

	$scope.navigationOpen = false;

	$scope.selectedProperty = 2;

	$scope.resultsOrder = 'cost';
	$scope.resultsAmount = "10";

	$scope.sleepsFilter = 2;

	$scope.date = 0;

	$scope.nights = 0;

	$scope.filteredAmount = 0;

	$scope.filterOptions = {
		costCb: {
			c0: true,
			c1: true,
			c2: true
		},
		featuresCb: {
			pets: false,
			wifi: false,
			swimming: false,
			washing: false,
			fireplace: false,
			hottub: false
		},
		bedroomsCb: {
			b1: true,
			b2: true,
			b3: true,
			b4: true,
			b5: true
		},
		ratingCb: {
			r1: true,
			r2: true,
			r3: true,
			r4: true,
			r5: true
		}
	}


	$scope.featureFilter = function(home) {
		var result = true;
		angular.forEach($scope.filterOptions.featuresCb, function(value, key) {
			if(($scope.filterOptions.featuresCb[key] === true) && (home.features[key] === false)) {
				result = false;
			}
		})

		return result;
	}


	$scope.bedroomFilter = function(home) {
		var bedrooms = "b"+home.bedrooms;

		if($scope.filterOptions.bedroomsCb[bedrooms] === true) {
			return true;
		}
		else {
			return false;
		}
	}

	$scope.getRating = function(num) {
	    return new Array(num);   
	}

	$scope.costFilter = function(home) {
		if((home.cost > 0 && home.cost < 100) && $scope.filterOptions.costCb.c0) {
			return true;
		}
		else if((home.cost > 99 && home.cost < 200) && $scope.filterOptions.costCb.c1) {
			return true;
		}
		else if((home.cost > 199 && home.cost < 300) && $scope.filterOptions.costCb.c2) {
			return true;
		}
		else {
			return false;
		}
	}

	$scope.ratingFilter = function(home) {
		var rating = "r"+home.rating;

		if($scope.filterOptions.ratingCb[rating] === true) {
			return true;
		}
		else {
			return false;
		}
	}


	$scope.gotoDetails = function(home) {
		$rootScope.curHome = home;
		$location.path('details');
	}

}]);