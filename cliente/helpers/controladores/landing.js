angular.module('sketch')
.controller('ctrlLanding', ['$scope','$auth','$location','$sesion', function ($scope,$auth,$location,$sesion) {
  $scope.trabajos1 = [
    {
      "id":01,
      "usuario":{
        "nombre":"Matthew",
        "avatar":"../../img/matthew.png",
        "puntuacion":5
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
    }];
    $scope.trabajos2 = [{
      "id":02,
      "usuario":{
        "nombre":"Kristy",
        "avatar":"../../img/kristy.png",
        "puntuacion":2
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
