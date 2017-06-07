var models = require('../models/index');

module.exports = function(app){
  //obtener rubros
  app.get('/api/notificacion/usuario/:id', function(req, res) {
    models.notificacion.find({
      where: {
        id_usuario: req.params.id
      }
    })
      .then(function(notificaciones) {
        res.json({
          "success":1,
          "notificaciones":notificaciones
        });
      });
  });
};
