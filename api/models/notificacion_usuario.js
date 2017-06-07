/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notificacion_usuario', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id_usuario'
      }
    },
    id_notificacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'notificacion',
        key: 'id_notificacion'
      }
    }
  }, {
    tableName: 'notificacion_usuario'
  });
};
