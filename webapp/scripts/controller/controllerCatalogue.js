(function(angular){
	var app = angular.module('module.controller.catalogue',[
		'ngRoute',
		'module.service.category',
		'module.service.company',
		'module.service.product'
	]);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/catalogue',{
			controller:'controllerCatalogue',
			templateUrl:'./views/panelCatalogue.html'
		});
	}]);
	app.controller('controllerCatalogue',[
		'$scope',
		'serviceCategory',
		'serviceCompany',
		'serviceProduct',
		function($scope,serviceCategory,serviceCompany,serviceProduct){
//			$scope.categories = serviceCategory.get();
//			$scope.companies = serviceCompany.get();
			$scope.catlogue = serviceProduct.get();
		}
	]);
})(angular);
