(function(angular){
	var app = angular.module('module.controller.order',[
		'ngRoute',
		'module.service.order'
	]);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/orders',{
			controller:'controllerOrder',
			templateUrl:'./views/dashboard/panelOrder.html'
		})
		.when('/order',{
			controller:'controllerOrder',
			templateUrl:'./views/index/panelOrder.html'
		});
	}]);
	app.controller('controllerOrder',['$scope','serviceOrder',function($scope,serviceOrder){
		$scope.type = "id";
    	$scope.reverse = false;
    	$scope.orders = serviceOrder.get();
    	$scope.rows = function(list,callback){
			for (var i = 0; i < list.length; i++) {
				callback(i,list[i]);
			}
		};
    	$scope.increase = function(id){
			this.rows($scope.orders,function(index,item){
				if(item.id == id){
					item.quantity +=1;
					return;
				}
			});
		};
		$scope.decrease = function(id){          
			this.rows($scope.orders,function(index,item){
				if(item.id == id){               
					if(item.quantity>1){         
						item.quantity -=1;	     
					}else{                       
		                $scope.remove(item.id);  
					}                            
					return;                      
				}                                
			});                                  
		};     
		$scope.remove = function(id){
			var result = confirm("确定要删除这个元素?");
			if(result){       
				this.rows($scope.orders,function(index,item){
					if(item.id == id){
						$scope.carts.splice(index,1);              
						return ; 
					}
				});
			}                                                 
		};
		$scope.quantity = function(){            
			var quantity = 0;                    
			this.rows($scope.orders,function(index,item){
				quantity+=item.quantity;         
			});                                  
			return quantity;                     
		};  
		$scope.total = function(){               
			var total = 0;                       
			this.rows($scope.orders,function(index,item){
				total+=item.total;               
			});                                  
			return total;                        
		};                                       
		$scope.orderType = function(value){      
		    if($scope.type == value){            
		        $scope.reverse = !$scope.reverse;
		    }else{                               
		        $scope.type = value;             
		        $scope.reverse = false;          
		    }                                    
		};                                       
	}]);                                       
})(angular);
