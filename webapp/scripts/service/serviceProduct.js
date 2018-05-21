(function(angular){
	var app = angular.module('module.service.product',[]);
	app.service('serviceProduct',['$http',function($http){
		var products = [];
		this.rows = function(){
			for (var i = 0; i < products.length; i++) {
    			callback(i,products[i]);
    		}
		};
		this.put = function(){};
		this.delete = function(){};
		this.get = function(){};
		this.post = function(){};
	}]);
})(angular);
