/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('imagen_usuario', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_tipo_imagen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipo_imagen',
        key: 'id_tipo_imagen'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id_usuario'
      }
    },
    id_imagen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'imagen',
        key: 'id_imagen'
      }
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "A"
    }
  }, {
    tableName: 'imagen_usuario'
  });
};
