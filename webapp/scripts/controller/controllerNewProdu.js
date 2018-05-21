(function(angular){
	var app = angular.module('module.controller.newProdu',[
		'ngRoute',
		'module.service.category',
		'module.service.company',
		'module.service.product'
	]);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/newProdu',{
			controller:'controllerNewProdu',
			templateUrl:'./views/panelNewProdu.html'
		});
	}]);
	app.controller('controllerNewProdu',[
		'$scope',
		'serviceCategory',
		'serviceCompany',
		'serviceProduct',
		function($scope,serviceCategory,serviceCompany,serviceProduct){
			$scope.categories = serviceCategory.get();
			$scope.companies = serviceCompany.get();
//			$scope.products = serviceProduct.get();
//			$scope.value = {
//				//$scope.categories[0] 数组下标无法使用
//				category : $scope.categories
//			};
			//TODO实现表数据的获取刷新
			$scope.makeItem = function(value){
				serviceProduct.put(value);
			};
		}
	]);
})(angular);
