angular.module('PortfolioApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainController',
			templateUrl: 'views/main.html'
		}).when('/about', {
			controller: 'MainController',
			templateUrl: 'views/about.html'
		}).when('/questions', {
			controller: 'QuestionsController',
			templateUrl: 'views/questions.html'

		});
}])
.controller('NavController', ['$scope', '$location', function($scope, $location) {
	$scope.isActive = function(route) {
    return route === $location.path();
  };
}])

.controller('MainController', ['$scope', function($scope) {
	$scope.projects = [{
		title: 'FCC Camper Leaderboard',
		img: 'img/projects/leaderboard.png',
		description: 'An app that displays the leaderboard for Free Code Camp.  Allows you to sort by either all time or recent points.  Built using ReactJS and Sass. Reverse engineered as a student at Free Code Camp',
		github: 'https://github.com/Brigette-Eckert/camper-leaderboard',
		link: 'http://git.bbeckert.com/camper-leaderboard/'
		},{
		title: 'Markdown Preview',
		img: 'img/projects/markdown.png',
		description: 'An app that lets you type and see markdown test displayed instantly.  Built using ReactJS and Sass. Reverse engineered as a student at Free Code Camp',
		github: 'https://github.com/Brigette-Eckert/markdown-preview',
		link: 'http://git.bbeckert.com/markdown'
		},{
		title: 'Code Journal',
		img: 'img/projects/journal.png',
		description: 'Learning Journal CMS made with Django',
		github: 'https://github.com/Brigette-Eckert/journal',
		link: 'https://journal-bbeckert.herokuapp.com '
		},{
		title: 'Simon',
		img: 'img/projects/simon.png',
		description: 'Test your memory skils with Simon. Built using using ES6, jQuery, Gulp, and Sass. Reversed engineered as a student at Free Code Camp.',
		github: 'https://github.1com/Brigette-Eckert/simon',
		link: 'http://git.bbeckert.com/simon'
		},{
		title: 'Pokedex',
		img: 'img/projects/pokemon.png',
		description: 'A guide to all the Pokemon in the Pokemon universe. Built with Angular JS and an external API.',
		github: 'https://github.com/Brigette-Eckert/pokedex',
		link: 'http://pokedex.lawlietblack.com'
		},  {
		title: 'Tic Tac Toe',
		img: 'img/projects/tictactoe.png',
		description: 'The classic game of Tic Tac Toe. Built using javascript, jQuery and Sass. Reversed engineered as a student at Free Code Camp.',
		github: 'https://github.com/Brigette-Eckert/tic-tac-toe',
		link: 'http://git.bbeckert.com/tic-tac-toe/'
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
		}, {
		title: 'Wikipedia Viewer',
		img: 'img/projects/wiki.png',
		description: 'An electronic card catalog for Wikipedia. Allows user to search for a topic or view a random article. Built using jquery, and media wiki API. Reversed engineered as a student at Free Code Camp.',
		github: 'https://github.com/Brigette-Eckert/wikipedia_viewer',
		link: 'http://git.bbeckert.com/wikipedia_viewer'
		}, {
		title: 'Twitch Streaming Status',
		img: 'img/projects/twitch.png',
		description: 'A site that allows you to see if certain users are online on twitch and what they are currently streaming. Built using AngularJS, and twitch API. Reversed engineered as a student at Free Code Camp.',
		github: 'https://github.com/Brigette-Eckert/twitch',
		link: 'http://git.bbeckert.com/twitch'
		}, {
		title: 'Random Cat Fact',
		img: 'img/projects/cats.png',
		description: 'A random fact generator that displays cat facts when the button is clicked and allows user\'s to tweet fact.  Build with JavaScript, Twitter developer tools and external restful API. Reversed engineered for use at Free Code Camp.',
		github: 'https://github.com/Brigette-Eckert/cat_facts',
		link: 'http://git.bbeckert.com/cat_facts/'
		}
	]
}])

//add questions controller 
//make http .get request to get external json 
//set scope for each set of questions 
.controller('QuestionsController', ['$scope', function($scope){
	$scope.questions = questions;
	$scope.basics = $scope.questions.basic;
	$scope.behaviorals =$scope.questions.behavioral;
	$scope.carrers = $scope.questions.carrer;
	$scope.technicals = $scope.questions.technical;
	$scope.funzies = $scope.questions.fun;
	console.log($scope.questions);
}])
