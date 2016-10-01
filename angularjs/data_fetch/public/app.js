var app = angular.module('myApp', []);
  
//Creating controller here  
app.controller('bookController', function($scope, $http) {  
	
	$http.get('http://localhost:1991/api/books').then(function (response){
		$scope.book = response.data;
		console.log(response);
	});
});
