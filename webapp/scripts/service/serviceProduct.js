(function(angular){
	var app = angular.module('module.service.product',[
		'module.service.category',
	]);
	app.service('serviceProduct',['$http',function($http){
		var products = [];
		this.rows = function(){
			for (var i = 0; i < products.length; i++) {
    			callback(i,products[i]);
    		}
		};
		this.put = function(values){
			$http.post('/products/insert',{
				cateId : values.category.id,
				compId : values.company.id,
				name : values.name,
				price : values.price,
				content : values.content
			})
			.success(function(res){
            	console.log(res);
			});
		};
		this.delete = function(){};
		this.get = function(){
			$http.post('/products/all')
			.success(function(data,status,header,config){
				console.log(data);
				angular.forEach(data,function (record) {
					products.push({
						id : record.id,
						category : record.category,
						company : record.company,
						name : record.name,
						price : record.price,
						image : record.image,
						content : record.content
					});
				});
			});
			return products;
		};
		this.post = function(){};
	}]);
})(angular);
