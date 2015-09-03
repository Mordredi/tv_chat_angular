angular.module('TVChat').factory('Show', ['$http', '$q', function($http, $q){
  return {
    get: function(show){
      var defer = $q.defer();
      return $http.get('http://api.tvmaze.com/singlesearch/shows?q=' + show + '&embed=episodes').then(function(data){
        defer.resolve(data.data);
        return defer.promise;
      });
    }
  }
}]);