var app = angular.module("webAppsApp", ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			controller: '',
			templateUrl: '/views/app-page-view.html'
		})
		.when('/dice', {
			controller: '',
			templateUrl: '/views/dice-roller.html'
		})
			.when('/draw', {
			controller: '',
			templateUrl: 'views/draw.html'
		})
			.when('/flickr', {
			controller: '',
			templateUrl: ''
		})


