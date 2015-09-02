app.factory('profile', ['$http', function ($http) {
	return $http.get('http://teamtreehouse.com/brigetteeckert.json').success(function (data) {
		console.log("import success")
		return data;
	}).error(function (err) {
		return err;
	});
}]);