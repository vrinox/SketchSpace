angular.module('sketch')
.controller('ctrlLanding', ['$scope','$auth','$location','$sesion', function ($scope,$auth,$location,$sesion) {
  $scope.trabajos = [
    {
      "id":01,
      "usuario":{
        "nombre":"javier aranguren",
        "avatar":"../../img/ja.jpg",
        "puntuacion":3
      },
      "muestra":"../../img/sample-1.jpg",
      "titulo":"Redaccion de Articulos y mucho mas",
      "categorias":[
        {
          "id":01,
          "nombre":"Trabajo",
          "icono":"work"
        }
      ],
      "descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tempore officiis aliquam deleniti labore itaque nihil voluptatem est culpa, molestiae, veritatis distinctio aut nam, ullam id quasi, corrupti officia numquam.",
    },{
      "id":02,
      "usuario":{
        "nombre":"javier aranguren",
        "avatar":"../../img/ja.jpg",
        "puntuacion":3
      },
      "muestra":"../../img/parallax2.jpg",
      "titulo":"Diseño de interiores",
      "categorias":[
        {
          "id":02,
          "nombre":"Diseño",
          "icono":"gesture"
        },{
          "id":01,
          "nombre":"Trabajo",
          "icono":"work"
        }
      ],
      "descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tempore officiis aliquam deleniti labore itaque nihil voluptatem est culpa, molestiae, veritatis distinctio aut nam, ullam id quasi, corrupti officia numquam.",
    }
  ];
  $scope.rango = function(numero){
    var estrellas = [];
    for(var x = 0;x < numero;x++){
      estrellas.push(x);
    }
    return estrellas;
  };
  $scope.logout = function(){
    $auth.logout()
          .then(function() {
              // Desconectamos al usuario y lo redirijimos
              $sesion.desconectar();
              $location.path("/");
          });
  };
}]);
