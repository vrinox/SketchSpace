angular.module('sketch')
.controller('ctrlRegistro', ['$scope', function ($scope) {
  $scope.nombre = "victor";
  $scope.apellido = "";
  $scope.correo = "";
  $scope.sexo = "";
}])
.controller('ctrlInicio', function($scope) {
  $scope.project = {
    description: 'Nuclear Missile Defense System',
    rate: 500,
    special: true
  };
});
