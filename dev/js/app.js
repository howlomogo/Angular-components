var app = angular.module('app', ['angular.filter']);

app.controller('appcontroller', ['$scope', function($scope) {

	$scope.navigationOpen = false;

	$scope.selectedProperty = 2;

	$scope.resultsOrder = 'town';

	$scope.locationFilter = "hampshire";
	$scope.sleepsFilter = 2;


	$scope.costCheckboxs = {
		one: false,
		two: false,
		three: false
	};

	$scope.price100 = false;
	$scope.price200 = false;

	$scope.getRating = function(num) {
	    return new Array(num);   
	}

	$scope.costFilter = function(home) {
		console.log(home.cost);
		if((home.cost > 0 && home.cost < 100) && $scope.costCheckboxs.one) {
			return true;
		}
		if((home.cost > 99 && home.cost < 200) && $scope.costCheckboxs.two) {
			return true;
		}
		if(home.cost === 300) {
			return true;
		}
		else {
			return false;
		}
	}

	$scope.properties = [
		{
			"id" : 1,
			"name" : "Windmill Cottage Annex",
			"town": "cosham",
			"county": "hampshire",
			"cost": 100,
			"image": "assets/test-house.jpg",
			"sleeps": 1,
			"bedrooms": 2,
			"rating": 4,
			"features": {
				"pets": true,
				"wifi": true,
				"swimming": false,
				"washing": true,
				"fireplace": false,
				"hottub": true
			}
		},
		{
			"id" : 2,
			"name" : "Ultimate Cottage",
			"town": "newquay",
			"county": "cornwall",
			"cost": 200,
			"image": "assets/test-house.jpg",
			"sleeps": 2,
			"bedrooms": 2,
			"rating": 2,
			"features": {
				"pets": true,
				"wifi": false,
				"swimming": true,
				"washing": true,
				"fireplace": false,
				"hottub": false
			}
		},
		{
			"id" : 3,
			"name" : "Some Random Cottage",
			"town": "blahland",
			"county": "northumberland",
			"cost": 100,
			"image": "assets/test-house.jpg",
			"sleeps": 3,
			"bedrooms": 2,
			"rating": 4,
			"features": {
				"pets": false,
				"wifi": true,
				"swimming": true,
				"washing": true,
				"fireplace": false,
				"hottub": true
			}
		},
		{
			"id" : 4,
			"name" : "Some Random Cottage",
			"town": "newport",
			"county": "wales",
			"cost": 200,
			"image": "assets/test-house.jpg",
			"sleeps": 4,
			"bedrooms": 2,
			"rating": 4,
			"features": {
				"pets": false,
				"wifi": true,
				"swimming": true,
				"washing": true,
				"fireplace": false,
				"hottub": true
			}
		},
		{
			"id" : 5,
			"name" : "Some Random Cottage",
			"town": "scotland",
			"county": "scotland",
			"cost": 300,
			"image": "assets/test-house.jpg",
			"sleeps": 4,
			"bedrooms": 2,
			"rating": 4,
			"features": {
				"pets": false,
				"wifi": true,
				"swimming": true,
				"washing": true,
				"fireplace": false,
				"hottub": true
			}
		}
	]
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