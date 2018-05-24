(function(angular){
	var app = angular.module('module.service.order',[]);
	app.service('serviceOrder',['$http',function($http){
		var orders = [];
		this.rows = function(callback){
    		for (var i = 0; i < orders.length; i++) {
    			callback(i,orders[i]);
    		}
    	};
		this.put = function(values){};
		this.delete = function(id){};
		this.get = function(){
			orders = [];
			$http.post('/orders/select',{userId : 0})
			.success(function(data,status,header,config){
				angular.forEach(data,function (item) {
					orders.push({
						id : item.id,
						name : item.name,
						userId : item.userId,
						quantity : item.quantity,
						price : item.price
					});
				});
			});
			return orders;
		};
	}]);
})(angular);
