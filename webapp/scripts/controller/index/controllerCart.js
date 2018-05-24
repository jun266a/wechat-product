(function(angular){
	var app = angular.module('module.controller.cart',['ngRoute','module.service.cart']);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/cart',{
			controller:'controllerCart',
			templateUrl:'./views/index/panelCart.html'
		});
	}]);
	app.controller('controllerCart',['$scope','serviceCart',function($scope,serviceCart){
		
	}]);
})(angular);
