app.controller('BookEditCtrl', function ($routeParams, $scope, $http, $location) {
        
	$scope.id = $routeParams.bookId;

	$scope.isNew = function () {
		if($scope.id === 'new')
			return true;
		return false; 
	};

	var createRequestData = function () {
		var data = {
			'name' : $scope.book.name,
			'authorName' : $scope.book.authorName,
			'publication' : $scope.book.publication,
			'isbn'	: $scope.book.isbn		
		};
		return data;
	};
	
	$scope.saveBook = function () {
		$http.post('/api/books', createRequestData() ).then(function (response) {
			$location.path('/books');		
		});
	};	

	$scope.updateBook = function () {
		$http.put('/api/books/' + $scope.id, createRequestData()).then(function (response) {
			$location.path('/books');	
		});
	};
	
	$scope.cancel = function () {
		$location.path('/books');
	};

	if(!$scope.isNew()) {
		$http.get('/api/books/' + $scope.id).then(function (response) {
		        $scope.book = response.data[0];
    		});
	}

    
});
