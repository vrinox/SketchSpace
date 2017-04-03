angular.module('sketch')
.controller('ctrlRegistro', ['$scope', function ($scope) {
  $scope.nombre = "";
  $scope.apellido = "";
  $scope.correo = "";
  $scope.documento = "";
  $scope.sexo = "";
}]);
