module.exports = function(app){
  //guardar registro
  app.post('/api/autenticar/', function(req, res) {
    var users = [{"id":1,"nombre":"victor","clave":"1234"}];
    var usuario;
    users.forEach(function(each){
      if(each.nombre === req.body.nombre){
        usuario = each;
      }
    });
    if(usuario.clave === req.body.clave){
      return res
          .status(200)
          .send({token: service.createToken(user)});
    }

  });
};
