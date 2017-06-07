/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('portafolio', {
    id_portafolio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'usuario',
          key: 'id_usuario'
        },
        unique: true
      },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'portafolio'
  });
};
