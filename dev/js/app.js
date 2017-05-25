var app = angular.module('app', ['angular.filter']);

app.controller('appcontroller', ['$scope', '$http', function($scope, $http) {

	$http({
		method: 'GET',
		url: 'http://localhost:7888/js/properties.json' // need to change
	}).then(function successCallback(response) {
		// console.log(response);
		$scope.properties = response.data;
	}, function errorCallback(response) {
		// console.log("not blah");
	});

	$scope.navigationOpen = false;

	$scope.selectedProperty = 2;

	$scope.resultsOrder = 'town';

	$scope.locationFilter = "hampshire";
	$scope.sleepsFilter = 2;


	$scope.costCheckboxs = {
		c0: true,
		c1: true,
		c2: true
	};

	$scope.ratingCheckboxs = {
		r0: true,
		r1: true,
		r2: true,
		r3: true,
		r4: true
	};

	// $scope.searchFilters

	$scope.getRating = function(num) {
	    return new Array(num);   
	}

	$scope.costFilter = function(home) {
		// console.log(home.cost);
		if((home.cost > 0 && home.cost < 100) && $scope.costCheckboxs.c0) {
			return true;
		}
		else if((home.cost > 99 && home.cost < 200) && $scope.costCheckboxs.c1) {
			return true;
		}
		else if((home.cost > 199 && home.cost < 300) && $scope.costCheckboxs.c2) {
			return true;
		}
		else {
			return false;
		}
	}

	$scope.ratingFilter = function(home, blah) {
		console.log(blah);
		// console.log(home.cost);
		if((home.rating > 0 && home.rating < 3) && $scope.ratingCheckboxs.r0) {
			return true;
		}
		else if((home.rating > 2 && home.rating < 5) && $scope.ratingCheckboxs.r1) {
			return true;
		}
		else if((home.rating > 4 && home.rating < 7) && $scope.ratingCheckboxs.r2) {
			return true;
		}
		else if((home.rating > 6 && home.rating < 9) && $scope.ratingCheckboxs.r3) {
			return true;
		}
		else if(home.rating > 8 && $scope.ratingCheckboxs.r4) {
			return true;
		}
		else {
			return false;
		}
	}

}]);


// app.filter('costFilter', function() {
// 	return function(home) {

// 		if(cost === "310") {
// 			return true;
// 		}
// 		else {
// 			return false;
// 		}
// 		// var output = "310";}
// 		// Do filter work here
// 		console.log(output);
// 		// return output;
// 	}
// });