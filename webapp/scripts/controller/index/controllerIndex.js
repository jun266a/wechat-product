(function(angular){
	var app = angular.module('module.controller.index',['ngRoute']);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/index',{
			controller:'controllerIndex',
			templateUrl:'./views/index/panelIndex.html'
		});
	}]);
	app.controller('controllerIndex',['$scope',function($scope){
		
	}]);
})(angular);
