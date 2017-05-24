angular.module('app', ['angular.filter'])

.controller('appcontroller', ['$scope', function($scope) {

	$scope.navigationOpen = false;
	$scope.blah = "blah";

	$scope.selectedProperty = 2;

	$scope.resultsOrder = 'town';

	$scope.locationFilter = "hampshire";


	$scope.getRating = function(num) {
	    return new Array(num);   
	}

	$scope.properties = [
		{
			"id" : 1,
			"name" : "Windmill Cottage Annex",
			"town": "cosham",
			"county": "hampshire",
			"cost": "300.00",
			"image": "assets/test-house.jpg",
			"sleeps": 4,
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
			"cost": "200.00",
			"image": "assets/test-house.jpg",
			"sleeps": 4,
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
			"town": "chichester",
			"county": "sussex",
			"cost": "400.00",
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
			"id" : 4,
			"name" : "Some Random Cottage",
			"town": "chichester",
			"county": "sussex",
			"cost": "400.00",
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