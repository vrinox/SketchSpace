/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detalle_portafolio', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_portafolio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'portafolio',
        key: 'id_portafolio'
      },
      unique: true
    },
    id_imagen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'imagen',
        key: 'id_imagen'
      },
      unique: true
    }
  }, {
    tableName: 'detalle_portafolio'
  });
};
