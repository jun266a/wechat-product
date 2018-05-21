(function(angular){
	var app = angular.module('module.controller.categories',['ngRoute','module.service.category']);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/categories',{
			controller:'controllerCategories',
			templateUrl:'./views/panelCategories.html'
		});
	}]);
	app.controller('controllerCategories',['$scope','serviceCategory',function($scope,serviceCategory){
		$scope.categories = serviceCategory.get();
		$scope.invoke = function(id){
			//弹出模态框--控制模态框的展示displayBlock，浮动到页面最上层和背景灰化
    		$scope.modal = true;
    		serviceCategory.rows(function(index,item){
    			if(item.id == id){
    				$scope.value = {
    					id : item.id,
    					name : item.name
    				}
    			}
    		});
		};
		$scope.dismiss = function(){
    		//隐藏模态框--控制模态框的展示displayNone，浮动到页面下面和取消背景灰化
    		$scope.modal = false;
    	};
    	$scope.updateItem = function(value){
    		serviceCategory.post(value);
    	};
	}]);
})(angular);
