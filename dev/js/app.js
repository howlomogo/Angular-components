angular.module('app', ['angular.filter', 'ngRoute'])

.config(function($routeProvider) {
	$routeProvider
    .when("/", {
        templateUrl : "./home.html",
        controller: "homeController"
    })
    .when("/results", {
        templateUrl : "./results.html",
        controller: "resultsController"
    })
    .when("/details/:id", {
    	templateUrl: "./details.html",
    	controller: "detailsController"
    });
})
.run(function($rootScope, $http) {
	$http({
		method: 'GET',
		url: 'http://localhost:7888/js/properties.json' // need to change
	}).then(function successCallback(response) {
		$rootScope.properties = response.data;

	}, function errorCallback(response) {

	});


	$rootScope.curFilters = {
		location: "hampshire"
	}
});