var models = require('../models/index');
module.exports = function(app){
  //ruta general
  app.get('/', function(req, res, next) {
    res.render('index', {});
  });
  //rutas clientes
  require('./usuario')(app);
  require('./notificacion')(app);
  require('./autenticar')(app);
  require('./adminPanel')(app);
};
