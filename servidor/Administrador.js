var plugAssembler = require('./plug');
var consUsuario = {};

consUsuario.crear = function(){
	return new Usuario();
};
var Usuario = function(){
	var self = this;
	self.conexion =  null;

	self.crear =  function(){
		this.perfil = {
			"tipo":"Administrador",
			"conectador":new Date()
		};
		//permite combinar lineas
		return this;
	};

	self.agregarConexion = function(socket){
		if(socket){
			if(this.conexion){
				console.error('Administrador.js - linea:23 - administrador ya se encuentra conectado');
				this.conexion.socket.emit('notificacion',{
					"tipo":"alerta",
					"texto":"otra persona esta intentando accesar"
				});
			}
			this.conexion = plugAssembler.configure(socket,this.perfil.tipo);
		}
		return this;
	};
	self.cerrarConexion = function(conexion){
		return new Promise(function(resolve,reject){
			conexion.socket.emit('desconectado',{text:"session desconectada"});
			conexion.socket.disconnect();
		});
	};
};
module.exports = consUsuario;
