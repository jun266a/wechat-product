(function(angular){
	var app = angular.module('module.controller.about',['ngRoute']);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/about',{
			controller:'controllerAbout',
			templateUrl:'./views/index/panelAbout.html'
		});
	}]);
	app.controller('controllerAbout',['$scope',function($scope){
		
	}]);
})(angular);
