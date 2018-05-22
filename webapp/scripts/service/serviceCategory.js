(function(angular){
	var app = angular.module('module.service.category',[]);
	app.service('serviceCategory',['$http',function($http){
		var categories = [];
		this.rows = function(callback){
    		for (var i = 0; i < categories.length; i++) {
    			callback(i,categories[i]);
    		}
    	};
		this.put = function(values){
			$http.post('/categories/insert',{name:values})
            .success(function (res) {
            	console.log(res);
            });
		};
		this.delete = function(id){
			
		};
		this.get = function(){
			//每次清空categories
			categories = [];
			$http.post('/categories/all')
			.success(function(data,status,header,config){
				angular.forEach(data,function (record) {
					categories.push({
						id : record.id,
						name : record.name
					});
				});
			});
			return categories;
		};
		this.post = function(value){
			$http.post('/categories/update',value)
			.success(function (res) {
            	console.log(res);
            });
		};
	}]);
})(angular);
