var meanCtrl = angular.module('meanCtrl', []);

meanCtrl.controller('booksCtrl', ['$scope',
    function ($scope) {
        $scope.books = [{
                "_id": "52f236af99fe528ca1b21d92",
                "title": "Voyage au centre de la Terre",
                "year": "1864",
                "author": "Jules Verne",
                "genre": "Science Fiction"
            },
            {
                "title": "Vingt mille lieues sous les mers",
                "year": "1870",
                "author": "Jules Verne",
                "genre": "Science Fiction",
                "_id": "52f24fa98f1728a87c8543d2"
            }]
}]);