angular.module('app', ['angular.filter', 'ngRoute', 'moment-picker'])

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
        location: "hampshire",
        nights: $rootScope.nights
    }



    $rootScope.dateToday = moment();
    $rootScope.dateStart = moment();
    $rootScope.dateEnd = moment().add(7, 'd');

    $rootScope.curFilters.nights = $rootScope.dateEnd.diff($rootScope.dateStart, 'days');

    $rootScope.pickerChange = function() {
        
        //- convert to moment so we can get the difference.
        var start = moment($rootScope.dateStart);
        var end = moment($rootScope.dateEnd);

        $rootScope.curFilters.nights = end.diff(start, 'days');

    }









});