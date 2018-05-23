(function(angular){
	var app = angular.module('main',[
		'ngRoute',
		'module.controller.newCategory',
		'module.controller.newProdu',
		'module.controller.categories',
		'module.controller.catalogue'
	]);
//	app.run(['$rootScope','$state',function($rootScope,$state){
//		$rootScope.$on('$stateChangeStart',function(event,toState){
//		   	// 防止FQ
//		   	if(!(sessionStorage.getItem("admin"))){
//		   		//未完成
//		   		$state.go('register');
//		   	}
//	  	});
// 	}]);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.otherwise({redirectTo:'/newProdu'});
	}]);
	app.controller("navCtrl",["$scope","$location",function ($scope,$location) {
        $scope.$location = $location;
        $scope.$watch("$location.path()",function (now, old) {
            $scope.path = now;
        })
    }]);
})(angular);
