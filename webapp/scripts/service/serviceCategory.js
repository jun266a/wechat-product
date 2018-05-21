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
			$http.post('/categories/all')
			.success(function(data,status,header,config){
				console.log(data);
				angular.forEach(data,function (record) {
					categories.push({
						id : record.id,
						name : record.name
					});
				});
				console.log('categories'+categories);
			});
			return categories;
		};
		this.post = function(values){
			$http.post('/categories/update',{values})
			.success(function (res) {
            	console.log(res);
            });
		};
	}]);
})(angular);
