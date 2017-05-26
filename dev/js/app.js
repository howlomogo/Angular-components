var app = angular.module('app', ['angular.filter']);

app.controller('appcontroller', ['$scope', '$http', function($scope, $http) {

	$http({
		method: 'GET',
		url: 'http://localhost:7888/js/properties.json' // need to change
	}).then(function successCallback(response) {
		$scope.properties = response.data;

	}, function errorCallback(response) {

	});

	$scope.navigationOpen = false;

	$scope.selectedProperty = 2;

	$scope.resultsOrder = 'town';

	$scope.sleepsFilter = 2;

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

	// $scope.locationFilter = function(home) {

	// }"hampshire";

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

}]);