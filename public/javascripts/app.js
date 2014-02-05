/*var meanApp = angular.module('meanApp', ['ngRoute', 'meanCtrl', 'meanServices']);*/
var meanApp = angular.module('meanApp', ['ngRoute', 'meanCtrl', 'meanServices']);
/*meanApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/book/booksList', {
            templateUrl: 'partials/booksList.html',
            controller: 'booksCtrl'
        }).
        otherwise({
            redirectTo: '/book/booksList'
        });
}]);*/




/* when('/book/:bookId', {
     templateUrl: 'partials/book.html',
     controller: 'displayBookCtrl'
 }).
 when('/book/new', {
     templateUrl: 'partials/newBook.html',
     controller: 'createBookCtrl'
 }).
 when('/book/delete', {
     templateUrl: 'partials/delBook.html',
     controller: 'deleteBookCtrl'
 }).*/