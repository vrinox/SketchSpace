angular.module('balaFria')
.factory('Clientes', ['$resource', function($resource){
  return $resource('/proveedor/:id', null, {
    'update': { method:'PUT' }
  });
}]);
