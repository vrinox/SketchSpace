angular.module('balaFriaVentas')
.controller('ProveedorController', ['$scope', 'Proveedores', function ($scope, Proveedores) {
  $scope.editing = [];
  //aqui busca en la api
  $scope.proveedores = Proveedores.query();
  //insertar
  $scope.save = function(){
    if(!$scope.nuevoProveedor || $scope.nuevoProveedor.length < 1) return;
    var proveedor = new Proveedores({ name: $scope.nuevoProveedor, completed: false });
    proveedor.$save(function(){
      $scope.proveedores.push(proveedor);
      $scope.nuevoProveedor = ''; // clear textbox
    });
  };
  //modificar
  $scope.update = function(index){
    var proveedor = $scope.proveedores[index];
    Proveedores.update({id: proveedor._id}, proveedor);
    $scope.editing[index] = false;
  };
  //editar en interfaz
  $scope.edit = function(index){
    $scope.editing[index] = angular.copy($scope.proveedores[index]);
  };
  //cancelar edicion
  $scope.cancel = function(index){
    $scope.proveedores[index] = angular.copy($scope.editing[index]);
    $scope.editing[index] = false;
  };
  //borrar
  $scope.remove = function(index){
    var proveedor = $scope.proveedores[index];
    Proveedores.remove({id: proveedor._id}, function(){
      $scope.proveedores.splice(index, 1);
    });
  };
}])
.controller('ProveedorDetailCtrl', ['$scope', '$routeParams', 'Proveedores', '$location', function ($scope, $routeParams, Proveedores, $location) {
  $scope.proveedor = Proveedores.get({id: $routeParams.id });
  $scope.remove = function(){
    Proveedores.remove({id: $scope.proveedor._id}, function(){
      $location.url('/');
    });
  };
}])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/proveedor/:id', {
      templateUrl: '/proveedorDetails.html',
      controller: 'ProveedorDetailCtrl'
   });
}]);
