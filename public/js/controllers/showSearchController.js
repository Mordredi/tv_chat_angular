angular.module('TVChat').controller('ShowSearchController', function(Show, $scope, $location){

  $scope.findShow = function() {
    show = $scope.search.replace(/ /g, '+');
    Show.get(show).then(function(data){
      $scope.show = data;
    });
  }
});