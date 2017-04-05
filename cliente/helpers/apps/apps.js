angular.module('sketch', ["satellizer",'ngMaterial','ngMessages','ngRoute', 'ngResource','ui.router'])
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
}])
//----------------------- Autenticacion ------------------------
.config(['$authProvider',function($authProvider){
  // Parametros de configuración
        $authProvider.loginUrl = "/api/autenticar";
        $authProvider.signupUrl = "/api/registrar";
        $authProvider.tokenName = "token";
        $authProvider.tokenPrefix = "SketchSpace";
}])
.config(['$httpProvider', 'satellizer.config', function($httpProvider, config) {
      $httpProvider.interceptors.push(['$q', function($q) {
        var tokenName = config.tokenPrefix ? config.tokenPrefix + '_' + config.tokenName : config.tokenName;
        return {
          request: function(httpConfig) {
            var token = localStorage.getItem(tokenName);
            if (token && config.httpInterceptor) {
              token = config.authHeader === 'Authorization' ? 'Bearer ' + token : token;
              httpConfig.headers[config.authHeader] = token;
            }
            return httpConfig;
          },
          responseError: function(response) {
            return $q.reject(response);
          }
        };
      }]);
    }]);
