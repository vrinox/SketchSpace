angular.module('sketch', ['ngMaterial','leaflet-directive','ngRoute', 'ngResource'])
.config(['$routeProvider','$mdThemingProvider', function ($routeProvider,$mdThemingProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/plantillas/landing.html',
      controller: 'ctrlLanding'
    });
    $mdThemingProvider.theme('default')
          .primaryPalette('cyan')
          .accentPalette('blue-grey')
          .dark();
}]);
