var app  =  angular.module('myapp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/books', {
            templateUrl: 'partials/book.html',
            controller: 'BookCtrl'
        })
        .when('/books/:bookId', {
            templateUrl: 'partials/bookView.html',
            controller: 'BookViewCtrl'
        })
        .when('/books/:bookId/edit', {
            templateUrl: 'partials/bookEdit.html',
            controller: 'BookEditCtrl'
        });

    $routeProvider.otherwise({
        redirectTo: '/books'
    });

});
