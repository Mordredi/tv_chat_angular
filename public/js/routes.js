angular.module('TVChat').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "../templates/home/index.html",
      controller: "ShowSearchController"
    });
  $locationProvider.html5Mode(true);
}]);