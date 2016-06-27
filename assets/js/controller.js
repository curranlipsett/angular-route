var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'indexCtrl',
        templateUrl: 'assets/partials/index.html'
    })
    
    .when('/add-contact', {
        controller: 'addCtrl',
        templateUrl: 'assets/partials/add.html'
    })

    .when('/contact/:id', {
        controller: 'contactCtrl',
        templateUrl: 'assets/partials/contact.html'
    })

    .otherwise({
        redirectTo: '/'
    });
});

app.controller('AppCtrl', function($scope) {
    $scope.name = 'World';

    $scope.clickHandler = function() {
        $scope.isHidden = !$scope.isHidden;
    }

    $scope.contacts = [
        {
            name: 'John Doe',
            phone: '01234567890',
            email: 'john@example.com'
        },
        {
            name: 'Karan Bromwich',
            phone: '09876543210',
            email: 'karan@email.com'
        }
    ];

    $scope.styleDemo = function(){
        if(!$scope.styler){
            return;
        }

        return {
            background: 'red',
            fontWeight: 'bold'
        };
    };
});

app.filter('truncate', function(){
    return function(input, limit) {
        // Check the length of input, if it's greater than the limit, truncate and add '...', otherwise, return the input
        return (input.length > limit) ? input.substr(0, limit)+'…' : input;
  };
});

app.controller('indexCtrl', function($scope) {

});

app.controller('addCtrl', function($scope) {

});

app.controller('contactCtrl', function($scope, $routeParams){
    console.log($routeParams);
});