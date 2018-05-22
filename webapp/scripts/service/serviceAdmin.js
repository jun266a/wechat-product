(function(angular){
	var app = angular.module('module.service.admin',[]);
	app.service('serviceAdmin',['$http',function($http){
		var admin = [];
		this.get = function(value){
			admin = [];
			$http.post('/admin/select',value)
			.success(function(res){
				admin.push(res);
			});
			//返回控制异步
			return admin;
		};
	}]);
})(angular);
