(function(angular){
	var app = angular.module('module.service.company',[]);
	app.service('serviceCompany',['$http',function($http){
		var companies = [];
		this.rows = function(callback){
    		for (var i = 0; i < companies.length; i++) {
    			callback(i,companies[i]);
    		}
    	};
		this.get = function(){
			companies = [];
			$http.post('/companies/all')
			.success(function(data,status,header,config){
				angular.forEach(data,function (item) {
					companies.push({
						id : item.id,
						name : item.name
					});
				});
			});
			return companies;
		};
	}]);
})(angular);
