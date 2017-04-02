angular.module('balaFria', ['ngMaterial','leaflet-directive','ngRoute', 'ngResource'])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/plantillas/landingCliente.html',
      controller: 'contCliente'
    })
    .when('/proveedor', {
      templateUrl: '/views/plantillas/proveedores.html'
    })
    .when('/admin', {
      templateUrl: '/views/plantillas/adminApp.html'
    });
}]);
angular.module('balaFriaVentas', ['ngMaterial','leaflet-directive','ngRoute', 'ngResource']);
angular.module('balaFriaAdmin', ['ngMaterial','ngRoute', 'ngResource']);
