app.controller('BookCtrl', function ($route, $scope, $location, $http, $routeParams) {

	$scope.viewBook = function (id) {
	        $location.path('/books/' + id);
	};

	$scope.editBook = function (id) {
	        $location.path('/books/' + id + '/edit');
	};

	$scope.deleteBook = function (id) {
        	$http.delete("/api/books/" + id).then(function (response) {
        		$route.reload();
		});
	};

	$http.get("/api/books").then(function (response) {
        	$scope.books = response.data;
	});
});
