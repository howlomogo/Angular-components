angular.module('app', ['angular.filter', 'ngRoute', 'moment-picker', 'angularUtils.directives.dirPagination'])

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
        url: './js/properties.json' // need to change
		// url: 'http://localhost:7888/js/properties.json' // need to change
	}).then(function successCallback(response) {
		$rootScope.properties = response.data;

	}, function errorCallback(response) {

	});

    var dateToday = moment();
    var dateStart = moment();
    var dateEnd = moment().add(7, 'd');

    $rootScope.curFilters = {
        location: "",
        dates: {
            dateToday: dateToday,
            dateStart: dateStart,
            dateEnd: dateEnd
        },
        nights: $rootScope.nights
    }


    $rootScope.curFilters.nights = $rootScope.curFilters.dates.dateEnd.diff($rootScope.curFilters.dates.dateStart, 'days');


    $rootScope.changeLocation = function(town) {
        $rootScope.curFilters.location = town;

        //- null = All
        if(town === null) {
            return true;
        }

        else {
            return town;
        }
    }

    $rootScope.pickerChange = function() {
        
        //- convert to moment so we can get the difference.
        var start = moment($rootScope.curFilters.dates.dateStart);
        var end = moment($rootScope.curFilters.dates.dateEnd);

        $rootScope.curFilters.nights = end.diff(start, 'days');

    }









});