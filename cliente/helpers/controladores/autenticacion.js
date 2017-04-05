angular
    .module("sketch")
    .controller("ctrlRegistro", SignUpController)
    .controller("ctrlInicio", LoginController)
    .controller("LogoutController", LogoutController);

function SignUpController($auth, $location) {
    var vm = this;
    this.signup = function() {
        $auth.signup({
            nombre: vm.email,
            clave: vm.password
        })
        .then(function() {
            // Si se ha registrado correctamente,
            // Podemos redirigirle a otra parte
            $location.path("/trabajos");
        })
        .catch(function(response) {
            // Si ha habido errores, llegaremos a esta función
            console.error(new Error("error de autenticacion"));
        });
    };
}

function LoginController($auth, $location) {
    var vm = this;
    this.login = function(){
        $auth.login({
            nombre: vm.nombre,
            clave: vm.clave
        })
        .then(function(){
            // Si se ha logueado correctamente, lo tratamos aquí.
            // Podemos también redirigirle a una ruta
            $location.path("/trabajos");
        })
        .catch(function(response){
            // Si ha habido errores llegamos a esta parte
            console.error(new Error("error de autenticacion"));
        });
    };
}

function LogoutController($auth, $location) {
    $auth.logout()
        .then(function() {
            // Desconectamos al usuario y lo redirijimos
            $location.path("/");
        });
}
