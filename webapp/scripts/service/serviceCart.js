(function(angular){
	var app = angular.module('module.service.cart',[]);
	app.service('serviceCart',['$http',function($http){
		var carts = [];
		this.rows = function(callback){
    		for (var i = 0; i < carts.length; i++) {
    			callback(i,carts[i]);
    		}
    	};
		this.put = function(values){};
		this.delete = function(id){};
		this.get = function(){
			carts = [];
			$http.post('/carts/select',{userId : 0})
			.success(function(data,status,header,config){
				angular.forEach(data,function (record) {
					carts.push({
						id : record.id,
						name : record.name,
						quantity : record.quantity,
						price : record.price
					});
				});
			});
			return carts;
		};
		this.post = function(value){};
	}]);
})(angular);
