angular.module('sketch', ['ngMaterial','ngMessages','ngRoute', 'ngResource','ui.router'])
.config(['$stateProvider','$urlRouterProvider','$mdThemingProvider', function ($stateProvider,$urlRouterProvider,$mdThemingProvider) {
  //$urlRouterProvider.otherwise('/');
  $stateProvider
    .state('frontPage', {
      url: '/',
      templateUrl: '/views/plantillas/frontPage.html',
      controller: 'ctrlLanding'
    })
      .state('frontPage.main', {
        url: 'main',
        templateUrl: '/views/plantillas/front-main.html',
        controller: 'ctrlLanding'
      })
      .state('frontPage.registro', {
        url: 'registro',
        templateUrl: '/views/plantillas/front-registro.html',
        controller: 'ctrlRegistro'
      })
      .state('frontPage.inicio', {
        url: 'Autenticar',
        templateUrl: '/views/plantillas/front-inicio.html',
        controller: 'ctrlInicio'
      })
    //trabajos
    .state('trabajos',{
      url:'/trabajos',
      templateUrl: '/views/plantillas/inicio.html',
      controller: 'ctrlInicio'
    });
    $mdThemingProvider.theme('default')
          .primaryPalette('cyan')
          .accentPalette('blue-grey')
          .dark();
}]);
