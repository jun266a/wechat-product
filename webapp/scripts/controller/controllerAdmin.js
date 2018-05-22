(function(angular){
	var app = angular.module('admin',['module.service.admin']);
	app.controller('controllerAdmin',['$scope','serviceAdmin',function($scope,serviceAdmin){
	    $scope.signin = function (value) {
	    	$scope.admin = serviceAdmin.get(value);
	    	if($scope.admin){
	    		sessionStorage.setItem("admin", $scope.admin);
//	    		$state.go('dashboard.html');
	    	}else{
	    		alert('登录失败');
	    	}
	    }
	}]);
})(angular);
