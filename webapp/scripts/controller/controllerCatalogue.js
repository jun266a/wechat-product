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
			$scope.type = "item.id";
    		$scope.reverse = false;
			$scope.catalogue = serviceProduct.get();
			$scope.categories = serviceCategory.get();
			$scope.companies = serviceCompany.get();
			$scope.orderType = function(value){
			    if($scope.type == value){
			        $scope.reverse = !$scope.reverse;
			    }else{
			        $scope.type = value;
			        $scope.reverse = false;
			    }
			};
			$scope.invoke = function(id){
				//弹出模态框--控制模态框的展示displayBlock，浮动到页面最上层和背景灰化
	    		$scope.modal = true;
	    		serviceProduct.rows(function(index,item){
	    			if(item.id == id){
	    				$scope.value = {
	    					id : item.id,
	    					name : item.name,
	    					category : {id : item.cateId,name : item.cateName},
							company : {id : item.compId,name : item.compName},
	    					price : item.price
	    				}
	    				console.log($scope.value);
	    			}
	    		});
			};
			$scope.dismiss = function(){
	    		//隐藏模态框--控制模态框的展示displayNone，浮动到页面下面和取消背景灰化
	    		$scope.modal = false;
	    	};
	    	$scope.updateItem = function(value){
	    		serviceProduct.post(value);
	    	};
			$scope.removeItem = function(){
				
			};
		}
	]);
})(angular);
