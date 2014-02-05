/*var meanServices = angular.module('meanServices', ['ngResource']);

meanServices.factory('dbService', ['$resource',
    function ($resource) {
        return $resource('books/:bookId', {}, {
            query: {
                method: 'GET',
                params: {
                    bookId: ''
                },
                isArray: true
            }
            post: {
                method: 'POST'
            },
            update: {
                method: 'PUT'
            },
            remove: {
                method: 'DELETE'
            }
        });
}]);*/

var meanServices = angular.module('meanServices', ['ngResource']);

meanServices.factory('dbService', ['$resource',
    function ($resource) {
        return toto;
}]);