angular.module('sketch')
.controller('ctrlLanding', ['$scope', function ($scope) {

}])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/registro', {
      templateUrl: '/views/plantillas/registro.html',
      controller: 'ctrlRegistro'
   });
}]);
