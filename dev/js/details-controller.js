angular.module('app').controller('detailsController', ['$scope', '$rootScope', '$window', '$location', '$routeParams', function($scope, $rootScope, $window, $location, $routeParams) {

	var propertyId = $routeParams.id;

	console.log(propertyId);
}]);