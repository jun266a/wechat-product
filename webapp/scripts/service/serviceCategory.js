(function(angular){
	var app = angular.module('module.service.category',[]);
	app.service('serviceCategory',['$http',function($http){
		var categories = '';
		this.rows = function(callback){
    		for (var i = 0; i < categories.length; i++) {
    			callback(i,categories[i]);
    		}
    	};
		this.put = function(values){
			$http.post('/categories/addcategories',{name:values})
            .success(function (res) {
            	console.log(res);
                if(res.success){
                    alert("添加成功");
                }
            });
		};
		this.delete = function(id){
			
		};
		this.get = function(){
			return categories;
		};
		this.post = function(values){
			
		};
	}]);
})(angular);
