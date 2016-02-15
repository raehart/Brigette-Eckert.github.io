angular.module('PortfolioApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainController',
			templateUrl: 'views/main.html'
		}).when('/about', {
			controller: 'MainController',
			templateUrl: 'views/about.html'
		});
}])
.controller('NavController', ['$scope', '$location', function($scope, $location) {
	$scope.isActive = function(route) {
    return route === $location.path();
  };
}])

.controller('MainController', ['$scope', function($scope) {
	$scope.projects = [{
		title: 'Random Cat Fact',
		img: 'img/projects/cats.png',
		description: 'A random fact generator that displays cat facts when the button is clicked and allows user\'s to tweet fact.  Build with JavaScript, Twitter developer tools and external restful API.',
		github: 'https://github.com/Brigette-Eckert/cat_facts',
		link: 'http://git.bbeckert.com/cat_facts/'
		}, {
		title: 'Pomodoro Clock',
		img: 'img/projects/clock.png',
		description: 'A pomodoro clock that alerts user with sound when period is over, allows user to customize work and break periods. Built using JavaScript. Reversed engineered for use at Free Code Camp.',
		github: 'https://github.com/Brigette-Eckert/pomodoro-clock',
		link: 'http://git.bbeckert.com/pomodoro/'
		}, {
		title: 'Calculator',
		img: 'img/projects/calc.png',
		description: 'A calculator built using Javascript, jQuery and Sass. Reversed engineered as a student at Free Code Camp.',
		github: 'https://github.com/Brigette-Eckert/calculator',
		link: 'http://git.bbeckert.com/calculator/'
		},{
		title: 'Local Weather',
		img: 'img/projects/weather1.png',
		description: 'A weather displaying built using Javascript, Sass and Open Weather API (Bowser location must be on). Reversed engineered as a student at Free Code Camp.',
		github: 'https://github.com/Brigette-Eckert/local-weather',
		link: 'http://git.bbeckert.com/local-weather/'
	}, {
		title: 'Pac-NW Race Calendar',
		img: 'img/projects/racecal.png',
		description: 'A calendar that displays upcoming races in Oregon and Washington. Built using a jQuery, JSON, and AngularJS.',
		github: 'https://github.com/Brigette-Eckert/PacNW-Race-Calendar',
		link: 'http://git.bbeckert.com/race-calendar'
		}, {
		title: 'Pokedex',
		img: 'img/projects/pokemon.png',
		description: 'A guide to all the Pokemon in the Pokemon universe. Built with Angular JS and an external API.',
		github: 'https://github.com/Brigette-Eckert/pokedex',
		link: 'http://pokedex.lawlietblack.com'
		}, {
		title: 'Wikipedia Viewer',
		img: 'img/projects/wiki.png',
		description: 'An electronic card catalog for Wikipedia. Allows user to search for a topic or view a randon article. Built using jquery, and media wiki API. Reversed engineered as a student at Free Code Camp..',
		github: 'https://github.com/Brigette-Eckert/wikipedia_viewer',
		link: 'http://git.bbeckert.com/race-calendar/wikipedia_viewer'
		}]
}])