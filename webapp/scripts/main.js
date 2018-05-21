(function(angular){
	var app = angular.module('main',[
		'ngRoute',
		'module.controller.newCategory',
		'module.controller.newProdu',
		'module.controller.categories'
	]);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.otherwise({redirectTo:'/newProdu'});
	}]);
})(angular);
