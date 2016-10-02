angular.module('myapp').controller('BookViewCtrl', function ($routeParams, $http, $scope, $location) {
    
	$scope.id = $routeParams.bookId;

	$http.get("/api/books/" + $scope.id).then(function (response) {
	        $scope.book = response.data[0];
    	});	
	
	$scope.editBook = function (id) {
	        $location.path('/books/' + id + '/edit');
	};
	
});
