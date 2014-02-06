var meanServices = angular.module('meanServices', ['ngResource']);

meanServices.factory('bookService', ['$resource',
    function ($resource) {
        return $resource('/books/:bookId', {}, {
            query: {
                method: 'GET',
                params: {
                    bookId: ''
                },
                isArray: true
            },
            post: {
                method: 'POST',
                isArray: false
            },
            update: {
                method: 'PUT',
                params: {
                    bookId: '@book._id'
                },
                isArray: false
            },
            remove: {
                method: 'DELETE',
                params: {
                    bookId: '@book._id'
                },
                isArray: false
            }
        });
    }]);