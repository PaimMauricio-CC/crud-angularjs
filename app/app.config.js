angular.module('personApp').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/persons', {
            templateUrl: 'app/views/person.html',
            controller: 'PersonController'
        })
        .otherwise({
            redirectTo: '/persons'
        });
}]);
