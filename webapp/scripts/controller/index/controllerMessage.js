(function(angular){
	var app = angular.module('module.controller.message',['ngRoute']);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/message',{
			controller:'controllerMessage',
			templateUrl:'./views/index/panelMessage.html'
		});
	}]);
	app.controller('controllerMessage',['$scope',function($scope){
		
	}]);
})(angular);
