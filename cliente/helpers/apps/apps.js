angular.module('balaFria', ['ngMaterial','leaflet-directive','ngRoute', 'ngResource'])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/plantillas/landing.html',
    })
}]);
angular.module('balaFriaVentas', ['ngMaterial','leaflet-directive','ngRoute', 'ngResource']);
angular.module('balaFriaAdmin', ['ngMaterial','ngRoute', 'ngResource']);
