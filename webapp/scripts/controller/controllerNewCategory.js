(function(angular){
	var app = angular.module('module.controller.newCategory',['ngRoute']);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/newCategory',{
			controller:'controllerNewCategory',
			templateUrl:'./views/panelNewCategory.html'
		});
	}]);
	app.controller('controllerNewCategory',['$scope',function($scope){
		
	}])
})(angular);
