angular.module("webAppsApp", ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'WebAppsController'
	})
	.when('/dice', {
		controller: 'WebAppsController',
		templateUrl: 'views/dice-roller.html'
	})
	.when('/draw', {
		controller: 'WebAppsController',
		templateUrl: 'views/draw.html'
	})
	.when('/flickr', {
		controller: 'WebAppsController',
		templateUrl: 'views/flickr.html'
	})
	.otherwise({
		redirectTo: '/'
	});
})
.controller('WebAppsController', ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams) {
	   $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
   }
}]);