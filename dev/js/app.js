angular.module('app', [])

.controller('appcontroller', ['$scope', function($scope) {

	$scope.navigationOpen = false;
	$scope.blah = "blah";

	$scope.selectedProperty = 2;

	$scope.resultsOrder = 'town';

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
			"rating": 4
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
			"rating": 4
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
			"rating": 4
		},
		{
			"id" : 4,
			"name" : "Garden Shed",
			"town": "chichester",
			"county": "sussex",
			"cost": "400.00",
			"image": "assets/test-house.jpg",
			"sleeps": 4,
			"bedrooms": 2,
			"rating": 4
		}
	]
}]);