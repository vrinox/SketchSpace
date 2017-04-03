angular.module('sketch', ['ngMaterial','leaflet-directive','ngRoute', 'ngResource'])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/plantillas/landing.html',
      controller: 'ctrlLanding'
    });
}]);
