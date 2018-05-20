(function(angular){
	var app = angular.module('module.controller.newCategory',['ngRoute','module.service.category']);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/newCategory',{
			controller:'controllerNewCategory',
			templateUrl:'./views/panelNewCategory.html'
		});
	}]);
	app.controller('controllerNewCategory',['$scope','serviceCategory',function($scope,serviceCategory){
		$scope.makeItem = function(name){
			console.log(name);
			serviceCategory.put(name);
		};
	}]);
})(angular);
