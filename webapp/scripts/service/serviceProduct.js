(function(angular){
	var app = angular.module('module.service.product',[
		'module.service.category',
	]);
	app.service('serviceProduct',['$http',function($http){
		var products = [];
		this.rows = function(callback){
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
				image : values.image,
				content : values.content
			})
			.success(function(res){
            	console.log(res);
			});
		};
		this.delete = function(){};
		this.get = function(){
			products = [];
			$http.post('/products/all')
			.success(function(data,status,header,config){
				console.log(data);
				angular.forEach(data,function (record) {
					products.push({
						id : record.id,
						category : {id : record.cateId,name : record.cateName},
						company : {id : record.compId,name : record.compName},
						name : record.name,
						price : record.price,
						image : record.image,
						content : record.content
					});
				});
			});
			return products;
		};
		this.post = function(value){
			$http.post('/products/update',{
				id : value.id,
				cateId : value.category.id,
				compId : value.company.id,
				name : value.name,
				price : value.price
			})
			.success(function (res) {
            	console.log(res);
            });
		};
	}]);
})(angular);
