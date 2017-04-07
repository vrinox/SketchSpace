angular.module('sketch')
.controller('ctrlLanding', ['$scope','$auth','$location','$sesion', function ($scope,$auth,$location,$sesion) {
  $scope.logout = function(){
    $auth.logout()
          .then(function() {
              // Desconectamos al usuario y lo redirijimos
              $sesion.desconectar();
              $location.path("/");
          });
  };
}]);
