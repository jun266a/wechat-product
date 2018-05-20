(function(angular){
	var app = angular.module('module.controller.newProdu',['ngRoute']);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/newProdu',{
			controller:'controllerNewProdu',
			templateUrl:'./views/panelNewProdu.html'
		});
	}]);
	app.controller('controllerNewProdu',['$scope',function($scope){
		
	}]);
})(angular);
