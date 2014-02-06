var meanCtrl = angular.module('meanCtrl', []);

meanCtrl.controller('booksCtrl', ['$scope', 'bookService',
    function ($scope, bookService) {
        $scope.books = bookService.query();
        $scope.update = function () {
            console.log($scope.book);
            console.log($scope.books);
        }
        $scope.delete = function () {
            console.log($scope.book._id);
            bookService.remove({
                bookId: $scope.book._id
            });
        }

}]);

meanCtrl.controller('addBookCtrl', ['$scope', 'bookService', '$location',
    function ($scope, bookService, $location) {
        $scope.submit = function () {
            console.log($scope.newBook);
            bookService.post($scope.newBook);
        }
}]);

meanCtrl.controller('updateBookCtrl', ['$scope', 'bookService', '$location',
    function ($scope, bookService, $location) {
        $scope.books = bookService.query();
        $scope.update = function () {
            $scope.newBook = $scope.oldBook
        }
        $scope.submit = function () {
            var newBook = $scope.newBook;
            console.log(newBook);
            bookService.update({
                bookId: newBook._id
            }, newBook);
        }
}]);